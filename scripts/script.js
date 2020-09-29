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

// global variables for function

let gender = "none";
let users = [];

// ----- EVENT LISTENERS -----

password.addEventListener("change", passwordValidation);

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
  let capitalsCheck = passwordToCheck.match(capitals);

  if (capitalsCheck === null) {
    password.value = "";
    valCapital.innerHTML =
      "&#10060; password has to contain at least one capital letter ";
  }

  let numbers = /[0-9]/g;
  let numbersCheck = passwordToCheck.match(numbers);

  if (numbersCheck === null) {
    password.value = "";
    valNumber.innerHTML =
      "&#10060; password has to contain at least one number ";
  }
  let specials = /\W/g;
  let specialsCheck = passwordToCheck.match(specials);

  if (specialsCheck === null) {
    password.value = "";
    valSpecial.innerHTML =
      "&#10060; password has to contain at least one special character ";
  }
}

function emailValidation() {
  valEmail.innerHTML = "";

  let emailToCheck = document.getElementById("user-name").value;
  let emailRules = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
  let emailCheck = emailToCheck.match(emailRules);
  console.log(emailCheck);

  if (emailCheck === null) {
    document.getElementById("user-name").value = "";
    valEmail.innerHTML =
      "&#10060; input does not correspond to standards for e-mail address ";
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

// ----- CLOSING POP-UP -----

let popUp = document.getElementsByClassName("popUp-wrapper")[0];

let closeButton = document.getElementsByClassName("close")[0];

closeButton.addEventListener("click", () => {
  popUp.style.display = "none";
});
