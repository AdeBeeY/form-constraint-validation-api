const form = document.querySelector('#form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postal');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const emailError = document.querySelector('#email + .error');
const countryError = document.querySelector('#country + .error');
const postalError = document.querySelector('#postal + .error');
const passwordError = document.querySelector('#password + .error');
const confirmPasswordError = document.querySelector('#confirm-password + .error');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    errorMsg(email, emailError);
  }
})

country.addEventListener('input', (event) => {
  if (country.validity.valid) {
    countryError.textContent = '';
  } else {
    errorMsg(country, countryError);
  }
})

postalCode.addEventListener('input', (event) => {
  if (postalCode.validity.valid) {
    postalError.textContent = '';
  } else {
    errorMsg(postalCode, postalError);
  }
})

password.addEventListener('input', (event) => {
  if (password.validity.valid) {
    passwordError.textContent = '';
  } else {
    errorMsg(password, passwordError);
  }
})

confirmPassword.addEventListener('input', (event) => {
  if (confirmPassword.value === password.value) {
    // console.log(password.value);
    // console.log(confirmPassword.value);
    confirmPasswordError.textContent = '';
  } else {
    confirmPasswordError.textContent = 'Not the same. Try again!';
    // console.log(password.value);
    // console.log(confirmPassword.value);
  }
})


function errorMsg(inputName, spanError) {
  const label = inputName.getAttribute('data-label') || inputName.name;

  if (inputName.validity.valueMissing) {
    spanError.textContent = `${label} shouldn't be left blank`;

  } else if (inputName.validity.typeMismatch) {
    spanError.textContent = `Enter a valid ${label}`;

  } else if (inputName.validity.tooShort) {
    spanError.textContent = `Input at least ${inputName.minLength} characters. You inputted ${inputName.value.length} characters`;

  } else if (inputName.validity.tooLong) {
    spanError.textContent = `Maximum characters is ${inputName.maxLength}. You inputted ${inputName.value.length}`;

  } else {
    spanError.textContent = "";
  }
}

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    errorMsg(email, emailError);
    event.preventDefault();
  }
  if (!country.validity.valid) {
    errorMsg(country, countryError);
    event.preventDefault();
  }
  if (!postalCode.validity.valid) {
    errorMsg(postalCode, postalError);
    event.preventDefault();
  }
  if (!password.validity.valid) {
    errorMsg(password, passwordError);
    event.preventDefault();
  }
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Not the same. Try again!';
    event.preventDefault();
  }
});
