import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({
    projectID: {
        type: String,
        required: true
    },
    nomProjet: {
        type: String,
        required: true
    },
    dateDebut: {
        type: String,
        // required: true
    },
    DDL: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        // required: true
    },
    skillsRequired: {
        type: String,
        // required: true
    },
    image:{
        type:String,
    },

})

//* Collection Creation
export const projectModel = mongoose.model('project', projectSchema)

