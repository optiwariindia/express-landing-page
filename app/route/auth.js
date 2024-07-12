import express from "express";
import {User} from "../model/index.js";
import {Password,Token} from "../utils/index.js";

const Router=express.Router();
Router.route("/")
.get((req,res)=>{
    return res.render("login.twig",{})
})
.post(async (req,res)=>{
    let user=await User.findOne({user:req.body.user});
    if(!user)return res.json({
        status:"error",
        message:"Invalid username or password"
    })
    const authStatus=await Password.compare(req.body.password,user.password);
    if(!authStatus)return res.json({
        status:"error",
        message:"Invalid username or password"
    });
    const token=await Token.hash({
        user:user.user,
        id:user._id,
        role:user.role,
        name:user.name
    });
    return res.json({
        status:"success",
        token,
        headers:req.headers,
        message:"Authentication Successful"
    })
    return res.render("login.twig",{})
})
export default Router