
  //Can be used for opening form to custome

  var form_to_redaction = document.querySelector('.img-upload__overlay');
  var previewPhoto = document.querySelector('.img-upload__preview').querySelector('img');

//Upload files to browser without server
  var uploadFileField = document.querySelector('#upload-file');
  uploadFileField.addEventListener('change', function(evt) {
    form_to_redaction.classList.remove('hidden');
    console.log(uploadFileField.files);
    var read = new FileReader();

    read.onload = function() {
      previewPhoto.src = read.result;
    }
    read.readAsDataURL(uploadFileField.files[0]);
  })








// Closing the preview
  var buttonForClosing = document.querySelector('.img-upload__cancel');
  buttonForClosing.addEventListener('click', function(evt) {
    evt.preventDefault();
    uploadFileField.value = null; // ЧИ МОЖНА ТАК СКИДУВАТИ ЗНАЧЕННЯ ФОРМИ?
    form_to_redaction.classList.add('hidden')
    ;
  });


  //Adding filters
  var filtersContainer = document.querySelector('.img-upload__effects');
  var imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
  var filterSet;

  filtersContainer.addEventListener('click', function (evt) {
    var target = evt.target;
    switch (target.getAttribute('id')) {
      case 'effect-none': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        imagePreview.style.filter = `none`;
        console.log('none');
        break;
      }
      case 'effect-sepia': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        filterSet = 'sepia';
        console.log('sepia');
        break;
      }
      case 'effect-chrome': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        filterSet = 'grayscale';
        console.log('effect-chrome');
        break;
      }
      case 'effect-marvin': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        filterSet = 'invert';
        console.log('effect-marvin');
        break;
      }
      case 'effect-phobos': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        filterSet = 'blur';
        console.log('effect-phobos');

        break;
      }
      case 'effect-heat': {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        filterSet = 'brightness';

        console.log('effect-heat');
        break;
      }
      default : {
        dragged.style.left = '7px';
        deeping_effect.style.width = '7px';
        break;
      }
    }
  })


