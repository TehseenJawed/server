const express = require("express");
const router = express.Router();
const { orderController } = require("../../controllers");
const orderValidation = require("../../validations/order.validation");
const validate = require("../../middlewares/validate");


router
  .route("/")
  .post(validate(orderValidation.createOrder), orderController.createOrder);

module.exports = router;
