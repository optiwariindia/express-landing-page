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
    description: {
      type: "String",
      required: true,
    },
    image: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "pages",
  },
);
const About = mongoose.models.about || mongoose.model("about", schema);
export default About;
