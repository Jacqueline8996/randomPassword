// Assignment Code
var generateBtn = document.querySelector("#generate");
// Defing the arrays for pass word options 


var type = [alphabet, numbers,symbol]
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['','!', '"','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>', '?','@','[', '\\', ']','^','_','`','{','|','}','~'];
var lowerUpper = ['lower','Upper']
var criteria = {
    'lowercase': 'abcdefghijklmnopqrstuvwxyz'
    'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    'number':'0123456789';
    'symbol' = ' ! " $%&*+,-./:;<=>?@[\\]^_`{|,}~ ';

}
var smallLength = 8
var largeLength = 128
var passwordPut = ''

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
    var lowerCase = confirm("Do you want lowerCase?");
    console.log(lowerCase)

    //ask if uppercase
    var UpperCase = confirm("Do you want UpperCase?");
    //ask if they want numbers 
    var numberChar = confirm("Do you want numbers?");
    //ask for special charcters 
    var specialChar = confirm("Do you want Special Characters?");
}

//function fo number generator
function numberGen(){
    var num = Math.floor(Math.random() * (Array.length))
}


function generatePassword(){

//take user desired length 
for(var i = 0;i < passwordLength;i++){
    numberGen(type){
        type[num]
    numberGen(alphabet)
        if (type[num] === alphabet)
    
    numberGen(alphabet)
        
    }
    
    
    


 console.log(character);

}




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

