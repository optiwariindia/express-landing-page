import express from "express";
class Navbar {
  #navitem = [];
  #activeLink = "/";
  constructor(navitems) {
    this.#navitem = navitems;
  }
  set activeLink(link) {
    if (typeof link !== "string") {
      this.#activeLink = "";
      return;
    }
    this.#activeLink = link;
  }
  get sidenav() {
    return JSON.parse(JSON.stringify(this.#navitem)).map((itm) => {
      if (itm.link === this.#activeLink) itm.active = true;
      return itm;
    });
  }
}
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
export default Router;
