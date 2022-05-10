/* eslint-disable no-unused-vars */
const Error = require('../../utils/appError');
const catchError = require('../../utils/catchError');
const session = require("express-session");

exports.createDocument = (Model) =>
  catchError(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      data: doc,
    });
  });

exports.getAllDocuments = (Model) =>
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

    const docs = await Model.find(queryStr)
      .sort(req.query.sort)
      .select(req.query.field)
      .skip(skip)
      .limit(limit);

    if (req.query.page) {
      const docsCount = await Model.countDocuments();
      if (skip >= docsCount) throw new Error('This page does not exist');
    }

    res.status(201).json({
      status: 'success',
      results: docs.length,
      data: docs,
    });
  });

exports.getDocumentById = (Model, populateOptions,populateSelect) =>
  catchError(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions)
      query = query.populate({
        path: `${populateOptions}`,
        select: `${populateSelect}`,
      });
    const doc = await query;
    if (!doc) {
      return next(
        new Error(`There is no document with this id: ${req.params.id}`, 404)
      );
    }
    res.status(201).json({
      status: 'success',
      data: doc,
    });
  });

exports.updateDocument = (Model) =>
  catchError(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(
        new Error(`There is no document with this id: ${req.params.id}`, 404)
      );
    }
    await doc.save();
    res.status(201).json({
      status: 'success',
      data: doc,
    });
  });

exports.deleteDocument = (Model) =>
  catchError(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(
        new Error(`There is no document with this id: ${req.params.id}`, 404)
      );
    }
    res.status(201).json({
      status: 'success',
      data: null,
    });
  });
