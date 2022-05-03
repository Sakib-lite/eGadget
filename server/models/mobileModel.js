const mongoose = require('mongoose');
const slugify = require('slugify');
const upperCaseFirstLetter = require('./../../utils/upperCaseFirstLetter');
const getPercentage = require('../../utils/getPercentage');

const mobileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [50, 'Mobile name can be more than 50 characters'],
      required: ['true', 'Mobile name is a required field'],
      trim: true,
      unique: true,
    },
category:{
  type: 'string',
  default: 'Mobile'
}
    ,
    brand: {
      type: String,
      required: ['true', 'Mobile brand name is empty'],
      trim: true,
    },
    model: {
      type: String,
      default: 'CDC N4020',
      uppercase: true,
      trim: true,
    },
    slug: String,
    touch_display: {
      type: Boolean,
      default: true,
    },
    ram: {
      type: String,
      //   required: ['true', 'Mobile ram size is required'],
      default: '2GB',
      uppercase: true,
      trim: true,
    },
    featurs: {
      type: [String],
      default: ['Fingerprint', 'accelerometer', 'gyro', 'proximity', 'compass'],
    },
    storage: {
      type: String,
      default: '32GB',
      //   required: ['true', 'Mobile storage size is required'],
      uppercase: true,
    },
    battery: {
      type: String,
      default: '3000 mAh',
    },

    frontCamera: {
      type: String,
      default: '10 PIXEL',
      uppercase: true,
      trim: true,
    },
    backCamera: {
      type: String,
      default: '20 PIXEL',
      uppercase: true,
      trim: true,
    },
    wifi: {
      type: Boolean,
      default: true,
    },
    bluetooth: {
      type: Boolean,
      default: true,
    },

    color: {
      type: String,
      //   required: ['true', 'Mobile color is required'],
      default: 'Black',
      trim: true,
    },
    origin: {
      type: String,
      default: 'USA',
      uppercase: true,
    },
    price: {
      type: Number,
      required: ['true', 'Mobile price is a required field'],
    },
    discountPercent: {
      type: Number,
      validate: function () {
        return 100 >= this.discountPercent;
      },
      message: 'Discount price ({VALUE}) should be below 100',
    },
    priceAfterDiscount: {
      type: Number,
    },
    stock: {
      type: Number,
      default: 1,
      min: 0,
    },
    os: {
      type: String,
      default: 'Android',
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    image: [String],
    orderPlaced: {
      type: Number,
    },
    investedInPorducts: {
      type: Number,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

mobileSchema.pre('save', function (next) {
  this.slug = slugify(this.brand + '-' + this.name, {
    lower: true,
    replacement: '-',
  });

  this.priceAfterDiscount = this.discountPercent
    ? this.price - getPercentage(this.price, this.discountPercent)
    : this.priceAfterDiscount;
  this.name = upperCaseFirstLetter(this.name);
  this.brand = upperCaseFirstLetter(this.brand);
  this.model = upperCaseFirstLetter(this.model);
  this.frontCamera = upperCaseFirstLetter(this.frontCamera);
  this.backCamera = upperCaseFirstLetter(this.backCamera);
  this.category = upperCaseFirstLetter(this.category);
  this.featurs = this.featurs.map((val) => upperCaseFirstLetter(val));

  this.investedInPorducts = this.priceAfterDiscount
    ? this.priceAfterDiscount * this.stock
    : this.price * this.stock;

  next();
});

const Mobile = mongoose.model('Mobile', mobileSchema);
module.exports = Mobile;
