import React, { useState } from 'react';

function Carousel() {

  const [imgSource, setImgSource] = useState("/images/image-product-1.jpg");

  return (
    <div className='flex flex-col justify-items-stretch gap-4 md:mx-24 lg:mx-auto'>
      <img className='rounded-xl mb-4 ' src={imgSource} alt="product image" />
      <div className='flex'>
        <img className='img-fluid' onClick={() => { setImgSource("/images/image-product-1.jpg") }} src="/images/image-product-1-thumbnail.jpg" alt="thumnail image 1" />
        <img className='img-fluid' onClick={() => { setImgSource("/images/image-product-2.jpg") }} src="/images/image-product-2-thumbnail.jpg" alt="thumnail image 2" />
        <img className='img-fluid' onClick={() => { setImgSource("/images/image-product-3.jpg") }} src="/images/image-product-3-thumbnail.jpg" alt="thumnail image 3" />
        <img className='img-fluid' onClick={() => { setImgSource("/images/image-product-4.jpg") }} src="/images/image-product-4-thumbnail.jpg" alt="thumnail image 4" />
      </div>
    </div>
  )
}

export default Carousel