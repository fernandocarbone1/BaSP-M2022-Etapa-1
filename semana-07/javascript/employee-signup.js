window.onload = function() {
    document.getElementById("formSignUp").addEventListener('submit', function(event) {
        event.preventDefault()
    })
}

// boolean variables

var inputA
var inputB
var inputC
var inputD
var inputE
var inputF
var inputG
var inputH
var inputI
var inputJ
var inputK



function firstNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('name').value;
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            document.getElementById('name').style.border = '3px solid red';
            document.getElementById('errorName').classList.remove('pName')
            inputA = false
        }
    }

    if (name.length < 3) {
        document.getElementById('name').style.border = "3px solid red";
        document.getElementById('errorName').classList.remove("pName");
        inputA = false

    } else {
        document.getElementById('name').style.border = "3px solid green";
        inputA = true
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
            inputB = false
        }
    }

    if (name.length < 3) {
        document.getElementById('lastName').style.border = "3px solid red";
        document.getElementById('errorlastMessage').classList.remove("plastName");
        inputB = false

    } else {
        document.getElementById('lastName').style.border = "3px solid green";
        inputB = true
    }
}

function idNumber() {
    var id = document.getElementById('identNumber').value
    if (id.length > 6) {
        if (id.length <= 8) {
            document.getElementById('identNumber').style.border = '3px solid green';
            inputC = true

        } else {
            document.getElementById('identNumber').style.border = '3px solid red';
            document.getElementById('errorID').classList.remove('pID')
            inputC = false
        }
    } else {
        document.getElementById('identNumber').style.border = '3px solid red';
        document.getElementById('errorID').classList.remove('pID')
        inputC = false
    }
}

function checkDOB() {
    var dob = document.getElementById("dateOfBirth").value
    console.log("dob", typeof dob)
    var dateDOB = new Date(dob).getTime();

    var diff = new Date().getTime() - dateDOB;

    console.log(Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.25)));

    age = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.25));
    if (age >= 18) {
        document.getElementById('dateOfBirth').style.border = '3px solid green';
        inputK = true
    } else {
        document.getElementById('dateOfBirth').style.border = '3px solid red';
        document.getElementById('errorDate').classList.remove('pDate')
        inputK = true
        alert('At least your age must be 18 years old')
    }

}

function phoneNumber() {
    var phone = document.getElementById("phone").value;
    if (phone.length < 10 || phone.length > 10) {
        document.getElementById("phone").style.border = "3px solid red";
        document.getElementById("errorPhone").classList.remove("pPhone");
        inputD = false
    } else {
        document.getElementById("phone").style.border = "3px solid green";
        inputD = true
    }
}

function addressInput() {
    var address = document.getElementById("address").value
    if (address.indexOf(" ") > -1 && address.indexOf(" ") < address.length - 2) {
        if (address.length > 5) {
            document.getElementById("address").style.border = '3px solid green';
            inputE = true
        } else {
            document.getElementById("address").style.border = '3px solid red';
            document.getElementById('errorAddress').classList.remove('pAddress');
            inputE = false
        }

    } else {
        document.getElementById("address").style.border = '3px solid red';
        document.getElementById('errorAddress').classList.remove('pAddress');
        inputE = false
    }
}

function cityInput() {
    var city = document.getElementById('cityName').value;
    if (city.length < 3) {
        document.getElementById('cityName').style.border = '3px solid red';
        document.getElementById('errorCity').classList.remove('pCity');
        inputF = false
    } else {
        document.getElementById('cityName').style.border = '3px solid green';
        inputF = true
    }
}

function zipCodeCity() {
    var zipCode = document.getElementById('zipCode').value;
    if (zipCode.length < 4  || zipCode.length > 5) {
        document.getElementById('zipCode').style.border = '3px solid red';
        document.getElementById('errorZip').classList.remove('pZip');
        inputG = false
    }
    else {
        document.getElementById('zipCode').style.border = '3px solid green'
        inputG = true
    }
}

function eMail(){
    var email = document.getElementById('email').value;
    var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!validateEmail.test(email)) {
        document.getElementById('email').style.border = '3px solid red';
        document.getElementById('errorMail').classList.remove('pMail');
        inputH = false
    }
    else {
        document.getElementById('email').style.border = '3px solid green';
        inputH = true
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
        inputI = true

    } else {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
        inputI = false
    }
    if (letter <= 0 || number <= 0 || password.indexOf(" ") > -1) {
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById("errorPassword").classList.remove("pPassword");
        inputI = false
    } else {
        document.getElementById('password').style.border = "3px solid green";
        inputI = true
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
        inputJ = false
    }
}

// Focus:

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

// dateOfBirth
function verifyDate() {
    document.getElementById('dateOfBirth').style.border = '3px solid blue'
    document.getElementById('errorDate').classList.add('pDate')
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
var dobBirthPrint = document.getElementById('dateOfBirth')
var phonePrint = document.getElementById('phone')
var addressPrint = document.getElementById('address')
var cityPrint = document.getElementById('cityName')
var zipPrint = document.getElementById('zipCode');
var emailPrint = document.getElementById('email');
var passwordPrint = document.getElementById('password');
var confirmPasswordPrint = document.getElementById('confirmPassword');


// window.alert()

function confirmSubmit() {
    alert(
            "Your first name is: " + firstNamePrint.value +
            "\nYour last name is: " + lastNamePrint.value +
            "\nYour ID Number is: " + iDNumberPrint.value +
            "\nYour age is: " + dobBirthPrint.value +
            "\nYour phone number is: " + phonePrint.value +
            "\nYour address is: " + addressPrint.value +
            "\nYour city is: " + cityPrint.value +
            "\nYour zip code is: " + zipPrint.value +
            "\nYour email is: " + emailPrint.value +
            "\nYour password is: " + passwordPrint.value +
            "\nYour confirm password is: " + confirmPasswordPrint.value
        )
    }

function confirm() {
    if (inputA == true && inputB == true && inputC == true && inputD == true && inputE ==  true && inputF == true && inputG == true
         && inputH == true && inputI == true && inputK == true) {
        confirmSubmit()
    }
    else {
        alert('Please, enter valid values')
    }
}


// HandleOnSubmit
function handleOnSubmit() {
    firstNameInput();
    lastNameInput();
    idNumber();
    idNumber();
    checkDOB();
    phoneNumber();
    addressInput();
    cityInput();
    zipCodeCity();
    eMail();
    password1();
    confirmPassword2();
    confirm();
}
