# Front-end registration form with modal

## Description

Small project done cca in half of my one-year course. Registration form with implemented validation of the e-mail address and password, pop-upped modal with loader (as simulation to waiting for the data to be successfully sent) and later with welcoming message and simulation of the data collecting. The form cannot be submitted without filling the required inputs and agreement with the conditions.

E-mail address have to contain @, at least one letter before it and after it, dot after it and another at least one letter after dot. Password has to be at least 8 characters with one capital, one number and one special character used.

The simulation of the data collecting is done by storing all inputs about user in one object and than adding this object in array of users.

## Implementation

**Used technologies**: Vanilla JS, DOM, RegExp, array destructuring, HTML, CSS,

RegExp are used for validation of the e-mail and password (if it corresponds the rules). Array destructuring is used for assignment of the different inputs to different variables (from array of all inputs).
