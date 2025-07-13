//Getting element by Id
const myForm = document.getElementById("form");
const message = document.getElementById("bounceMessage");
let error = "the";

//Adding an event listener
myForm.addEventListener("submit", function(event) {

    event.preventDefault();  //  to stop the form from submitting immediately
    
    const password = document.getElementById("password").value;     //.value helps you grab the content of the password

    console.log(password);      //displaying the password to make sure we are fetching the right thing

    message.style.color = "red";

    validatePassword(password);
});

function validatePassword(password){
    if(!/[A-Z]/.test(password)){
        message.innerText = "Password must contain an uppercase";
        // console.log(error);   //this is to make sure the error message has been stored in the error variable well
    }

    else if(!/[a-z]/.test(password)){
        message.innerText = "Password must contain a lowercase";
        // console.log(error);
    }

    else if(!/\d/.test(password)){
        message.innerText = "Password must contain at least one number";
        // console.log(error);
    }

    else if(password.length < 8){
        message.innerText = "Password should be at least 8 characters long";
        // console.log(error);
    }
    
    else{
        message.innerText = "Password is stong!";
        message.style.color = "green"
        // console.log(error);
    }

}

 // message.textContent = error;  //This can also be used.
