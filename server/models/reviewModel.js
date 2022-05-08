const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review is required'],
      min: 3,
      max: 200,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 4,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'onModel',
      required: [true, 'Review must belong to a tour'],
    },
    onModel: {
      type: String,
      required: true,
      enum: ['Laptop', 'Mobile'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const review = mongoose.model('review', reviewSchema);

module.exports = review;
