import React, { Fragment } from 'react';

const OrderedProducts = ({ product }) => {
  return (
    <Fragment>
      <li className='flex items-center justify-between py-4'>
        <div className='flex items-start'>
          <div className='ml-4'>
            <p className='text-sm'>{product.description}</p>

            <dl className='mt-1 space-y-1 text-xs text-gray-500'>
              <div>
                <dt className='inline'>Quantity: </dt>
                <dd className='inline'>{product.quantity}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <p className='text-sm'>৳{product.amount_subtotal}</p>
        </div>
      </li>
    </Fragment>
  );
};

export default OrderedProducts;
