// Assignment Code
var generateBtn = document.querySelector("#generate");
// Defing the arrays for pass word options 
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['','!', '"','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>', '?','@','[', '\\', ']','^','_','`','{','|','}','~'];

//function for prompt 

function userInput(){

    //Prompts for the User to answer prefrence on the pass word 

    var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)");
    //checking if password is between 8 and 128 characters
    if (passwordLength >= 8 || passwordLength <=128){
    //ask if lower case /ask if there is uppper cases (if statement) nedd to validate data make data validation function)
    var lowerCase = prompt("Do you want lowerCase? (yes/no)");
    //ask if uppercase
    var UpperCase = prompt("Do you want UpperCase?(yes/no)");
    //ask if they want numbers 
    var numberChar = prompt("Do you want numbers?(yes/no)");
    //ask for special charcters 
    var specialChar = prompt("Do you want Special Characters?(yes/no)");
}

else{
    if (passwordLength <= 8){
        alert("Password is too short , try again!!!!");
    }
    else{
        alert("password is too long , try again!!!!")
    }
}

}

//function fo number generato


//Code to generate the password from input 

// Write password to the #password input
function writePassword() {

    userInput()
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


