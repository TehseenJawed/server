const config = require("../config/config");
const { Payment } = require("../models/");

const createPayment = (body) => {
  const payment = Payment.create(body);
  return payment;
};

const getPaymentById = (id) => {
  const payment = Payment.findById(id);
  return payment;
};

const checkoutSession = async (body) => {
  const stripe = require("stripe")(
    config.dipixels_us_stripe_session
  );

  console.log("in service");
  const YOUR_DOMAIN = body.domain;
  // const YOUR_DOMAIN = "my domain";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: body.currency,
          // currency: "currency",
          product_data: {
            name: "BRAND TO LIFE DIGITALLY",
            images: ["https://www.codedpixelz.com/assets/app-design.png"],
          },
          unit_amount: body.amount,
          // unit_amount: "unit amount",
        },
        quantity: body.quantity,
        // quantity: "quanitity",
      },
    ],
    mode: body.paymentMode,
    // mode: "paymentmode",

    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  console.log(session);
  return { id: session.id };
};

const codedCheckoutSession = async (body) => {
  const stripe = require("stripe")(
    config.coded_stripe_session
  );

  const YOUR_DOMAIN = body.domain;
  // const YOUR_DOMAIN = "my domain";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: body.currency,
          // currency: "currency",
          product_data: {
            name: "BRAND TO LIFE DIGITALLY",
            images: ["https://www.codedpixelz.com/assets/app-design.png"],
          },
          unit_amount: body.amount,
          // unit_amount: "unit amount",
        },
        quantity: body.quantity,
        // quantity: "quanitity",
      },
    ],
    mode: body.paymentMode,
    // mode: "paymentmode",

    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  console.log(session);
  return { id: session.id };
};

module.exports = {
  createPayment,
  getPaymentById,
  checkoutSession,
  codedCheckoutSession
};
