// import React, { useState, useEffect } from 'react';
// // import '.././Style.css';
// import './Navbar.css';
// import '.././Bootstrapmin.css';
// import '.././Bootstrap-icons.css'
// import '.././Glightboxmin.css';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('');
//   const [isScrolled, setScrolled] = useState(false);
//   const [isMobileNavVisible, setMobileNavVisible] = useState(false);
//   //const [activeDropdown, setActiveDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);

//       const position = window.scrollY + 200;
//       const navbarLinks = document.querySelectorAll('#navbar a');

//       navbarLinks.forEach(navbarlink => {
//         const hash = navbarlink.hash;
//         if (!hash) return;

//         const section = document.querySelector(hash);
//         if (!section) return;

//         if (
//           position >= section.offsetTop &&
//           position <= section.offsetTop + section.offsetHeight
//         ) {
//           setActiveLink(hash);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileNav = () => {
//     setMobileNavVisible(!isMobileNavVisible);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 992) {
//         setMobileNavVisible(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <header id="header" className={`header d-flex align-items-center ${isScrolled ? 'sticked sticky-menu' : 'sticked'}`}>
//       <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
//         <a href="index.html" className="logo d-flex align-items-center">
//           <h1>Arambh<span>Technologies</span></h1>
//         </a>
//         <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'navbar-mobile' : ''}`}>
//           <ul>
//             <li><a href="#hero" className={activeLink === '#hero' ? 'active' : ''}>Home</a></li>
//             <li><a href="#services" className={activeLink === '#services' ? 'active' : ''}>Services</a></li>
//             <li><a href="#about" className={activeLink === '#about' ? 'active' : ''}>About</a></li>
//             <li><a href="#testimonials" className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</a></li>
//             <li><a href="#team" className={activeLink === '#team' ? 'active' : ''}>Team</a></li>
//             <li><a href="#faq" className={activeLink === '#faq' ? 'active' : ''}>FAQs</a></li>
//             <li className="dropdown">
//               <a href="#"><span>Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
//               <ul>
//                 <li><a href="#">Pricing</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="#">Terms & Conditions</a></li>
//                 <li><a href="#">Privacy Policy</a></li>
//               </ul>
//             </li>
//             <li><a href="#news" className={activeLink === '#news' ? 'active' : ''}>News</a></li>
//             <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</a></li>
//           </ul>
//         </nav>
//         <i className={`mobile-nav-toggle bi ${isMobileNavVisible ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
//import './App.css'; // Assuming you have styles in App.css or similar
import './Navbar.css';
 import '.././Bootstrapmin.css';
 import '.././Bootstrap-icons.css'
 import '.././Glightboxmin.css';
 //import '.././Aos.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const position = window.scrollY + 200;
      const navbarLinks = document.querySelectorAll('#navbar a');

      navbarLinks.forEach(navbarlink => {
        const hash = navbarlink.hash;
        if (!hash) return;

        const section = document.querySelector(hash);
        if (!section) return;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(hash);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = (event) => {
    event.preventDefault();
    setMobileNavVisible(!isMobileNavVisible);
  };

  const handleLinkClick = (hash) => {
    if (isMobileNavVisible) {
      setMobileNavVisible(false);
    }
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // const handleDropdownToggle = (index, event) => {
  //   event.preventDefault();
  //   setActiveDropdown(activeDropdown === index ? null : index);
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center ${isScrolled ? 'sticked sticky-menu' : 'sticked'}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1>Arambh<span>Technologies</span></h1>
        </a>
        <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'navbar-mobile' : ''}`}>
          
            <ul>
             <li><a href="#hero" onClick={() => handleLinkClick('#hero')} className={activeLink === '#hero' ? 'active' : ''}>Home</a></li>
             <li><a href="#services" onClick={() => handleLinkClick('#services')} className={activeLink === '#services' ? 'active' : ''}>Services</a></li>
             <li><a href="#about" onClick={() => handleLinkClick('#about')} className={activeLink === '#about' ? 'active' : ''}>About</a></li>
             <li><a href="#testimonials" onClick={() => handleLinkClick('#testimonials')} className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</a></li>
             {/* <li><a href="#team" onClick={() => handleLinkClick('#team')} className={activeLink === '#team' ? 'active' : ''}>Team</a></li> */}
             <li><a href="#projects" onClick={() => handleLinkClick('#projects')} className={activeLink === '#projects' ? 'active' : ''}>Projects</a></li> 
             <li><a href="#contact" onClick={() => handleLinkClick('#contact')} className={activeLink === '#contact' ? 'active' : ''}>Contact</a></li>

             {/* <li><a href="#faq" onClick={() => handleLinkClick('#faq')} className={activeLink === '#faq' ? 'active' : ''}>FAQs</a></li> */}
            {/* <li className="dropdown">
              <a href="#" onClick={(e) => handleDropdownToggle(1, e)} className={activeDropdown === 1 ? 'active' : ''}>
                <span>Menu</span> <i className={`bi ${activeDropdown === 1 ? 'bi-chevron-up' : 'bi-chevron-down'} dropdown-indicator`}></i>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 1 ? 'dropdown-active' : ''}`}>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </li> */}
          
          </ul>
        </nav>
        <i className={`mobile-nav-toggle bi ${isMobileNavVisible ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
      </div>
    </header>
  );
};

export default Navbar;

