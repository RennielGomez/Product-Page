import React from 'react';
import Carousel from "./Carousel"
import ProductDetails from "./ProductDetails"

function Container() {

  return (
    <div className='grid grid-cols-5 items-center mx-auto gap-8 mt-16 lg:w-3/4 sm:width-auto lg:flex-row sm:flex-col'>
      <div className='col-span-3'>
        <Carousel />
      </div>
      <div className='col-span-2'>
        <ProductDetails />
      </div>
    </div>
  )
}

export default Container