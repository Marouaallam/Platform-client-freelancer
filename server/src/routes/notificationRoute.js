import { notificationModel } from '../models/notification.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.post("/",async(req,res)=>{
   const notification = new notificationModel(req.body)
   try{
      const response = await notification.save();
      res.json(response);
   }catch(error){
       res.status(500).json({ error: error.message });
   }
})

router.get("/",async(req,res)=>{
    try{
       const response=await notificationModel.find({});
       res.json(response);
    }catch(err){
       res.json(err)
    }
})
router.delete('/:id',async(req,res) =>{
   try{
       const {id}=req.params
       const notification=await notificationModel.findByIdAndDelete(id);
       if(!notification){
           return res.status(404).json(`no notification with id ${id}`)
       }
       res.status(200).send("notification deleted !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
router.put('/:id',async(req,res) =>{
   try{
       const {id}=req.params;
       const updates = req.body
       const project=await notificationModel.findByIdAndUpdate(id, updates, { new: true });
       if(!project){
           return res.status(404).json(`no project with id ${id}`)
       }
       res.status(200).send("notification updated !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
export  {router as notificationRouter}