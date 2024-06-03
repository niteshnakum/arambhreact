// import React from 'react'
// import '.././Style.css';
// import '.././Bootstrapmin.css';
// //import '.././Aos.css';
// //import './Aos.css'
// //import newImage from './s2.png';

// function Discuss() {
//   return (
//     <>
//         <section id="call-to-action" className="call-to-action">
//         <div className="container text-center" data-aos="zoom-out">
//           <h3>Let's Discuss your Projects</h3>
//           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//           <a className="cta-btn" href="mailto:info@example.com">Contact Us</a>
          
//         </div>
//       </section>
      
//     </>
//   )
// }

// export default Discuss


import React from 'react';
import { Link } from 'react-scroll';
import '.././Style.css';
import '.././Bootstrapmin.css';

function Discuss() {
  return (
    <>
      <section id="call-to-action" className="call-to-action">
        <div className="container text-center" data-aos="zoom-out">
          <h3>Let's Discuss your Projects</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <Link
            className="cta-btn"
            to="contactSection"
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Discuss;
