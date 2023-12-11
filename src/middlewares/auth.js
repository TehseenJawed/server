const httpStatus = require("http-status");
const ApiError = require("../utils/APIError");

const auth = (requiredRole = null) => async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return next(new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate"));

  try {
    if (requiredRole) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Not enough rights"));
    }
    next();
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, "Invalid Token"));
  }
};

module.exports = auth;
