import mongoose from 'mongoose';


const ChatSchema = new mongoose.Schema(
    {
       members:{
        type:Array,
       } ,
    },
    {
       timestamps:true,
    }
)

//* Collection Creation
export const ChatModel = mongoose.model('Chat', ChatSchema);