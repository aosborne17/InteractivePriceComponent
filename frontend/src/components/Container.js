import React, { useState } from 'react';

const Container = () => {
  const [pageViews, setPageViews] = useState(0);
  return (
    <div className='container'>
      <section className='container__price-section'>
        <div className='container__firstRow'>
          <h1>{pageViews} Page Views</h1>
          <h1>
            $16.00{' '}
            <span style={{ color: 'grey', fontSize: '12px' }}>/month</span>{' '}
          </h1>
        </div>

        <div className='container__sliderRow'>
          <input type='range' />
        </div>

        <div className='container__secondRow'>
          <p>Monthly Billing</p>
          <label className='container__toggle' htmlFor='myToggle'>
            <input
              className='container__toggle-input'
              name=''
              type='checkbox'
              id='myToggle'
            />
            <div className='container__toggle-fill'></div>
          </label>
          <p className='container__discountText'>25% discount</p>
        </div>
      </section>
      <div className='container__divider'></div>
      <section className='container__getStarted-section'>
        <div className='container__lastRow'>
          <ul>
            <li>Unlimited Websites</li>
            <li>100% data ownership</li>
            <li>Email Reports</li>
          </ul>
          <button className='container__button'>Start my trial</button>
        </div>
      </section>
    </div>
  );
};

export default Container;
