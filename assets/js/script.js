
// navigation

var navTrigger = $('.nav-trigger'),
    body = $('body');

navTrigger.on('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.toggleClass('nav-open');
}

// cursor

(function () {
  'use strict';

  var boxElem = document.getElementById('body');
  var pointerElem = document.getElementById('particles-cursor');

  function onMouseMove(event) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var crd = boxElem.getBoundingClientRect();
      var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

      requestAnimationFrame(function movePointer() {
          if (activePointer) {
              pointerElem.style.left = Math.floor(mouseX - 100) + 'px';
              pointerElem.style.top = Math.floor(mouseY - 50) + 'px';
          } 
      });
  }

  boxElem.addEventListener('mousemove', onMouseMove, false);

})();


// slider_img
var items = $('.itemAboutus');
var itemCount = items.length;
var nextItem = $('.next');
var previousItem = $('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  // console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // console.log(count);
}

nextItem.on('click', showNextItem);
previousItem.on('click', showPreviousItem);

// map
