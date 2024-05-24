import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    userName: {
        type:String
    },
    description: {
        type: String
    }
})

//* Collection Creation
export const reportModel = mongoose.model('report', reportSchema);

