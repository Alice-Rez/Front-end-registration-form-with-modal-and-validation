<h1><img align="center" src="./images-readme/title.png" width="100%"> </h1>

## Description

<img align="right" src="./images-readme/form1.png" width="50%">

[Live Demo](https://alice-rez.github.io/Front-end-registration-form-with-modal-and-validation/)

Small project done cca in half of my one-year course (after finishing with Vanilla JS in browser module, before starting Node.js and frameworks). Demo of the registration form with implemented validation of the e-mail address and password, pop-upped modal with loader (as simulation to waiting for the data to be successfully sent) replaced later by welcoming message and simulation of the data collecting. Without using server side. The form cannot be submitted without filling the required inputs and agreement with the conditions.

<img align="right" src="./images-readme/form2.png" width="50%">

E-mail address have to contain @, at least one letter before it and after it, dot after it and another at least one letter after dot. Password has to be at least 8 character long with one capital, one number and one special character used.

At the end of validation, if the password was not correct, the input for the password will be cleared. For e-mail not, because user can control what is wrong.....

The simulation of the data collecting is done by storing all inputs about user in one object (_submit_) and than adding this object in array of users (_users_).

## Implementation

**Used technologies**: Vanilla JS, DOM, RegExp, array destructuring, HTML, CSS, CSS variables

RegExp were used for validation of the e-mail and password (check if it corresponds the rules). Array destructuring was used for assignment of the different inputs to different variables (from array of all inputs).
