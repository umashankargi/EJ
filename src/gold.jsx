import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gold.css';
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

const Gold = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCollection, setActiveCollection] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewIndex, setPreviewIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const collections = {
    necklaces: {
      weights: [42, 37, 24, 27, 29, 35, 27, 31, 35, 30, 30, 29, 24, 61, 71, 39, 71, 66, 46, 36, 35, 17, 34, 33, 27, 30, 29, 33, 11, 50, 33, 11, 30, 30, 27, 32, 39, 34, 33, 40, 70, 55, 57, 138, 58, 100, 90, 67, 30, 80, 159, 83, 50, 59, 83, 100, 30, 34, 14, 14, 14, 50, 28, 40, 80, 80, 80, 43, 50, 60, 15, 28, 13, 23, 12, 20, 40, 13, 11, 20, 30, 12, 60, 31, 25, 44, 75, 30, 21, 43, 2, 23, 5, 10, 25, 15, 60, 70, 11, 15, 60, 20, 50, 35, 50, 70, 20, 20, 57, 80, 90, 98, 145, 74, 118, 47, 44, 7, 35, 50, 40, 20, 60, 80, 55, 25, 30, 30, 25, 150, 60, 18, 30, 21, 33, 29, 31, 30, 74, 80, 48, 74, 45, 3, 4, 5, 4, 7, 10, 62, 38, 31, 22, 6, 4, 14],
      imgPath: 'neckleca/neck',
      heroImage: 'neckfm.webp'
    },
    earrings: {
      weights: [2.5,5,3,10,3.5,4,4,10,12,8,8,65,16.17,18.28,18,5,4,4,10,5,20,5,5,9,2.5,5.5,13.7,7.5,3,5.56,24,4,4,4,3,2.5,3,4,8,7,2.5,3,3,25,25,5,14.1,5.1,5.3,5.8,5.0,5.1,6.5,15.0,5.1,11.3,4.4,3,1.6,1.6,8,8,6,7,12,6,3,3,3,12,2.5,2,2.5,12,10,10,15,5,4,3,2.5,2,1.5,3,1.5,2.5],
      imgPath: 'tops/top',
      heroImage: 'to.jpg'
    },
    chains: {
      weights: [20, 30, 25, 60, 25, 30, 30, 60, 30, 30,20, 20, 25, 30, 25, 25, 20, 25, 20, 20,20, 25, 15, 15, 15, 12, 15, 12, 10, 12,10, 10, 10, 20, 20, 30, 20, 40, 20, 20,30, 20, 30, 10, 30, 30, 20, 12, 10, 20,20, 30, 20, 20, 40, 25, 20, 20, 20, 25,30, 8, 5, 10, 6, 8, 6, 6, 6, 20, 25, 20, 5],
      imgPath: 'chains/chain',
      heroImage: 'chain.avif'
    },
    rings: {
      weights: [3, 3.87, 5, 5, 3, 5, 4, 4, 4, 3, 4, 4.43, 3.87, 6.32, 2, 5, 8.05, 12.67, 6.12, 9.53, 9.81, 5, 5, 6.31, 6.2, 7.31, 5, 2.5,3,2.5, 4, 3, 4, 2.624, 4.65, 10, 7.98, 3, 4.89, 6.58, 5.32, 12.51],
      imgPath: 'ring/ring',
      heroImage: 'ling.jpg'
    },
    bangles: {
      weights: [10.060, 9.800, 10.010, 10.000, 9.980, 10.070, 10.010, 10.070, 9.920, 10.040,52, 32, 25, 32, 52, 26.240, 10, 25, 10, 25,40, 10, 30, 20, 10.010, 1, 30, 20, 20, 40,40, 30, 56, 52, 50, 55, 30, 62, 30, 20,15, 20, 5, 120, 56, 20, 49, 25, 40, 50,36, 60, 40, 44, 50, 20, 50, 20.020, 57],
      imgPath: 'bangel/bral',
      heroImage: 'bang.jpg'
    },
    bracelets: {
      weights: [6.250, 20, 20, 15, 20, 20, 10, 30, 25, 10,6, 8, 12, 8, 30, 8, 20, 15, 5, 10,20, 3.952, 31, 86, 40, 50, 106, 62, 5, 5,6.100, 60, 25, 150, 20, 256, 5.000, 5.980, 52],
      imgPath: 'braclet/bracelet',
      heroImage: 'bral.jpg'
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
            <span className="gold-rate"><FontAwesomeIcon icon={faCoins} className="me-2" /> Gold: ₹5,000/g (24K)</span>
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
                <span className="text-gold">Eshwar Jewelry</span> Gold Collection
              </h1>
              <p className="hero-subtitle lead mb-5">
                Exquisite 24K and 22K gold pieces blending timeless tradition with contemporary elegance. 
                Each piece comes with BIS hallmark certification for guaranteed purity.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#gold-collection" className="btn btn-gold btn-lg px-4 py-3">
                  <FontAwesomeIcon icon={faGem} className="me-2" /> Explore Collection
                </a>
                <a href="https://wa.me/919912438836" 
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Chat on WhatsApp
                </a>
              </div>
              <div className="trust-badges mt-5 d-flex flex-wrap gap-4">
                <div className="badge-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faAward} className="text-gold fs-4 me-2" />
                  <span>BIS Hallmark Certified</span>
                </div>
                <div className="badge-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faHistory} className="text-gold fs-4 me-2" />
                  <span>Since 1995</span>
                </div>
                <div className="badge-item d-flex align-items-center">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="text-gold fs-4 me-2" />
                  <span>Purity Guarantee</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-2">
              <div className="hero-image-container position-relative">
                <img src="Eshwra.png" 
                    alt="Luxury Gold Jewelry Collection"
                    className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                <div className="floating-badge bg-gold text-white">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCertificate} className="me-2" />
                    <span>Hallmark Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gold-collection" className="section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title" data-aos="fade-up">Our Gold Collections</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">Crafted with precision, designed for eternity</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="neckfm.webp" alt="Gold Necklaces Collection" className="img-fluid product-img" loading="lazy" />
                  <span className="product-badge">Bestseller</span>
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Necklaces</h3>
                  <p className="text-muted mb-3">A necklace is a piece of jewelry worn around the neck, often made of metal, beads, or gems.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('necklaces'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="to.jpg" alt="Gold Earrings Collection" className="img-fluid product-img" loading="lazy" />
                  <span className="product-badge">New Arrival</span>
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Earrings</h3>
                  <p className="text-muted mb-3">Earrings are decorative jewelry worn on the earlobes, made from materials like gold.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('earrings'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="chain.avif" alt="Gold Chains Collection" className="img-fluid product-img" loading="lazy" />
                  <span className="product-badge">Exclusive</span>
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Chains</h3>
                  <p className="text-muted mb-3">A gold chain is a timeless accessory, crafted from high-quality gold.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('chains'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="ling.jpg" alt="Gold Rings Collection" className="img-fluid product-img" loading="lazy" />
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Rings</h3>
                  <p className="text-muted mb-3">A ring is a circular piece of jewelry worn on the finger, often crafted from gold.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('rings'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="bang.jpg" alt="Gold Bangles Collection" className="img-fluid product-img" loading="lazy" />
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Bangles</h3>
                  <p className="text-muted mb-3">Bangles are rigid, circular bracelets typically made of gold.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('bangles'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="product-card">
                <div className="product-img-container position-relative">
                  <img src="bral.jpg" alt="Gold Bracelets Collection" className="img-fluid product-img" loading="lazy" />
                </div>
                <div className="product-body">
                  <h3 className="product-title">Gold Bracelets</h3>
                  <p className="text-muted mb-3">A bracelet is a flexible piece of jewelry worn around the wrist.</p>
                  <div className="product-actions">
                    <button onClick={() => { setActiveTab('collection'); loadCollection('bracelets'); }} className="btn btn-outline-primary">View Collection</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gold-benefits-section text-center">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title" data-aos="fade-up">Why Choose Eshwar Gold?</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">Quality, craftsmanship, and a touch of elegance in every piece.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faAward} className="benefit-icon" />
                <h3 className="benefit-title">BIS Hallmark</h3>
                <p className="benefit-description">
                  All our gold jewelry comes with BIS hallmark certification for guaranteed purity.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="benefit-icon" />
                <h3 className="benefit-title">Artisan Handcrafted</h3>
                <p className="benefit-description">
                  Each gold piece is a testament to the skill and dedication of our master artisans.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faCertificate} className="benefit-icon" />
                <h3 className="benefit-title">Quality Assurance</h3>
                <p className="benefit-description">
                  We stand by the quality of our gold, ensuring customer satisfaction with every purchase.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faHistory} className="benefit-icon" />
                <h3 className="benefit-title">Trusted Heritage</h3>
                <p className="benefit-description">
                  Continuing a legacy of trust and excellence in jewelry for decades.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faHandsHelping} className="benefit-icon" />
                <h3 className="benefit-title">Custom Designs</h3>
                <p className="benefit-description">
                  Bring your vision to life with our custom design services for unique gold pieces.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
              <div className="benefit-item">
                <FontAwesomeIcon icon={faEye} className="benefit-icon" />
                <h3 className="benefit-title">Investment Value</h3>
                <p className="benefit-description">
                  Our gold jewelry maintains its value, making it both beautiful and a smart investment.
                </p>
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
      case 'necklaces':
        collectionTitle = "Gold Necklaces Collection";
        collectionDescription = "Exquisite gold necklaces for every occasion, from traditional to contemporary designs.";
        break;
      case 'earrings':
        collectionTitle = "Gold Earrings Collection";
        collectionDescription = "Beautiful gold earrings in various styles including studs, hoops, and danglers.";
        break;
      case 'chains':
        collectionTitle = "Gold Chains Collection";
        collectionDescription = "Timeless gold chains that add elegance to any outfit.";
        break;
      case 'rings':
        collectionTitle = "Gold Rings Collection";
        collectionDescription = "Stunning gold rings for every finger and occasion.";
        break;
      case 'bangles':
        collectionTitle = "Gold Bangles Collection";
        collectionDescription = "Traditional and modern gold bangles that complement your style.";
        break;
      case 'bracelets':
        collectionTitle = "Gold Bracelets Collection";
        collectionDescription = "Elegant gold bracelets that add a touch of sophistication.";
        break;
      default:
        collectionTitle = "Gold Collection";
        collectionDescription = "Handcrafted 22K and 24K gold jewelry.";
    }

    return (
      <section className="section bg-light"> 
        <div className="container">
          <div className="necklace-hero"> 
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2 mb-4 mb-lg-0" data-aos="fade-up">
                <button onClick={() => setActiveTab('overview')} className="btn btn-outline-primary mb-4">
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back to Gold Collections
                </button>
                <h1 className="hero-title display-3 fw-bold mb-4">{collectionTitle}</h1>
                <p className="hero-subtitle lead mb-4">{collectionDescription}</p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="#collection-gallery" className="btn btn-gold btn-lg px-4 py-3">
                    <FontAwesomeIcon icon={faGem} className="me-2" /> Explore Collection
                  </a>
                  <a href="https://wa.me/919912438836" className="btn btn-outline-light btn-lg px-4 py-3 ms-auto" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Book Appointment
                  </a>
                </div>
                <div className="trust-badges-annaprashan">
                  <div className="badge-item-annaprashan">
                    <FontAwesomeIcon icon={faAward} className="me-2" />
                    <span>BIS Hallmark Certified</span>
                  </div>
                  <div className="badge-item-annaprashan">
                    <FontAwesomeIcon icon={faCertificate} className="me-2" />
                    <span>22K & 24K Gold</span>
                  </div>
                  <div className="badge-item-annaprashan">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" />
                    <span>Purity Guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-left">
                <div className="hero-image-container">
                  <img src={activeCollection ? collections[activeCollection].heroImage : ''} 
                       alt={collectionTitle} 
                       className="hero-image" 
                       loading="lazy"/>
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
                    <div className="weight-filter-buttons">
  <button className={`weight-filter-btn ${activeFilter === '0-2' ? 'active' : ''}`} onClick={() => filterProducts(0, 2, '0-2')}>0-2g</button>
  <button className={`weight-filter-btn ${activeFilter === '2-5' ? 'active' : ''}`} onClick={() => filterProducts(2, 5, '2-5')}>2-5g</button>
  <button className={`weight-filter-btn ${activeFilter === '5-7' ? 'active' : ''}`} onClick={() => filterProducts(5, 7, '5-7')}>5-7g</button>
  <button className={`weight-filter-btn ${activeFilter === '7-10' ? 'active' : ''}`} onClick={() => filterProducts(7, 10, '7-10')}>7-10g</button>
  <button className={`weight-filter-btn ${activeFilter === '10-15' ? 'active' : ''}`} onClick={() => filterProducts(10, 15, '10-15')}>10-15g</button>
  <button className={`weight-filter-btn ${activeFilter === '15-20' ? 'active' : ''}`} onClick={() => filterProducts(15, 20, '15-20')}>15-20g</button>
  <button className={`weight-filter-btn ${activeFilter === '20-30' ? 'active' : ''}`} onClick={() => filterProducts(20, 30, '20-30')}>20-30g</button>
  <button className={`weight-filter-btn ${activeFilter === '30-50' ? 'active' : ''}`} onClick={() => filterProducts(30, 50, '30-50')}>30-50g</button>
  <button className={`weight-filter-btn ${activeFilter === '50+' ? 'active' : ''}`} onClick={() => filterProducts(50, 999, '50+')}>50g+</button>
  <button className="weight-filter-btn reset-filter" onClick={() => filterProducts(0, 999, 'all')}>All Weights</button>
</div>
                    <button className="weight-filter-btn reset-filter" onClick={() => filterProducts(0, 999, 'all')}>All Weights</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="collection-gallery" className="section"> 
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="section-title" data-aos="fade-up">{collectionTitle}</h2>
              </div>
            </div>
            <div className="row" id="necklace-gallery">
              {filteredProducts.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <FontAwesomeIcon icon={faSearch} className="fa-3x mb-3 text-muted" />
                  <h4>No products found</h4>
                  <p>Please try a different weight filter</p>
                </div>
              ) : (
                filteredProducts.map((product, index) => (
                  <div key={product.id} className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay={index % 3 * 100}>
                    <div className="product-card" onClick={() => openPreview(product.img, index)}>
                      <div className="product-img-container">
                        <img src={product.img} 
                             alt={`${collectionTitle} ${product.id}`} 
                             loading="lazy" 
                             className="product-img" />
                      </div>
                      <div className="product-info">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="product-weight">Weight: {product.weight}g</span>
                        </div>
                      </div>
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
                  <img src={activeCollection ? collections[activeCollection].heroImage : ''} 
                       alt="Gold Craftsmanship" 
                       className="craftsmanship-image" 
                       loading="lazy" />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h2 className="section-title text-start">The Art of Gold Jewelry</h2>
                <p className="lead">Where tradition meets precision craftsmanship</p>
                <p>Each gold piece undergoes a meticulous creation process by our master artisans. From initial design to final polishing, we maintain the highest standards of quality.</p>
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faGem} /></div>
                      <div className="feature-text">
                        <h5>Hallmarked</h5>
                        <p>Guaranteed purity</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faHandsHelping} /></div>
                      <div className="feature-text">
                        <h5>Handcrafted</h5>
                        <p>Individually crafted</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faAward} /></div>
                      <div className="feature-text">
                        <h5>Quality Materials</h5>
                        <p>Premium gold used</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faClock} /></div>
                      <div className="feature-text">
                        <h5>Timeless Designs</h5>
                        <p>Pieces that transcend</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  };

  const collectionTitle = activeCollection ? (collections[activeCollection]?.title || "Collection") : "Premium Gold Jewelry Collection";

  return (
    <>
      <Helmet>
        <title>{activeTab === 'overview' ? 'Premium Gold Jewelry Collection | Eshwar Jewelry' : `${collectionTitle} | Eshwar Jewelry`}</title>
        <meta name="description" content="Exquisite 22K and 24K gold jewelry collection featuring necklaces, rings, earrings, and bangles. Handcrafted by master artisans with hallmark certification." />
      </Helmet>
      
      {activeTab === 'overview' ? renderOverview() : renderCollection()}

      {showPreview && filteredProducts.length > 0 && (
        <div className="preview-modal show" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-preview" onClick={closePreview}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="preview-navigation left" onClick={(e) => { e.stopPropagation(); navigatePreview('prev'); }}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
            <div className="preview-image-container">
              <img src={previewImage} alt={`Jewelry Preview`} className="preview-img" />
              <div className="preview-info">
                <div className="preview-weight">
                  <FontAwesomeIcon icon={faCoins} className="me-2" />
                  Weight: {filteredProducts[previewIndex].weight}g
                </div>
                <div className="preview-counter">
                  {previewIndex + 1} / {filteredProducts.length}
                </div>
              </div>
            </div>
            <div className="preview-navigation right" onClick={(e) => { e.stopPropagation(); navigatePreview('next'); }}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </div>
      )}

      <a href="#" className={`back-to-top ${scrolled ? 'active' : ''}`} aria-label="Back to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  );
};

export default Gold;