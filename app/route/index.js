import express from "express";
import { default as Home } from "./home.js";
import { default as Auth } from "./auth.js";
import { default as Admin } from "./admin.js";

const Router = express.Router();
Router
    .use("/", Home)
    .use("/login", Auth)
    .use("/admin",Admin)
export default Router;