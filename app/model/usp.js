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
    name: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const USP = mongoose.models.usps || mongoose.model("usps", schema);
export default USP;
