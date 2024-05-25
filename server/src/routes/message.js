import { addMessage, getMessages } from '../controllers/MessageController.js';
import { MessageModel } from '../models/messageModel.js'
import  express from 'express';


const router =express.Router();

router.post('/',addMessage)
router.get('/:chatId',getMessages)

export  {router as messageRouter}