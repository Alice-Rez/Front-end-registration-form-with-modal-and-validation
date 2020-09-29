var gender = "none";
var users = [];

function passwordValidation() {
  document.getElementById("validationLength").innerHTML = "";
  document.getElementById("validationCapital").innerHTML = "";
  document.getElementById("validationNumber").innerHTML = "";
  document.getElementById("validationSpecial").innerHTML = "";

  let passwordToCheck = document.getElementById("password").value;

  if (passwordToCheck.length < 8) {
    document.getElementById("password").value = "";
    document.getElementById("validationLength").innerHTML =
      "&#10060; minimum password length is 8 characters ";
  }

  let capitals = /[A-Z]/g;
  let capitalsCheck = passwordToCheck.match(capitals);
  console.log(capitalsCheck);

  if (capitalsCheck === null) {
    document.getElementById("password").value = "";
    document.getElementById("validationCapital").innerHTML =
      "&#10060; password has to contain at least one capital letter ";
  }

  let numbers = /[0-9]/g;
  let numbersCheck = passwordToCheck.match(numbers);
  console.log(numbersCheck);
  if (numbersCheck === null) {
    document.getElementById("password").value = "";
    document.getElementById("validationNumber").innerHTML =
      "&#10060; password has to contain at least one number ";
  }
  let specials = /\W/g;
  let specialsCheck = passwordToCheck.match(specials);
  console.log(specialsCheck);
  if (specialsCheck === null) {
    document.getElementById("password").value = "";
    document.getElementById("validationSpecial").innerHTML =
      "&#10060; password has to contain at least one special character ";
  }
}

function emailValidation() {
  document.getElementById("validationEmail").innerHTML = "";

  let emailToCheck = document.getElementById("user-name").value;
  let emailRules = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
  let emailCheck = emailToCheck.match(emailRules);
  console.log(emailCheck);

  if (emailCheck === null) {
    document.getElementById("user-name").value = "";
    document.getElementById("validationEmail").innerHTML =
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
