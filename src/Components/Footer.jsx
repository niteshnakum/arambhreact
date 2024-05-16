import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <h1>Tech<span>Theme</span></h1>
                  </a>
                </div>
                <div className="footer-text">
                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-google"></i></a>
                  <a href="#"><i className="bi bi-youtube"></i></a>
                  <a href="#"><i className="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="index.html"><i className="bi bi-chevron-double-right"></i>Home</a></li>
                  <li><a href="about.html"><i className="bi bi-chevron-double-right"></i>About</a></li>
                  <li><a href="services.html"><i className="bi bi-chevron-double-right"></i>Services</a></li>
                  <li><a href="portfolio.html"><i className="bi bi-chevron-double-right"></i>Portfolio</a></li>
                  <li><a href="testimonials.html"><i className="bi bi-chevron-double-right"></i>Testimonials</a></li>
                  <li><a href="contact.html"><i className="bi bi-chevron-double-right"></i>Contact</a></li>
                  <li><a href="about.html"><i className="bi bi-chevron-double-right"></i>About us</a></li>
                  <li><a href="packages.html"><i className="bi bi-chevron-double-right"></i>Pricing</a></li>
                  <li><a href="faq.html"><i className="bi bi-chevron-double-right"></i>FAQs</a></li>
                  <li><a href="coming-soon.html"><i className="bi bi-chevron-double-right"></i>Coming Soon!</a></li>
                  <li><a href="blogs.html"><i className="bi bi-chevron-double-right"></i>Our News</a></li>
                  <li><a href="services.html"><i className="bi bi-chevron-double-right"></i>Our Services</a></li>
                  <li><a href="team.html"><i className="bi bi-chevron-double-right"></i>Our Team</a></li>
                  <li><a href="packages.html"><i className="bi bi-chevron-double-right"></i>Packages</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact:</h3>
                </div>
                <div className="contact-info">
                  <h6>Address:</h6>
                  <p><i className="bi bi-geo-alt-fill"></i> 11 West Town, PBo 12345, United States</p>
                  {/* Change 'Wall%20Street,%20NYC' with your own business name */}
                  <p><a href="https://www.google.com/maps/dir//Wall%20Street,%20NYC" target="_blank">Get Directions</a></p>
                </div>
                <div className="contact-info">
                  <h6>Phone:</h6>
                  <p><i className="bi bi-telephone-fill"></i> +1 1234 56 789</p>
                  <p><i className="bi bi-telephone-fill"></i> +1 1234 56 780</p>
                </div>
                <div className="contact-info">
                  <h6>Email:</h6>
                  <p><i className="bi bi-envelope-fill"></i> info@example.com</p>
                  <p><i className="bi bi-envelope-fill"></i> email@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-left text-lg-left">
              <div className="copyright-text">
                <p>TechTheme © 2023 - Designed by Zr Themes.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="footer-menu text-right">
                <ul>
                  <li><a href="sample.html">Privcay Policy</a></li>
                  <li><a href="sample.html">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
