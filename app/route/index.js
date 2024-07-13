import express from "express";
import homeRouter from "./home.js";
import authRouter from "./auth.js";
import adminRouter from "./admin.js";
import apiRouter from "./api/index.js";

const Router = express.Router();
Router.use("/", homeRouter)
  .use("/login", authRouter)
  .use("/admin", adminRouter)
  .use("/api/v1", apiRouter);
export default Router;
