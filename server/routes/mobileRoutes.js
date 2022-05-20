const express = require('express');
const authController = require('../controllers/authController');
const mobileController = require('./../controllers/mobileController');
const router = express.Router();
const reviewRoutes = require('./reviewRoutes');

router.use('/:productId/review', reviewRoutes); //redirected to reviewRoutes for this specific route

router.route('/mobile-statistics').get(mobileController.mobileStatistics);

router
  .route('/')
  .get(mobileController.getAllMobiles)
  .post(mobileController.createMobileItem);

router
  .route('/:id')
  .get(mobileController.getMobile)
  .patch(mobileController.updateMobile)
  .delete(
    authController.protectedRoute,
    authController.rescricRouteTo('admin', 'moderator'),
    mobileController.deleteMobile
  );
module.exports = router;
