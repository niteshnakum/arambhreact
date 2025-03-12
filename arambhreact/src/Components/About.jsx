import React from 'react'
import './Style.css'
import './Bootstrapmin.css'
import './Bootstrap-icons.css'
import './Glightboxmin.css'

// function Section() {
//   return (
//     <>

// <section id="about" className="about">
//         <div className="container" data-aos="fade-up">
//           <div className="section-header">
//             <h2>About Us</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//           </div>
//           <div className="row gy-4">
//             <div className="col-lg-6">
//             <img src={newImage}  className="img-fluid rounded-4 mb-4" alt="" />
                
//             </div>
//             <div className="col-lg-6">
//               <div className="content ps-0 ps-lg-5">
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                   dolore
//                   magna aliqua. Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//                   magna aliqua.
//                 </p>
//                 <ul id="skills">	
//                   <li>
//                     HTML
//                     <div className="bar-container">
//                       <span className="bar" data-bar="{ &quot;color&quot;: &quot;#f85a40&quot; }">
//                         <span className="pct">82%</span>
//                       </span>
//                     </div>
//                   </li>
//                   <li>
//                     CSS
//                     <div className="bar-container">
//                       <span className="bar" data-bar="{ &quot;color&quot;: &quot;#f85a40&quot;, &quot;delay&quot;: 600 }">
//                         <span className="pct">100%</span>
//                       </span>
//                     </div>
//                   </li>
//                   <li>
//                     PHP
//                     <div className="bar-container">
//                       <span className="bar" data-bar="{ &quot;color&quot;: &quot;#f85a40&quot;, &quot;delay&quot;: 1200 }">
//                         <span className="pct">60%</span>
//                       </span>
//                     </div>
//                   </li>
//                   <li>
//                     SQL
//                     <div className="bar-container">
//                       <span className="bar" data-bar="{ &quot;color&quot;: &quot;#f85a40&quot;, &quot;delay&quot;: 1800 }">
//                         <span className="pct">30%</span>
//                       </span>
//                     </div>
//                   </li>
//                   <li>
//                     IOS
//                     <div className="bar-container">
//                       <span className="bar" data-bar="{ &quot;color&quot;: &quot;#f85a40&quot;, &quot;delay&quot;: 2000 }">
//                         <span className="pct">80%</span>
//                       </span>
//                     </div>
//                   </li>
//                 </ul>
//                 <div className="signature-wrap">
//                   <h4>Jhone Doe</h4>
//                   <p className="signature">Hello Signature</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
    
//     </>
//   )
// }
// export default Section



const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src="../src/assets/images/s1.png" className="img-fluid rounded-4 mb-4" alt="" />
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
                    <span className="bar" data-bar='{ "color": "#f85a40" }'>
                      <span className="pct">82%</span>
                    </span>
                  </div>
                </li>
                <li>
                  CSS
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40", "delay": 600 }'>
                      <span className="pct">100%</span>
                    </span>
                  </div>
                </li>
                <li>
                  PHP
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40", "delay": 1200 }'>
                      <span className="pct">60%</span>
                    </span>
                  </div>
                </li>
                <li>
                  SQL
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40", "delay": 1800 }'>
                      <span className="pct">30%</span>
                    </span>
                  </div>
                </li>
                <li>
                  IOS
                  <div className="bar-container">
                    <span className="bar" data-bar='{ "color": "#f85a40", "delay": 2000 }'>
                      <span className="pct">80%</span>
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
