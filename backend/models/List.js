const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    hairColor: {
      type: String,
      required: true,
    },
    clothingAccessory: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    artStyle: {
      type: String,
      required: true,
    },
    websiteStyle: {
      type: String,
      required: true,
    },
    imageKey:{
      type:String
    },
    imageUrl:{
      type:String
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("List", listSchema);
