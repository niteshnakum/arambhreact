import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Navbar from './Components/Navbar/Navbar';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import AboutSection from './Components/About/About';
import TestimonialsSection from './Components/Testimonials/Testimonials';
import RecentProjectSection from './Components/RecentProject/RecentProject';
import ContactSection from './Components/Contact/Contact';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} /> 
            <Route path="/projects" element={<RecentProjectSection />} />
            <Route path="/contact" element={<ContactSection />} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App

// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Navbar from './Components/Navbar/Navbar';
// import ServicesSection from './Components/ServicesSection/ServicesSection';
// import AboutSection from './Components/About/About';
// import TestimonialsSection from './Components/Testimonials/Testimonials';
// import RecentProjectSection from './Components/RecentProject/RecentProject';
// import ContactSection from './Components/Contact/Contact';
// import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
// import Footer from './Components/Footer/Footer';

// function App() {
//   return (
//     <div>
//       <Router>
//         <AppContent />
//       </Router>
//     </div>
//   );
// }

// function AppContent() {
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   // Redirect to the home page on refresh
//   //   navigate('/');
//   // }, [navigate]);

//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/services" element={<ServicesSection />} />
//         <Route path="/about" element={<AboutSection />} />
//         <Route path="/testimonials" element={<TestimonialsSection />} />
//         <Route path="/projects" element={<RecentProjectSection />} />
//         <Route path="/contact" element={<ContactSection />} />
//       </Routes>
//       <Footer />
      
//     </div>
//   );
// }

// export default App;

