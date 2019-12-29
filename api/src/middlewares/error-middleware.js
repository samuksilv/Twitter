const colors = require('colors');
const HttpError = require('../handlers/custom-erros/http-error');

const errorsHandler = async (error, request, response, next) => {
  try {

    console.log("=============================================================".red);
    console.log(`Error message `.bgRed, `=> ${error.message}`.red);
    console.log(`StackTracer  `.bgRed, `=> ${error.stack}`.red);
    console.log(`status code `.bgRed, `=> ${error.statusCode}`.red);
    console.log("=============================================================".red);

    if (error instanceof HttpError) {
      response.status(error.statusCode).json({
        message: error.message,
        stackTracer: error.stack,
      });
    } else {
      response.status(500).json({
        message: error.message,
        stackTracer: error.stack,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = errorsHandler;