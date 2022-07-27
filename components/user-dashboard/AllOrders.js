import React, { Fragment } from 'react';
import Orders from './Orders';

const AllOrders = ({ orders }) => {
  return (
    <Fragment>
      {orders.length === 0 && (
        <div className='flex items-center justify-center h-screen'>
          <h2 className='text-2xl font-semibold  text-gray-900 sm:text-4xl md:text-6xl '>
            No Orders yet
          </h2>
        </div>
      )}

      <div className='bg-gray-900 gap-6 space-y-2'>
        {orders?.map((products) => (
          <Orders key={products._id} products={products} />
        ))}
      </div>
    </Fragment>
  );
};

export default AllOrders;
