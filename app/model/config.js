import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    slug: {
      type: "String",
      required: true
    },
    key:{
        type:"String",
        required:true,
    },
    value:{
        type:"String"
    }
  },
  {
    timestamps: true,
    collection: "config",
  },
);
const Config = mongoose.models.config || mongoose.model("config", schema);
export default Config;
