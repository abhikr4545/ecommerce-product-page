import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [productCount, setProductCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  const addToCart = (count) => {
    setProductCount(productCount + count);
  }

  const toggleCart = () => {
    setShowCart(!showCart)
    setShowMenu(true)
  };

  const deleteCartItems = () => {
    setProductCount(0);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowCart(false);
  };

  const toggleLightBox = () => setShowLightBox(!showLightBox);

  const setCurrentImageLightBox = (index) => {
    setLightBoxIndex(index);
  }

  return (
    <CartContext.Provider value={{ productCount, addToCart, deleteCartItems, showCart, toggleCart, toggleMenu, showMenu, showLightBox, toggleLightBox, setCurrentImageLightBox, lightBoxIndex }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext;