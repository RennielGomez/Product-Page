import React, { useState } from 'react';
import order from '../order';


function Cart({ visible }) {

  const [orderCount, setOrderCount] = useState(0);

  setInterval(() => {
    setOrderCount(order.count);
  }, 100);

  if (visible === false) return;
  if (order.count === 0) return <div className='absolute right-0 w-80 h-auto bg-white border-2 shadow-2xl'>
    <h1 className='font-bold text-left px-4 py-0.5 text-orange-500'>Items on Cart</h1>
    <hr className='w-3/4 ml-4 text-orange-500' />
    <h1 className='text-left px-4 py-0.5'>No items on the Cart</h1>
  </div>

  return (
    <div className='absolute right-0 w-80 h-auto bg-white border-2 shadow-2xl'>
      <h1 className='font-bold text-left px-4 py-0.5 text-orange-500'>Items on Cart</h1>
      <hr className='w-3/4 ml-4 text-orange-500' />
      <div className='grid grid-cols-1 grid-rows-1 py-2 px-4'>
        <div className='flex flex-row'>
          <img className='w-12 h-12 rounded-md' src="/images/image-product-1-thumbnail.jpg" alt="product image" />
          <p className='text-slate-500 text-left text-sm p-2'>
            Fall Limited Edition Sneakers
            <span> $125.00 x {orderCount} </span>
            <span className='font-bold text-black'>${orderCount * 125}</span>
          </p>
        </div>
        <button className='bg-orange-500 text-white px-4 py-2 my-4 rounded-md text-center'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart