const User = require('../models/userModel');
const userController = require('./handlerController');
const catchError = require('../../utils/catchError');
const Error = require('../../utils/appError');

exports.getAllUsers = userController.getAllItems(User);

const excludingItems = (obj, ...exclude) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (!exclude.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateUser = catchError(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return next(
      new Error(
        'Password and Confirm Password cannot be updated. Please use /changePassword  route',
        400
      )
    );
  }
const filteredBody = excludingItems(req.body, 'role', 'email', 'password');

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    runValidators: true,
    new: true,
  });
  res.status(201).json({
    status: 'success',
    user,
  });
});

exports.createUser = catchError((req, res) => {
  res.status(500).json({
    status: 'error',
    message: ' Please use /signup route',
  });
});
