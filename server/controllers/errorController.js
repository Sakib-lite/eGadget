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

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') developmentError(err, req, res);
};
