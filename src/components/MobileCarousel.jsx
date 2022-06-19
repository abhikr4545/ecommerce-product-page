import { useState } from 'react';
import { Previous, Next } from '../images';
import { ProductData } from '../ProductData';

const MobileCarousel = () => {

  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = imageIndex + 1 < ProductData.length ? imageIndex + 1 : 0;
    setImageIndex(nextIndex);
  }

  const previousImage = () => {
    const previousIndex = imageIndex - 1 < 0 ? ProductData.length - 1  : imageIndex - 1;
    setImageIndex(previousIndex);
  }
  
  return (
    <div className='flex items-center relative overflow-hidden h-80 md:hidden'>
      {
        ProductData.map((item, index) => (
          (imageIndex === index) ? <img src={item.image} key={index} alt="" /> : null
        ))
      }
      {/* Previous */}
      <button onClick={previousImage} className='absolute py-3 px-4 rounded-full top-[40%] left-6 bg-white'>
        <img src={Previous} alt="" />
      </button>
      {/* Next */}
      <button onClick={nextImage} className='absolute py-3 px-4 rounded-full top-[40%] right-6 bg-white'>
        <img src={Next} alt="" />
      </button>
    </div>
  )
}

export default MobileCarousel