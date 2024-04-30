import mongoose from 'mongoose';


const profileSchema = new mongoose.Schema({
    profileID: {
        type: String,
        //required: true
    },
    name: {
        type: String,
        required: true
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
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    price:{
        type:String,
    },
    jobs:{
        type:String,
    },
    comments: {
        type: String,
    },
    rating: {
        type: Number,
    },

})

//* Collection Creation
export const profileModel = mongoose.model('profile', profileSchema);

