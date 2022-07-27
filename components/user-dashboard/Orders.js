import React, { Fragment } from 'react';
import OrderedProducts from './OrderedProducts';

const Orders = ({ products }) => {
  console.log('  products', products);
  const { price, createdAt, cart } = products;

  return (
    <Fragment>
      <div className='py-12 bg-gray-100 md:py-24'>
        <div className='max-w-lg px-4 mx-auto lg:px-8'>
          <div className='flex items-center'>
            <span className='w-10 h-10 bg-blue-900 rounded-full'></span>
            <h2 className='ml-4 font-medium'>Date:{createdAt}</h2>
          </div>

          <div className='mt-8'>
            <p className='text-2xl font-medium tracking-tight'>৳{price}</p>
            <p className='mt-1 text-sm text-gray-500'>For the purchase of</p>
          </div>

          <div className='mt-12'>
            <div className='flow-root'>
              <ul className='-my-4 divide-y divide-gray-200'>
                {' '}
                {cart?.map((product) => (
                  <OrderedProducts product={product} key={product._id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Orders;
