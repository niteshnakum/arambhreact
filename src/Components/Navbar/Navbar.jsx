// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import '../Bootstrapmin.css';
// import '../Bootstrap-icons.css';
// import '../Glightboxmin.css';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('');
//   const [isScrolled, setScrolled] = useState(false);
//   const [isMobileNavVisible, setMobileNavVisible] = useState(false);
//   const location = useLocation();

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

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 992) {
//         setMobileNavVisible(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const hash = location.hash;
//     const pathname = location.pathname;

//     // If we are on the Privacy Policy page, clear the active link
//     if (pathname === '/privacypolicy') {
//       setActiveLink('');
//       return;
//     }

//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//       setActiveLink(hash);
//     } else {
//       setActiveLink(pathname === '/' ? '#hero' : '');
//     }
//   }, [location]);

//   const toggleMobileNav = (event) => {
//     event.preventDefault();
//     setMobileNavVisible(!isMobileNavVisible);
//   };

//   return (
//     <header id="header" className={`header d-flex align-items-center ${isScrolled ? 'sticked sticky-menu' : 'sticked'}`}>
//       <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
//         <Link to="/" className="logo d-flex align-items-center">
//           <h1>Arambh<span>Technologies</span></h1>
//         </Link>
//         <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'navbar-mobile' : ''}`}>
//           <ul>
//             <li><Link to="/#hero" className={activeLink === '#hero' ? 'active' : ''}>Home</Link></li>
//             <li><Link to="/#services" className={activeLink === '#services' ? 'active' : ''}>Services</Link></li>
//             <li><Link to="/#about" className={activeLink === '#about' ? 'active' : ''}>About</Link></li>
//             <li><Link to="/#testimonials" className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</Link></li>
//             <li><Link to="/#news" className={activeLink === '#news' ? 'active' : ''}>Projects</Link></li>
//             <li><Link to="/#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</Link></li>
//             {/* <li><Link to="/privacypolicy" className={activeLink === '#privacypolicy' ? 'active' : ''}>Privacy Policy</Link></li> */}
//           </ul>
//         </nav>
//         <i className={`mobile-nav-toggle bi ${isMobileNavVisible ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import '../Bootstrapmin.css';
import '../Bootstrap-icons.css';
import '../Glightboxmin.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    const pathname = location.pathname;

    // If we are on the Privacy Policy page, clear the active link
    if (pathname === '/privacypolicy') {
      setActiveLink('');
      return;
    }

    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveLink(hash);
    } else {
      setActiveLink(pathname === '/' ? '#hero' : '');
    }
  }, [location]);

  const toggleMobileNav = (event) => {
    event.preventDefault();
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header id="header" className={`header d-flex align-items-center ${isScrolled ? 'sticked sticky-menu' : 'sticked'}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1>Arambh<span>Technologies</span></h1>
        </Link>
        <nav id="navbar" className={`navbar ${isMobileNavVisible ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><Link to="/#hero" className={activeLink === '#hero' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/#services" className={activeLink === '#services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/#about" className={activeLink === '#about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/#testimonials" className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</Link></li>
            <li><Link to="/#news" className={activeLink === '#news' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
        <i className={`mobile-nav-toggle bi ${isMobileNavVisible ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
      </div>
    </header>
  );
};

export default Navbar;


