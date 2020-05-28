let paginator = document.querySelectorAll('.paginator__item');
let section = document.querySelectorAll('section');
let sectionForm = document.querySelector('.hire_us');
let sectionHome = document.querySelector('.section_home')
let hireBtn = document.querySelectorAll('.btn_to_form');
let formBtn = sectionForm.querySelectorAll('.form__btn');
let formCheck = sectionForm.querySelectorAll('.checkbox');




let removeActive = () => {
  
  for (let item of section) {
    item.classList.remove('section--active');
  }

  for (let item of paginator) {
    item.classList.remove('paginator__item--active')
  }

};

let sectionShow = () => {

  for (let i = 0; i < paginator.length; i++) {

    paginator[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      removeActive();
      section[i].classList.add('section--active');
      paginator[i].classList.add('paginator__item--active');
     
    });
  }
};

let formLink = () => {

  for (let item of hireBtn) {

    item.addEventListener('click', (evt) => {
  
      evt.preventDefault();
      removeActive();
      sectionForm.classList.add('section--active');
    })
  }
};

let formBtnActive = () => {
  for (let item in formBtn) {
    formBtn[item].addEventListener('click', (evt) => {
      evt.preventDefault();
      formBtn[item].classList.toggle('form__btn--active');
      formCheck[item].classList.toggle('checkbox--active');
    })
  }
}

let sectionCheck = () => {
  sectionHome.classList.contains('section--active')? 
  
}

sectionShow();
formLink();
formBtnActive();