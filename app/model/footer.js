import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const Footer = mongoose.models.footer || mongoose.model("footer", schema);
export default Footer;
