import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app=express();
app.use(express.json())
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Running")
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected To DB")
}).catch((error)=>{
    console.log("Error while Connecting Db",error)
})

app.listen("5001",()=>{
    console.log("Server Running on port 5001")
})