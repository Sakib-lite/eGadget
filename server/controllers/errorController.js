const Error = require('./../../utils/appError');

const developmentError = (err, req, res) => {
  //If any error occured in api
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }

  //for showing error in the log
  console.log('⛔ Error:', err);

  //this type of error will be rendered
  return res.status(err.statusCode).render('error', {
    title: 'Something went very wrong',
    message: err.message,
  });
};

const productionError = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational) {
      //this kind of errors can be shown to client
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      return res.status(500).json({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  }

  if (err.isOperational) {
    return res.status(res.statusCode).render('error', {
      title: 'Something went very wrong',
      message: err.message,
    });
  }

  //for log
  console.log('⛔ Error:', err);

  //this type of error will be rendered also we cant send the error information to  client
  return res.status(500).render('error', {
    title: 'Something went very wrong',
    message: 'Please try again',
  });
};

const DBduplicateField = (err) => {
  // console.log(  );
  // var regex =
  //     /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i,
  //   match = err.message.match(regex);
  // val = match[1] || match[2];

  //E11000 duplicate key error collection: eGadget.laptops index: name_1 dup key: { name: "Hp Laptop 5" }
  let val = err.message.match(/{([^}]+)}/)[1].split(':')[1];
  const message = `Duplicate field value: ${val}. Please use another value!`;
  //"Duplicate field value:  \"Hp Laptop 5\" . Please use another value!"
  return new Error(message, 400);
};
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') developmentError(err, req, res);
  if (process.env.NODE_ENV.trim() === 'production') {
    let error = { ...err };
    error.message = err.message;
    if (error.code === 11000) error = DBduplicateField(error);
    productionError(error, req, res);
  }
};
