import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true
    },
    text: {
      type: "String",
      required: true
    },
    icon: {
      type: "String",
      required: true
    },
    link: {
      type: "String",
      required: true
    },
  },
  {
    timestamps: true,
    collection: "contact",
  },
);
const Contact = mongoose.models.contact || mongoose.model("contact", schema);
export default Contact;
