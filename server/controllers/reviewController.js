const handlerController = require('./handlerController');
const Review = require('../models/reviewModel');

exports.createReview = handlerController.createItem(Review);
exports.getReviewById=handlerController.getDocumentById
exports.updateReview=handlerController.updateDocument
exports.deleteReview=handlerController.deleteDocument