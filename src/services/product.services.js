const httpStatus = require("http-status");
const { Product } = require("../models");
const ApiError = require("../utils/APIError");
const queryProducts = async (
  filter,
  options,
  populateFirst = null,
  populateSecond = null
) => {
  const products = Product.paginate(
    filter,
    options,
    populateFirst,
    populateSecond
  );
  const category = await Product.distinct("category");
  var collections = [];
  var resultData = {};
  for (var a = 0; a <= category.length - 1; a++) {
    const result = await Product.findOne({ category: category[a] });
    collections = [...collections, result];
  }
  for (var a = 0; a <= category.length - 1; a++) {
    resultData[category[a]] = await Product.find({ category: category[a] });
  }
  resultData.collections = collections;
  return resultData;
};

const getProductById = async (id) => {
  return Product.findById(id);
};

const getAllProducts = async () => {
  const user = await Product.find().populate("vendor");
  return user;
};

const updateProductById = async (id, update) => {
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }
  Object.assign(product, update);
  await product.save();
  return product;
};
const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};
const deleteProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }
  await product.remove();
  return product;
};
module.exports = {
  createProduct,
  getAllProducts,
  queryProducts,
  updateProductById,
  getProductById,
  deleteProductById,
};
