window.onload = function() {
    document.getElementById("formLogIn").addEventListener('submit', function(event) {
        event.preventDefault()
})}

// boolean variables

var inputA
var inputB

// verify mail:

function ermail(){
    var email = document.getElementById('email').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!validateEmail.test(email)) {
        document.getElementById('email').style.border = '3px solid red';
        document.getElementById('errorMail').classList.remove('pMail');
        inputA = false
    }
    else {
        document.getElementById('email').style.border = '3px solid green';
        inputA = true
    }
}

// verify password:

function password1() {
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var password = document.getElementById('password').value;
    var letter = 0;
    var number = 0;
    for (let i = 0; i < password.length; i++) {
        if (alpha.includes(password[i].toLocaleLowerCase())) {
            letter++;
        } else {
            Number.isInteger(password[i]);
            number++;
        }
    }
    if (password.length - 1 > 8) {
        document.getElementById('password').style.border = "3px solid green";
        inputB = true
    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
        inputB = false

    }
    if (letter <= 0 || number <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
        inputB = false

    } else {
        document.getElementById('password').style.border = "3px solid green";
        inputB = true

    }
}

// Focus:


function verifyMail(){
    document.getElementById('email').style.border = '3px solid blue'
    document.getElementById('errorMail').classList.add('pMail')
}

function verifyPassword(){
    document.getElementById('password').style.border = '3px solid blue'
    document.getElementById('errorPassword').classList.add('pPassword')
}

// variables input

var emailPrint = document.getElementById('email');
var passwordPrint = document.getElementById('password');


// window.alert()

function confirmSubmit(){
    alert(
        "Your email is: " + emailPrint.value + 
        "\nYour password is: " + password.value);  
}

function confirm() {
    if (inputA == true && inputB == true) {
        confirmSubmit()
    } else {
        alert('Please, enter valid values')
    }
}


// HandleOnSubmit

function handleOnSubmit() {

    confirm();
}
