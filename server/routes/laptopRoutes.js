const express = require('express');
const laptopController = require('./../controllers/laptopController');
const router = express.Router();

router.route('/laptop-statistics').get(laptopController.laptopStatistics);

router
  .route('/')
  .get(laptopController.getAllLaptops)
  .post(laptopController.createLaptopItem);

router
  .route('/:id')
  .get(laptopController.getLaptop)
  .patch(laptopController.updateLaptop)
  .delete(laptopController.deleteLaptop);
module.exports = router;
