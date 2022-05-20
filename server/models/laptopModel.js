const mongoose = require('mongoose');
const slugify = require('slugify');
const uppercaseFirstLetter = require('./../../utils/upperCaseFirstLetter');
const getPercentage = require('../../utils/getPercentage');

const laptopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [50, 'Laptop name can be more than 50 characters'],
      required: ['true', 'Laptop name is a required field'],
      unique: true,
      trim: true,
    },
    category: {
      type: 'string',
      default: 'Mobile',
    },
    brand: {
      type: String,
      required: ['true', 'Laptop brand name is empty'],
    },
    series: {
      type: String,
      default: 'Pavilion',
      // required: ['true', 'Laptop series name is empty'],
    },
    // id: {
    //   type: Number,
    //   // required: ['true', 'Laptop id is empty'],
    //   minlength: [5, 'Min id length is 5'],
    //   unique: false,
    // },
    processor: {
      type: String,
      default: 'Intel',
    },
    model: {
      type: String,
      default: 'CDC N4020',
      uppercase: true,
      trim: true,
    },
    core: {
      type: Number,
      default: 2,
    },
    thread: {
      type: Number,
      default: 2,
    },
    slug: String,
    touch_display: {
      type: Boolean,
      default: false,
      // required: ['true', 'Please define touch display'],
    },
    ram: {
      type: String,
      // required: ['true', 'Laptop ram size is required'],
      uppercase: true,
      default: '8GB',
    },
    ramType: {
      type: String,
      default: 'DDR4',
      uppercase: true,
    },
    bus: {
      type: String,
      default: '2400 MHZ',
      uppercase: true,
    },
    storage: {
      type: String,
      // required: ['true', 'Laptop storage size is required'],
      default: '1TB',
      uppercase: true,
    },
    graphics: {
      type: String,
      default: 'Intel Graphics',
    },
    wifi: {
      type: Boolean,
      default: true,
    },
    bluetooth: {
      type: Boolean,
      default: true,
    },
    os: {
      type: String,
      default: 'Windows',
    },
    color: {
      type: String,
      // required: ['true', 'Laptop color is required'],
      default: 'Gray',
    },
    origin: {
      type: String,
      default: 'USA',
      uppercase: true,
    },
    price: {
      type: Number,
      required: ['true', 'Laptop price is a required field'],
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
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: 'product.png',
    },
    imageCollections: [String],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    orderPlaced: {
      type: Number,
    },
    investedInPorducts: {
      type: Number,
    },
    product: {
      type: String,
      default: 'Laptop',
    },
    isFeatured:{
      type: Boolean,
      default: false,
    }
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

laptopSchema.index({ price: 1, ratingsAverage: -1 }); //compound indexing
laptopSchema.index({ slug: 1 }); //index for slug

//virtual populating
laptopSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
});

laptopSchema.virtual('nRating').get(function () {
  return this.reviews?.length;
});
//document middleware
laptopSchema.pre('save', function (next) {
  this.slug = slugify(this.brand + '-' + this.name, {
    lower: true,
    replacement: '-',
  });
  this.priceAfterDiscount = this.discountPercent
    ? this.price - getPercentage(this.price, this.discountPercent)
    : this.priceAfterDiscount;
  this.name = uppercaseFirstLetter(this.name);
  this.brand = uppercaseFirstLetter(this.brand);
  this.processor = uppercaseFirstLetter(this.processor);
  this.os = uppercaseFirstLetter(this.os);
  this.category = uppercaseFirstLetter(this.category);

  this.investedInPorducts = this.priceAfterDiscount
    ? this.priceAfterDiscount * this.stock
    : this.price * this.stock;

  next();
});

//query middleware
// laptopSchema.pre(/^find/, function (next) {
//   this.find({ rating: { $gte:4.5 } });

//   next();
// });
const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;
