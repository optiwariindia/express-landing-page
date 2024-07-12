import mongoose from "mongoose";

let schema=new mongoose.Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    role:[String],
    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    }
},{
    timestamps:true,
    collection:"users"
});
const User=mongoose.models.user||mongoose.model("users",schema);
export default User;