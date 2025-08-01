import React from 'react';
import { Link } from 'react-router-dom';
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
  faChevronRight,
  faGem,
  faAward
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container-fluid position-relative z-index-1">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 order-lg-1 order-2 py-5">
              <h1 className="hero-title display-3 fw-bold mb-4">
                Welcome to <span className="text-primary">Eshwar Jewelry</span>
              </h1>
              <p className="hero-subtitle lead mb-5">
                Discover exquisite gold and silver jewelry collections crafted with precision and passion since 1999.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/gold" className="btn btn-primary btn-lg px-4 py-3">
                  <FontAwesomeIcon icon={faGem} className="me-2" /> Gold Collection
                </Link>
                <Link to="/silver" className="btn btn-outline-primary btn-lg px-4 py-3">
                  <FontAwesomeIcon icon={faGem} className="me-2" /> Silver Collection
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="hero-image-container">
                <img 
                  src="hero-image.jpg" 
                  alt="Eshwar Jewelry Collection"
                  className="img-fluid rounded-4 shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title display-4 fw-bold">Our Collections</h2>
              <p className="lead">Explore our premium jewelry selections</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="collection-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-5">
                  <h3 className="card-title fw-bold mb-4">Gold Jewelry</h3>
                  <p className="mb-4">
                    Exquisite 24K and 22K gold pieces with BIS hallmark certification.
                  </p>
                  <Link to="/gold" className="btn btn-outline-primary">
                    View Gold Collection <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="collection-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-5">
                  <h3 className="card-title fw-bold mb-4">Silver Jewelry</h3>
                  <p className="mb-4">
                    Beautiful 925 sterling silver pieces for all occasions.
                  </p>
                  <Link to="/silver" className="btn btn-outline-primary">
                    View Silver Collection <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="about-image.jpg" 
                alt="About Eshwar Jewelry"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">About Eshwar Jewelry</h2>
              <p className="lead mb-4">
                Family-owned jewelry business serving Valigonda since 1999.
              </p>
              <p>
                We specialize in authentic gold and silver jewelry with traditional craftsmanship and modern designs. 
                With over two decades of experience, we've built a reputation for trust and quality.
              </p>
              <div className="trust-badges mt-4 d-flex flex-wrap gap-3">
                <div className="badge-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faAward} className="text-primary me-2" />
                  <span>Hallmark Certified</span>
                </div>
                <div className="badge-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faUsers} className="text-primary me-2" />
                  <span>Trusted by Thousands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Find Your Perfect Piece?</h2>
          <p className="lead mb-5">
            Visit our store in Valigonda or chat with our jewelry experts.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a 
              href="https://wa.me/919912438836" 
              className="btn btn-light btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Chat on WhatsApp
            </a>
            <a 
              href="https://maps.app.goo.gl/Zq5KPthJUn6sJwXc6" 
              className="btn btn-outline-light btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Visit Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;