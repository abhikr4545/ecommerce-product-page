import { useState, useContext } from "react";
import CartContext from "../CartContext";

import { Logo, Cart, Avatar, Menu, Close } from "../images"
import CartDecription from "./CartDecription";

const Navbar = () => {

  const { productCount, toggleCart, showMenu, toggleMenu } = useContext(CartContext);
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  
  return (
    <nav className="font-kumbh container flex justify-between items-center py-4 md:py-8 md:border-b-[1px] border-b-dark-grayish-blue">
      <div className="md:flex md:justify-between md:items-center md:gap-9">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Menu} onClick={() => toggleMenu()} className="md:hidden h-5 w-6" alt="" />
          <img src={Logo} className="cursor-pointer ml-3" alt="sneakers" />
        </div>
        {/* Links */}
        <ul className={`fixed bg-off-white z-10 h-full space-y-8 pt-5 pl-4 w-4/6 top-0 transition-all duration-300 ease-in-out ${showMenu ? "-left-full" : "left-0"} md:h-auto md:w-auto md:static md:flex md:space-x-9 md:ml-10 md:z-auto md:bg-white md:space-y-0 md:pt-0 md:pl-0`}>
          <div className="md:hidden" onClick={() => toggleMenu()}>
            <img className="md:hidden" src={Close} alt="" />
          </div>
          {
            links.map((link) => (
              <li className="text-sm border-b-4 border-b-transparent hover:border-b-orange text-dark-grayish-blue hover:text-black transition-all duration-300 ease-in-out" key={link}>
                <a href="/">{ link }</a>
              </li>
            ))
          }
        </ul>
      </div>
      {/* Order Section */}
      <div className="flex items-center">
        {/* Cart */}
        <div className="relative">
          <img onClick={toggleCart} src={Cart} alt="Cart" className="mr-6 md:mr-10 md:cursor-pointer" />
          { productCount > 0 ? <div className="absolute -top-2 left-2 bg-orange text-white rounded-full text-xs px-2">
            {productCount}
          </div> : null }
          <CartDecription />
        </div>
        {/* Avatar */}
        <div>
          <img src={Avatar} alt="Avatar" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] cursor-pointer border-2 border-transparent hover:border-orange transition-all duration-300 ease-in-out rounded-full" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar