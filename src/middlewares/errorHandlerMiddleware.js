// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).json({ error: message });
};

module.exports = errorHandlerMiddleware;
