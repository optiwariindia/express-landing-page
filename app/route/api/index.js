import express from "express";
import pageRouter from "./page.js";
import bannerRouter from "./banner.js";
import uspRouter from "./usp.js";
import testimonialsRouter from "./testimonials.js";

const Router = express.Router();
Router.use("/page", pageRouter)
  .use("/banner", bannerRouter)
  .use("/usp", uspRouter)
  .use("/testimonials", testimonialsRouter);
export default Router;
