import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true
    },
    name: {
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
    collection: "socials",
  },
);
const Socials = mongoose.models.socials || mongoose.model("socials", schema);
export default Socials;
