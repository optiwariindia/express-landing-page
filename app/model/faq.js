import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
    question: {
      type: "String",
      required: true,
    },
    answer: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const FAQ = mongoose.models.faqs || mongoose.model("faqs", schema);
export default FAQ;
