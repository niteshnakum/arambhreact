import React from 'react'
import '.././Style.css'
import '.././Bootstrapmin.css'
import '.././Bootstrap-icons.css'

import '.././Glightboxmin.css'
//import '.././Aos.css';
import newImage from './s2.png';

function Whyuse() {
  return (
    <>
     <section id="whyus" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Why Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            
          </div>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua. Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-chevron-double-right" /> Web Design</li>
                  <li><i className="bi bi-chevron-double-right" /> Web Development</li>
                  <li><i className="bi bi-chevron-double-right" /> Shopify Development</li>
                  <li><i className="bi bi-chevron-double-right" /> E-commerce</li>
                  <li><i className="bi bi-chevron-double-right" /> UI/UX Design</li>
                  <li><i className="bi bi-chevron-double-right" /> Wordpress Development</li>
                  <li><i className="bi bi-chevron-double-right" /> Search Engine Optimization</li>
                  <li><i className="bi bi-chevron-double-right" /> Cloud Services</li>
                  <li><i className="bi bi-chevron-double-right" /> Mobile App Development</li>
                  <li><i className="bi bi-chevron-double-right" /> Data Security</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
            <img src={newImage} className="img-fluid rounded-4 mb-4" alt="" />
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Whyuse
