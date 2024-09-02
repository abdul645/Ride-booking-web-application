import DriverDocumentModel from "../models/DriverDocuments.js";

const AllDriverDocument = async (req, res) => {
    try {

        console.log('Received data:', req.body);     
        
        const {email, PanInput, VehicleName} = req.body;

        // Creating a new instance of  model
        const doc = new DriverDocumentModel({
            email: email,
            LicenseImage: req.files['LicenseImageName'] ? req.files['LicenseImageName'][0].filename : null,
            ProfileImage: req.files['ProfileImageName'] ? req.files['ProfileImageName'][0].filename : null,
            PanCardImage: req.files['PanCardImageName'] ? req.files['PanCardImageName'][0].filename : null,
            PanInput: PanInput,
            RCImage: req.files['RCImageName'] ? req.files['RCImageName'][0].filename : null,
            InsuranceImage: req.files['InsuranceImageName'] ? req.files['InsuranceImageName'][0].filename : null,
            VehicleName: VehicleName,
            VehicleImage: req.files['vehicleImageName'] ? req.files['vehicleImageName'][0].filename : null,
        })
        // Save the data to the database
        const result = await doc.save()
        console.log("Successfully created:", result)
        res.redirect('/driverSignin');
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



export { AllDriverDocument }