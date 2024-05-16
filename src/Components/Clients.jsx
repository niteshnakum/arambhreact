import React from 'react';
import Slider from 'react-slick';
import './Clients.css'

// Import CSS files for slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientsSection = () => {
  // Settings for the Slick Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Set to 5 to display 5 slides in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-1.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-2.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-3.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-4.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-5.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-6.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-7.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../src/assets/images/clients/client-8.png" className="img-fluid" alt="" /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
