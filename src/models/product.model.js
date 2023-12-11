const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    color_image: {
      type: String,
    },
    display_image: {
      type: String,
      default: "",
      required: true,
    },
    category: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);
const Product = mongoose.model("product", productSchema);
module.exports = Product;
