getBounds = (element) ->
  scrollTop = window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop
  scrollLeft = window.pageXOffset ||
               document.documentElement.scrollLeft ||
               document.body.scrollLeft

  # document can "shift" in IE; get shifty
  clientTop = document.documentElement.clientTop ||
              document.body.clientTop ||
              0
  clientLeft = document.documentElement.clientLeft ||
               document.body.clientLeft ||
               0

  clientRect = element.getBoundingClientRect()

  top: clientRect.top
  left: clientRect.left
  width: clientRect.width
  height: clientRect.height


checkHit = (position, element) ->
  bounds = getBounds element

  right = bounds.left + bounds.width
  bottom = bounds.top + bounds.height

  isInsideWidth =
    bounds.left < position.x < right
  isInsideHeight =
    bounds.top < position.y < bottom

  return isInsideHeight and isInsideWidth


Polymer
  is: 'lift-dragger'


  listeners:
    'track': '_tracking'
    'up': '_upDown'
    'down': '_upDown'


  ready: () ->
    c = @$.container
    @_movement =
      x: c.offsetLeft
      y: c.offsetTop


  _boundingRect: () ->
    clientRect = @getBoundingClientRect()

    left: clientRect.left + window.scrollX
    top: clientRect.top + window.scrollY


  _upDown: (event, detail) ->
    switch event.type
      when 'up'
        delta = @_getDelta()
        @fire 'drop',
          delta: delta
          x: detail.x
          y: detail.y
          checkHit: (element) -> checkHit detail, element

        @$.scaler.classList.remove 'lifted'

        c = @$.container
        @_movement =
          x: c.offsetLeft
          y: c.offsetTop
        @translate3d "#{@_movement.x}px", "#{@_movement.y}px", "0", @$.container
      when 'down'
        @$.scaler.classList.add 'lifted'

        @fire 'lift',
          x: detail.x
          y: detail.y

        c = @$.container
        scope = this

        @_origin =
          x: @_movement.x
          y: @_movement.y

        @_cursorOffset = cursorOffset =
          left: detail.x - c.offsetLeft
          top: detail.y - c.offsetTop

        @_movement =
          x: detail.x - c.offsetLeft - cursorOffset.left + scope._origin.x
          y: detail.y - c.offsetTop - cursorOffset.top + scope._origin.y

        @translate3d "#{@_movement.x}px", "#{@_movement.y}px", "0", @$.container


  _tracking: (event, detail) ->

    switch detail.state
      when 'start'
        null
      when 'track'
        scope = this
        c = @$.container
        cursorOffset = @_cursorOffset
        @_movement =
          x: detail.x - c.offsetLeft - cursorOffset.left + scope._origin.x
          y: detail.y - c.offsetTop - cursorOffset.top + scope._origin.y

        @translate3d "#{@_movement.x}px", "#{@_movement.y}px", "0", @$.container

        delta = @_getDelta()
        @fire 'drag',
          x: detail.x
          y: detail.y
          checkHit: (element) -> checkHit detail, element

      when 'end'
        null

  _getDelta: () ->
    mvmt = @_movement
    origin = @_origin
    delta =
      x: mvmt.x - origin.x
      y: mvmt.y - origin.y