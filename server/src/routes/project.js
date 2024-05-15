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
router.delete('/:id',async(req,res) =>{
    try{
        const {id}=req.params
        const projet=await projectModel.findByIdAndDelete(id);
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
        const projet=await projectModel.findByIdAndUpdate(id, updates, { new: true });
        if(!projet){
            return res.status(404).json(`no project with id ${id}`)
        }
        res.status(200).send("project updated !")
    }catch(error){
        res.status(500).json({msg :error.message});
    }
})
router.get('/:id',async(req,res) =>{
    try{
        const {id}=req.params;
        const updates = req.body
        const projet=await projectModel.findById(id, updates, { new: true });
        if(!projet){
            return res.status(404).json(`no project with id ${id}`)
        }
        res.status(200).send(projet)
    }catch(error){
        res.status(500).json({msg :error.message});
    }
})


export  {router as projectRouter}