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
   
    //verifying it is within the paramaters  

    for (passwordLength < smallLength ;passwordLength > largeLength;){
        //does not work with min 
        if (passwordLength < smallLength){
            alert("Password is too short , try again!!!!");
            
        }
        else{
            alert("password is too long , try again!!!!"); 
        }
        var passwordLength = prompt("How Long do you want your password? (Please be between 8 and 128 characters)");
    }

    //ask if lower case /ask if there is uppper cases (if statement) nedd to validate data make data validation function

    if (confirm("Do you want lowerCase?") == true){
        passwordArray.append(lowercase);
    }
    else if (confirm("Do you want UpperCase?")== true){
        passwordArray.append(uppercase);
    }
    else if (confirm("Do you want numbers?")== true){
        passwordArray.append(number);

    }
    else if (confirm('Do you want Special Characters?')== true){
        passwordArray.append(symbol);

    }
    
}



function generatePassword(){

//take user desired length 
for(var i = 0;i < criteria.keys(criteria).length;i++){
    var num = Math.floor(Math.random() * (criteria.length))
    passwordPut += (criteria.value[num]);
        
    }

}

function determine ();{
    



}

//Code to generate the password from input 

// Write password to the #password input
function writePassword() {

    userInput();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

