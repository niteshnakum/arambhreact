import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions you want with the form data, like sending it to a server
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="contact-section section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12" data-aos="fade-right">
            <div className="contact-information-box-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single-contact-info-box">
                    <div className="contact-info">
                      <h6>Address:</h6>
                      <p>11 West Town</p>
                      <p>PBo 12345, United States</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-contact-info-box">
                    <div className="contact-info">
                      <h6>Phone:</h6>
                      <p>+1 1234 56 789</p>
                      <p>+1 1234 56 780</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-contact-info-box">
                    <div className="contact-info">
                      <h6>Email:</h6>
                      <p>info@example.com</p>
                      <p>email@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12" data-aos="fade-left">
            <div className="contact-form-box contact-form contact-form-3">
              <div className="form-container-box">
                <form className="contact-form form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-input-box">
                          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-input-box">
                          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group form-input-box">
                          <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group form-input-box">
                          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="7" placeholder="Write Your Message*" required></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit">Send Message</button>
                      </div>
                      <div className="messages">
                        {/* Message display after form submission */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
