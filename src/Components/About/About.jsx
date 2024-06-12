import React from 'react'
import { useEffect } from 'react'
import '.././Style.css'
import '.././Bootstrapmin.css'
import '.././Bootstrap-icons.css'
import '.././Glightboxmin.css'
//import '.././Aos.css';
import newImage from './s1.png';

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src={newImage} className="img-fluid rounded-4 mb-4" alt="" />
            {/* "../src/assets/images/s1.png" */}
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul id="skills">
                <li>
                  HTML
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40" }' style={{backgroundColor: "rgb(248, 90, 64)", width: "82%"}}>
                      <span className="pct"style={{color:" rgb(248, 90, 64)", opacity: 1}}>82%</span>
                    </span>
                  </div>
                </li>
                <li>
                  CSS
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40"}' style={{backgroundColor: "rgb(248, 90, 64)", width: "100%"}}>
                    <span className="pct"style={{color:" rgb(248, 90, 64)", opacity: 1}}>100%</span>
                    </span>
                  </div>
                </li>
                <li>
                  PHP
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40"}' style={{backgroundColor: "rgb(248, 90, 64)", width: "60%"}} >
                    <span className="pct"style={{color:" rgb(248, 90, 64)", opacity: 1}}>60%</span>
                    </span>
                  </div>
                </li>
                <li>
                  SQL
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40"}' style={{backgroundColor: "rgb(248, 90, 64)", width: "30%"}} >
                    <span className="pct"style={{color:" rgb(248, 90, 64)", opacity: 1}}>30%</span>
                    </span>
                  </div>
                </li>
                <li>
                  IOS
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40"}' style={{backgroundColor: "rgb(248, 90, 64)", width: "80%"}}>
                    <span className="pct"style={{color:" rgb(248, 90, 64)", opacity: 1}}>80%</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="signature-wrap">
                <h4>Jhone Doe</h4>
                <p className="signature">Hello Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
