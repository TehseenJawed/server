const {Order} =require("../models/")

const createOrder = (body) => {
  const order = Order.create(body);
  return order;
};

module.exports = { createOrder };
