import { projectModel } from '../models/projectModel.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.get("/",async(req,res)=>{
    try{
       const response=await projectModel.find({});
       res.json(response);
    }catch{
       res.json(err)
    }
})
router.post("/",async(req,res)=>{
    const projects = new projectModel(req.body)
    try{
       const response = await projects.save();
       res.json(response);
    }catch{
        res.status(500).json({ error: error.message });
    }
})

export  {router as projectRouter}