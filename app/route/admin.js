import express from "express";
import Navbar from "../utils/navbar.js";
import Page from "./page.js";

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

Router.get("/", (req, res) => {
  sidenav.activeLink = "/admin";
  return res.render("dashboard.twig", {
    sidenav: sidenav.sidenav,
    page: "dashboard",
  });
});
Router.get("/pages", (req, res) => {
  sidenav.activeLink = "/admin/pages";
  return res.render("dashboard.twig", {
    sidenav: sidenav.sidenav,
    page: "pages",
  });
});
Router.use("/page",Page);
export default Router;
