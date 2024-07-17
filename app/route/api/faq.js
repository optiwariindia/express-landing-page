import express from "express";
import { FAQ, Page } from "../../model/index.js";

const Router = express.Router();
Router.post("/:slug", async (req, res) => {
  const page = await Page.findOne({ slug: req.params.slug });
  let faq = new FAQ({
    slug: req.params.slug,
    question: req.body.question,
    answer: req.body.answer,
  });
  await faq.save();
  return res.json({
    status: "success",
    message: "Added successfully",
    reload: 3000,
  });
}).delete("/:slug", async (req, res) => {
  await FAQ.findByIdAndDelete(req.body.id);
  return res.json({
    status: "success",
    message: "Successfully Deleted",
    reload: 3000,
  });
});
export default Router;
