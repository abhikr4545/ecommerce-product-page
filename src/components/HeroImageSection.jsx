import { useState, useContext } from "react";
import CartContext from '../CartContext';
import { ProductData } from "../ProductData";
import { ProductDataThumbnail } from '../ProductDataThumbnail'

const HeroImageSection = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const { setCurrentImageLightBox, toggleLightBox } = useContext(CartContext);

  const handleClick = () => {
    setCurrentImage(currentImage);
    toggleLightBox();
  }

  return (
    <article className="hidden md:block md:pl-10 md:w-[550px]">
      {/* Display Section */}
      <div onClick={handleClick}>
        <img src={ProductData[currentImage].image} alt="" className="w-[430px] h-[400px] cursor-pointer rounded-lg" />
      </div>
      {/* Image Preview */}
      <div className="flex pt-8 space-x-7">
        {
          ProductDataThumbnail.map((item, index) => (
            <div key={index} className={`border-4 rounded-lg ${index === currentImage ? "border-orange opacity-40" : "border-transparent"}`}>
              <img src={item.image} alt="" className={`cursor-pointer w-20 h-20 rounded-lg  ${index === currentImage && "opacity-40"}`} onClick={() => { setCurrentImage(index);  setCurrentImageLightBox(index)}} />
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default HeroImageSection