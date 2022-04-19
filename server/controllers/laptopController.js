const Laptop = require('./../models/laptopModel');
const statisticsController = require('./statisticsController');
const productController = require('./productController');
// const catchError = require('./../../utils/catchError');
// const Error = require('../../utils/appError');


exports.createLaptopItem = productController.createProductItem(Laptop);
exports.getAllLaptops = productController.getAllProducts(Laptop);
exports.getLaptop = productController.getProductById(Laptop);
exports.updateLaptop = productController.updateProduct(Laptop);
exports.deleteLaptop = productController.deleteProduct(Laptop);
exports.laptopStatistics = statisticsController.productsStats(Laptop);
