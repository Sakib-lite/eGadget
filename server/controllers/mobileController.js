const Mobile = require('./../models/mobileModel');
const statisticsController = require('./statisticsController');
const productController = require('./productController');
// const catchError = require('./../../utils/catchError');

exports.createMobileItem = productController.createProductItem(Mobile);
exports.getAllMobiles = productController.getAllProducts(Mobile);
exports.getMobile = productController.getProductById(Mobile);
exports.updateMobile = productController.updateProduct(Mobile);
exports.deleteMobile = productController.deleteProduct(Mobile);
exports.mobileStatistics = statisticsController.productsStats(Mobile);
