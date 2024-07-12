import {User} from "../model/index.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
export default async()=>{
    await mongoose.connect(process.env.mongodb);
    let users=await User.find();
    // console.log(users);
    if(users.length>0)return console.log("Users already created. Delete all users to reset and create new user.");
    // await User.deleteMany({});
    const saltRounds = 10;
    let password= await bcrypt.hash("P@ssw0rd", saltRounds);
    // create a new user
    let user=new User({
        user:"admin",
        name:"Administrator",
        email:"admin@example.com",
        password,
        phone:"+91 9876543210",
        address:"lorm ipsum, lorem ipsum, Delhi, India 110011",
        role:["admin"],
        status:"active"
    });
    console.log(user);
    await user.save();
    console.log("User created");
    mongoose.disconnect();
}