import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Sliders() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <Slider {...settings} className="w-full">
        <div className="relative">
          <div>
            <img
              src={require("../../image/banner/background.png")}
              alt=""
              decoding="async"
              loading="lazy"
              width="100%"
            />
          </div>
       
        </div>
      
      </Slider>
    </div>
  );
}
export default Sliders;
