import { gigsModel } from '../models/gigsModel.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.post("/",async(req,res)=>{
   const gigs = new gigsModel(req.body)
   try{
      const response = await gigs.save();
      res.json(response);
   }catch{
       res.status(500).json({ error: error.message });
   }
})

router.get("/",async(req,res)=>{
    try{
       const response=await gigsModel.find({});
       res.json(response);
    }catch{
       res.json(err)
    }
})
router.delete('/:id',async(req,res) =>{
   try{
       const {id}=req.params
       const projet=await gigsModel.findByIdAndDelete(id);
       if(!projet){
           return res.status(404).json(`no project with id ${id}`)
       }
       res.status(200).send("project deleted !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
router.put('/:id',async(req,res) =>{
   try{
       const {id}=req.params;
       const updates = req.body
       const project=await gigsModel.findByIdAndUpdate(id, updates, { new: true });
       if(!project){
           return res.status(404).json(`no project with id ${id}`)
       }
       res.status(200).send("project updated !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
export  {router as gigsRouter}