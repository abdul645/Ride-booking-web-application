import userModel from "../models/ForDriverDetails.js"

const driverSignupController = async (req, res) => {
    try {
        console.log('Received data:', req.body);
        // Destructure the data from the request body
        if (!req.body || !req.body.FName) {
            return res.status(400).json({ error: 'FName is required' });
        }
        const {FName, LName, UserName, CNumber, Password, CPassword } = req.body
        // const imageBuffer = req.file.buffer

        // Creating a new instance of  model
        const doc = new userModel({
            FirstName:FName,
            LastName: LName,
            UserName: UserName,
            ContactNumber: CNumber,
            Password: Password,
            ConfirmPassword: CPassword,
           
        })
        // Save the data to the database
        const result = await doc.save()
        console.log("succesfully created");
        console.log(result);
        res.redirect('/driverDetails');
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { driverSignupController }



