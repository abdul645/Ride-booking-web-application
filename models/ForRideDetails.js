import mongoose from "mongoose";

// defining schema 
const RideUserSchema = new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique: true
    },
    ContactNumber:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type: String,
        required: true,
        // validate(pass){
        //     if(pass.length < 5){
        //         throw new Error("password length shold be 6 or greater than 6")
        //     }
        // }
    },
    ConfirmPassword: {
        type: String,
        required: true, 
        //  validate(pass){
        //     if(pass.length < 5){
        //         throw new Error("password length shold be 6 or greater than 6")
        //     }
        // }
    }
})


// compiling schema 
const rideUserModel = mongoose.model('RideUser', RideUserSchema)

export default rideUserModel


