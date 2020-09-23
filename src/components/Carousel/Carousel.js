import React, { useState } from "react";
//Components
import ImageComp from "./ImageComp";
//Includes
import img1 from "../../Assets/images/slider/slide1.jpg";
import img2 from "../../Assets/images/slider/slide2.jpg";
import img3 from "../../Assets/images/slider/slide3.jpg";

const Carousel = () => {
  //Carousel Images
  let carouselArr = [<ImageComp src={img3} />, <ImageComp src={img2} />, <ImageComp src={img1} />];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
  };
  const goRight = () => {
    x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);
  };

  return (
    <div className="slider">
      {carouselArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}

      {/*Carousel Buttons*/}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
