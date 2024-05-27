// import React from 'react';
// import '.././Style.css';
// import '.././Bootstrapmin.css';
// import '.././Bootstrap-icons.css';
// import '.././Glightboxmin.css';


// const TeamMember = ({ name, role, imageSrc }) => {
//   return (
//     <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
//       <div className="member">
//         <div className="social">
//           <a href=""><i className="bi bi-twitter"></i></a>
//           <a href=""><i className="bi bi-facebook"></i></a>
//           <a href=""><i className="bi bi-linkedin"></i></a>
//           <a href=""><i className="bi bi-instagram"></i></a>
//         </div>
//         <img src={imageSrc} className="img-fluid" alt={name} />
//         <h4>{name}</h4>
//         <span>{role}</span>
//       </div>
//     </div>
//   );
// }

// const TeamSection = () => {
//   return (
//     <section id="team" className="team sections-bg">
//       <div className="container" data-aos="fade-up">
//         <div className="section-header">
//           <h2>Our Team</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//         </div>

//         <div className="row gy-4">
//           <TeamMember
//             name="Jhone Bi"
//             role="Application Manager"
//             imageSrc="../src/assets/images/team/team-1.jpg"
//             //../src/assets/images/testimonials/testimonial-1.jpg"
//           />
//           <TeamMember
//             name="Sani Awesome"
//             role="Social Media"
//             imageSrc="../src/assets/images/team/team-2.jpg"
//           />
//           <TeamMember
//             name="Andrio Willi"
//             role="Content Writer"
//             imageSrc="../src/assets/images/team/team-3.jpg"
//           />
//           <TeamMember
//             name="Afa Jonson"
//             role="Business Manager"
//             imageSrc="../src/assets/images/team/team-4.jpg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TeamSection;

import React from 'react';
import '.././Style.css'; // Ensure this CSS file contains styles for .social class
import '.././Bootstrapmin.css';
import '.././Bootstrap-icons.css';
import '.././Glightboxmin.css';
//import '.././Aos.css';
import newImage from './team-1.jpg';
import newImage2 from './team-2.jpg';
import newImage3 from './team-3.jpg';
import newImage4 from './team-4.jpg';

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <div className="member-content">
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
          <img src={imageSrc} className="img-fluid" alt={name} />
        </div>
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="team sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="row gy-4">
          <TeamMember
            name="Jhone Bi"
            role="Application Manager"
            imageSrc={newImage} 
          />

{/* "../src/assets/images/team/team-2.jpg" */}
          <TeamMember
            name="Sani Awesome"
            role="Social Media"
            imageSrc={newImage2}
          />
          <TeamMember
            name="Andrio Willi"
            role="Content Writer"
            imageSrc={newImage3}
          />
          <TeamMember
            name="Afa Jonson"
            role="Business Manager"
            imageSrc={newImage4}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
