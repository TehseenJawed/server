const { paymentService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const createPayment = catchAsync(async (req, res) => {
  const payment = await paymentService.createPayment(req.body);
  res.status(httpStatus.CREATED).send(payment);
});

const getPayment = catchAsync(async (req, res) => {
  const payment = await paymentService.getPaymentById(req.params.id);
  res.status(201).send(payment);
});

const checkoutSession = catchAsync(async (req, res) => {
  console.log(req.body);
  const payment = await paymentService.checkoutSession(req.body);
  if (!payment) {
    res.status(httpStatus.NO_CONTENT, "no payment found/received");
  }
  res.status(200).send(payment);
});

const codedCheckoutSession = catchAsync(async (req, res) => {
  const payment = await paymentService.codedCheckoutSession(req.body);
  if (!payment) {
    res.status(httpStatus.NO_CONTENT, "no payment found/received");
  }
  res.status(200).send(payment);
});

module.exports = { 
  createPayment, 
  getPayment, 
  checkoutSession,
  codedCheckoutSession
 };
