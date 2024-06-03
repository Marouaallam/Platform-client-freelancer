import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
    }
   
    
})

//* Collection Creation
export const userModel = mongoose.model('users', userSchema)

