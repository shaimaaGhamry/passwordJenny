// Assignment Code
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()|{}[]<>?~+-_=:;";

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  var passwordLength = getPassLen();
  var passwordCriteria = getPassCriteria();

  var password = generatePassword(passwordCriteria, passwordLength);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPassLen() {
  var passLen = prompt("what is the length of the password? It should be betweeen 8 and 128 characters:");

  while (passLen < 8 || passLen > 128) {
    passLen = prompt("what is the length of the password? It should be betweeen 8 and 128 characters:");
    console.log("wrong pass" + passLen);
  }
  return passLen;

}

function getPassCriteria(containsLower, containsUpper, containsNumber, containsSymbols) {

  var containsUpper = confirm("Would you like to contain Uppercase letters in the password?if yes press ok .If no press cancel");
  var containsLower = confirm("Would you like to contain Lowercase letters in the password?if yes press ok .If no press cancel");
  var containsSymbols = confirm("Would you like to contain Special letters in the password?if yes press ok .If no press cancel");
  var containsNumber = confirm("Would you like to contain Number in the password?if yes press ok .If no press cancel");

  //make sure at least one criteria is selected
  while (!containsUpper && !containsLower && !containsSymbols && !containsSymbols) {
    alert("Yoe should select at least one criteria to generate the password");

    containsUpper = confirm("Would you like to contain Uppercase letters in the password?if yes press ok .If no press cancel");
    containsLower = confirm("Would you like to contain Lowercase letters in the password?if yes press ok .If no press cancel");
    containsSymbols = confirm("Would you like to contain Special letters in the password?if yes press ok .If no press cancel");
    containsNumber = confirm("Would you like to contain Number in the password?if yes press ok .If no press cancel");


  }
  var passCriteria = [];

  if (containsLower) {
    passCriteria.push("lower");
    console.log("the password criteria now is: " + passCriteria);
  }

  if (containsUpper) {
    passCriteria.push("upper");
    console.log("the password criteria now is:" + passCriteria);
  }

  if (containsNumber) {
    passCriteria.push("number");
    console.log("the password criteria now is: " + passCriteria);
  }

  if (containsSymbols) {
    passCriteria.push("symbol");
    console.log("the password criteria now is: " + passCriteria);

  }

  console.log("the final password criteria now is:" + passCriteria);
  return passCriteria;
}


function generatePassword(passCriteria, passLength) {
  var password = "";

  for (var i = 0; i < passLength; i++) {

    var randomIndex = Math.floor(Math.random() * passCriteria.length);

    if (passCriteria[randomIndex] == "upper") {
      randomChar = getRandomUpperLetter();
      password += randomChar;
    }

    if (passCriteria[randomIndex] == "lower") {
      randomChar = getRandomLowerLetter();
      password += randomChar;
    }
    if (passCriteria[randomIndex] == "number") {
      randomChar = getRandomNumber();
      password += randomChar;
    }

    if (passCriteria[randomIndex] == "symbol") {
      randomChar = getRandomSymbol();
      password += randomChar;
    }
  }
  return password;
}

function getRandomUpperLetter() {
  var randomIndex = Math.floor(Math.random() * upperLetters.length);
  return upperLetters.substring(randomIndex, randomIndex + 1);

}

function getRandomLowerLetter() {
  var randomIndex = Math.floor(Math.random() * lowerLetters.length);
  return lowerLetters.substring(randomIndex, randomIndex + 1);

}
function getRandomNumber() {
  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers.substring(randomIndex, randomIndex + 1)
}

function getRandomSymbol() {
  var randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols.substring(randomIndex, randomIndex + 1)
}