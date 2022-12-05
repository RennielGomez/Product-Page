import React, { useState } from 'react';
import order from '../order';

function ProductDetails() {

  const [count, setCount] = useState(0);
  order.count = count;

  function addCount() {
    setCount(() => {
      return count + 1;
    })
  }

  function subtractCount() {
    setCount(() => {
      if (count === 0) {
        return 0;
      } else {
        return count - 1;
      }
    })
  
  }

  return (
    <div className='flex flex-col'>
      <h4 className='text-xs font-bold text-orange-500'>SNEAKER COMPANY</h4>
      <h1 className='font-bold text-4xl mt-5 mb-8  text-gray-800 break-words'>Fall Limited Edition Sneakers</h1>
      <p className='text-gray-400 break-words'>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.
      </p>
      <h2 className='text-gray-800 font-bold text-xl pt-5'>$125.00 <span className='text-sm text-orange-500 p-0.5 bg-orange-100 rounded'>50%</span></h2>
      <h2 className='text-gray-400 line-through font-bold text-sm'>$250.00</h2>
      <div className='flex mt-6'>
        <div className='flex-nowrap'>
          <button onClick={subtractCount} className='text-xl p-2 border font-bold text-orange-500'>-</button>
          <span className='font-bold text-gray-800 mx-5'>{count}</span>
          <button onClick={addCount} className='text-xl p-2 border font-bold text-orange-500'>+</button>
        </div>
        <div className='flex items-center flex-nowrap bg-orange-500 text-white px-6 py-2 rounded-md ml-4'>
          <img className="px-1 w-6 h-4 mx-.05 fill-white stroke-white" src="/images/icon-cart.svg" alt="cart icon" />
          <button className='bg-orange-500 text-white px-4 py-2 rounded-md break-keep'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails