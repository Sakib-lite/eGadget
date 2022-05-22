const User = require('../models/userModel');
const userController = require('./handlerController');
const catchError = require('../../utils/catchError');
const Error = require('../../utils/appError');
const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Please upload an image', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImage = upload.single('image');

exports.resizeImage = catchError(async (req, res, next) => {
  if (!req.file) return next();
  const name = req.user.name.split(' ').join('-');
  req.file.fileName = `${name}-${req.user.id}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/users/${req.file.fileName}`);
  next();
});

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
  if (req.file) filteredBody.image = req.file.fileName;
  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    runValidators: true,
    new: true,
  });
  res.status(201).json({
    status: 'success',
    message: 'User updated successfully',
    user,
  });
});
exports.getAllUsers = userController.getAllDocuments(User);

exports.createUser = catchError((req, res) => {
  res.status(500).json({
    status: 'error',
    message: ' Please use /signup route',
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = userController.getDocumentById(
  User,
  'reviews',
  'review rating onModel -user'
); //virtulal poputating reviews
