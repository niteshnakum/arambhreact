import React from 'react';
import './Style.css'
import './Bootstrapmin.css'
import './Bootstrap-icons.css'
import './Glightboxmin.css'


const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-12  order-lg-1 d-flex flex-column justify-content-center text-center caption">
            <h2>Arambh<span className="circle"> Technologies</span></h2>
            <h3>Begin With Innovation, Begin With Arambh</h3>
            <div className="d-flex justify-content-center">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://youtu.be/ZV16ev0n9J8" className="glightbox btn-watch-video d-flex align-items-center"><i
                  className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
