import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagenes from "../resources/Imagenes";
import "../styles/Slider.css";

export default function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <a href="https://www.youtube.com/watch?v=ZhXXU0efIEQ" target="_blank" rel="noreferrer">
            <img src={Imagenes.slider1} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="https://www.youtube.com/watch?v=SyqgEK0CEVE" target="_blank" rel="noreferrer">
            <img src={Imagenes.slider2} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="https://www.youtube.com/watch?v=ov1i5TYUTJg" target="_blank" rel="noreferrer">
            <img src={Imagenes.slider3} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
}