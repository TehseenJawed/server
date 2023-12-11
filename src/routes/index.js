const express = require("express");
const productRoute = require("./product/product.route");
const orderRoute = require("./order/order.route");
const mailRoute =require("./mail/mail.route");
const router = express.Router();

router.use("/product", productRoute);
router.use("/mail",mailRoute);
router.use("/order",orderRoute);

module.exports = router;
