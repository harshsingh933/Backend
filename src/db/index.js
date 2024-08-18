
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async() => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
       console.log(`\n MongoDB connection !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connections error",error);
        process.exit(1)
    }

};

export default connectDB
