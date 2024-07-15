import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
    image: {
      type: "String",
      required: true,
    },
    title: {
      type: "String",
    },
    cta: {
      text: {
        type: "String",
      },
      link: {
        type: "String",
      },
    },
    frmtitle: {
      type: "String",
      default: "Get Quotes",
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const Banner = mongoose.models.banner || mongoose.model("banner", schema);
export default Banner;
