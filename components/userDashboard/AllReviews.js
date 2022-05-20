import React, { Fragment, useEffect, useState } from 'react';
import Review from './Review';
import axios from 'axios';
import Snackbar from '../../utils/notistick/Snackbar';
import { useDispatch } from 'react-redux';
import { setLoading, unsetLoading } from '../../utils/redux/ui-slice';

const AllReviews = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get('/api/users/me');
        setData(response.data.data);
        dispatch(unsetLoading());
      } catch (err) {
        dispatch(unsetLoading());
        Snackbar.error(err.response.data.message);
      }
    };
    getData();
  }, [dispatch]);
  console.log(data);

  return (
    <Fragment>
      <section className='bg-white dark:bg-gray-900'>
        <div className='container px-6 py-10 mx-auto'>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
            {data?.reviews.map((product) => (
              <Review
                key={product.id}
                review={product.review}
                rating={product.rating}
                type={product.onModel}
                product={product.product}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AllReviews;
