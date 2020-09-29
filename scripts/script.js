// ----- VARIABLES -----

//DOM elements selecting:

let validations = document.getElementsByClassName("validation");
let valLength = document.getElementById("validationLength");
let valCapital = document.getElementById("validationCapital");
let valNumber = document.getElementById("validationNumber");
let valSpecial = document.getElementById("validationSpecial");
let valEmail = document.getElementById("validationEmail");

let inputs = document.querySelectorAll("input");
let password = document.getElementById("password");
let eMail = document.getElementById("user-name");

let popUp = document.querySelector(".popUp-wrapper");
let closeButton = document.querySelector(".close");

// global variables for function

let gender = "none";
let users = [];

// ----- EVENT LISTENERS -----

password.addEventListener("change", passwordValidation);
eMail.addEventListener("change", emailValidation);

closeButton.addEventListener("click", () => {
  popUp.style.display = "none";
});

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

  let emailRules = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;

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
  if (check === null) {
    element.value = "";
    validationPlace.innerHTML = "&#10060;" + message;
  }
}

function genderCheck(input) {
  gender = document.getElementById(`${input}`).value;
  console.log(gender);
}

function registration() {
  let userName = document.getElementById("user-name").value;
  let password = document.getElementById("password").value;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let age = document.getElementById("age").value;

  let submit = [];

  submit.push(userName, password, firstName, lastName, age, gender);

  users.push(submit);

  console.log(submit);
  console.log(users);
  document.getElementById("pop-up").innerHTML = `Welcome ${firstName}`;
  document.querySelector(".popUp-wrapper").style.display = "grid";

  document.getElementById("user-name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("age").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;

  return users;

  //return submit;
}
