import { commentModel } from '../models/commentModel.js'
import  express from 'express';
import mongoose from 'mongoose';

const router =express.Router();

router.post("/",async(req,res)=>{
   const comment = new commentModel(req.body)
   try{
      const response = await comment.save();
      res.json(response);
   }catch{
       res.status(500).json({ error: error.message });
   }
})

router.get("/",async(req,res)=>{
    try{
       const response=await commentModel.find({});
       res.json(response);
    }catch{
       res.json(err)
    }
})
router.delete('/:id',async(req,res) =>{
   try{
       const {id}=req.params
       const comment=await commentModel.findByIdAndDelete(id);
       if(!comment){
           return res.status(404).json(`no comment with id ${id}`)
       }
       res.status(200).send("comment  deleted !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
router.put('/:id',async(req,res) =>{
   try{
       const {id}=req.params;
       const updates = req.body
       const comment=await commentModel.findByIdAndUpdate(id, updates, { new: true });
       if(!comment){
           return res.status(404).json(`no comment with id ${id}`)
       }
       res.status(200).send("comment updated !")
   }catch(error){
       res.status(500).json({msg :error.message});
   }
})
export  {router as commentRouter}