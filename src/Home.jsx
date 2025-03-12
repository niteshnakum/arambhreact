import React, { useEffect } from 'react';

import { useState } from 'react'
import Timer from './Timer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file
import 'swiper/css';
//import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
//import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import WavesContainer from './Components/WavesContainer/WavesContainer';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import About from './Components/About/About'
import Whyuse from './Components/Whyuse/Whyuse'
import Discuss from './Components/Discuss/Discuss'
//import PartnerSay from './Components/PartnersSay/PartnerSay';
import Testimonials from './Components/Testimonials/Testimonials'
//import TeamSection from './Components/Teammember/Teammember';
//import FaqSection from './Components/FrequentlyAsked/FrequentlyAsked';
import RecentProject from './Components/RecentProject/RecentProject';
import ClientsSection from './Components/Clients/Clients';
//import DownloadAppPromo from './Components/Download/Download';
import ContactSection from './Components/Contact/Contact';
//import Footer from './Components/Footer/Footer';




function Home() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      delay: 200, // Delay before animations start
      once: true // Only animate elements once
    });
  }, []);
  
  return (
    <>
    <Timer></Timer>
    <HeroSection></HeroSection> 
    <WavesContainer></WavesContainer>
    <ServicesSection></ServicesSection>
    <About></About>
     <Whyuse></Whyuse> 
    <Discuss></Discuss>
    <Testimonials />
    {/* <TeamSection></TeamSection> */}
    {/* <FaqSection></FaqSection> */}
    <RecentProject></RecentProject>
    <ClientsSection></ClientsSection> 
    <ContactSection></ContactSection>
    {/* <DownloadAppPromo></DownloadAppPromo> */}
    
    </>  
  )
}


export default Home ;


// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import Timer from './Timer';

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import CSS file
// import 'swiper/css';
// import './App.css';
// import HeroSection from './Components/HeroSection/HeroSection';
// import WavesContainer from './Components/WavesContainer/WavesContainer';
// import ServicesSection from './Components/ServicesSection/ServicesSection';
// import About from './Components/About/About';
// import Whyuse from './Components/Whyuse/Whyuse';
// import Discuss from './Components/Discuss/Discuss';
// import Testimonials from './Components/Testimonials/Testimonials';
// import RecentProject from './Components/RecentProject/RecentProject';
// import ClientsSection from './Components/Clients/Clients';
// import ContactSection from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer'; // Import the Footer component

// function Home() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: 'ease-in-out', // Animation easing
//       delay: 200, // Delay before animations start
//       once: true // Only animate elements once
//     });

//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Timer />
//       <HeroSection />
//       <WavesContainer />
//       <ServicesSection />
//       <About />
//       <Whyuse />
//       <Discuss />
//       <Testimonials />
//       <RecentProject />
//       <ClientsSection />
//       <ContactSection />
//       <Footer /> {/* Ensure the Footer component is added only once */}
//     </>
//   );
// }

// export default Home;





// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import CSS file
// import 'swiper/css';
// import './App.css'
// import Timer from './Timer';
// //import Navbar from './Components/Navbar/Navbar'
// import HeroSection from './Components/HeroSection/HeroSection';
// import WavesContainer from './Components/WavesContainer/WavesContainer';
// import ServicesSection from './Components/ServicesSection/ServicesSection';
// import About from './Components/About/About'
// import Whyuse from './Components/Whyuse/Whyuse'
// import Discuss from './Components/Discuss/Discuss'
// //import PartnerSay from './Components/PartnersSay/PartnerSay';
// import Testimonials from './Components/Testimonials/Testimonials'
// //import TeamSection from './Components/Teammember/Teammember';
// //import FaqSection from './Components/FrequentlyAsked/FrequentlyAsked';
// import RecentProject from './Components/RecentProject/RecentProject';
// import ClientsSection from './Components/Clients/Clients';
// //import DownloadAppPromo from './Components/Download/Download';
// import ContactSection from './Components/Contact/Contact';
// //import Footer from './Components/Footer/Footer';

// function Home() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: 'ease-in-out', // Animation easing
//       delay: 200, // Delay before animations start
//       once: true // Only animate elements once
//     });

//     const handleHashChange = () => {
//       const hash = window.location.hash;
//       if (hash) {
//         const section = document.querySelector(hash);
//         if (section) {
//           section.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };

//     handleHashChange(); // scroll on initial load if there's a hash
//     window.addEventListener('hashchange', handleHashChange); // handle hash changes

//     return () => {
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, []);

//   return (
//     <>
//       <Timer />
//       <HeroSection id="hero" />
//       <WavesContainer />
//       <ServicesSection id="services" />
//       <About id="about" />
//       <Whyuse id="whyuse" />
//       <Discuss id="discuss" />
//       <Testimonials id="testimonials" />
//       {/* <TeamSection id="team" /> */}
//       {/* <FaqSection id="faq" /> */}
//       <RecentProject id="projects" />
//       <ClientsSection id="clients" />
//       {/* <DownloadAppPromo id="download" /> */}
//       <ContactSection id="contact" />
//     </>
//   );
// }

// export default Home;


