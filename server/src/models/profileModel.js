import mongoose from 'mongoose';


const profileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    name:{
       type:String,
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
        text: String,
        postedby:String
    },
    rating: {
        type: Number,

    },

})

//* Collection Creation
export const profileModel = mongoose.model('profile', profileSchema);

