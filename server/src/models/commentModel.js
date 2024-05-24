import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    username:{
      type:String
    },
    profileID :{
      type:String,
    },
    description:{
       type:String,
    },
    time:{
        type:String,
     },
    rating:{
        type:Number
    },
    img: {
        type: String,
    }
})

//* Collection Creation
export const commentModel = mongoose.model('comment', commentSchema);

