import { creatChat, findChat, userChats } from '../controllers/ChatController.js';
import { ChatModel } from '../models/chatModel.js'
import  express from 'express';


const router =express.Router();
router.post("/",creatChat)
router.get("/:userId",userChats)
router.get("/find/:firstId/:secondId",findChat)

export  {router as chatRouter}