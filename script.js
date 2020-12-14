// Assignment Code
var generateBtn = document.querySelector("#generate");
// Defing the strings for pass word options 
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol= ' ! " $%&*+,-./:;<=>?@[]^_`{|,}~ ';
var smallLength = 8;
var largeLength = 128;
var passwordPut = '';
var passwordArray = [];


//function for prompt 
function userInput(){

    var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)Refresh Page After each generation!");
   
    //verifying it is within the paramaters if it is within the approprate length or not  
    while ((passwordLength < smallLength) || (passwordLength > largeLength)) {
        if (passwordLength < smallLength){
            alert("Password is too short,must be at least 8 characters long, try again!!!!");  
        }
        else{
            alert("password is too long,can only be at max 128 characters long, try again!!!!"); 
        }
        var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)Refresh Page After each generation!");        
    }

    //ask if lower case /ask if there is uppper cases (if statement) nedd to validate data make data validation function
    var lowerCaseCon = confirm("Do you want lowerCase?");
    var uppercaseCon = confirm("Do you want UpperCase?");
    var numberCon = confirm("Do you want numbers?");
    var symbolCon = confirm('Do you want Special Characters?');

    //adds string to list to be randamized
    if (lowerCaseCon == true){
        passwordArray.push(lowercase);
    }
    if (uppercaseCon == true){
        passwordArray.push(uppercase);
    }
    if (numberCon == true){
        passwordArray.push(number);
    }
    if (symbolCon == true){
        passwordArray.push(symbol);
    }
   
    //return user input 
    return passwordLength;
}
function generateRandomCharaFull(){
    //gets random numbers for which option were chosen 
    var randomList = Math.floor(Math.random() * (passwordArray.length));
    // gets character in the option choosen 
    var randomCharacter = Math.floor(Math.random() * (passwordArray[randomList].length));
    //adds it to the empty string 
    passwordPut += (passwordArray[randomList][randomCharacter]);

}

//shuffels string so everything is even more random
function randomShuffle(generatePass) { 
    //passes password generated and coverts it to a array 
    var arr = generatePass.split('');          
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    //new array gets turned into a string
    generatePass = arr.join('');                
    return generatePass;                        
  }

function generatePassword(){
    //gets the information from user to continue the function
    finalLength = userInput();

    // for loop that goes through the length of the password array once (guarantees at least one of each chose value)
    for(var i = 0;i < passwordArray.length;i++){
        //gets the random character for each one of the critera
        var randomCharacter = Math.floor(Math.random() * (passwordArray[i].length));
        //adds it to the empty string 
        passwordPut += (passwordArray[i][randomCharacter]); 
    }

    var remainLenght = finalLength - passwordArray.length;
    // iterate over that remainingLength to get the rest of the remaing character
    for(var i = 0;i < remainLenght;i++){
        //gets the random character
        generateRandomCharaFull();
    }

     //optional, jumble it up (rerrange values in array rondomly)
     var shuffledPassword = randomShuffle(passwordPut);

    //return the completly shuffeled password
    return (shuffledPassword); 
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

