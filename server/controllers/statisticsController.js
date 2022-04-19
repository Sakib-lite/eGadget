const catchError = require('./../../utils/catchError');

exports.productsStats = (Model) =>
  catchError(async (req, res, next) => {
    const productStats = await Model.aggregate([
      // {
      //   $match: { rating: { $gte: 1 } },
      // },

      {
        $group: {
          _id: '$brand',
          totalItems: { $sum: 1 },
          totalPrice: { $sum: '$price' },
          averageRating: { $avg: '$rating' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
          worstRating: { $min: '$rating' },
          items: { $push: '$name' },
        },
      },
      { $addFields: { avgRating: { $round: ['$averageRating', 1] } } },
      // { $addFields: { brand: '$_id' } },
      {
        $project: {
          averageRating: 0,
        },
      },
      {
        $sort: { price: 1 },
      },
      // {
      //   $limit:10
      // }
    ]);
    res.status(201).json({
      status: 'success',
      data: productStats,
    });
  });
