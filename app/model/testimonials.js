import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true,
      unique:false
    },
    image: {
      type: "String",
      required: true,
    },
    message: {
      type: "String",
      required: true,
    },
    name: {
      type: "String",
      required: true,
    },
    city: {
      type: "String",
    },
    date: {
      type: "String",
    },
  },
  {
    timestamps: true,
    collection: "testimonials",
  },
);
const Testimonials =
  mongoose.models.testimonials || mongoose.model("testimonials", schema);
export default Testimonials;
