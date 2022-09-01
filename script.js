// Global arrays
var lowercaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = [ '!', '”', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Had to join these arrays otherwise the commas would show up in the final answer.
var lowercaseCharactersJoined = lowercaseCharacters.join('');
var uppercaseCharactersJoined = uppercaseCharacters.join('');
var numberCharactersJoined = numberCharacters.join('');
var specialCharactersJoined = specialCharacters.join('');

// Used to select the button
var generateBtn = document.querySelector("#generate");

// Where the magic happens...
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

  if (
    (passwordLowercase === false) && 
    (passwordUppercase === false) &&
    (passwordNumeric === false) &&
    (passwordSpecial === false)
    ) {
    window.alert('\nOh no, you\'ll need to select at least one character type to continue. Please try again\n')
  };

  // Array to store the characters types the user wants within their password
  var possibleCharacters = [''];

  if (passwordLowercase) {
    possibleCharacters += lowercaseCharactersJoined;
  };

  if (passwordUppercase) {
    possibleCharacters += uppercaseCharactersJoined;
  }; 

  if (passwordNumeric) {
    possibleCharacters += numberCharactersJoined;
  };

  if (passwordSpecial) {
    possibleCharacters += specialCharactersJoined;
  };
 
  // Use this to check what is being selected
  // console.log(possibleCharacters);

  //Randomize
  var guaranteedCharacters = [''];
  for (var i = 0; i < passwordLength; i++) { 
    var index = Math.floor(Math.random() * possibleCharacters.length);
    guaranteedCharacters.push(possibleCharacters[index]);
  }

  // Use .join('') to join the randomised characters together into one string. 
  return guaranteedCharacters.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
