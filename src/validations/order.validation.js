const Joi = require("joi");

const createOrder = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    businessName: Joi.string().required(),
    referenceIdea: Joi.string().required(),
    brief: Joi.string().required(),
    targetedAudience: Joi.string().required(),
  }),
};

module.exports = {createOrder};
