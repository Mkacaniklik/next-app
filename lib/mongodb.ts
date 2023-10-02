
 import mongoose from "mongoose";
 import { ObjectId } from "mongodb";

 export const connectMongoDB = async() => {
     try {
         await mongoose.connect(process.env.DB_CONN_STRING);
         console.log("Connected to MongoDB");
     } catch (error) {
         console.log("Error conecting to MongoDb",error);
     }
 }