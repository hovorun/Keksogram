// Checking validation УТОЧНИТИ ЧИ ТАК МОЖНА РОБИТИ
(function () {
  var valids = function() {
    var inputFielsd = document.querySelector('.text__hashtags');
    if(inputFielsd.value[0]!== '#') {
      inputFielsd.setCustomValidity('Хештег должен начинаться с символа хеша(#), пожалуйста введите свой хештег опять');
      inputFielsd.validity = false;
      return false;

    }
    if((inputFielsd.value.length) > 20) {
      inputFielsd.setCustomValidity('Максимальная длина хештега 20 символов, пожалуйста введите свой хештег опять');
      inputFielsd.validity = false;
      return false;
    }
    if(inputFielsd.validity) {
      inputFielsd.setCustomValidity('');
    }
    return true;
  };

  var buttonForSubmit = document.querySelector('#upload-submit');
  buttonForSubmit.addEventListener('click', function() {
    valids();
  });
})();
