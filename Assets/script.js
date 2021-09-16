// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input test
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passoptions = window.prompt("stuff")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

