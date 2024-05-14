import { profileModel } from '../models/profileModel.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.get("/",async(req,res)=>{
    try{
       const response=await profileModel.find({});
       res.json(response);
    }catch{
       res.json(err)
    }
})

export  {router as profileRouter}