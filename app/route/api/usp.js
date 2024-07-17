import express from "express";
import { Page, USP } from "../../model/index.js";

const Router = express.Router();

Router.delete("/:slug", async (req, res) => {
  await USP.findByIdAndDelete(req.body.id);
  return res.json({
    status: "success",
    message: "Successfully Deleted",
  });
}).post("/:slug", async (req, res) => {
  const data = req.body;
  const page = await Page.findOne({ slug: req.params.slug });
  const usps = await USP.find({ slug: req.params.slug });
  let usp = await USP.findOne({ slug: req.params.slug, name: data.name });
  if (!usp)
    usp = new USP({
      slug: req.params.slug,
      name: data.name,
      description: data.description,
      image: "/images/about.jpg",
    });
  if ("thumbnail" in data) {
    let file = data.thumbnail.name.split(".");
    let ext = file.pop();
    let filename = `/uploads/usp-${page.slug}-${usp._id}.${ext}`;
    data.thumbnail.mv(`public${filename}`);
    data.thumbnail.newName = filename;
    usp.image = filename;
  }
  await usp.save();
  return res.json({
    status: "success",
    message: "Added Successfully",
  });
});
export default Router;
