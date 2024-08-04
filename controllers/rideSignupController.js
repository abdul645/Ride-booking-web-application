import rideUserModel from "../models/ForRideDetails.js"

const rideSignupController = async (req, res) => {

    try {
        console.log('Received data:', req.body);
        
        // Destructure the data from the request body
        const { username, email, contactNumber, password, cpassword } = req.body;
        
        // Creating a new instance of  model
        const doc = new rideUserModel({
            UserName: username,
            email: email,
            ContactNumber: contactNumber,
            Password: password,
            ConfirmPassword: cpassword

        })
       
        // Save the data to the database
        const result = await doc.save();
        //  res.redirect('/rideSignin');
        // res.render('home', {'title': "Signup for driver"})

        // console.log("succesfully created", result);
        res.status(200).json({ message: 'Successfully created', data: result });
        // console.log(result);
       
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { rideSignupController }