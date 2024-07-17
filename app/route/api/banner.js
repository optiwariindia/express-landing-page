import express from "express";
import { Page, Banner } from "../../model/index.js";
const Router = express.Router();

Router.route("/")
  .get(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .post(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .put(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .patch(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .delete(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  });
Router.route("/:slug")
  .get(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .post(async (req, res) => {
    const data = req.body;
    const page = await Page.findOne({ slug: req.params.slug });
    let banner = await Banner.findOne({ slug: req.params.slug });
    if (!banner)
      banner = new Banner({
        image: "/images/banner.jpg",
        slug: req.params.slug,
        title: req.body.title,
        cta: {
          text: req.body.ctatext,
          link: req.body.ctalink,
        },
        frmtitle: req.body.frmtitle,
      });

    if ("banner" in data) {
      let file = data.banner.name.split(".");
      let ext = file.pop();
      let filename = `/uploads/banner-${req.params.slug}.${ext}`;
      data.banner.mv(`public/${filename}`);
      data.banner.newName = filename;
      banner.image = filename;
    }
    await banner.save();
    return res.json({
      status: "error",
      message: "Not developed yet",
      data,
      page,
      banner,
    });
  })
  .put(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .patch(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  })
  .delete(async (req, res) => {
    return res.json({ status: "error", message: "Not developed yet" });
  });
export default Router;
