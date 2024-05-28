import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Timer from './Timer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file
import 'swiper/css';
//import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection';
import WavesContainer from './Components/WavesContainer/WavesContainer';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import About from './Components/About/About'
import Whyuse from './Components/Whyuse/Whyuse'
import Discuss from './Components/Discuss/Discuss'
import Testimonials from './Components/Testimonials/Testimonials'
//import TeamSection from './Components/Teammember/Teammember';
//import FaqSection from './Components/FrequentlyAsked/FrequentlyAsked';
import RecentProject from './Components/RecentProject/RecentProject';
import ClientsSection from './Components/Clients/Clients';
//import DownloadAppPromo from './Components/Download/Download';
import ContactSection from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';



function App() {
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

{/* <Router>
      <div>
        <Routes>
          
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          
        </Routes>
        <Footer />
      </div>
    </Router> */}
     
     <Timer></Timer>
     <Navbar></Navbar> 
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
    {/* <DownloadAppPromo></DownloadAppPromo> */}
    <ContactSection></ContactSection>
    <Footer></Footer>
      </>
      
  )
}


export default App





