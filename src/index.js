//require('dotenv').config()
import dotenv from "dotenv";
//import mongoose from "mongoose";
//import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
  path: './env'
})





connectDB()

.then(()=>{
  app.listen(process.env.PORT || 8000,() => {
    console.log(`server is running at port: ${process.env.PORT}`);
  })
})
.catch((err) =>{
  console.log("MongoDB connection failed!!! ",err);
})









/*
import express from "express"
const App =express()

(async () =>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      App.on("error",(error)=>{
        console.log("error: ",error);
        throw error
      })

      App.listen(process.env.PORT,() =>{
        console.log(`App is server is running at ${process.env.PORT}`)
      })

    } catch (error) {
        console.error("Error",error)
        throw error
    }
})()
    */