import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
    socials: [
      {
        name: {
          type: "String",
          required: "true",
        },
        icon: {
          type: "String",
          required: "true",
        },
        link: {
          type: "String",
          required: "true",
        },
      },
    ],
    links: [
      {
        name: "String",
        link: "String",
      },
    ],
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const Footer = mongoose.models.footer || mongoose.model("footer", schema);
export default Footer;
