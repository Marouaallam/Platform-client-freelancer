import  express from 'express';
import mongoose from 'mongoose';

import { reportModel } from '../models/reportModel.js'

const router =express.Router();

router.post("/",async(req,res)=>{
    const report = new reportModel(req.body)
    try{
       const response = await report.save();
       res.json(response);
    }catch  (error){
        res.status(500).json({ error: error.message });
    }
})
router.get("/",async(req,res)=>{
    try{
       const response=await reportModel.find({});
       res.json(response);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
})
router.delete('/:id',async(req,res) =>{
    try{
        const {id}=req.params
        const report=await reportModel.findByIdAndDelete(id);
        if(!report){
            return res.status(404).json(`no project with id ${id}`)
        }
        res.status(200).send("report deleted !")
    }catch(error){
        res.status(500).json({error :error.message});
    }
})
export  {router as reportRouter}