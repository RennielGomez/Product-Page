import React, {useState} from 'react';

function Carousel() {

  const [imgSource, setImgSource] = useState("/images/image-product-1.jpg");

  return (
    <div className='grid grid-cols-4 grid-rows-5 justify-items-stretch gap-4 md:mx-24 lg:mx-auto'>
      <img className='col-span-4 row-span-4 rounded-xl mb-4 ' src={imgSource} alt="product image" />
      <img className='col-span-1 rounded-xl md:row-span-1' onClick={()=>{setImgSource("/images/image-product-1.jpg")}} src="/images/image-product-1-thumbnail.jpg" alt="thumnail image 1" />
      <img className='col-span-1 rounded-xl md:row-span-1' onClick={()=>{setImgSource("/images/image-product-2.jpg")}} src="/images/image-product-2-thumbnail.jpg" alt="thumnail image 2" />
      <img className='col-span-1 rounded-xl md:row-span-1' onClick={()=>{setImgSource("/images/image-product-3.jpg")}} src="/images/image-product-3-thumbnail.jpg" alt="thumnail image 3" />
      <img className='col-span-1 rounded-xl md:row-span-1' onClick={()=>{setImgSource("/images/image-product-4.jpg")}} src="/images/image-product-4-thumbnail.jpg" alt="thumnail image 4" />
    </div>
  )
}

export default Carousel