import express from "express";
import Navbar from "../utils/navbar.js";
import { Banner, FAQ, Page, Testimonials, USP } from "../model/index.js";
let info = {};
let sidenav = new Navbar([
  {
    link: "/admin",
    name: "Dashboard",
  },
  {
    link: "/admin/pages",
    name: "Pages",
  },
]);
const Router = express.Router();
Router.get("/:id", async (req, res) => {
  const page = await Page.findById(req.params.id);
  return res.render("dashboard.twig", {
    sidenav: sidenav.sidenav,
    page: "pages",
  });
})
  .get("/:id/delete", async (req, res) => {
    await Page.findByIdAndDelete(req.params.id);
    return res.redirect("/admin/pages");
  })
  .get("/:id/edit", async (req, res) => {
    const page = await Page.findById(req.params.id);
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/edit",
      info: page,
    });
  })
  .get("/:id/banner", async (req, res) => {
    const page = await Page.findById(req.params.id);
    const banner = await Banner.findOne({ slug: page.slug });
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/banner",
      info: page,
      banner,
    });
  })
  .get("/:id/about", async (req, res) => {
    const page = await Page.findById(req.params.id);
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/about",
      info: { ...page, ...info },
    });
  })
  .get("/:id/usp", async (req, res) => {
    const page = await Page.findById(req.params.id);
    const usps = await USP.find({ slug: page.slug });
    // return res.json({ page, usps });
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/usp",
      info: page,
      usps,
    });
  })
  .get("/:id/testimonials", async (req, res) => {
    const page = await Page.findById(req.params.id);
    const testimonials = await Testimonials.find({ slug: page.slug });
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/testimonials",
      info: page,
      testimonials,
    });
  })
  .get("/:id/faq", async (req, res) => {
    const page = await Page.findById(req.params.id);
    const faqs = await FAQ.find({ slug: page.slug });
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/faq",
      info: page,
      faqs,
    });
  })
  .get("/:id/footer", async (req, res) => {
    const page = await Page.findById(req.params.id);
    return res.render("dashboard.twig", {
      sidenav: sidenav.sidenav,
      page: "pages/banner",
      info: { ...page, ...info },
    });
  });
export default Router;
