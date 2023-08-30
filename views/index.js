// Execute in strict mode
"use strict";

// Declare a loginChecker object for use by the HTML view
var controller;

// Variable to store API base URL
var BASE_URL = 'http://localhost:4000/loginChecker/';

window.addEventListener("load", () => {
  // Create the LoginChecker object for use by the HTML view
  controller = new LoginChecker();
});

function LoginChecker() {

  // Functions to return model data

  function checkLoginDetails(usernameInput, passwordInput) {
    
    function onSuccess(data) {
      // check that a correct username has been entered (to return an element from 
      // the loginDetails table) otherwise no data would have been returned
      if(data.length > 0) {
        // check whether correct password has been provided for the given username
        if(data[0].password === passwordInput) {
          window.location.href = "home.html";
        }
      } else {
        alert("Please check entered username and password.");
      }
    }
    
    let URL = BASE_URL + usernameInput;
    $.ajax(URL, {type: "GET", success: onSuccess},
            );    
  }

  // CONTROLLER FUNCTIONS

  this.loginFunction = function () {
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("userPasswordInput").value;
    checkLoginDetails(usernameInput, passwordInput);
  };
  
}