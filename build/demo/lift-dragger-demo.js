(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var dragger, eltArray, position;

dragger = document.querySelector('#dragger');

position = {
  x: 0,
  y: 0
};

dragger.addEventListener('drop', function(event) {
  var delta;
  delta = event.detail.delta;
  position.x += delta.x;
  position.y += delta.y;
  return dragger.translate3d(position.x + "px", position.y + "px", "0px");
});

eltArray = Array.prototype.slice.call(document.querySelectorAll('.check-over'));

dragger.addEventListener('drag', function(evt) {
  eltArray.forEach(function(elt) {
    return elt.classList.remove('over');
  });
  return eltArray.filter(function(elt) {
    return evt.detail.checkHit(elt);
  }).forEach(function(elt) {
    return elt.classList.add('over');
  });
});

dragger.addEventListener('drop', function(evt) {
  eltArray.forEach(function(elt) {
    return elt.classList.remove('over');
  });
  return eltArray.filter(function(elt) {
    return evt.detail.checkHit(elt);
  }).forEach(function(elt) {
    return elt.classList.add('dropped');
  });
});

dragger.addEventListener('lift', function(evt) {
  return eltArray.forEach(function(elt) {
    return elt.classList.remove('dropped');
  });
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvbGlmdC1kcmFnZ2VyL3NyYy9kZW1vL2xpZnQtZHJhZ2dlci1kZW1vLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7O0FBQUEsT0FBQSxHQUFVLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCOztBQUVWLFFBQUEsR0FDRTtFQUFBLENBQUEsRUFBRyxDQUFIO0VBQ0EsQ0FBQSxFQUFHLENBREg7OztBQUdGLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixNQUF6QixFQUFpQyxTQUFDLEtBQUQ7QUFDL0IsTUFBQTtFQUFBLEtBQUEsR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQ3JCLFFBQVEsQ0FBQyxDQUFULElBQWMsS0FBSyxDQUFDO0VBQ3BCLFFBQVEsQ0FBQyxDQUFULElBQWMsS0FBSyxDQUFDO1NBRXBCLE9BQU8sQ0FBQyxXQUFSLENBQXVCLFFBQVEsQ0FBQyxDQUFWLEdBQVksSUFBbEMsRUFBMEMsUUFBUSxDQUFDLENBQVYsR0FBWSxJQUFyRCxFQUEwRCxLQUExRDtBQUwrQixDQUFqQzs7QUFPQSxRQUFBLEdBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBdEIsQ0FBNEIsUUFBUSxDQUFDLGdCQUFULENBQTBCLGFBQTFCLENBQTVCOztBQUVGLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixNQUF6QixFQUFpQyxTQUFDLEdBQUQ7RUFDL0IsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsU0FBQyxHQUFEO1dBQ2YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFkLENBQXFCLE1BQXJCO0VBRGUsQ0FBakI7U0FHQSxRQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsR0FBRDtXQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBWCxDQUFvQixHQUFwQjtFQUFULENBRFYsQ0FFRSxDQUFDLE9BRkgsQ0FFVyxTQUFDLEdBQUQ7V0FDUCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQWQsQ0FBa0IsTUFBbEI7RUFETyxDQUZYO0FBSitCLENBQWpDOztBQVVBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixNQUF6QixFQUFpQyxTQUFDLEdBQUQ7RUFDL0IsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsU0FBQyxHQUFEO1dBQ2YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFkLENBQXFCLE1BQXJCO0VBRGUsQ0FBakI7U0FHQSxRQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsR0FBRDtXQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBWCxDQUFvQixHQUFwQjtFQUFULENBRFYsQ0FFRSxDQUFDLE9BRkgsQ0FFVyxTQUFDLEdBQUQ7V0FDUCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQWQsQ0FBa0IsU0FBbEI7RUFETyxDQUZYO0FBSitCLENBQWpDOztBQVNBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixNQUF6QixFQUFpQyxTQUFDLEdBQUQ7U0FDL0IsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsU0FBQyxHQUFEO1dBQ2YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFkLENBQXFCLFNBQXJCO0VBRGUsQ0FBakI7QUFEK0IsQ0FBakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZHJhZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJyNkcmFnZ2VyJ1xuXG5wb3NpdGlvbiA9XG4gIHg6IDBcbiAgeTogMFxuXG5kcmFnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgJ2Ryb3AnLCAoZXZlbnQpIC0+XG4gIGRlbHRhID0gZXZlbnQuZGV0YWlsLmRlbHRhXG4gIHBvc2l0aW9uLnggKz0gZGVsdGEueFxuICBwb3NpdGlvbi55ICs9IGRlbHRhLnlcblxuICBkcmFnZ2VyLnRyYW5zbGF0ZTNkIFwiI3twb3NpdGlvbi54fXB4XCIsIFwiI3twb3NpdGlvbi55fXB4XCIsIFwiMHB4XCJcblxuZWx0QXJyYXkgPVxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCAnLmNoZWNrLW92ZXInKVxuXG5kcmFnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgJ2RyYWcnLCAoZXZ0KSAtPlxuICBlbHRBcnJheS5mb3JFYWNoIChlbHQpIC0+XG4gICAgZWx0LmNsYXNzTGlzdC5yZW1vdmUgJ292ZXInXG5cbiAgZWx0QXJyYXlcbiAgICAuZmlsdGVyIChlbHQpIC0+IGV2dC5kZXRhaWwuY2hlY2tIaXQgZWx0XG4gICAgLmZvckVhY2ggKGVsdCkgLT5cbiAgICAgIGVsdC5jbGFzc0xpc3QuYWRkICdvdmVyJ1xuXG5cbmRyYWdnZXIuYWRkRXZlbnRMaXN0ZW5lciAnZHJvcCcsIChldnQpIC0+XG4gIGVsdEFycmF5LmZvckVhY2ggKGVsdCkgLT5cbiAgICBlbHQuY2xhc3NMaXN0LnJlbW92ZSAnb3ZlcidcblxuICBlbHRBcnJheVxuICAgIC5maWx0ZXIgKGVsdCkgLT4gZXZ0LmRldGFpbC5jaGVja0hpdCBlbHRcbiAgICAuZm9yRWFjaCAoZWx0KSAtPlxuICAgICAgZWx0LmNsYXNzTGlzdC5hZGQgJ2Ryb3BwZWQnXG5cbmRyYWdnZXIuYWRkRXZlbnRMaXN0ZW5lciAnbGlmdCcsIChldnQpIC0+XG4gIGVsdEFycmF5LmZvckVhY2ggKGVsdCkgLT5cbiAgICBlbHQuY2xhc3NMaXN0LnJlbW92ZSAnZHJvcHBlZCdcbiJdfQ==
