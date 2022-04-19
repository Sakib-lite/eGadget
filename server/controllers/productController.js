const Error = require('./../../utils/appError');
const catchError = require('./../../utils/catchError');

exports.createProductItem = (Model) =>
  catchError(async (req, res, next) => {
    const product = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: product,
    });
  });

exports.getAllProducts = (Model) =>
  catchError(async (req, res, next) => {
    const queryObj = req.query;
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    /*
      this will exclude those query.❌
      find(price[gte]=40000&sort=-price) =>> find(price[$gte]=40000)
      */
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`); // price[gte]=40000 so we have to add $ before lt,lte etc to make this work
    queryStr = JSON.parse(queryStr);
    // find(price[$gte]=40000)

    const page = req.query.page || 1;
    const limit = req.query.limit || 100;
    const skip = (page - 1) * limit;
    //for pagination

    const products = await Model.find(queryStr)
      .sort(req.query.sort)
      .select(req.query.field)
      .skip(skip)
      .limit(limit);

    if (req.query.page) {
      const productsCount = await Model.countDocuments();
      console.log(productsCount);
      if (skip >= productsCount) throw new Error('This page does not exist');
    }

    res.status(201).json({
      status: 'success',
      results: products.length,
      data: products,
    });
  });

exports.getProductById = (Model) =>
  catchError(async (req, res, next) => {
    const product = await Model.findById(req.params.id);
    if (!product) {
      return next(
        new Error(`There is no product with this id: ${req.params.id}`, 404)
      );
    }
    res.status(201).json({
      status: 'success',
      data: product,
    });
  });

exports.updateProduct = (Model) =>
  catchError(async (req, res, next) => {
    const product = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return next(
        new Error(`There is no product with this id: ${req.params.id}`, 404)
      );
    }
    await product.save();
    res.status(201).json({
      status: 'success',
      data: product,
    });
  });

exports.deleteProduct = (Model) =>
  catchError(async (req, res, next) => {
    const product = await Model.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(
        new Error(`There is no product with this id: ${req.params.id}`, 404)
      );
    }
    res.status(201).json({
      status: 'success',
      data: null,
    });
  });
