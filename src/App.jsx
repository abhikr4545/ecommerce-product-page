import { useContext } from 'react';

import { CartProvider } from './CartContext';

import Navbar from './components/Navbar';
import HeroContainer from './components/HeroContainer';
import MobileCarousel from './components/MobileCarousel';
import LightBox from "./components/LightBox"

const App = () => {


  return (
    <>
      <CartProvider>
        <Navbar />
        <MobileCarousel />
        <HeroContainer />
        <LightBox />
      </CartProvider>
    </>
  )
}

export default App