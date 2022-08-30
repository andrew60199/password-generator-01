// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var passwordLength = window.prompt('\nHow long would you like your password to be? \n\nPlease select a number between 8 and 128.\n');

  // If user pressed Cancel, immediately end function
  if (!passwordLength) {
    return;
  };

  // Additional reqirements before continuing
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('\nPlease select a number between 8 and 128.');
    return;
  };

  if (isNaN(passwordLength)) {
    window.alert('\nPlease select a number.');
    return;
  }

  // Run through character types
  var passwordLowercase = window.confirm('\nWould you like lowercase characters in your password?\n');
  var passwordUppercase = window.confirm('\nWould you like UPPERCASE characters in your password?\n');
  var passwordNumeric = window.confirm('\nHow about some numbers in your password?\n');
  var passwordSpecial = window.confirm('\nFinally, would you like special characters in your password?\n');

  // console.log(passwordLowercase);
  // console.log(passwordUppercase);
  // console.log(passwordNumeric);
  // console.log(passwordSpecial);

  if (
    (passwordLowercase === false) && 
    (passwordUppercase === false) &&
    (passwordNumeric === false) &&
    (passwordSpecial === false)
    ) {
    window.alert('\nOh no, you\'ll need to select at least one character type to continue. Please try again\n')
  };

  // Generate password 

  // Code that checks what criteria was selected and generates a random order
  // Which ones are true??
  



  for(var i=1; i <= passwordLength; i++) {
    // This statement will run each time the loop is executed
    console.log('');
  }

  // Code that assigns values to their respective value

  // return passwordCharaters.join('');
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
