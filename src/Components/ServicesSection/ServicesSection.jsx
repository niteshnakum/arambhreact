import React from 'react';
import '.././Style.css'
import '.././Bootstrapmin.css'
import '.././Bootstrap-icons.css'
import '.././Glightboxmin.css'
//import '.././Aos.css';



const ServicesSection = () => {
  return (
    <div id="services" className="section">
      <div className="top-icon-box position-relative">
        <div className="container position-relative">
          <div className="row gy-4">

            {/* <p>Our services not only represent what we can do, they demonstrate what we can achieve for your business.
               Believe in us, believe in Arambh</p> */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-bezier"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Application Development</a></h4>
                <p>Elevate your brand to your customers' fingertips! 
                  Our app development transforms ideas into interactive experiences. 
                  Ready to make your mark in the business world? 
                  Contact us now, and let’s turn your app dreams into reality.
               </p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-menu-button-wide"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">AI/ML</a></h4>
                <p>Embrace the future with AI/ML solutions that redefine possibilities.
                  Turn data into your strategic advantage, predict trends, and lead with innovation.
                   Elevate your business - contact us today, and let's shape a smarter tomorrow together.
                </p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">Web Development</a></h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* End Icon Box */}

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">UI & UX</a></h4>
                <p>Immerse your audience in an unforgettable digital experience! 
                  Our UI/UX designs blend artistry with functionality, 
                  ensuring your brand captivates and resonates. Ready to leave a lasting impression? 
                  Contact us today and let's create designs that speak louder than words.
               </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">OutSourcing</a></h4>
                <p>Revolutionize your efficiency and cut costs with our outsourcing expertise. Unleash your team's full potential by letting us handle the rest. Ready to optimize your operations? Contact us now, and let efficiency redefine your success.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4" data-aos="fade-up">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-megaphone"></i></div>
                <h4 className="title"><a href="#" className="stretched-link">BlockChain Development</a></h4>
                <p>Embrace the secure and transparent future of technology with our Blockchain solutions. 
                  Revolutionize your operations, enhance security, </p>
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

