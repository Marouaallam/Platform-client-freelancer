import mongoose from 'mongoose';


const MessageSchema = new mongoose.Schema(
    {
        chatId:{
         type:String,
        } ,
       
        senderId:{
            type:String
        },
        text:{
            type:String
        },
    },
    {
        timestamps:true,
    }
)

//* Collection Creation
export const MessageModel = mongoose.model('Message', MessageSchema);