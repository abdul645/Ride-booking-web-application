import userModel from "../models/ForDriverDetails.js"

const driverSigninController = async (req, res) => {
    try {
        // Attempt to find a user based on UserName
        let check = await userModel.findOne({ UserName: req.body.UserName })
        // console.log("dddddd", check)

        //  // If user is found and password matches
        if (check && check.Password == req.body.password) {

            // Store username in session
            req.session.username = req.body.UserName; // Store username in session
            
               // Redirect to HomeDrive
            res.redirect('/homeDriver')
        }
        else {
            // Handle case where user or password is incorrect
            res.send("Wrong password or user not found");
        }
    }
    catch (error) {
        console.error('Error in driverSigninController:', error);
        return res.status(500).send({ message: 'An error occurred', error });
    }
}
export { driverSigninController }






