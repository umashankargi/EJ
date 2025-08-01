import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faFacebookF, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faUsers, 
  faPhoneAlt, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock, 
  faChevronLeft, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gold from './gold';
import Silver from './silver';
import { Helmet } from 'react-helmet';

const EshwarJewelry = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Define slides for the hero section
  const slides = [
    {
      image: 'Eshwra.png',
      title: 'Eshwar Jewelry',
      subtitle: '91.6 Hallmark Gold & 22K Gold',
      cta: 'View Collection'
    },
    {
      image: 'gold.jpg',
      title: 'Premium Gold Collections',
      subtitle: 'Exquisite designs with hallmark certification',
      cta: 'Explore Gold'
    },
    {
      image: 'silver.jpg',
      title: 'Elegant Silver Pieces',
      subtitle: 'Traditional and contemporary designs',
      cta: 'Discover Silver'
    }
  ];

  // Simulate loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality for the hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Functions to navigate slides manually
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  // Toggle mobile navigation
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Preloader display
  if (loading) {
    return (
      <div className="preloader d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="h5">Loading Elegance...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      {/* Head content - Important for SEO and responsiveness */}
      <title>Eshwar Jewelry - Luxury Gold & Silver Collections</title>
      <meta name="description" content="Premium gold and silver jewelry collections" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="theme-color" content="#c9a44d" />

      {/* Alert Bar - Full width background with content centered by Bootstrap container */}
      <div className="alert-bar bg-dark text-white py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <a href="https://chat.whatsapp.com/BNlpAe4yEZ7JpotucPY2OD" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-decoration-none mb-2 mb-md-0 d-flex align-items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
            <span className="text-wrap">Join Our WhatsApp Community for Exclusive Offers!</span>
          </a>
          <a href="https://maps.app.goo.gl/Zq5KPthJUn6sJwXc6" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            <span>Visit Us in Valigonda</span>
          </a>
        </div>
      </div>

      {/* Navigation - Full width background with content centered by Bootstrap container */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="logo.png" 
              alt="Eshwar Jewelry Logo" 
              className="logo me-2" 
              style={{ height: '40px' }} 
            />
            <span className="brand-name fs-4 fw-bold">Eshwar Jewelry</span>
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNav} 
            aria-controls="navbarNav" 
            aria-expanded={isNavOpen ? "true" : "false"} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gold" onClick={() => setIsNavOpen(false)}>Gold</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/silver" onClick={() => setIsNavOpen(false)}>Silver</Link></li>
              <li className="nav-item"><a className="nav-link" href="#collection" onClick={() => setIsNavOpen(false)}>Collections</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/gold" element={<Gold />} />
        <Route path="/silver" element={<Silver />} />
        {/* <Route path="/collections/Annaprashan-baby" element={<AnnaprashanBaby />} />

        <Route path="/collections/Poojaitems" element={<Poojaitems />} />
        <Route path="/collections/Idols" element={<Idols />} />  */}
        <Route path="/" element={
          <>
            {/* Hero Slider - Improved for desktop */}
            <header className="hero position-relative overflow-hidden">
              <div className="hero-slider h-100">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`slide h-100 ${index === currentSlide ? 'active' : ''}`}
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${slide.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
                      opacity: index === currentSlide ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  >
                    {/* Inner container with better responsive sizing */}
                    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
                      <div className="slide-content text-white bg-dark bg-opacity-50 p-4 p-md-5 p-lg-6 rounded text-center" 
                           style={{ maxWidth: '95%', backdropFilter: 'blur(10px)' }}>
                        <h1 className="display-3 display-md-2 display-lg-1 fw-bold mb-3 mb-md-4">{slide.title}</h1>
                        <p className="lead fs-4 fs-md-3 fs-lg-2 mb-4 mb-md-5">{slide.subtitle}</p>
                        <a href="#collection" className="btn btn-primary btn-lg fs-5 px-4 px-md-5 py-3">
                          {slide.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slider controls - positioned absolutely within the full-width hero */}
              <div className="slider-controls position-absolute w-100 d-flex justify-content-between px-3 px-lg-5" style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                <button className="btn btn-outline-light rounded-circle p-2 p-md-3 p-lg-4" onClick={prevSlide} aria-label="Previous slide">
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </button>
                <button className="btn btn-outline-light rounded-circle p-2 p-md-3 p-lg-4" onClick={nextSlide} aria-label="Next slide">
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </button>
              </div>
              
              {/* Slide indicators - positioned absolutely within the full-width hero */}
              <div className="slide-indicators position-absolute bottom-0 start-50 translate-middle-x mb-3 mb-lg-4 d-flex" style={{ zIndex: 10 }}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator mx-1 rounded-circle ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </header>

            {/* Featured Categories - Better desktop layout */}
            <section className="featured-categories py-5 py-lg-6 bg-light" id="collection">
              <div className="container">
                <div className="section-header text-center mb-5 mb-lg-6">
                  <h2 className="fw-bold display-4 display-lg-3">Our Premium Collections</h2>
                  <p className="lead fs-4 text-muted mt-3">Explore our handpicked selection of finest jewelry crafted by master artisans</p>
                </div>
                <div className="row g-4 g-lg-5 justify-content-center">
                  {/* Gold Collection Card - Improved */}
                  <div className="col-md-6 col-lg-5 col-xl-6">
                    <div className="category-card card h-100 border-0 shadow-lg overflow-hidden">
                      <div 
                        className="category-image position-relative" 
                        style={{ 
                          height: '300px',
                          backgroundImage: "url('gold.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Add overlay for better text readability */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                      </div>
                      <div className="card-body p-4 p-lg-5">
                        <h3 className="card-title fw-bold fs-2 mb-4">Gold Collection</h3>
                        <ul className="list-unstyled mb-4 fs-5">
                          {[
                            '24K Pure Gold Items with Hallmark Certification',
                            'Antique & Contemporary Designs',
                            'Exclusive Bridal & Wedding Sets',
                            'Investment Grade Jewelry',
                            'Custom Design Services'
                          ].map((item, i) => (
                            <li key={i} className="mb-3 d-flex align-items-start">
                              <FontAwesomeIcon icon={faChevronRight} className="text-primary me-3 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/gold" className="btn btn-outline-primary btn-lg w-100 fs-5">View Gold Collection</Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Silver Collection Card - Improved */}
                  <div className="col-md-6 col-lg-5 col-xl-6">
                    <div className="category-card card h-100 border-0 shadow-lg overflow-hidden">
                      <div 
                        className="category-image position-relative" 
                        style={{ 
                          height: '300px',
                          backgroundImage: "url('silver.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                      </div>
                      <div className="card-body p-4 p-lg-5">
                        <h3 className="card-title fw-bold fs-2 mb-4">Silver Collection</h3>
                        <ul className="list-unstyled mb-4 fs-5">
                          {[
                            '925 Sterling Silver with Quality Guarantee',
                            'Traditional Pooja & Temple Items',
                            'Modern Wearable Art Pieces',
                            'Exclusive Gift Collections',
                            'Custom Engraving Available'
                          ].map((item, i) => (
                            <li key={i} className="mb-3 d-flex align-items-start">
                              <FontAwesomeIcon icon={faChevronRight} className="text-primary me-3 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/silver" className="btn btn-outline-primary btn-lg w-100 fs-5">View Silver Collection</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section - Better desktop layout */}
            <section className="about-section py-5 py-lg-6" id="about">
              <div className="container">
                <div className="row align-items-center flex-column-reverse flex-lg-row g-5">
                  <div className="col-lg-6">
                    <div className="about-text pe-lg-5 text-center text-lg-start">
                      <h2 className="fw-bold mb-4 display-4 display-lg-3">Eshwar Jewelry Legacy</h2>
                      <p className="lead fs-4 mb-4">Founded in 1999, Eshwar Jewelry has been at the forefront of exquisite jewelry craftsmanship in Valigonda.</p>
                      <p className="fs-5 mb-4">Our family-owned business takes pride in offering authentic, high-quality gold and silver jewelry with traditional craftsmanship and modern designs.</p>
                      <p className="fs-5">With over two decades of experience, we've built a reputation for trust and quality. Each piece in our collection is carefully selected or crafted to meet the highest standards of purity and design.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div 
                      className="about-image rounded shadow-lg mx-auto" 
                      style={{
                        height: '450px',
                        width: '100%',
                        maxWidth: '600px',
                        backgroundImage: "url('image.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section - Full width background with content centered by Bootstrap container */}
            <section className="cta-section py-5 py-lg-6 bg-primary text-white" id="contact">
              <div className="container text-center">
                <h2 className="fw-bold mb-3 display-4 display-lg-3">Ready to Find Your Perfect Piece?</h2>
                <p className="lead fs-4 mb-4 mb-lg-5 mx-auto" style={{ maxWidth: '800px' }}>Visit our store in Valigonda or explore our collections online. Our jewelry experts are available to help you find or create the perfect piece for any occasion.</p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-lg-4">
                  <a href="#collection" className="btn btn-light btn-lg px-4 px-lg-5 py-3 fs-5">Shop Collections</a>
                  <a href="https://wa.me/919912438836" className="btn btn-outline-light btn-lg px-4 px-lg-5 py-3 fs-5">Chat with Expert</a>
                </div>
              </div>
            </section>
          </>
        } />
      </Routes>

      {/* Footer - Full width background with content centered by Bootstrap container */}
      <footer className="footer bg-dark text-white py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-4">
              <div className="footer-about text-center text-lg-start">
                <img 
                  src="logo.png" 
                  alt="Eshwar Jewelry Logo" 
                  className="footer-logo mb-3" 
                  style={{ height: '50px' }} 
                />
                <p className="mb-4 fs-5">Eshwar Jewelry — Crafting exquisite pieces since 1999 in Valigonda. We specialize in authentic gold and silver jewelry with hallmark certification and traditional craftsmanship.</p>
                <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3">
                  {[
                    { icon: faFacebookF, label: 'Facebook', link: '#' },
                    { icon: faInstagram, label: 'Instagram', link: '#' },
                    { icon: faUsers, label: 'WhatsApp Community', color: '#25D366', link: 'https://chat.whatsapp.com/BNlpAe4yEZ7JpotucPY2OD' },
                    { icon: faWhatsapp, label: 'WhatsApp', link: 'https://wa.me/919912438836' },
                    { icon: faYoutube, label: 'YouTube', link: '#' }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '45px',
                        height: '45px',
                        backgroundColor: social.color || '#3b5998',
                        textDecoration: 'none',
                        fontSize: '1.25rem'
                      }}
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 text-center text-md-start">
              <h3 className="h4 mb-3 mb-lg-4">Quick Links</h3>
              <ul className="list-unstyled">
                {['Home', 'Gold Collection', 'Silver Collection', 'Bridal Jewelry', 'Special Offers'].map((item, i) => (
                  <li key={i} className="mb-2 mb-lg-3">
                    <a href="#" className="text-white-50 text-decoration-none fs-5">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 text-center text-md-start">
              <h3 className="h4 mb-3 mb-lg-4">Contact Us</h3>
              <ul className="list-unstyled">
                <li className="mb-3 mb-lg-4 d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3 mt-1 flex-shrink-0" />
                  <a href="https://maps.app.goo.gl/Zq5KPthJUn6sJwXc6" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none fs-5">
                    Main Road, Valigonda, Telangana 508112
                  </a>
                </li>
                <li className="mb-3 mb-lg-4 d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faWhatsapp} className="me-3 mt-1 flex-shrink-0" style={{ color: '#25D366' }} />
                  <a href="https://wa.me/919912438836" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none fs-5">
                    +91 9912438836
                  </a>
                </li>
                <li className="mb-3 mb-lg-4 d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faPhoneAlt} className="me-3 mt-1 flex-shrink-0" />
                  <a href="tel:+919912438836" className="text-white-50 text-decoration-none fs-5">+91 9912438836</a>
                </li>
                <li className="mb-3 mb-lg-4 d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faEnvelope} className="me-3 mt-1 flex-shrink-0" />
                  <a href="mailto:bogaravikumar143@gmail.com" className="text-white-50 text-decoration-none fs-5">bogaravikumar143@gmail.com</a>
                </li>
                <li className="mb-3 mb-lg-4 d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faUsers} className="me-3 mt-1 flex-shrink-0" style={{ color: '#25D366' }} />
                  <a href="https://chat.whatsapp.com/BNlpAe4yEZ7JpotucPY2OD" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none fs-5">
                    Join Our WhatsApp Community
                  </a>
                </li>
                <li className="d-flex align-items-start justify-content-center justify-content-md-start">
                  <FontAwesomeIcon icon={faClock} className="me-3 mt-1 flex-shrink-0" />
                  <span className="text-white-50 fs-5">Mon-Sat: 10AM - 8PM | Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom border-top border-secondary mt-4 mt-lg-5 pt-4 pt-lg-5 text-center text-white-50">
            <p className="mb-0 fs-5">
              &copy; {new Date().getFullYear()} Eshwar Jewelry. All rights reserved. | 
              <a href="#" className="text-white-50 ms-1 me-1 text-decoration-none">Privacy Policy</a> | 
              <a href="#" className="text-white-50 ms-1 text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Enhanced for desktop */}
      <a href="https://wa.me/919912438836" 
         className="whatsapp-float position-fixed rounded-circle d-flex align-items-center justify-content-center shadow-lg"
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Chat on WhatsApp"
         style={{
           width: '60px',
           height: '60px',
           backgroundColor: '#25D366',
           color: 'white',
           bottom: '30px',
           right: '30px',
           fontSize: '28px',
           zIndex: 1000,
           transition: 'all 0.3s ease'
         }}
         onMouseEnter={(e) => {
           e.target.style.transform = 'scale(1.1)';
           e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
         }}
         onMouseLeave={(e) => {
           e.target.style.transform = 'scale(1)';
           e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
         }}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      
    </Router>
  );
};

export default EshwarJewelry;