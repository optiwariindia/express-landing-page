import express from "express";

const Router=express.Router();
Router.route("/").get((req,res)=>{
    return res.render("login.twig",{})
});
export default Router