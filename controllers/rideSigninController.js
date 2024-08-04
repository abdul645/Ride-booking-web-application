import rideUserModel from "../models/ForRideDetails.js"

const rideSigninController = async (req, res) => {
    try {
        // Attempt to find a user based on UserName
        let check = await rideUserModel.findOne({ UserName: req.body.UserName })

        // If user is found and password matches
        if (check && check.Password == req.body.password) {

             // Store username in session
            req.session.username = req.body.UserName;  // Store username in session
            
             // Store pickup location in session if needed
            // req.session.pickup =req.body.routeData.pickup;

             // Redirect to homeRide
            res.redirect('/HomeRide')
            
        }
        else{
            // Handle case where user or password is incorrect
            res.send("Wrong password or user not found")
        }
        // console.log(check);
    } catch (error) {
        console.log(error);
    }
}
export { rideSigninController }




