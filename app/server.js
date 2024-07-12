import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import twig from 'twig'
import expressPureip from 'express-pureip'
import fs from "fs";
import routes from "./route/index.js";
(async () => {
    const env = process.env;
    const port = env.port;
    const mongodb = env.mongodb;
    await mongoose.connect(mongodb);
    const app = express();
    app
        .engine('twig', twig.renderFile)
        .set("view-engine", "twig")
        .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(express.static("public"))
        .use(expressPureip)
        .use(routes)
        .get("/:product", (req, res) => {
            let data = JSON.parse(fs.readFileSync("app/data.json", "utf8"));
            console.log(data);
            return res.render("index.twig", data);
        })
        .listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
})();
