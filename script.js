// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordChars= ""; //pool of characters the password will choose from
var pass = ""; //initializing variable pass
var passLength = 0; //length default starts at 0


//function that uses window prompt to set the parameters of the password.
function passwordCriteria(){
  passLength=window.prompt("How long do you want your password to be?");  //creates length of password
  passLength = parseInt(passLength);


  //if statements that does not allow the user to have a password under 8 characters or over 128 characters
  if(passLength<8){  
    window.alert("Your password needs to be more than 8 characters")
    passwordCriteria();
  } 
  else if (passLength>128){
    window.alert("Your password needs to be less than 128 characters")
    passwordCriteria();
  } else{    //if the password length does fit the requirements series of confirmation prompts will pop up, adds characters to the pool if confirmed.
    var lowerCase=window.confirm("Do you want your password to have lowercase?")
    if(lowerCase){
      passwordChars += "abcdefghijklmnopqrstuvwxyz"; //adds lowercase to the pool of characters
    }
    var upperCase=window.confirm("Do you want your password to have uppercase?")
    if(upperCase){
     passwordChars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //adds uppercase to the pool of characters
    }
    var numerics=window.confirm("Do you want your password to have numerics?")
    if(numerics){
      passwordChars += "1234567890"; //adds numbers to the pool of characters
    }
    var specialChar=window.confirm("Do you want your password to have special characters?")
    if(specialChar){
      passwordChars += "!#$%^&*"; //adds special characters to the pool of characters
    }
    console.log(passwordChars); //prints pool of characters to the console *for testing*
  }
}

//function to create a random password.
function generatePassword(){ 
    for(var i= 0; i<passLength; i++){ //forloop will run as long as the password length we set earlier.
      pass+=passwordChars.charAt(Math.round(Math.random() * (passwordChars.length))); //random characters are selected by using math.random amd math.floor for rounding. Selects a random character from the pool of characters (var passwordChars)
    }
    console.log(pass); //prints the password to the console *for testing*
    return pass;
}  

//function that clears all variables, this allows for the user to press the generate password button multiple times without variables adding.
function reset(){
  generateBtn = document.querySelector("#generate");
  passwordChars= "";
  pass = "";
  passLength = 0;
  writePassword.password = "";
  writePassword.passwordText = document.querySelector("#password");
  writePassword.passwordText.value ="";
}
  
//main function
function writePassword() {
  reset(); //resets variables
  
  passwordCriteria(); //launches function to get password criteria
  
  var password = generatePassword(); //assigns "var password" a password with the correct criterias generated from function generatePassword()
  var passwordText = document.querySelector("#password"); //password shows on the website inside the dotted box
  passwordText.value = password; //assigns the text the password
}

generateBtn.addEventListener("click", writePassword);