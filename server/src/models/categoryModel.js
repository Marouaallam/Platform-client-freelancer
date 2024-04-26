import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
    
    nomCategory: {
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
export const categoryModel = mongoose.model('category', categorySchema);

