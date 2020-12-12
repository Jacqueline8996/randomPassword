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

    var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)");
   
    //verifying it is within the paramaters if it is within the approprate length or not  
    
    while ((passwordLength < smallLength) || (passwordLength > largeLength)) {
        if (passwordLength < smallLength){
            alert("Password is too short , try again!!!!");
            
        }
        else{
            alert("password is too long , try again!!!!"); 
        }
        var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)");        
    }

    //ask if lower case /ask if there is uppper cases (if statement) nedd to validate data make data validation function
    var lowerCaseCon = confirm("Do you want lowerCase?");
    var uppercaseCon = confirm("Do you want UpperCase?");
    var numberCon = confirm("Do you want numbers?");
    var symbolCon = confirm('Do you want Special Characters?');

    //adds string to list to be randamized
   if (lowerCaseCon == true){
      passwordArray.append(lowercase);
    }
    else if (uppercaseCon == true){
        passwordArray.append(uppercase);
    }
    else if (numberCon == true){
        passwordArray.append(number);

    }
    else if (symbolCon == true){
        passwordArray.append(symbol);
    }

}

function generatePassword(){

    // for loop that goes through the length of the password array once (guarantees at least one of each chose value)
    for(var i = 0;i < passwordArray.length;i++){
        //gets random numbers for which option were chosen 
        var randomList = Math.floor(Math.random() * (passwordArray.length));
        // gets character in the option choosen 
        var randomCharacter = Math.floor(Math.random() * (passwordArray[randomList].length));
        //adds it to the empty string 
        passwordPut += (passwordArray[randomList][randomCharacter]);
    }
    

     var remainLenght = passwordLength - passwordArrayLength
    

    // iterate over that remainingLength
    for(var i = 0;i < remainLenght.length;i++){
         //gets random numbers for which option were chosen 
         var randomList = Math.floor(Math.random() * (passwordArray.length));
         // gets character in the option choosen 
         var randomCharacter = Math.floor(Math.random() * (passwordArray[randomList].length));
         //adds it to the empty string 
         passwordPut += (passwordArray[randomList][randomCharacter]);

    }
console.log(passwordPut)

    // optional, jumble it up (rerrange values in array rondomly)

    // at this point you passwordPut 
 return (passwordPut);
 
    
}




// Write password to the #password input
function writePassword() {

    userInput();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

