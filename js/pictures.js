var URLs = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
var pictures_DOM = document.querySelector('.pictures');
var s= 's';
  var pictures__elements = [] ;

  var counter = 0; //Using it for counting URLs

  var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var description = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'];
  function getRandomComment() {
    return comments[Math.round(Math.random() * 5)];
  }
  function getCountComments() {
    return (Math.round(Math.random() * 20));
  }
  function getRandomDescription() {
    return description[Math.round(Math.random() * 5)];
  }
  function getRandomNumber() {
    return Math.round(Math.random() * 5);
  }
  function getRandomCommentNumber() {
    return (1 + Math.round(Math.random() * 5));
  }
  function setRandomLike() {
    return ( 15 + Math.round(Math.random() * 185));
  }




  function createElement() {
    var element = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
    element.querySelector('.picture__img').setAttribute('src',URLs[counter]);
    element.querySelector('.picture__likes').textContent = setRandomLike();
    element.querySelector('.picture__comments').textContent = getCountComments();
    counter++;
    return element;
  }
  var fragmentComment = document.createDocumentFragment(); // fragment for adding comments
  var fragment = document.createDocumentFragment(); // fragment for adding small images
  var creatingComments = function() {
    // var comment_DOM = document.querySelector('.social__comments'); //block where i'll put new comments
    //Here we create a comment from template
    var comments_element = document.querySelector('#for_comment').content.querySelector('.social__comment').cloneNode(true);

    // function createComment() {
    //   comments_element.querySelector('img').setAttribute('src', `img/avatar-${getRandomCommentNumber()}.svg`);
    //   comments_element.querySelector('.social__text').innerHTML = getRandomComment();
    //   return comments_element;
    //   // return comments_element.querySelector('.social__text').innerHTML = getRandomComment();
    // }
    for( var i = 0; i < 6; i++) {
      comments_element.querySelector('img').setAttribute('src', `img/avatar-${getRandomCommentNumber()}.svg`);
      comments_element.querySelector('.social__text').innerHTML = getRandomComment();
      fragmentComment.array = fragmentComment.appendChild(comments_element);
      // console.log(fragmentComment);
    }
    document.querySelector('.social__caption').textContent = description[getRandomNumber()];
    return fragmentComment;
  };

  var big_picture = document.querySelector('.big-picture');

  for(let i = 0; i < 25; i++) {
    pictures__elements[i] = createElement();
    fragment.appendChild(pictures__elements[i]);
    pictures_DOM.appendChild(fragment);
  }

// увеличение количества лайков
  var likeClick = document.querySelector('.likes-count');
  likeClick.addEventListener('click', function () {
    console.log(likeClick.innerHTML);
    likeClick.style.fill = 'red';
    likeClick.innerHTML = (parseInt(likeClick.innerHTML.replace(/\D+/g,"")) + 1);
  })
  //методом делегирования
  pictures_DOM.addEventListener('click', function (evt) {
    var target = evt.target;
    if(target.tagName === 'IMG') {
      var prs = parseInt(target.getAttribute('src').replace(/\D+/g,""));
      big_picture.querySelector('.big-picture__cancel').addEventListener('click', function () { //Adding evt listener click for closing full size
        big_picture.querySelector('.social__comments').innerHTML = '';
        big_picture.classList.add('hidden');
      });
      big_picture.classList.remove('hidden');
      big_picture.querySelector('.big-picture__img').querySelector('img').setAttribute('src',URLs[prs-1]);
      big_picture.querySelector('.likes-count').textContent = setRandomLike();
      big_picture.querySelector('.comments-count').textContent = getCountComments();
      for(let i = 0; i < 6; i++) {
        big_picture.querySelector('.social__comments').appendChild(creatingComments());
      }
    }
  });



  //Hiding two elements
  document.querySelector('.social__comment-count ').classList.add('hidden');
  document.querySelector('.social__comments-loader').classList.add('hidden');










// (function () {
//   var pictures__elements = [] ;
//
//   var counter = 0; //Using it for counting URLs
//
//   var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//     'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//     'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
//   var description = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...',
//     'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
//     'Вот это тачка!'];
//   function getRandomComment() {
//     return comments[Math.round(Math.random() * 5)];
//   }
//   function getCountComments() {
//     return (Math.round(Math.random() * 20));
//   }
//   function getRandomDescription() {
//     return description[Math.round(Math.random() * 5)];
//   }
//   function getRandomNumber() {
//     return Math.round(Math.random() * 5);
//   }
//   function getRandomCommentNumber() {
//     return (1 + Math.round(Math.random() * 5));
//   }
//   function setRandomLike() {
//     return ( 15 + Math.round(Math.random() * 185));
//   }
//
//
//
//   var pictures_DOM = document.querySelector('.pictures');
//   function createElement() {
//     var element = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
//     element.querySelector('.picture__img').setAttribute('src',URLs[counter]);
//     element.querySelector('.picture__likes').textContent = setRandomLike();
//     element.querySelector('.picture__comments').textContent = getCountComments();
//     counter++;
//     return element;
//   }
//   var fragmentComment = document.createDocumentFragment(); // fragment for adding comments
//   var fragment = document.createDocumentFragment(); // fragment for adding small images
//   var creatingComments = function() {
//     // var comment_DOM = document.querySelector('.social__comments'); //block where i'll put new comments
//     //Here we create a comment from template
//     var comments_element = document.querySelector('#for_comment').content.querySelector('.social__comment').cloneNode(true);
//
//     // function createComment() {
//     //   comments_element.querySelector('img').setAttribute('src', `img/avatar-${getRandomCommentNumber()}.svg`);
//     //   comments_element.querySelector('.social__text').innerHTML = getRandomComment();
//     //   return comments_element;
//     //   // return comments_element.querySelector('.social__text').innerHTML = getRandomComment();
//     // }
//     for( var i = 0; i < 6; i++) {
//       comments_element.querySelector('img').setAttribute('src', `img/avatar-${getRandomCommentNumber()}.svg`);
//       comments_element.querySelector('.social__text').innerHTML = getRandomComment();
//       fragmentComment.array = fragmentComment.appendChild(comments_element);
//       // console.log(fragmentComment);
//     }
//     document.querySelector('.social__caption').textContent = description[getRandomNumber()];
//     return fragmentComment;
//   };
//
//   var big_picture = document.querySelector('.big-picture');
//
//   for(let i = 0; i < 25; i++) {
//     pictures__elements[i] = createElement();
//     fragment.appendChild(pictures__elements[i]);
//     pictures_DOM.appendChild(fragment);
//   }
//
// // увеличение количества лайков
//   var likeClick = document.querySelector('.likes-count');
//   likeClick.addEventListener('click', function () {
//     console.log(likeClick.innerHTML);
//     likeClick.style.fill = 'red';
//     likeClick.innerHTML = (parseInt(likeClick.innerHTML.replace(/\D+/g,"")) + 1);
//   })
//   //методом делегирования
//   pictures_DOM.addEventListener('click', function (evt) {
//       var target = evt.target;
//       if(target.tagName === 'IMG') {
//         var prs = parseInt(target.getAttribute('src').replace(/\D+/g,""));
//               big_picture.querySelector('.big-picture__cancel').addEventListener('click', function () { //Adding evt listener click for closing full size
//                 big_picture.querySelector('.social__comments').innerHTML = '';
//               big_picture.classList.add('hidden');
//             });
//             big_picture.classList.remove('hidden');
//             big_picture.querySelector('.big-picture__img').querySelector('img').setAttribute('src',URLs[prs-1]);
//             big_picture.querySelector('.likes-count').textContent = setRandomLike();
//             big_picture.querySelector('.comments-count').textContent = getCountComments();
//             for(let i = 0; i < 6; i++) {
//                    big_picture.querySelector('.social__comments').appendChild(creatingComments());
//             }
//       }
//     });
//
//
//
//   //Hiding two elements
//   document.querySelector('.social__comment-count ').classList.add('hidden');
//   document.querySelector('.social__comments-loader').classList.add('hidden');
//
// })();



















