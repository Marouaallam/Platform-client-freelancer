import mongoose from 'mongoose';


const notificationSchema = new mongoose.Schema(
    {
        senderId:{
         type:String,
        } ,
       
        receiverId:{
            type:String
        },
        projectId:{
         type:String
        },
        text:{
            type:String
        },
    },
    
)

//* Collection Creation
export const notificationModel = mongoose.model('notification', notificationSchema);