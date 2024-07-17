import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
    },
    image: {
      type: "String",
      required: true,
    },
    name: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "usps",
  },
);
const USP = mongoose.models.usps || mongoose.model("usps", schema);
export default USP;
