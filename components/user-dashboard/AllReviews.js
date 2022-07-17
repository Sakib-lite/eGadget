import React, { Fragment } from 'react';
import Review from './Review';

const AllReviews = ({reviews}) => {
 

  return (
    <Fragment>
      <section className='bg-white dark:bg-gray-500'>
        <div className='container px-6 py-10 mx-auto'>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
            {reviews?.map((product) => (
              <Review
                key={product.id}
                review={product.review}
                rating={product.rating}
                type={product.onModel}
                product={product.product}
              />
            ))}
          </div>
          {reviews?.length === 0 && (
            <p className='text-xs font-semibold tracking-wider justify-center items-center text-white uppercase'>
              Sorry! You have no review
            </p>
          )}{' '}
        </div>
      </section>
    </Fragment>
  );
};

export default AllReviews;
