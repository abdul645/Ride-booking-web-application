
// cross btn 
const iconclosedriversignin = document.querySelector('#icon-close')
iconclosedriversignin.addEventListener('click', () => {
    location.replace("/signin-signup-Drive")
})


// eye icon coding show password 

const eyeicon = document.getElementById('eyeicon')
const password = document.getElementById('password')

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text"
        eyeicon.classList = "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if (password.type == "text") {
        password.type = "password";
        eyeicon.classList = "fa-solid fa-eye-slash";
    }
}

