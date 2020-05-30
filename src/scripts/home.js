let paginator = document.querySelectorAll('.paginator__item');
let section = document.querySelectorAll('section');
let sectionForm = document.querySelector('.hire_us');
let sectionHome = document.querySelector('.section_home')
let hireBtn = document.querySelectorAll('.btn_to_form');
let formBtn = sectionForm.querySelectorAll('.form__btn');
let formCheck = sectionForm.querySelectorAll('.checkbox');
let deviceView = document.querySelector('.device_view');
let outer = document.querySelector('.outer');
let hamburgerBtn = document.querySelector('.header__hamburger');
let nav = document.querySelectorAll('.outer__item');
let windowDevice = document.querySelector('.device_view_window');
let sliderItems = document.querySelectorAll('.slider__item');
let sliderList = document.querySelector('.slider__list');
let arrowLeft = document.querySelector('.left_arrow');
let arrowRight = document.querySelector('.right_arrow');








let removeActive = () => {
  
  for (let item of section) {
    item.classList.remove('section--active');
  }

  for (let item of paginator) {
    item.classList.remove('paginator__item--active')
  }

  for (let item of nav) {
    item.classList.remove('outer__item--active')
  }

};

let sectionShow = () => {

  for (let i = 0; i < paginator.length; i++) {

    paginator[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      removeActive();
      section[i].classList.add('section--active');
      paginator[i].classList.add('paginator__item--active');
      nav[i].classList.add('outer__item--active');
      sectionCheck();
    });
  }
};



let formLink = () => {

  for (let item of hireBtn) {

    item.addEventListener('click', (evt) => {
  
      evt.preventDefault();
      removeActive();
      sectionForm.classList.add('section--active');
      nav[4].classList.add('outer__item--active');
    })
  }
};

let formBtnActive = () => {
  for (let item = 0; item < formBtn.length; item++) {
    formBtn[item].addEventListener('click', (evt) => {
      evt.preventDefault();
      formBtn[item].classList.toggle('form__btn--active');
      formCheck[item].classList.toggle('checkbox--active');
    })
  }
};

let sectionCheck = () => {
  if (sectionHome.classList.contains('section--active')) {
    hireBtn[0].style.display = 'none';
  } else {
    hireBtn[0].style.display = 'block';
  }
  
};

let deviceMagic = () => {
  
  hamburgerBtn.addEventListener('click', () => {
    deviceView.classList.add('device_view--active');
    outer.classList.remove('visually-hidden');
    windowDevice.classList.add('device_view_window--active')
  });

  navigation();

};

let navigation = () => {

  for (let item = 0; item < nav.length; item++) {

    nav[item].addEventListener('click', (evt) => {

      outer.classList.add('visually-hidden');
      deviceView.classList.remove('device_view--active');
      windowDevice.classList.remove('device_view_window--active');
      removeActive();
      section[item].classList.add('section--active');
      paginator[item].classList.add('paginator__item--active');
      nav[item].classList.add('outer__item--active');
      sectionCheck();
    })

  }
  hideNav();

};

let hideNav = () => {
  
  windowDevice.addEventListener('click', () => {
    outer.classList.add('visually-hidden');
    deviceView.classList.remove('device_view--active');
    windowDevice.classList.remove('device_view_window--active');
  })
};

let slider = () => {

  arrowLeft.addEventListener('click', () => {
    sliderList.classList.add('slider__list--hide');

    setTimeout(() => {
      
      let arraySlide = Object.values(sliderItems);
      for (let item of arraySlide) {
        item.classList.remove('slider__item--active');
      }
      sliderList.removeChild(sliderItems[0]);
      sliderList.appendChild(arraySlide[0]);
      let middleItem = Math.floor(arraySlide.length / 2);
      let sliderItemsChanched = document.querySelectorAll('.slider__item');
      sliderList = document.querySelector('.slider__list');
      sliderItemsChanched[middleItem].classList.add('slider__item--active');
      sliderItems = sliderItemsChanched;

    }, 300)
    
    setTimeout(() => {
      sliderList.classList.remove('slider__list--hide');
    }, 301);
  });
  

  arrowRight.addEventListener('click', () => {
    sliderList.classList.add('slider__list--hide');

    setTimeout(() => {

      let arraySlide = Object.values(sliderItems);
      for (let item of arraySlide) {
        item.classList.remove('slider__item--active');
      }
      sliderList.removeChild(sliderItems[2]);
      sliderList.insertAdjacentElement('afterBegin', arraySlide[2]);
      let middleItem = Math.floor(arraySlide.length / 2);
      let sliderItemsChanched = document.querySelectorAll('.slider__item');
      sliderList = document.querySelector('.slider__list');
      sliderItemsChanched[middleItem].classList.add('slider__item--active');
      sliderItems = sliderItemsChanched;

    }, 300);
    
    setTimeout(() => {
      sliderList.classList.remove('slider__list--hide');
    }, 301);
  });

  
}






slider();

sectionShow();
formLink();
formBtnActive();
deviceMagic();
navigation();
