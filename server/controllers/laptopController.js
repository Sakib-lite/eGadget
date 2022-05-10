const Laptop = require('./../models/laptopModel');
const statisticsController = require('./statisticsController');
const productController = require('./handlerController');
// const catchError = require('./../../utils/catchError');
// const Error = require('../../utils/appError');


exports.createLaptopItem = productController.createDocument(Laptop);
exports.getAllLaptops = productController.getAllDocuments(Laptop);
exports.getLaptop = productController.getDocumentById(Laptop);
exports.updateLaptop = productController.updateDocument(Laptop);
exports.deleteLaptop = productController.deleteDocument(Laptop);
exports.laptopStatistics = statisticsController.productsStats(Laptop)