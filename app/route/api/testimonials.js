import express from "express";
import { Page, Testimonials } from "../../model/index.js";

const Router = express.Router();

Router.post("/:slug", async (req, res) => {
  const page = await Page.findOne({ slug: req.params.slug });
  const data = req.body;
  let testimonials = new Testimonials({
    slug: req.params.slug,
    image: "/images/about.jpg",
    message: req.body.message,
    name: req.body.name,
    city: req.body.city,
    date: req.body.date,
  });
  if ("thumbnail" in data) {
    let file = data.thumbnail.name.split(".");
    let ext = file.pop();
    let filename = `/uploads/testimonials-${page.slug}-${testimonials._id}.${ext}`;
    data.thumbnail.mv(`public${filename}`);
    testimonials.image = filename;
  }
  await testimonials.save();
  return res.json({
    status: "success",
    message: "Testimonials saved successfully",
    reload: 3000,
  });
}).delete("/:slug", async (req, res) => {
  await Testimonials.findByIdAndDelete(req.body.id);
  return res.json({
    status: "success",
    message: "Testimonials deleted successfully",
    reload: 3000,
  });
});

export default Router;
