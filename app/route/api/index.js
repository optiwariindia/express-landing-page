import express from "express";
import pageRouter from "./page.js";
import bannerRouter from "./banner.js";
import uspRouter from "./usp.js";
const Router = express.Router();
Router.use("/page", pageRouter);
Router.use("/banner", bannerRouter);
Router.use("/usp", uspRouter);
export default Router;
