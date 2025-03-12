import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import WavesContainer from './Components/WavesContainer';
import ServicesSection from './Components/ServicesSection';
import About from './Components/About'
import Whyuse from './Components/Whyuse'
import Discuss from './Components/Discuss'
import Testimonials from './Components/Testimonials'
import TeamSection from './Components/Teammember';
import FaqSection from './Components/FrequentlyAsked';
import RecentPostsSection from './Components/RecentPosts';
import ClientsSection from './Components/Clients';
import DownloadAppPromo from './Components/Download';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
    <HeroSection></HeroSection> 
    <WavesContainer></WavesContainer>
    <ServicesSection></ServicesSection>
    <About></About>
    <Whyuse></Whyuse>
    <Discuss></Discuss>
    <Testimonials />
    <TeamSection></TeamSection>
    <FaqSection></FaqSection>
    <RecentPostsSection></RecentPostsSection>
    <ClientsSection></ClientsSection> 
    <DownloadAppPromo></DownloadAppPromo>
    <ContactSection></ContactSection>
    <Footer></Footer>
      </>
      
  )
}

export default App





