import React from 'react';
import { useEffect } from 'react';
import '.././Style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import newImage from './avatar.jpg';
import newImage2 from './avatar2.jpg';
import newImage3 from './avatar3.jpg';
//import newImage4 from './testimonial-4.jpg';

// TestimonialCard Component
const TestimonialCard = ({ name, role, imageSrc, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-item">
        <div className="d-flex align-items-center info-box">
          <img src={imageSrc} className="testimonial-img flex-shrink-0" alt={name} />
          <div>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
          </div>
        </div>
        <p>
          <i className="bi bi-quote quote-icon-left" />
          {quote}
          <i className="bi bi-quote quote-icon-right" />
        </p>
      </div>
    </div>
  );
};

// TestimonialsSection Component
const TestimonialsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Adjust number of cards shown per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Slider {...settings}>
          <TestimonialCard
            name="Prashant"
            role="Innovquant"
            imageSrc={newImage}
            quote="Absolutely amazed by how easily I was able to communicate with the team. My company needed website development and the whole process was meticulously designed. Liked it overall!"
          />
          <TestimonialCard
            name="Satish Garwal"
            role="Aaronsoftech"
            imageSrc={newImage2}
            quote="The attention to detail and commitment to quality were evident at every stage. Their team were not just developers; they were partners invested in the success of our app. They navigated challenges with ease, ensuring a smooth development journey.Thanks guys!"
          />
          <TestimonialCard
            name="Rahul Bajaj "
            role="Saayash Consultancy"
            imageSrc={newImage3}
            quote="I think what sets them apart is how receptive they were to feedback. If you're on the lookout for a designer who can transform your vision into a visually captivating and user-centric reality, they are the one. We're thrilled with the outcome and look forward to future partnerships!"
          />
          {/* <TestimonialCard
            name="Fizzi Brandon"
            role="Freelancer"
            imageSrc={newImage4}
            quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim."
          /> */}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsSection;
