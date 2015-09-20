dragger = document.querySelector '#dragger'

position =
  x: 0
  y: 0

dragger.addEventListener 'drop', (event) ->
  delta = event.detail.delta
  position.x += delta.x
  position.y += delta.y

  dragger.translate3d "#{position.x}px", "#{position.y}px", "0px"

eltArray =
  Array.prototype.slice.call (document.querySelectorAll '.check-over')

dragger.addEventListener 'drag', (evt) ->
  eltArray.forEach (elt) ->
    elt.classList.remove 'over'

  eltArray
    .filter (elt) -> evt.detail.checkHit elt
    .forEach (elt) ->
      elt.classList.add 'over'


dragger.addEventListener 'drop', (evt) ->
  eltArray.forEach (elt) ->
    elt.classList.remove 'over'

  eltArray
    .filter (elt) -> evt.detail.checkHit elt
    .forEach (elt) ->
      elt.classList.add 'dropped'

dragger.addEventListener 'lift', (evt) ->
  eltArray.forEach (elt) ->
    elt.classList.remove 'dropped'
