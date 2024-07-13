import express from "express";

const Router=express.Router();
Router.route("/").get((req,res)=>{
    // return res.json(req.headers);
    return res.render("dashboard.twig",{})
});
export default Router