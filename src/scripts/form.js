
let myForm = document.querySelector('#form');
let submit = document.querySelector('.form__submit');



function validateForm(form) {
 let valid = true;

 if (!validateField(form.elements.name)) {
   valid = false;
 }


 if (!validateField(form.elements.email)) {
   valid = false;
 }

 return valid;
}

function validateField(field) {
 field.nextElementSibling.textContent = field.validationMessage;
 return field.checkValidity();
};


submit.addEventListener('click', (evt) => {
 evt.preventDefault();
 
 if (validateForm(myForm)) {
   const formData = new FormData();
 
   
   formData.append("name", myForm.elements.name.value);
   formData.append("phone", "2123");
   formData.append("comment", "asdzxc");
   formData.append("to", myForm.elements.email.value);

 
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
   xhr.responseType = 'json';
   xhr.send(formData);
   xhr.addEventListener('load', () => {
     console.log(xhr.response.status);
   });
   
   // messageHide();

 };

});