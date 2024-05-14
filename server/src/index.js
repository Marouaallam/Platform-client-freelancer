import  express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from "./routes/user.js";
import { profileRouter } from './routes/profile.js';
import { projectRouter } from './routes/project.js';


const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/profile",profileRouter);
app.use("/project",projectRouter);

mongoose.connect(
    "mongodb+srv://marouaallal12:x1ByVDBbLuBe5vy2@pfe.ocszwnj.mongodb.net/PFE?retryWrites=true&w=majority&appName=PFE"
);
app.listen(3001,()=>console.log("server run"));