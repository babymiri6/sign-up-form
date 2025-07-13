//Getting element by Id
const myForm = document.getElementById("form");
const message = document.getElementById("bounceMessage");
// let error = "the";

//Adding an event listener
myForm.addEventListener("submit", function(event) {

    event.preventDefault();  //  to stop the form from submitting immediately

    const signUpPassword = document.getElementById("signUpPassword").value;     //.value helps you grab the content of the password
    
    localStorage.setItem("userPassword", signUpPassword);     //Storing the password value the user will enter in the local storage
    
    console.log(signUpPassword);      //displaying the password to make sure we are fetching the right thing

    message.style.color = "red";

    validatePassword(signUpPassword);
});

function validatePassword(signUpPassword){
    if(!/[A-Z]/.test(signUpPassword)){
        message.innerText = "Password must contain an uppercase";
        // console.log(error);   //this is to make sure the error message has been stored in the error variable well
    }

    else if(!/[a-z]/.test(signUpPassword)){
        message.innerText = "Password must contain a lowercase";
        // console.log(error);
    }

    else if(!/\d/.test(signUpPassword)){
        message.innerText = "Password must contain at least one number";
        // console.log(error);
    }

    else if(signUpPassword.length < 8){
        message.innerText = "Password should be at least 8 characters long";
        // console.log(error);
    }
    
    else{
        message.innerText = "Password is stong!";
        message.style.color = "green";
        // console.log(error);
    }

}

 // message.textContent = error;  //This can also be used.

 //SIGN IN PROCESS

const logInForm = document.getElementById("loginForm"); // different ID

logInForm.addEventListener("submit", function(event) {

    event.preventDefault();     //prevent the form from submitting immediately

    loginProcess();
});
 function loginProcess(){
    const logInMessage = document.getElementById("logInMessage");

    const logInPassword = document.getElementById("logInPassword").value;
    const storedPassword = localStorage.getItem("userPassword");

    console.log(logInPassword); //Making sure we are getting the correct value

    logInMessage.style.color = "green";

    if(logInPassword === storedPassword){
        logInMessage.innerText = "Login successful!";
    }
    else{
        logInMessage.innerText = "You have entered a wrong password";
        logInMessage.style.color = "red";
    }

 }

 