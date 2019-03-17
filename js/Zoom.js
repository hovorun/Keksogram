var more = document.querySelector('.scale__control--bigger');
var less = document.querySelector('.scale__control--smaller');
var sizeStatus = document.querySelector('.scale__control--value');
var scale = 1;
var defaultStatus = 100;


    //Making the photo zoom
    more.addEventListener('click', function() {
      scale += 0.1;
      defaultStatus = Number(defaultStatus) + 25;
      sizeStatus.setAttribute('value', defaultStatus + '%');
      previewPhoto.style.transform = `scale(${scale})`;
    });
    less.addEventListener('click', function(){
      if(defaultStatus < 50) {
        return;
      }
      scale -= 0.1;
      defaultStatus = Number(defaultStatus) - 25;
      sizeStatus.setAttribute('value', defaultStatus + '%');
      previewPhoto.style.transform = `scale(${scale})`;
    });
