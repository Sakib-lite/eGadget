const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgot-password').post(authController.forgotPassword);
router.route('/reset-password/:token').patch(authController.resetPassword);


router.route('/').post(userController.createUser);

router.use(authController.protectedRoute); //proted route for logged user only

router.route('/me').get(userController.getMe,userController.getUser)
router.route('/me/change-password').patch(authController.changePassword);
router.route('/:id').patch(userController.updateUser);
router
  .route('/')
  .get(authController.rescricRouteTo('admin'), userController.getAllUsers);

module.exports = router;
