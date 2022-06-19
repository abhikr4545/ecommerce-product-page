import { useContext } from 'react';
import CartContext from '../CartContext';

import { Previous, Next } from '../images';
import Close from './Close';
import { ProductData } from "../ProductData";

const LightBox = () => {
  const { showLightBox, lightBoxIndex, setCurrentImageLightBox, toggleLightBox } = useContext(CartContext);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleLightBox()
    }
  }

  

  const nextImage = () => {
    const nextIndex = lightBoxIndex + 1 < ProductData.length ? lightBoxIndex + 1 : 0;
    setCurrentImageLightBox(nextIndex);
  }

  const previousImage = () => {
    const previousIndex = lightBoxIndex - 1 < 0 ? ProductData.length - 1  : lightBoxIndex - 1;
    setCurrentImageLightBox(previousIndex);
  }

  return (
    showLightBox ? <>
      <section onClick={handleClick} className='hidden md:flex md:items-center md:justify-center fixed z-50 top-0 h-full w-full bg-light-box'>
      <div className='z-[60] relative'>
        <div className='md:overflow-hidden h-[500px] w-[500px] rounded-xl'>
      {
        ProductData.map((item, index) => (
          (lightBoxIndex === index) ? <img src={item.image} key={index} alt="" /> : null
        ))
      }
      {/* Previous */}
      <button onClick={previousImage} className='absolute py-3 px-4 rounded-full top-[50%] -left-6 bg-white'>
        <img src={Previous} alt="" />
      </button>
      {/* Next */}
      <button onClick={nextImage} className='absolute py-3 px-4 rounded-full top-[50%] -right-5 bg-white'>
        <img src={Next} alt="" />
      </button> 
        </div>
        <div onClick={toggleLightBox} className='absolute cursor-pointer -top-8 right-0'>
        <Close />
      </div> 
      </div>
    </section>
    </> : null
  )
}

export default LightBox