const express = require('express');
const Laptop = require('./../models/laptopModel');

exports.createLaptopItem = async (req, res, next) => {
  try {
    const laptop = await Laptop.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { laptop },
    });
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.getAllLaptops = async (req, res, next) => {
  try {
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

    const laptops = await Laptop.find(queryStr)
      .sort(req.query.sort)
      .select(req.query.field)
      .skip(skip)
      .limit(limit);
    if (req.query.page) {
      const laptopNums = await Laptop.countDocuments();
      console.log(laptopNums);
      if (skip >= laptopNums) throw new Error('This page does not exist');
    }
    console.log(queryStr);

    res.status(201).json({
      status: 'success',
      results: laptops.length,
      data: laptops,
    });
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.getLaptop = async (req, res, next) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      data: laptop,
    });
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.updateLaptop = async (req, res, next) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    await laptop.save();
    res.status(201).json({
      status: 'success',
      data: laptop,
    });
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deleteLaptop = async (req, res, next) => {
  try {
    const laptop = await Laptop.findByIdAndDelete(req.params.id);
    if (!laptop)
      throw new Error(`There is no product with this id: ${req.params.id}`);
    res.status(201).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(401).json({
      status: 'failed',
      message: err.message,
    });
  }
};
