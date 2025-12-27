const mongoose = require("mongoose");
/*
  Here you can add more info about the product
  
*/
const productSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "please add the product name"],
    },
    Image: {
      type: String,
      required: [true, "please add the product image"],
    },
    Description: {
      type: String,
      required: [true, "please add the product description"],
    },
    Amount: {
      type: Number,
      required: [true, "please add the product amount"],
    },
    Price: {
      type: Number,
      required: [true, "please add the product price"],
    },
    Category: {
      type: String,
      required: [true, "please add the product category"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
