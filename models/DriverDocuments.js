import mongoose from "mongoose";

// defining schema 
const DocumentSchema = new mongoose.Schema({
    
    //image: // store it directly
    //"imageURL: String" stores the path to the image.
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Please enter correct email");
        //     }
        // }
    },
    LicenseImage:{
        type: String,
        required: true,
        
    },
    ProfileImage: {
        type : String,
        required: true,

    },
    PanInput:{
        type: String,
        unique: true,
    },
    PanCardImage: {
        type : String,
        required: true,

    },
    RCImage: {
        type : String,
        required: true,

    },
    InsuranceImage: {
        type : String,
        required: true,

    },
    VehicleName:{
        type: String,
        required: true
    },
    VehicleImage:{
        type: String,
        required: true,

    }
    
})

// console.log("hello");
// compiling Schema
//creating collection
const DriverDocumentModel = mongoose.model('DriverDocument', DocumentSchema)

export default DriverDocumentModel