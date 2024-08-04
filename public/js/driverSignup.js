
const iconclosesigndrive = document.querySelector('#icon-close-driver')
iconclosesigndrive.addEventListener('click', () => {
    location.replace("/signin-signup-Drive")
})


// eye icon coding show password for signup to driver
//1
const eyeicon2 = document.getElementById('eyeicon2')
const password2 = document.getElementById('password2')

eyeicon2.onclick = function () {
    if (password2.type == "password") {
        password2.type = "text"
        eyeicon2.classList = "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if (password2.type == "text") {
        password2.type = "password";
        eyeicon2.classList = "fa-solid fa-eye-slash";
    }
}

//2
const eyeicon3 = document.getElementById('eyeicon3')
const password3 = document.getElementById('password3')

eyeicon3.onclick = function () {
    if (password3.type == "password") {
        password3.type = "text"
        eyeicon3.classList = "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if (password3.type == "text") {
        password3.type = "password";
        eyeicon3.classList = "fa-solid fa-eye-slash";
    }
}



// form validation 

const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const username = document.getElementById('username')
const cnumber = document.getElementById('cnumber')
const password = document.getElementById('password2')
const cpassword = document.getElementById('password3')

// add event 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate(); //function call
    // swal("Good job!", "You clicked the button!", "success");
    // swal("Hello world!"); 
    // alert("success")
    // swal("welcome!", "Regitration Successfull", "success")
})

const sendData = async (firstnameval, lastnameval,usernameval, cnumberval, passwordval, cpasswordval,sRate, count) => {
    if (sRate === count) {
        try {
            // console.log("hiiiiii");
            const response = await fetch('/driverSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    FName: firstnameval,
                    LName: lastnameval,
                    UserName: usernameval,
                    CNumber: cnumberval,
                    Password: passwordval,
                    CPassword: cpasswordval,
                }),
            })
            if(response.ok){           
                swal("Welcome!  " + usernameval , 
                "Successfully created",
                 "success").then(() => {
                    location.href = `/driverDetails`;
                });
                
            }
            else{
                swal("Error", "Server error. Please try again later.", "error");
            }
            
        } catch (error) {
             console.error('error submitting data', error)
             swal("Error", "An unexpected error occurred. Please try again later.", "error");
            }
    }
}



// for final data validation
const SuccessMsg = (firstnameval, lastnameval,  usernameval, cnumberval, passwordval, cpasswordval) => {
    let inputBoxDriver = document.getElementsByClassName('input-box-driver');
    var count = inputBoxDriver.length - 1;
    for (var i = 0; i < inputBoxDriver.length; i++) {
        if (inputBoxDriver[i].className === "input-box-driver success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendData(firstnameval, lastnameval,usernameval,cnumberval, passwordval, cpasswordval, sRate, count);
        }
        else {
            return false
        }
    }
}


// // more email validation
// const isEmail = (emailval) => {
//     var atSymbol = emailval.indexOf('@');
//     if (atSymbol < 1) return false
//     var dot = emailval.lastIndexOf('.')
//     //it means two char should be write after @
//     if (dot <= atSymbol + 2) return false
//     if (dot === emailval.length - 1) return false
//     return true;
// }


// define validate function 

const validate = () => {
    // trim will dlt white space before and after 
    const firstnameval = fname.value.trim();
    const lastnameval = lname.value.trim();
    const usernameval = username.value.trim();
    const cnumberval = cnumber.value.trim();
    const passwordval = password2.value.trim();
    const cpasswordval = password3.value.trim();

    // validate first name 
    if (firstnameval === '') {
        setErrorMsg(fname, "Field can't be null");
    } 
    else {
        setSuccessMsg(fname)
    }

    // validate last name 
    if (lastnameval === '') {
        setErrorMsg(lname, "Field can't be null")
    } 
    else {
        setSuccessMsg(lname)
    }

    // validate username 
    if (usernameval === '') {
        setErrorMsg(username, 'username Cannot be blank')
    } else if (usernameval.length <= 2) {
        setErrorMsg(username, 'User Name should be 3 char long')
    }
    else {
        setSuccessMsg(username)
    }

    // // validate email 
    // if (emailval === '') {
    //     setErrorMsg(email, 'Email Cannot be blank')
    // } else if (!isEmail(emailval)) {
    //     setErrorMsg(email, 'Email is not valid')
    // }
    // else {
    //     setSuccessMsg(email)
    // }


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

    // validate confirm password 
    if (cpasswordval === '') {
        setErrorMsg(cpassword, "Password can't be empty")
    } else if (cpasswordval != passwordval) {
        setErrorMsg(cpassword, 'password are not matching')
    }
    else {
        setSuccessMsg(cpassword)
    }

    SuccessMsg(firstnameval, lastnameval,  usernameval, cnumberval, passwordval, cpasswordval); //calling



    // defining function 
    function setErrorMsg(input, errormsg) {
        const input_box_driver = input.parentElement;
        const small = input_box_driver.querySelector('small')
        input_box_driver.className = "input-box-driver error"
        small.innerText = errormsg
    }

    function setSuccessMsg(input) {
        const input_box_driver = input.parentElement;
        input_box_driver.className = "input-box-driver success"

    }
}
