//Making the drag and drop function
var dragged = document.querySelector('.effect-level__pin');
var deeping_effect = document.querySelector('.effect-level__depth');
var lineForCounting = document.querySelector('.effect-level__line');
var filterLevel;

//Starting from start
  dragged.style.left = '7px';
  deeping_effect.style.width = '7px';

  dragged.addEventListener('mousedown', function(evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX
    }
    var onMouseMove = function(moveEvt) {

      //Checking fpr outgoing from endings
      console.log('evt.x' + evt.x);

      console.log('moveevt.x' + moveEvt.x);
      if(moveEvt.clientX <= lineForCounting.getBoundingClientRect().left || moveEvt.clientX >= lineForCounting.getBoundingClientRect().right) {
        return;
      }


      var shift = {
        x: moveEvt.clientX - startCoords.x
      }
      startCoords = {
        x: moveEvt.clientX
      }
      filterLevel = (dragged.offsetLeft - 7)  + shift.x;
      dragged.style.left = (dragged.offsetLeft  + shift.x) + 'px';

      filterLevel = (filterLevel * 100)/448;

      switch (filterSet) {

        case 'sepia': {
          imagePreview.style.filter = `sepia(${filterLevel}%)`;
          break;
        }
        case 'invert': {
          imagePreview.style.filter = `invert(${filterLevel}%)`;
          break;

        }
        case 'blur': {
          imagePreview.style.filter = `blur(${filterLevel}px)`;
          break;

        }
        case 'brightness': {
          imagePreview.style.filter = `brightness(${filterLevel/50})`;
          break;

        }
        case 'grayscale': {
          imagePreview.style.filter = `grayscale(${filterLevel}%)`;
          break;
        }
        default : {
          imagePreview.style.filter = `none`;
          break;
        }

      }

      console.log('Filter level is: ' + filterLevel);
      console.log('Style is: '+ dragged.style.left);
      deeping_effect.style.width = (deeping_effect.offsetWidth  + shift.x) + 'px';


    }
    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      dragged.removeEventListener('mousedown', function () {

      });
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });



