const jwt = require("jsonwebtoken");

const sendToken = async (userId) => {
  return await jwt.sign({ userId: userId }, "secret", {
    expiresIn: `5d`,
  });
};

const sendCookie = async (res, statusCode, token, user, message) => {
  const options = {
    expires: new Date(
      Date.now() + 12 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    message,
    user,
    token,
  });
};

module.exports = { sendToken, sendCookie };
