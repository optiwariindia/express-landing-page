import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
    title: {
      type: "String",
      required: true,
    },
    keywords: {
      type: "String",
    },
    description: {
      type: "String",
    },
    og: [],
    snippets: {
      type: "String",
    },
    customcss: {
      type: "String",
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const Page = mongoose.models.pages || mongoose.model("pages", schema);
console.log(mongoose.models);
export default Page;
