const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const { orderService } = require("../services");

const createOrder = catchAsync((req, res) => {
  const package = orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(package);
});

module.exports = { createOrder };
