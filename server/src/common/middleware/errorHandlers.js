import Logger from "../helpers/logger.js";

const errorHandlers = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Some thing when wrong";

  Logger.error(`[ERROR] - Status: ${status} - Message: ${message}`);
  res.status(status).json({ message: message });
};

export default errorHandlers;
