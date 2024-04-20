import  express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
    "mongodb+srv://marouaallal12:x1ByVDBbLuBe5vy2@pfe.ocszwnj.mongodb.net/PFE?retryWrites=true&w=majority&appName=PFE"
);
app.listen(3001,()=>console.log("server run"));