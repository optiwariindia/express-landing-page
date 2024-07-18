import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique: false,
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
    collection: "faq",
  },
);
const FAQ = mongoose.models.faq || mongoose.model("faq", schema);
export default FAQ;
