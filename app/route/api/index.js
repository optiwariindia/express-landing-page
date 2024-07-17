import express from "express";
import pageRouter from "./page.js";
import bannerRouter from "./banner.js";
const Router = express.Router();
Router.use("/page", pageRouter);
Router.use("/banner", bannerRouter);
export default Router;
