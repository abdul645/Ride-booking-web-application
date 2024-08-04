import mongoose from "mongoose";

// defining schema 
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    UserName: {
        type: String,
        required: true,
        trim: true,
    },
    ContactNumber: {
        type: Number,
        required: true,
        unique: true,
        validate(value) {
            if (value.length == 10) {
                console.log("correct number");
            }
        }
    },
    Password: {
        type: String,
        required: true,
        // validate(pass){
        //     if(pass.length < 6){
        //         throw new Error("password length shold be 6 or greater than 6")
        //     }
        // }
    },
    ConfirmPassword: {
        type: String,
        required: true,
        // validate(pass){
        //     if(pass.length < 6){
        //         throw new Error("password length shold be 6 or greater than 6")
        //     }
        // }
    },
})


// Compiling schema into a model
//creating collection
const userModel = mongoose.model('DriverUser', UserSchema)

export default userModel







