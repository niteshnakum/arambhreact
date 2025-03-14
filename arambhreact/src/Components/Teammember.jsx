import React from 'react';

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <div className="social">
          <a href=""><i className="bi bi-twitter"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-linkedin"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
        </div>
        <img src={imageSrc} className="img-fluid" alt={name} />
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
}

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
            imageSrc="../src/assets/images/team/team-1.jpg"
            //../src/assets/images/testimonials/testimonial-1.jpg"
          />
          <TeamMember
            name="Sani Awesome"
            role="Social Media"
            imageSrc="../src/assets/images/team/team-2.jpg"
          />
          <TeamMember
            name="Andrio Willi"
            role="Content Writer"
            imageSrc="../src/assets/images/team/team-3.jpg"
          />
          <TeamMember
            name="Afa Jonson"
            role="Business Manager"
            imageSrc="../src/assets/images/team/team-4.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
