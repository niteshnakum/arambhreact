import React from 'react';
import './Style.css'
import './Bootstrapmin.css'
import './Bootstrap-icons.css'
import './Glightboxmin.css'



const ServicesSection = () => {
  return (
    <div id="services" className="section">
      <div className="top-icon-box position-relative">
        <div className="container position-relative">
          <div className="row gy-4">

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-bezier"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Application Design</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-menu-button-wide"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Web Hosting</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Social Media</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">SEO Optimization</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Cloud Server</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Data Secuity</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            {/* Repeat the above structure for other icon boxes */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

