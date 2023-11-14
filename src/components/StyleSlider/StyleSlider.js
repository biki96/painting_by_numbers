import './StyleSlider.css';
import React from 'react';
import Slider from 'react-slick';

const StyleSlider = ({ styles, onStyleSelect }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="style-slider">
      <Slider {...settings}>
        {styles.map((style, index) => (
          <div key={index} onClick={() => onStyleSelect(style)}>
            <img src={style.image} alt={style.name} />
            <p>{style.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StyleSlider;
