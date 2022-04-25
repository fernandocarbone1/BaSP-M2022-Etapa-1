window.onload = function() {
    document.getElementById("formSignUp").addEventListener('submit', function(event) {
        event.preventDefault()
    })
}

function firstNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('name').value;
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            document.getElementById('name').style.border = '3px solid red';
            document.getElementById('errorName').classList.remove('pName')
        }
    }

    if (name.length < 3) {
        document.getElementById('name').style.border = "3px solid red";
        document.getElementById('errorName').classList.remove("pName");

    } else {
        document.getElementById('name').style.border = "3px solid green";
    }
}

function lastNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('lastName').value;
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            document.getElementById('lastName').style.border = '3px solid red';
            document.getElementById('errorlastMessage').classList.remove('plastName')
        }
    }

    if (name.length < 3) {
        document.getElementById('lastName').style.border = "3px solid red";
        document.getElementById('errorlastMessage').classList.remove("plastName");

    } else {
        document.getElementById('lastName').style.border = "3px solid green";
    }
}

function idNumber() {
    var id = document.getElementById('identNumber').value
    if (id.length > 6) {
        if (id.length <= 8) {
            document.getElementById('identNumber').style.border = '3px solid green';
        } else {
            document.getElementById('identNumber').style.border = '3px solid red';
            document.getElementById('errorID').classList.remove('pID')
        }
    } else {
        document.getElementById('identNumber').style.border = '3px solid red';
        document.getElementById('errorID').classList.remove('pID')
    }
}


function phoneNumber() {
    var phone = document.getElementById("phone").value;
    if (phone.length < 10 || phone.length > 10) {
        document.getElementById("phone").style.border = "3px solid red";
        document.getElementById("errorPhone").classList.remove("pPhone");
    } else {
        document.getElementById("phone").style.border = "3px solid green";
    }
}

function addressInput() {
    var address = document.getElementById("address").value
    if (address.indexOf(" ") > -1 && address.indexOf(" ") < address.length - 2) {
        if (address.length > 5) {
            document.getElementById("address").style.border = '3px solid green';
        } else {
            document.getElementById("address").style.border = '3px solid red';
            document.getElementById('errorAddress').classList.remove('pAddress');
        }

    } else {
        document.getElementById("address").style.border = '3px solid red';
        document.getElementById('errorAddress').classList.remove('pAddress');
    }
}

function cityInput() {
    var city = document.getElementById('cityName').value;
    if (city.length < 3) {
        document.getElementById('cityName').style.border = '3px solid red';
        document.getElementById('errorCity').classList.remove('pCity');
    } else {
        document.getElementById('cityName').style.border = '3px solid green';
    }
}

function zipCodeCity() {
    var zipCode = document.getElementById('zipCode').value;
    if (zipCode.length < 4  || zipCode.length > 5) {
        document.getElementById('zipCode').style.border = '3px solid red';
        document.getElementById('errorZip').classList.remove('pZip');
    }
    else {
        document.getElementById('zipCode').style.border = '3px solid green'
    }
}

function eMail(){
    var email = document.getElementById('email').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!validateEmail.test(email)) {
        document.getElementById('email').style.border = '3px solid red';
        document.getElementById('errorMail').classList.remove('pMail');
    }
    else {
        document.getElementById('email').style.border = '3px solid green';
    }
}

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
    if (password.length - 1 >= 8){
        document.getElementById('password').style.border = "3px solid green";
        console.log("Funciona el if")
    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
    }
    if (letter <= 0 || number <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
    } else {
        document.getElementById('password').style.border = "3px solid green";
    }
}

function confirmPassword2() {
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("confirmPassword").value;
    if (pass2 === pass) {
        document.getElementById("confirmPassword").style.border = "3px solid green";
    } else {
        document.getElementById("confirmPassword").style.border = "3px solid red";
        document.getElementById("errorPassword2").classList.remove("pPassword2");
    }

    if (pass === ' ')
        document.getElementById("confirmPassword").style.border = "3px solid red";
        document.getElementById("errorPassword2").classList.remove("pPassword2");
}

// function verify onfocus/onblur

// First Name
function verifyFirstName(){
    document.getElementById('name').style.border = '3px solid blue'
    document.getElementById('errorName').classList.add('pName')
}

// Last Name
function verifyLastName(){
    document.getElementById('lastName').style.border = '3px solid blue'
    document.getElementById('errorlastMessage').classList.add('plastName')
}

// Id Number
function verifyIDNumber(){
    document.getElementById('identNumber').style.border = '3px solid blue'
    document.getElementById('errorID').classList.add('pID')
}

// PhoneNumber
function verifyPhone(){
    document.getElementById('phone').style.border = '3px solid blue'
    document.getElementById('errorPhone').classList.add('pPhone')
}

// Address
function verifyAddress(){
    document.getElementById('address').style.border = '3px solid blue'
    document.getElementById('errorAddress').classList.add('pAddress')
}

// City
function verifyCity(){
    document.getElementById('cityName').style.border = '3px solid blue'
    document.getElementById('errorCity').classList.add('pCity')
}

// ZipCode
function verifyZip(){
    document.getElementById('zipCode').style.border = '3px solid blue'
    document.getElementById('errorZip').classList.add('pZip')
}


// Email
function verifyMail(){
    document.getElementById('email').style.border = '3px solid blue'
    document.getElementById('errorMail').classList.add('pMail')
}


// Password_01
function verifyPassword(){
    document.getElementById('password').style.border = '3px solid blue'
    document.getElementById('errorPassword').classList.add('pPassword')
}

// Password_02
function verifyConfirm(){
    document.getElementById('confirmPassword').style.border = '3px solid blue'
    document.getElementById('errorPassword2').classList.add('pPassword2')
}


// variables input

var firstNamePrint = document.getElementById('name')
var lastNamePrint = document.getElementById('lastName')
var iDNumberPrint = document.getElementById('identNumber')
var phonePrint = document.getElementById('phone')
var addressPrint = document.getElementById('address')
var cityPrint = document.getElementById('cityName')
var zipPrint = document.getElementById('zipCode');
var emailPrint = document.getElementById('email');
var passwordPrint = document.getElementById('password');
var confirmPasswordPrint = document.getElementById('confirmPassword');


// window.alert()

function printForm(){
    alert(
        "Your first name is: " + firstNamePrint.value +
        "\nYour last name is: " + lastNamePrint.value +
        "\nYour ID Number is: " + iDNumberPrint.value +
        "\nYour phone number is: " + phonePrint.value +
        "\nYour address is: " + addressPrint.value +
        "\nYour city is: " + cityPrint.value +
        "\nYour zip code is: " + zipPrint.value +
        "\nYour email is: " + emailPrint.value +
        "\nYour password is: " + passwordPrint.value +
        "\nYour confirm password is: " + confirmPasswordPrint.value
    )
}


// HandleOnSubmit
function handleOnSubmit() {
    firstNameInput();
    lastNameInput();
    idNumber();
    phoneNumber();
    addressInput();
    cityInput();
    zipCodeCity();
    eMail();
    password1();
    confirmPassword2();
    printForm();
}