import mongoose from "mongoose";
import express from "express"
import { DB_NAME } from "../constants";
const app=express();
 (async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        connectionInstance.connection.on("error",(error)=>{
        console.log("error",error);
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("MongoDB connection error",error);
    }
 })()