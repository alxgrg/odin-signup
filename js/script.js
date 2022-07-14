const enteredPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.form');

function formSubmitHandler(event) {
  event.preventDefault();
  console.log('Working!');
  console.log(enteredPassword.value);
  if (enteredPassword.value !== confirmPassword.value) {
    console.log('password does not match.');
    confirmPassword.classList.add('error');
    enteredPassword.classList.add('error');
    errorMessage.textContent = 'Password does not match!';
  } else {
    confirmPassword.classList.remove('error');
    enteredPassword.classList.remove('error');
    errorMessage.textContent = '';

    enteredPassword.value = '';
    confirmPassword.value = '';
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';

    alert('Account created successfully!');
  }
}

form.addEventListener('submit', formSubmitHandler);
