import { profileModel } from '../models/profileModel.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.post("/",async(req,res)=>{
   const profiles = new profileModel(req.body)
   try{
      const response = await profiles.save();
      res.json(response);
   }catch(error){
       res.status(500).json({ error: error.message });
   }
})

router.get("/",async(req,res)=>{
    try{
       const response=await profileModel.find({});
       res.json(response);
    }catch(err){
       res.json(err)
    }
})
router.get('/:id',async(req,res) =>{
   try{
       const {id}=req.params;
       const updates = req.body
       const profile=await profileModel.findById(id, updates, { new: true });
       if(!profile){
           return res.status(404).json(`no profile with id ${id}`)
       }
       res.status(200).send(profile)
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
router.delete('/:id',async(req,res) =>{
   try{
       const {id}=req.params
       const profile=await profileModel.findByIdAndDelete(id);
       if(!profile){
           return res.status(404).json(`no profile with id ${id}`)
       }
       res.status(200).send("profile deleted !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
router.put('/:id',async(req,res) =>{
   try{
       const {id}=req.params;
       const updates = req.body
       const profile=await profileModel.findByIdAndUpdate(id, updates, { new: true });
       if(!profile){
           return res.status(404).json(`no profile with id ${id}`)
       }
       res.status(200).send("profile updated !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})

export  {router as profileRouter}