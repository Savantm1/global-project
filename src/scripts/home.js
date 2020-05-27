let paginator = document.querySelectorAll('.paginator__item');
let section = document.querySelectorAll('section');



for (let i = 0; i < paginator.length; i++) {
 paginator[i].addEventListener('click', (evt) => {
  evt.preventDefault();
  hidden();
  section[i].classList.add('section--active');
  paginator[i].classList.add('paginator__item--active');
  
 });
}

let hidden = ()=> {
  for (let number of section) {
   number.classList.remove('section--active');
  }

  for (let number of paginator) {
   number.classList.remove('paginator__item--active')
  }

}
