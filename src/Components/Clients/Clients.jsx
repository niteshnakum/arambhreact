import React from 'react';
import Slider from 'react-slick';
import './Clients.css'
//import '.././Style.css'
//import '.././Aos.css';
import newImage from './client-1.png';
import newImage2 from './client-2.png';
import newImage3 from './client-3.png';
import newImage4 from './client-4.png';
import newImage5 from './client-5.png';
import newImage6 from './client-6.png';
import newImage7 from './client-7.png';
import newImage8 from './client-8.png';


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
  // "../src/assets/images/clients/client-1.png"
  return (
    <div id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="swiper-slide"><img src={newImage} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage2} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage3} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage4} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage5} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage6} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage7} className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src={newImage8} className="img-fluid" alt="" /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
