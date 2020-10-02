// ----- VARIABLES -----

//DOM elements selecting:

let validations = document.getElementsByClassName("validation");
let valLength = document.getElementById("validationLength");
let valCapital = document.getElementById("validationCapital");
let valNumber = document.getElementById("validationNumber");
let valSpecial = document.getElementById("validationSpecial");
let valEmail = document.getElementById("validationEmail");

let inputs = document.querySelectorAll("input:not([type='radio'])");
let password = document.getElementById("password");
let eMail = document.getElementById("user-name");
let genderInputs = document.querySelectorAll("[type='radio']");
let agreement = document.getElementById("agree");

let error = document.querySelector(".error");

let submitButton = document.querySelector("[type='submit']");

let popUpWhole = document.querySelector(".popUp-wrapper");
let message = document.querySelector(".message");
let loader = document.querySelector(".loader");
let popUp = document.getElementById("pop-up");
let closeButton = document.querySelector(".close");

// global variables for function

let gender = "none";
let users = []; // for storing information about all users. Simulates sending data to database.

// ----- EVENT LISTENERS -----

password.addEventListener("change", passwordValidation);
eMail.addEventListener("change", emailValidation);

for (let input of genderInputs) {
  input.addEventListener("change", () => {
    gender = input.value;
  });
}

submitButton.addEventListener("click", submission);

closeButton.addEventListener("click", hidePopUp);

// ----- FUNCTIONS -----

function passwordValidation() {
  for (let i = 1; i < validations.length; i++) {
    validations[i].innerHTML = "";
  }

  let passwordToCheck = password.value;

  if (passwordToCheck.length < 8) {
    password.value = "";
    valLength.innerHTML = "&#10060; minimum password length is 8 characters ";
  }

  let capitals = /[A-Z]/g;

  checking(
    password,
    capitals,
    valCapital,
    "password has to contain at least one capital letter"
  );

  let numbers = /[0-9]/g;

  checking(
    password,
    numbers,
    valNumber,
    "password has to contain at least one number"
  );

  let specials = /\W/g;

  checking(
    password,
    specials,
    valSpecial,
    "password has to contain at least one special character "
  );
}

function emailValidation() {
  valEmail.innerHTML = "";

  let emailRules = /^[\w-\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;

  checking(
    eMail,
    emailRules,
    valEmail,
    "input does not correspond to standards for e-mail address"
  );
}

function checking(element, regExp, validationPlace, message) {
  let toCheck = element.value;
  let check = toCheck.match(regExp);
  console.log(check);
  if (check === null) {
    element.value = "";
    validationPlace.innerHTML = "&#10060;" + message;
  }
}

function submission(event) {
  event.preventDefault();
  if (
    !eMail.checkValidity() ||
    !password.checkValidity() ||
    !agreement.checkValidity()
  ) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    popUpWhole.style.display = "grid";
    setTimeout(() => {
      popUpWhole.style.opacity = "1.0";
    }, 50);
    registration();
  }
}

function registration() {
  loader.style.display = "block";

  let [userName, password, firstName, lastName, age] = inputs;

  let submit = {
    userName: userName.value,
    pwd: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    gender: gender,
  };

  users.push(submit);

  console.log(submit);
  console.log(users);

  popUp.textContent = `Welcome ${firstName.value}`;

  setTimeout(simulateLoading, 2000);

  for (let input of inputs) {
    input.value = "";
  }

  let checked = document.querySelectorAll("input:checked");

  for (let item of checked) {
    item.checked = false;
  }

  return users;
}

function simulateLoading() {
  loader.style.display = "none";
  message.style.display = "block";
  setTimeout(() => {
    message.style.opacity = "1.0";
  }, 50);
}

function hidePopUp() {
  popUpWhole.style.opacity = "0.0";
  message.style.opacity = "0.0";
  setTimeout(() => {
    popUpWhole.style.display = "none";
    message.style.display = "none";
  }, 500);
}
