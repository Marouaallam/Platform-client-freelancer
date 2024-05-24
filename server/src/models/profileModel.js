import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    userID:{
      type:String
    },
    name:{
       type:String,
    },
    type:{
        type:String,
     },
    description: {
        type: String
       
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
    rating:{
        type:Number
    }
})

//* Collection Creation
export const profileModel = mongoose.model('profile', profileSchema);

