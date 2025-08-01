import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './silver.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faFacebookF, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCoins, 
  faHistory, 
  faHandHoldingHeart, 
  faCertificate, 
  faEye,
  faUsers, 
  faPhoneAlt, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock, 
  faChevronRight,
  faMedal,
  faHandsHelping,
  faGem,
  faAward,
  faPercentage,
  faStar,
  faShieldAlt,
  faTimes,
  faArrowUp,
  faSearch,
  faChevronLeft,
  faChevronCircleRight,
  faChevronCircleLeft,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const Silver = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCollection, setActiveCollection] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewIndex, setPreviewIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const collections = {
    annaprashan: {
      weights: [40, 40, 10, 25, 40, 30, 25, 25, 25, 30, 10, 30, 50, 80, 40, 70, 252, 200, 70, 60, 40, 50, 150, 26, 25, 250, 30, 30, 5, 30, 60, 20, 30, 70],
      imgPath: 'baby party/baby',
      heroImage: 'Annaprashanbaby.jpg'
    },
    patilu: {
      weights: [25,100,100,100,25,100,40,25,40,40,50,150,150,150,30,45,35,45,40,35,35,40,80,40,80,40,70,65,40,40,50,50,45,30,100],
      imgPath: 'patilu/patil',
      heroImage: 'pati.jpg'
    },
    statuva: {
      weights: [60, 50, 40, 80, 100, 60, 40, 40, 251, 180, 50, 50, 50, 30, 10, 186, 50, 98, 58, 40, 10, 74, 10, 10, 4.5, 114, 80, 409, 10, 10, 124, 207, 50, 30, 442.5, 30, 50, 40, 200, 30, 60, 40, 100, 252, 300, 150, 150, 265, 150, 20, 45, 100, 10, 133, 4.5, 100, 100, 98, 8, 50, 118, 100, 43, 60, 46, 10, 150, 150, 60, 125, 100, 500, 100, 20, 139.5, 20, 35, 100, 25.8, 30, 579, 90, 80, 40, 100, 100],
      imgPath: 'statuva/stat',
      heroImage: 'lax.webp'
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    if (!activeCollection && collections.annaprashan) {
      loadCollection('annaprashan');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadCollection = (collectionName) => {
    const collection = collections[collectionName];
    if (!collection) return;
    const newProducts = collection.weights.map((weight, index) => ({
      id: index + 1,
      weight,
      img: `${collection.imgPath} (${index + 1}).jpg`
    }));
    setProducts(newProducts);
    setFilteredProducts(newProducts);
    setActiveCollection(collectionName);
    setActiveFilter('all');
  };

  const filterProducts = (min = 0, max = 999, filterName = 'all') => {
    const filtered = products.filter(p => p.weight >= min && p.weight <= max);
    setFilteredProducts(filtered);
    setActiveFilter(filterName);
  };

  const openPreview = (imgSrc, index) => {
    setPreviewImage(imgSrc);
    setPreviewIndex(index);
    setShowPreview(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setShowPreview(false);
    document.body.style.overflow = '';
  };

  const navigatePreview = (direction) => {
    if (filteredProducts.length === 0) return;
    let newIndex;
    if (direction === 'next') {
      newIndex = (previewIndex + 1) % filteredProducts.length;
    } else {
      newIndex = (previewIndex - 1 + filteredProducts.length) % filteredProducts.length;
    }
    setPreviewIndex(newIndex);
    setPreviewImage(filteredProducts[newIndex].img);
  };

  const renderOverview = () => (
    <>
      <div className="gold-price-ticker">
        <div className="container">
          <div className="ticker-content">
            <span className="gold-rate"><FontAwesomeIcon icon={faCoins} className="me-2" /> Silver: ₹70/g</span>
            <span className="last-updated">Updated: <span id="current-time"></span></span>
          </div>
        </div>
      </div>

      <section className="gold-hero position-relative overflow-hidden">
        <div className="gold-overlay"></div>
        <div className="gold-particles"></div>
        <div className="container-fluid position-relative z-index-1">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7 order-lg-1 order-2 py-5" data-aos="fade-up" data-aos-duration="800">
              <h1 className="hero-title display-3 fw-bold mb-4">
                <span className="text-gold">Eshwar Jewelry</span> Silver Collection
              </h1>
              <p className="hero-subtitle lead mb-5">
                Handcrafted 925 sterling silver pieces blending timeless tradition with contemporary elegance. 
                Each piece is crafted with a quality guarantee.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#silver-collection" className="btn btn-gold btn-lg px-4 py-3">
                  <FontAwesomeIcon icon={faGem} className="me-2" /> Explore Collection
                </a>
                <a href="https://wa.me/919912438836" 
                  className="btn btn-outline-light btn-lg px-4 py-3 ms-auto"
                  target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Chat on WhatsApp
                </a>
              </div>
              <div className="trust-badges mt-5 d-flex flex-wrap gap-4">
                <div className="badge-item d-flex align-items-center"><FontAwesomeIcon icon={faAward} className="text-gold fs-4 me-2" /><span>925 Sterling Silver</span></div>
                <div className="badge-item d-flex align-items-center"><FontAwesomeIcon icon={faHistory} className="text-gold fs-4 me-2" /><span>Since 1995</span></div>
                <div className="badge-item d-flex align-items-center"><FontAwesomeIcon icon={faHandHoldingHeart} className="text-gold fs-4 me-2" /><span>Quality Guarantee</span></div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-2">
              <div className="hero-image-container position-relative">
                <img src="Eshwra.png" 
                    alt="Luxury Silver Jewelry Collection"
                    className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                <div className="floating-badge bg-gold text-white"><div className="d-flex align-items-center"><FontAwesomeIcon icon={faCertificate} className="me-2" /><span>Authentic Silver</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="silver-collection" className="section bg-light">
        <div className="container">
          <div className="row mb-5"><div className="col-12 text-center"><h2 className="section-title" data-aos="fade-up">Our Silver Collections</h2><p className="lead" data-aos="fade-up" data-aos-delay="100">Crafted with precision, designed for elegance</p></div></div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200"><div className="product-card"><div className="product-img-container position-relative"><img src="Annaprashanbaby.jpg" alt="Annaprashan Baby Silver" className="img-fluid product-img" loading="lazy" /><span className="product-badge">Specialty</span></div><div className="product-body"><h3 className="product-title">Annaprashan Baby Collection</h3><p className="text-muted mb-3">Adorable silver items for baby's first solid food ceremony, a cherished tradition.</p><div className="product-actions"><button onClick={() => { setActiveTab('collection'); loadCollection('annaprashan'); }} className="btn btn-outline-primary">View Collection</button></div></div></div></div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300"><div className="product-card"><div className="product-img-container position-relative"><img src="pati.jpg" alt="Silver Pooja Items" className="img-fluid product-img" loading="lazy" /></div><div className="product-body"><h3 className="product-title">Patilu Items</h3><p className="text-muted mb-3">Finely crafted silver items for daily rituals and special religious ceremonies.</p><div className="product-actions"><button onClick={() => { setActiveTab('collection'); loadCollection('patilu'); }} className="btn btn-outline-primary">View Collection</button></div></div></div></div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400"><div className="product-card"><div className="product-img-container position-relative"><img src="lax.webp" alt="Silver Vaddanam" className="img-fluid product-img" loading="lazy" /><span className="product-badge">Bridal</span></div><div className="product-body"><h3 className="product-title">Silver Idols</h3><p className="text-muted mb-3">Exquisite silver idols and pooja items, crafted for spiritual significance and aesthetic beauty.</p><div className="product-actions"><button onClick={() => { setActiveTab('collection'); loadCollection('statuva'); }} className="btn btn-outline-primary">View Collection</button></div></div></div></div>
          </div>
        </div>
      </section>

      <section className="gold-benefits-section text-center section">
        <div className="container">
          <div className="row mb-5"><div className="col-12"><h2 className="section-title" data-aos="fade-up">Why Choose Eshwar Silver?</h2><p className="lead" data-aos="fade-up" data-aos-delay="100">Quality, craftsmanship, and a touch of elegance in every piece.</p></div></div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200"><div className="benefit-item"><FontAwesomeIcon icon={faAward} className="benefit-icon" /><h3 className="benefit-title">925 Sterling Quality</h3><p className="benefit-description">All our silver jewelry is crafted from certified 925 sterling silver for lasting shine.</p></div></div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300"><div className="benefit-item"><FontAwesomeIcon icon={faHandHoldingHeart} className="benefit-icon" /><h3 className="benefit-title">Artisan Handcrafted</h3><p className="benefit-description">Each silver piece is a testament to the skill and dedication of our master artisans.</p></div></div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400"><div className="benefit-item"><FontAwesomeIcon icon={faCertificate} className="benefit-icon" /><h3 className="benefit-title">Quality Assurance</h3><p className="benefit-description">We stand by the quality of our silver, ensuring customer satisfaction with every purchase.</p></div></div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="500"><div className="benefit-item"><FontAwesomeIcon icon={faHistory} className="benefit-icon" /><h3 className="benefit-title">Trusted Heritage</h3><p className="benefit-description">Continuing a legacy of trust and excellence in jewelry for decades.</p></div></div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600"><div className="benefit-item"><FontAwesomeIcon icon={faHandsHelping} className="benefit-icon" /><h3 className="benefit-title">Custom Designs</h3><p className="benefit-description">Bring your vision to life with our custom design services for unique silver pieces.</p></div></div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="700"><div className="benefit-item"><FontAwesomeIcon icon={faEye} className="benefit-icon" /><h3 className="benefit-title">Versatile Collection</h3><p className="benefit-description">From traditional to modern, our diverse silver collection suits all tastes and occasions.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="text-white mb-4">Ready to Find Your Perfect Silver Jewelry?</h2>
              <p className="lead text-white-50 mb-5">Our jewelry experts are available to help you choose the ideal piece for any occasion.</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="https://wa.me/919912438836" className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Chat on WhatsApp</a>
                <a href="tel:+919912438836" className="btn btn-outline-light btn-lg"><FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Call +91 99124 38836</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderCollection = () => {
    let collectionTitle, collectionDescription;
    
    switch(activeCollection) {
      case 'annaprashan':
        collectionTitle = "Silver Annaprashan Baby Collection";
        collectionDescription = "Adorable silver items for baby's first solid food ceremony.";
        break;
      case 'patilu':
        collectionTitle = "Silver Patilu Items";
        collectionDescription = "Finely crafted silver items for daily rituals and special religious ceremonies.";
        break;
      case 'statuva':
        collectionTitle = "Silver Idols Collection";
        collectionDescription = "Exquisite silver idols and pooja items for spiritual significance.";
        break;
      default:
        collectionTitle = "Silver Collection";
        collectionDescription = "Handcrafted 925 sterling silver pieces.";
    }

    // Wrap the entire collection content in a section with bg-light
    return (
      <section className="section bg-light"> 
          <div className="container"> {/* This container will now apply the desired boxed layout */}
              <div className="necklace-hero"> 
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-1 order-2 mb-4 mb-lg-0" data-aos="fade-up">
                      <button onClick={() => setActiveTab('overview')} className="btn btn-outline-primary mb-4"><FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back to Silver Collections</button>
                      <h1 className="hero-title display-3 fw-bold mb-4">{collectionTitle}</h1>
                      <p className="hero-subtitle lead mb-4">{collectionDescription}</p>
                      <div className="d-flex flex-wrap gap-3 mb-4">
                        <a href="#collection-gallery" className="btn btn-primary btn-lg px-4 py-3"><FontAwesomeIcon icon={faGem} className="me-2" /> Explore Collection</a>
                        <a href="https://wa.me/919912438836" className="btn btn-outline-light btn-lg px-4 py-3 ms-auto" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Book Appointment</a>
                      </div>
                      <div className="trust-badges-annaprashan">
                        <div className="badge-item-annaprashan"><FontAwesomeIcon icon={faAward} className="me-2" /><span>925 Sterling Silver</span></div>
                        <div className="badge-item-annaprashan"><FontAwesomeIcon icon={faCertificate} className="me-2" /><span>Hallmarked</span></div>
                        <div className="badge-item-annaprashan"><FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" /><span>Made with Love</span></div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-left">
                      <div className="hero-image-container">
                        <img src={activeCollection ? collections[activeCollection].heroImage : ''} alt={collectionTitle} className="hero-image" loading="lazy"/>
                        <span className="product-badge">Bestseller</span>
                      </div>
                    </div>
                  </div>
              </div>

              <section className="weight-filter-section">
                  <div className="row" data-aos="fade-up">
                    <div className="col-12">
                      <div className="weight-filter-container">
                        <h5 className="filter-title mb-3">Filter by Weight (grams):</h5>
                        <div className="weight-filter-buttons">
                          <button className={`weight-filter-btn ${activeFilter === '0-5' ? 'active' : ''}`} onClick={() => filterProducts(0, 5, '0-5')}>0-5g</button>
                          <button className={`weight-filter-btn ${activeFilter === '5-10' ? 'active' : ''}`} onClick={() => filterProducts(5, 10, '5-10')}>5-10g</button>
                          <button className={`weight-filter-btn ${activeFilter === '10-15' ? 'active' : ''}`} onClick={() => filterProducts(10, 15, '10-15')}>10-15g</button>
                          <button className={`weight-filter-btn ${activeFilter === '15-20' ? 'active' : ''}`} onClick={() => filterProducts(15, 20, '15-20')}>15-20g</button>
                          <button className={`weight-filter-btn ${activeFilter === '20-30' ? 'active' : ''}`} onClick={() => filterProducts(20, 30, '20-30')}>20-30g</button>
                          <button className={`weight-filter-btn ${activeFilter === '30-50' ? 'active' : ''}`} onClick={() => filterProducts(30, 50, '30-50')}>30-50g</button>
                          <button className={`weight-filter-btn ${activeFilter === '50+' ? 'active' : ''}`} onClick={() => filterProducts(50, 999, '50+')}>50g+</button>
                          <button className="weight-filter-btn reset-filter" onClick={() => filterProducts(0, 999, 'all')}>All Weights</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>

              <section id="collection-gallery" className="section"> 
                  <div className="row mb-5"><div className="col-12 text-center"><h2 className="section-title" data-aos="fade-up">{collectionTitle}</h2></div></div>
                  <div className="row" id="necklace-gallery">
                    {filteredProducts.length === 0 ? (
                      <div className="col-12 text-center py-5"><FontAwesomeIcon icon={faSearch} className="fa-3x mb-3 text-muted" /><h4>No products found</h4><p>Please try a different weight filter</p></div>
                    ) : (
                      filteredProducts.map((product, index) => (
                        <div key={product.id} className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={index % 3 * 100}>
                          <div className="product-card" onClick={() => openPreview(product.img, index)}>
                            <div className="product-img-container"><img src={product.img} alt={`${collectionTitle} ${product.id}`} loading="lazy" className="product-img" /></div>
                            <div className="product-info"><div className="d-flex justify-content-between align-items-center"><span className="product-weight">Weight: {product.weight}g</span></div></div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
              </section>

              <section className="section" id="about">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                      <div className="craftsmanship-image-container">
                        <img src={activeCollection ? collections[activeCollection].heroImage : ''} alt="Silver Craftsmanship" className="craftsmanship-image" loading="lazy" />
                      </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                      <h2 className="section-title text-start">The Art of Silver Jewelry</h2>
                      <p className="lead">Where tradition meets precision craftsmanship</p>
                      <p>Each silver piece undergoes a meticulous creation process by our master artisans. From initial design to final polishing, we maintain the highest standards of quality.</p>
                      <div className="row mt-4">
                        <div className="col-md-6 mb-3"><div className="feature-item"><div className="feature-icon"><FontAwesomeIcon icon={faGem} /></div><div className="feature-text"><h5>Hallmarked</h5><p>Guaranteed purity</p></div></div></div>
                        <div className="col-md-6 mb-3"><div className="feature-item"><div className="feature-icon"><FontAwesomeIcon icon={faHandsHelping} /></div><div className="feature-text"><h5>Handcrafted</h5><p>Individually crafted</p></div></div></div>
                        <div className="col-md-6 mb-3"><div className="feature-item"><div className="feature-icon"><FontAwesomeIcon icon={faAward} /></div><div className="feature-text"><h5>Quality Materials</h5><p>Premium silver used</p></div></div></div>
                        <div className="col-md-6 mb-3"><div className="feature-item"><div className="feature-icon"><FontAwesomeIcon icon={faClock} /></div><div className="feature-text"><h5>Timeless Designs</h5><p>Pieces that transcend</p></div></div></div>
                      </div>
                    </div>
                  </div>
              </section>
          </div>
      </section>
    );
  };

  const collectionTitle = activeCollection ? (collections[activeCollection]?.title || "Collection") : "Premium Silver Jewelry Collection";

  return (
    <>
      <Helmet>
        <title>{activeTab === 'overview' ? 'Premium Silver Jewelry Collection | Eshwar Jewelry' : `${collectionTitle} | Eshwar Jewelry`}</title>
        <meta name="description" content="Exquisite 925 sterling silver jewelry..." />
      </Helmet>
      
      {activeTab === 'overview' ? renderOverview() : renderCollection()}

      {showPreview && filteredProducts.length > 0 && (
        <div className="preview-modal show" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-preview" onClick={closePreview}><FontAwesomeIcon icon={faTimes} /></button>
            <div className="preview-navigation left" onClick={(e) => { e.stopPropagation(); navigatePreview('prev'); }}><FontAwesomeIcon icon={faChevronCircleLeft} /></div>
            <div className="preview-image-container">
              <img src={previewImage} alt={`Jewelry Preview`} className="preview-img" />
              <div className="preview-info">
                <div className="preview-weight"><FontAwesomeIcon icon={faCoins} className="me-2" />Weight: {filteredProducts[previewIndex].weight}g</div>
                <div className="preview-counter">{previewIndex + 1} / {filteredProducts.length}</div>
              </div>
            </div>
            <div className="preview-navigation right" onClick={(e) => { e.stopPropagation(); navigatePreview('next'); }}><FontAwesomeIcon icon={faChevronCircleRight} /></div>
          </div>
        </div>
      )}

      <a href="#" className={`back-to-top ${scrolled ? 'active' : ''}`} aria-label="Back to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  );
};

export default Silver;