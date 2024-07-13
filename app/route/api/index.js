import express from "express";
import pageRouter from "./page.js";
const Router = express.Router();
Router.use("/page", pageRouter);
export default Router;
