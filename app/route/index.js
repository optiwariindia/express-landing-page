import express from "express";
import {default as Home} from "./home.js";
import {default as Auth} from "./auth.js";
const Router=express.Router();
Router.use("/",Home)
Router.use("/login",Auth)
export default Router;