import  express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { userModel } from '../models/userModel.js'

const router =express.Router();

router.post("/signup",async(req,res)=>{
   const {firstname,lastname,phone,username,email,password}=req.body;
   
   
   if (!firstname || !lastname || !phone || !password || !email || !username) {             // If user doesn't fill any of the values then it will simply return error
    return res.status(422).json({ error: "Pls fill all the values properly!" });
   }
    
   try {
    const userExist = await userModel.findOne({ email });                 // left one is database email and right one is input email!!

    if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
    }else {
        const hashedPassword =await bcrypt.hash(password,10);
        const user = new userModel({ firstname,lastname, email, phone, password: hashedPassword,username  });
        // Hashing the password will occur here!
        await user.save();
        res.status(201).json({ message: "User registered successfully", _id: user._id })
    }
}
catch (err) {
    console.log("🚀 ~ file: user.js:47 ~ router.post ~ err", err)
}
});
router.get("/signup/:id", async (req, res) => {
    try {
      const {id}=req.params
      const users = await userModel.findById(id);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  router.get("/signup", async (req, res) => {
    try {
  
      const users = await userModel.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.delete('/signup/:id',async(req,res) =>{
    try{
        const {id}=req.params
        const user=await userModel.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json(`no user with id ${id}`)
        }
        res.status(200).send("report deleted !")
    }catch(error){
        res.status(500).json({error :error.message});
    }
})
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const userExist = await userModel.findOne({ email }); 
    if(!userExist){
        return res.status(422).json({ error: "User doesn't Exist!" });
    }
    const isPassword = await bcrypt.compare(password,userExist.password);

    if(!isPassword){
        return res.status(422).json({ error: "Password  not Correct" });
    }
    const token =jwt.sign({ id: userExist._id},"secret");
    res.json({token,userID: userExist._id,user:userExist});
});

router.get("/login/:id", async (req, res) => {
    try {
      const {id}=req.params
      const users = await userModel.findById(id);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
export  {router as userRouter}