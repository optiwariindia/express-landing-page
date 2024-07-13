import express from "express";
import { Page } from "../../model/index.js";
const Router = express.Router();
Router.route("/")
  .get(async (req, res) => {
    try {
      let pages = await Page.find({});
      return res.json({
        status: "success",
        data: pages,
      });
    } catch (err) {
      console.log(err);
      return res.json({
        status: "error",
        message: "Invalid request",
      });
    }
  })
  .post(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .put(async (req, res) => {
    try {
      let page = new Page({
        slug: req.body.slug,
        title: req.body.title,
        keywords: req.body.keywords ?? "",
        description: req.body.description ?? "",
        og: req.body.og ?? [],
        snippets: req.body.snippets,
        customcss: req.body.customcss,
      });
      await page.save();
      return res.json({
        status: "sucess",
        message: "Page created successfully",
      });
    } catch (e) {
      console.log(e);
      return res.json({
        status: "error",
        message: e.message,
      });
    }
  })
  .patch(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .delete(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  });
Router.route("/:id")
  .get(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .post(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .put(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .patch(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  })
  .delete(async (req, res) => {
    return res
      .status(501)
      .json({ status: "success", message: "Not implemented yet" });
  });

export default Router;
