import { useState, useContext } from 'react';
import { ProductThumbnail1, Delete } from "../images"
import CartContext from '../CartContext';

const CartDecription = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const { productCount, deleteCartItems, showCart } = useContext(CartContext);

  return (
    <article className={`${showCart ? "" : "hidden"} fixed w-[340px] h-[270px] bg-white z-20 top-20 inset-x-0 mx-auto rounded-xl shadow-lg md:right-20 md:mx-0 md:inset-auto md:top-24`}>
      <h2 className='py-4 px-4 font-bold'>Cart</h2>
      {/* Divider */}
      <div className="h-0.5 w-full bg-dark-grayish-blue"></div>
      {/* Product Pricing */}
      {
        productCount > 0 ? 
          <>
             <div className="flex justify-between items-center p-4 mt-4">
        {/* Product Thumbnail and Description */}
        <div className="flex items-center">
          <img src={ProductThumbnail1} className="w-12 h-12 mr-4 rounded-lg" alt="" />
          <div>
            <p className="text-dark-grayish-blue">Autumn Limited Edition...</p>
            <div>
              <span className="text-dark-grayish-blue"></span>{`$125.00 x ${productCount}`}<span className="font-bold ml-2">{ `$${125 * productCount}.00` }</span>
            </div>
          </div>
        </div>
        <div onClick={deleteCartItems}>
          <img src={Delete} className="cursor-pointer" alt="" />
        </div>
      </div>
      <div className='text-white font-bold p-4 mt-6 bg-orange w-[90%] mx-auto text-center'>
        Checkout
      </div>
          </> : <div className='flex h-[70%] items-center justify-center'>Your Cart is Empty</div>
      }
    </article>
  )
}

export default CartDecription