// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// //import '.././Aos.css';
// import newImage from './testimonial-1.jpg';
// import newImage2 from './testimonial-2.jpg';
// import newImage3 from './testimonial-3.jpg';
// import newImage4 from './testimonial-4.jpg';

// const TestimonialCard = ({ name, role, imageSrc, quote }) => {
//   return (

    
//     <div className="testimonial-wrap">
//       <div className="testimonial-item">
//         <div className="d-flex align-items-center info-box">
//           <img src={imageSrc} className="testimonial-img flex-shrink-0" alt={name} />
//           <div>
//             <h3>{name}</h3>
//             <h4>{role}</h4>
//             <div className="stars">
//               <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
//             </div>
//           </div>
//         </div>
//         <p>
//           <i className="bi bi-quote quote-icon-left" />
//           {quote}
//           <i className="bi bi-quote quote-icon-right" />
//         </p>
//       </div>
//     </div>
//   );
// }

// const TestimonialsSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true
//   };

//   return (
//     <section id="testimonials" className="testimonials">
//       <div className="container" data-aos="fade-up">
//         <div className="section-header">
//           <h2>Testimonials</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//         </div>
//         <Slider {...settings}>
//           <TestimonialCard
//             name="Jhone Doe"
//             role="CFO"
//             imageSrc={newImage}
//             quote="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
//           />
//           <TestimonialCard
//             name="Afa Rose"
//             role="Web Designer"
//             imageSrc={newImage2}
//             quote="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet."
//           />
//           <TestimonialCard
//             name="Keena Lara"
//             role="Store Owner"
//             imageSrc={newImage3}
//             quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim."
//           />
//           {/* "../src/assets/images/testimonials/testimonial-4.jpg" */}
//           <TestimonialCard
//             name="Fizzi Brandon"
//             role="Freelancer"
//             imageSrc={newImage4}
//             quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim."
//           />
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSection;

import React from 'react';
import '.././Style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import newImage from './testimonial-1.jpg';
import newImage2 from './testimonial-2.jpg';
import newImage3 from './testimonial-3.jpg';
import newImage4 from './testimonial-4.jpg';

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
            name="Jhone Doe"
            role="CFO"
            imageSrc={newImage}
            quote="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
          />
          <TestimonialCard
            name="Afa Rose"
            role="Web Designer"
            imageSrc={newImage2}
            quote="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet."
          />
          <TestimonialCard
            name="Keena Lara"
            role="Store Owner"
            imageSrc={newImage3}
            quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim."
          />
          <TestimonialCard
            name="Fizzi Brandon"
            role="Freelancer"
            imageSrc={newImage4}
            quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim."
          />
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsSection;
