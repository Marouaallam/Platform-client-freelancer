import mongoose from 'mongoose';


const gigsSchema = new mongoose.Schema({
    
    namegigs: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
    },

})

//* Collection Creation
export const gigsModel = mongoose.model('gigs', gigsSchema);

