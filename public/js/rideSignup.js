const icon_close_ride = document.querySelector('#icon-close-ride')
icon_close_ride.addEventListener('click', () => {
    location.replace('/signin-signup-ride')
})

// eye icon coding show password for signup to ride
//1
const eyeicon = document.getElementById('eyeicon')
const PassWord = document.getElementById('password')

eyeicon.onclick = function () {
    if (PassWord.type == "password") {
        PassWord.type = "text"
        eyeicon.classList = "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if (PassWord.type == "text") {
        PassWord.type = "password";
        eyeicon.classList = "fa-solid fa-eye-slash";
    }
}

//2
const eyeicon1 = document.getElementById('eyeicon1')
const password1 = document.getElementById('password1')

eyeicon1.onclick = function () {
    if (password1.type == "password") {
        password1.type = "text"
        eyeicon1.classList = "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if (password1.type == "text") {
        password1.type = "password";
        eyeicon1.classList = "fa-solid fa-eye-slash";
    }
}



// form validation 

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const cnumber = document.getElementById('cnumber')
const password = document.getElementById('password')
const cpassword = document.getElementById('password1')


// add event 
form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents the form from being submitted in the traditional way
    validate(); //function call
    // swal("welcome!", "Regitration Successfull", "success")
})

const sendData = async (usernameval, emailval, cnumberval, passwordval, cpasswordval, sRate, count) => {
    if (sRate === count) {
        try {
            const response = await fetch('/rideSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameval,
                    email: emailval,
                    contactNumber: cnumberval,
                    password: passwordval,
                    cpassword: cpasswordval,
                }),
            })
            if (response.ok) {
                swal("Welcome!  " + usernameval,
                    "Successfully created",
                    "success").then(() => {
                        location.href = `/rideSignin`;
                    });
            }
            else {
                swal("Error", "Server error. Please try again later.", "error");

            }

        } catch (error) {
            swal("Error", "An unexpected error occurred. Please try again later.", "error");
            console.error('error submitting data', error)
        }
    }
}


// for final data validation
const SuccessMsg = (usernameval, emailval, cnumberval, passwordval, cpasswordval) => {
    let inputBoxDriver = document.getElementsByClassName('input-box-ride');
    var count = inputBoxDriver.length - 1;
    for (var i = 0; i < inputBoxDriver.length; i++) {
        if (inputBoxDriver[i].className === "input-box-ride success") {
            var sRate = 0 + i;  //sRate is success rate
            // console.log(sRate);
            sendData(usernameval, emailval, cnumberval, passwordval, cpasswordval, sRate, count);
        }
        else {
            return false;
        }
    }
}

// more email validation
const isEmail = (emailval) => {
    var atSymbol = emailval.indexOf('@');
    if (atSymbol < 1) return false
    var dot = emailval.lastIndexOf('.')
    //it means two char should be write after @
    if (dot <= atSymbol + 2) return false
    if (dot === emailval.length - 1) return false
    return true;
}


// define validate function 

const validate = () => {
    // trim will dlt white space before and after 
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const cnumberval = cnumber.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    // validate username 
    if (usernameval === '') {
        setErrorMsg(username, 'username Cannot be blank')
    } else if (usernameval.length <= 2) {
        setErrorMsg(username, 'User Name should be 3 char long')
    }
    else {
        setSuccessMsg(username)
    }


    // validate email 
    if (emailval === '') {
        setErrorMsg(email, 'Email Cannot be blank')
    } else if (!isEmail(emailval)) {
        setErrorMsg(email, 'Email is not valid')
    }
    else {
        setSuccessMsg(email)
    }

    // validate phone number 
    if (cnumberval === '') {
        setErrorMsg(cnumber, "Phone number can't be empty")
    } else if (cnumberval.length != 10) {
        setErrorMsg(cnumber, 'phone number is not valid')
    }
    else {
        setSuccessMsg(cnumber)
    }


    // validate password 
    if (passwordval === '') {
        setErrorMsg(password, "Password can't be empty")
    } else if (passwordval.length <= 5) {
        setErrorMsg(password, 'password should have min 6 char')
    }
    else {
        setSuccessMsg(password)
    }

    // validate confirm  password 
    if (cpasswordval === '') {
        setErrorMsg(cpassword, "Password can't be empty")
    } else if (cpasswordval != passwordval) {
        setErrorMsg(cpassword, 'password are not matching')
    }
    else {
        setSuccessMsg(cpassword)
    }

    SuccessMsg(usernameval, emailval, cnumberval, passwordval, cpasswordval); //calling



    // defining function 
    function setErrorMsg(input, errormsg) {
        const input_box_driver = input.parentElement;
        const small = input_box_driver.querySelector('small')
        input_box_driver.className = "input-box-ride error"
        small.innerText = errormsg
    }

    function setSuccessMsg(input) {
        const input_box_driver = input.parentElement;
        input_box_driver.className = "input-box-ride success"

    }
}
