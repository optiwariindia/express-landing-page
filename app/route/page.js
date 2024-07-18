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
  .get("/:id/preview", async (req, res) => {
    const page = await Page.findById(req.params.id);
    // return res.json({ page });
    return res.render("index.twig", {
      head: page,
      project: {
        logo: "/images/logo.png",
        name: "Jewellery Plannet",
      },
      navbar: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About us",
          url: "#about",
        },
        {
          name: "Our USP",
          url: "#usp",
        },
        {
          name: "Testimonials",
          url: "#testimonials",
        },
        {
          name: "FAQ",
          url: "#faq",
        },
      ],
      banner: await Banner.findOne({ slug: page.slug }),
      about: {
        title: "About us",
        image: "/images/about.jpg",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur, voluptatum saepe minima\neveniet dignissimos iste repudiandae obcaecati aspernatur libero! Deserunt perferendis mollitia\nrem sequi facilis ad, a adipisci necessitatibus hic quibusdam alias ex nulla iusto laboriosam\ndolore! Temporibus sint distinctio ipsum excepturi dolore deleniti nesciunt at, odit libero\neligendi perferendis consectetur error amet, assumenda numquam inventore in labore soluta eius\nid esse? Numquam vero esse laborum! Omnis facere molestiae placeat atque ipsam laboriosam a\nsint, incidunt quod in maxime nesciunt quam modi culpa nemo cumque fugit aut labore laudantium\nfugiat. Perferendis dolores ipsa quaerat magni iure aliquam in est.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda qui unde veniam\nsit ducimus repellendus doloribus architecto harum, quas voluptas nostrum rem tempora nulla\nofficiis? Alias, consequatur. Dolore maxime, aperiam unde laudantium voluptatum voluptates quasi\nrepudiandae. Dolor architecto fugiat, iure adipisci numquam libero, illo eligendi, omnis dolorum\nvoluptatibus voluptates aliquam recusandae. Recusandae nulla rem nisi culpa eius veniam, maxime\nsuscipit eum incidunt voluptate atque dolores, cupiditate fugit consectetur asperiores aliquid\nsed quia inventore? Cumque rem corrupti nihil assumenda in delectus, molestiae non, architecto\nvoluptas saepe dolorum ratione temporibus enim voluptatum id, nemo facere reiciendis. Officiis\nveritatis a, sint odio maxime doloremque placeat omnis iste blanditiis dolorum doloribus fuga\nsapiente assumenda quos itaque dolor nobis delectus eius quam unde vel numquam quis. Ex quis\nnulla harum, modi aperiam sit reiciendis aut officia aliquid laboriosam autem nihil repellendus\nplaceat, debitis dolores aspernatur quae? Ut, odit temporibus? Autem dolorum error repudiandae\nipsam non laboriosam, impedit est facilis obcaecati voluptatum consequuntur saepe voluptas\nitaque sapiente earum tempora magnam pariatur laudantium cumque modi perferendis labore atque\narchitecto veritatis? Laborum excepturi numquam cum iste dolorum non eaque corrupti amet\nvoluptatem, facere ab consectetur? Debitis alias amet dicta ratione! Voluptas similique\nrepellendus quibusdam! Quas, illum vitae ducimus debitis corporis quia fugit officiis, quis\npossimus tempora ex eaque unde? Libero quod numquam nesciunt aspernatur. Assumenda eos commodi,\nquos maxime qui at sapiente perferendis nihil id dolorem aperiam fugit ducimus eveniet\ntemporibus nobis obcaecati perspiciatis, iste, dolor doloremque eius. Optio excepturi, debitis\niusto commodi neque recusandae quaerat. Ea suscipit adipisci odit officiis? Officiis dolor\nlibero quod laboriosam ipsam alias laborum, reprehenderit, molestias tenetur dicta quo\nvoluptates a rem? Laborum quas saepe molestiae fugit? Ut ipsa assumenda optio excepturi quae,\nautem mollitia facere officiis aperiam magnam, ab, tempore nostrum nam deserunt placeat! Quis\ndignissimos, blanditiis natus possimus rerum inventore.</p>",
      },
      usp: {
        title: "Why Choose Us",
        usps: await USP.find({ slug: page.slug }),
      },
      testimonials: {
        title: "What our customers say",
        data: await Testimonials.find({ slug: page.slug }),
      },
      faq: {
        title: "Frequently Asked Questions",
        data: await FAQ.find({ slug: page.slug }),
      },
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
