/** Para el input de name */

window.onload = function() {
    document.getElementById("formSignUp").addEventListener('submit', function(event) {
        event.preventDefault()
})}

function firstNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('name').value;
    // var space = (" ");
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            alert('Invalid first name');
            document.getElementById('name').style.border = '3px solid red';
            document.getElementById('errorMessage').classList.remove('pName')
            return('Enter a valid name')
        }
    }

    if (name.length < 6) {
        alert('It must contain more characters')
        document.getElementById('name').style.border = "3px solid red";
        document.getElementById('errorMessage').classList.remove("pName");

    } else {
        document.getElementById('name').style.border = "3px solid green";
    }

}

function lastNameInput(){
    var alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var name = document.getElementById('lastName').value;
    // var space = (" ");
    for (var i = [0]; i < name.length; i ++) {
        if (!alpha.includes(name[i].toLowerCase())) {
            alert('Invalid last name');
            document.getElementById('lastName').style.border = '3px solid red';
            document.getElementById('errorlastMessage').classList.remove('plastName')
            return('Enter a valid name')
        }
    }

    if (name.length < 6) {
        alert('It must contain more characters')
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
        alert('Invalid phone number');
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
            alert("Invalid address")
            document.getElementById("address").style.border = '3px solid red';
            document.getElementById('errorAddress').classList.remove('pAddress');
        }

    } else {
        alert("Enter valid characters");
        document.getElementById("address").style.border = '3px solid red';
        document.getElementById('errorAddress').classList.remove('pAddress');
    }
}

function cityName() {
    var city = document.getElementById('cityName').value;
    if (city.length < 3) {
        document.getElementById('cityName').style.border = '3px solid red';
        document.getElementById('errorCity').classList.remove('pCity');
        alert('Invalid city');
    } else {
        document.getElementById('cityName').style.border = '3px solid green';
    }
}

function zipCode() {
    var zipCode = document.getElementById('zipCode').value;
    if (zipCode.length < 4 || zipCode > 5) {
        document.getElementById('zipCode').style.border = '3px solid red';
        document.getElementById('errorZip').classList.remove('pZip');
        alert('Invalid Zip Code')
    }
    else {
        document.getElementById('zipCode').style.border = '3px solid green'
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
    if (password.length - 1 > 8) {
        document.getElementById('password').style.border = "3px solid green";
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

function confirmPassword() {
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("confirmPassword").value;
    if (pass === pass2) {
        document.getElementById("confirmPassword").style.border = "3px solid green";
    } else {
        document.getElementById("errorPassword2").classList.remove("pPassword2");
        document.getElementById("confirmPassword").style.border = "3px solid red";
    }
}

function handleOnSubmit() {
    firstNameInput();
    lastNameInput();
    idNumber();
    phoneNumber();
    addressInput()
    cityName()
    zipCode()
    password1()
    confirmPassword()
}
