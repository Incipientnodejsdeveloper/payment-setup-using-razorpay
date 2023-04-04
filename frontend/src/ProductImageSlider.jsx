import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import "./ProductImageSlider.css"

function ProductImageSlider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const { id } = useParams();
    useEffect(()=>{
        setActiveIndex(+id-1);
    },[id]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: true,
        // afterChange: (index) => {
        //     setActiveIndex(index);
        // },
    };

  const handleThumbnailClick = (index) => {
    console.log({index})
    setActiveIndex(index);
  };

  return (
    <div className="col-md-8">
      <div>
        <img
          src={images[activeIndex]}
          alt=""
          style={{ width: "500px", height: "320px",objectFit: 'contain'}}
        />
      </div>
      <Slider {...settings} className="mt-2">
        {images.map((image, index) => (
          <div key={index}>
            <button
             style={{border: "none"}}
              className={`product-image-slider__thumbnail ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt=""
                style={{ border: "none", width: "100px", height: "100px", objectFit: 'cover'}}
              />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default ProductImageSlider;
