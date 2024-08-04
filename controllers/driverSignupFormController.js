const driverSignupFormController =(req,res) =>{
    res.render('driverSignup', {'title': "Signup for driver"})
}

export {driverSignupFormController}