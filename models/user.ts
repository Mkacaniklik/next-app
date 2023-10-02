import mongoose, { Schema ,models} from "mongoose";
import { ObjectId } from "mongodb";


 const userSchema = new Schema({
     name:{
         type:String,
         required:true,
     },
     email:{
         type:String,
         required:true,
     },
     password:{
         type:String,
         required:true,
     },
 },
 {timestamps:true}
 );

 const User =models.User || mongoose.model("User",userSchema);
 export default User;