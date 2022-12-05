import React from 'react';
import Carousel from "./Carousel"
import ProductDetails from "./ProductDetails"

function Container() {
  
  return (
    <div className='flex items-center mx-auto gap-8 mt-16 lg:w-3/4 sm:width-auto lg:flex-row sm:flex-col'>
      <Carousel />
      <ProductDetails/>
    </div>
  )
}

export default Container