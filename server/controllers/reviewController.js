const handlerController = require('./handlerController');
const Review = require('../models/reviewModel');

exports.getAllReviews=handlerController.getAllDocuments(Review);
exports.createReview = handlerController.createDocument(Review);
exports.getReviewById=handlerController.getDocumentById(Review)
exports.updateReview=handlerController.updateDocument(Review)
exports.deleteReview=handlerController.deleteDocument(Review)
