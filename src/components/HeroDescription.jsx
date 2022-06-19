import { useState, useContext } from 'react';
import CartContext from '../CartContext';

import { Plus, Minus, Cart } from '../images';

const HeroDescription = () => {

  const [productQuantity, setProductQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const increaseProductCount = () => setProductQuantity(productQuantity + 1);

  const decreaseProductCount = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  }

  const handleClick = () => {
    if (productQuantity > 0) {
      addToCart(productQuantity)
      setProductQuantity(0)
    }
  }

  return (
    <article className='font-kumbh px-4 pt-4 md:px-0 md:w-[600px]'>
      <div className='text-orange w-[160px] font-bold text-lg'>Sneaker Company</div>
      <h1 className='text-3xl font-bold w-[280px] mt-5'>Fall Limited Edition Sneakers</h1>
      <p className='mt-5 text-dark-grayish-blue text-sm w-[320px]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      {/* Price */}
      <div className='mt-5 flex items-center justify-between md:flex-col md:items-start'>
        <div className='font-bold text-3xl flex items-center'>
          $125.00 <span className='text-[17px] bg-pale-orange text-orange ml-6 px-1 rounded-lg'>50%</span>
        </div>
        <span className='text-grayish-blue font-semibold line-through'>$250.00</span>
      </div>
      {/* Quantity And Add To Cart */}
      <div className='flex flex-col justify-center mt-5 mb-5 items-center md:flex-row md:justify-start md:mt-8 md:mb-0'>
        <div className='flex justify-between px-4 py-4 items-center bg-light-grayish-blue rounded-lg w-full md:max-w-[160px]'>
          <img src={Minus} className="cursor-pointer" alt="" onClick={decreaseProductCount} />
          <span className='font-bold text-xl'>{productQuantity}</span>
          <img src={Plus} className="cursor-pointer" alt="" onClick={increaseProductCount} />
        </div>
        <button onClick={handleClick} className="bg-orange shadow-lg flex items-center text-white mt-5 w-full font-bold justify-center py-4 cursor-pointer rounded-lg md:mt-0 md:ml-4 md:w-[280px]">
          <img src={Cart} alt="" className='mr-4' />
          Add To Cart
        </button>
      </div>
    </article>
  )
}

export default HeroDescription