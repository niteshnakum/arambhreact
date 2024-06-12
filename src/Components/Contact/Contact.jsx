// import React, { useState } from 'react';
// //import '.././Aos.css';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     services: '',
//     // subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform any actions you want with the form data, like sending it to a server
//     console.log(formData);
//     // Clear the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       services: '',
//       // subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div id="contact" className="contact-section section">
//       <div className="section-header">
//         <h2>Contact Us</h2>
//         <p><b>We’d like to connect with you!</b></p>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-md-12" data-aos="fade-right">
//             <div className="contact-information-box-3">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="single-contact-info-box">
//                     <div className="contact-info">
//                       <h6>Address:</h6>
//                       <p>29 Vinayak Nagar 313001</p>
//                       <p>Udaipur, Rajasthan, India</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-12">
//                   <div className="single-contact-info-box">
//                     <div className="contact-info">
//                       <h6>Phone:</h6>
//                       <p>+7014935101</p>
//                       {/* <p>+1 1234 56 780</p> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-12">
//                   <div className="single-contact-info-box">
//                     <div className="contact-info">
//                       <h6>Email:</h6>
//                       <p>hello@arambh.tech</p>
//                       {/* <p>email@example.com</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-12" data-aos="fade-left">
//             <div className="contact-form-box contact-form contact-form-3">
//               <div className="form-container-box">
//                 <form className="contact-form form" onSubmit={handleSubmit}>
//                   <div className="controls">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="form-group form-input-box">
//                           <input 
//                             type="text" 
//                             className="form-control" 
//                             id="name" 
//                             name="name" 
//                             value={formData.name} 
//                             onChange={handleChange} 
//                             placeholder="Name*" 
//                             required 
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group form-input-box">
//                           <input 
//                             type="email" 
//                             className="form-control" 
//                             id="email" 
//                             name="email" 
//                             value={formData.email} 
//                             onChange={handleChange} 
//                             placeholder="Email*" 
//                             required 
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group form-input-box">
//                           <input 
//                             type="text" 
//                             className="form-control" 
//                             id="phone" 
//                             name="phone" 
//                             value={formData.phone} 
//                             onChange={handleChange} 
//                             placeholder="Phone*" 
//                             required 
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group form-input-box">
//                           <input 
//                             type="text" 
//                             className="form-control" 
//                             id="company" 
//                             name="company" 
//                             value={formData.company} 
//                             onChange={handleChange} 
//                             placeholder="Company" 
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="form-group form-input-box">
//                           <select 
//                             className="form-control" 
//                             id="services" 
//                             name="services" 
//                             value={formData.services} 
//                             onChange={handleChange} 
//                             required
//                           >
//                             <option value="" disabled>Select Services You Need*</option>
//                             <option value="Web Development">Web Development</option>
//                             <option value="SEO">SEO</option>
//                             <option value="Digital Marketing">Digital Marketing</option>
//                             {/* Add more options as needed */}
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="form-group form-input-box">
//                           {/* <input 
//                             type="text" 
//                             className="form-control" 
//                             name="subject" 
//                             value={formData.subject} 
//                             onChange={handleChange} 
//                             placeholder="Subject" 
//                             required 
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="form-group form-input-box">
//                           <textarea 
//                             className="form-control" 
//                             id="message" 
//                             name="message" 
//                             value={formData.message} 
//                             onChange={handleChange} 
//                             rows="7" 
//                             placeholder="Tell us a little more about your business needs*" 
//                             required
//                           ></textarea>
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <button type="submit">I'm In</button>
//                       </div>
//                       <div className="messages">
//                         {/* Message display after form submission */}
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;


import React, { useState, forwardRef } from 'react';
import { Element } from 'react-scroll';
import { useEffect } from 'react';

const ContactSection = forwardRef((props, ref) => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      services: '',
      message: ''
    });
  };

  return (
    <Element name="contactSection" ref={ref}>
      <div id="contact" className="contact-section section">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p><b>We’d like to connect with you!</b></p>
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
                        <p>29 Vinayak Nagar 313001</p>
                        <p>Udaipur, Rajasthan, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-contact-info-box">
                      <div className="contact-info">
                        <h6>Phone:</h6>
                        <p>+91-7014935101</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-contact-info-box">
                      <div className="contact-info">
                        <h6>Email:</h6>
                        <p>hello@arambh.tech</p>
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
                            <input 
                              type="text" 
                              className="form-control" 
                              id="name" 
                              name="name" 
                              value={formData.name} 
                              onChange={handleChange} 
                              placeholder="Name*" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-input-box">
                            <input 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              name="email" 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="Email*" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-input-box">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="phone" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="Phone*" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-input-box">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="company" 
                              name="company" 
                              value={formData.company} 
                              onChange={handleChange} 
                              placeholder="Company" 
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-input-box">
                            <select 
                              className="form-control" 
                              id="services" 
                              name="services" 
                              value={formData.services} 
                              onChange={handleChange} 
                              required
                            >
                              <option value="" disabled>Select Services You Need*</option>
                              <option value="Web Development">Web Development</option>
                              <option value="SEO">SEO</option>
                              <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group form-input-box">
                            <textarea 
                              className="form-control" 
                              id="message" 
                              name="message" 
                              value={formData.message} 
                              onChange={handleChange} 
                              rows="7" 
                              placeholder="Tell us a little more about your business needs*" 
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit">I'm In</button>
                        </div>
                        <div className="messages">
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
    </Element>
  );
});

export default ContactSection;
