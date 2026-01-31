import { useState, useEffect } from 'react'
import './App.css'
import serverFull from './images/server-full.jpg';
import drives from './images/drives.jpg';
import motherboardAngle from './images/motherboard-angle.jpg';
import internals from './images/internals.jpg';

function App() {
  // const [activeImage, setActiveImage] = useState(0);

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const mainImage = { src: serverFull, label: 'Full Build' };
  const galleryImages = [
    { src: drives, label: 'Storage Array' },
    { src: motherboardAngle, label: 'Build close-up' },
    { src: internals, label: 'Internal Layout' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">ctooth.site</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#specs" className="nav-link">Specs</a>
            <a href="https://github.com/ctoothaker1/SelfHostedPortfolio.git" target="_blank" rel="noopener noreferrer" className="nav-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Source
            </a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <div className="intro">
            <h1>My Homelab</h1>
            <p className="description">
              A custom-built PC, once used for gaming, now running TrueNAS. I use this machine to host various services and projects, one of which you are viewing right now.
              Built to learn, experiment, and maintain full control over my data and infrastructure.
            </p>
          </div>
        </section>

        <section className="gallery-section" id="about">
          <div className="gallery-container">
            <div className="main-image-side">
              <div className="image-wrapper">
                <img
                  src={mainImage.src}
                  alt={mainImage.label}
                  className="gallery-image"
                />
              </div>
              <div className="image-caption">{mainImage.label}</div>
            </div>

            <div className="scrolling-gallery-side">
              <div className="gallery-carousel">
                <button className="carousel-arrow prev" onClick={prevImage} aria-label="Previous image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${currentGalleryIndex === index ? 'active' : ''}`}
                  >
                    <div className="image-wrapper">
                      <img
                        src={img.src}
                        alt={img.label}
                        className="gallery-image"
                      />
                    </div>
                    <div className="image-caption">{img.label}</div>
                  </div>
                ))}

                <button className="carousel-arrow next" onClick={nextImage} aria-label="Next image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              <div className="carousel-indicators">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${currentGalleryIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentGalleryIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="specs-section" id="specs">
          <h2>Specifications</h2>
          <div className="specs-grid">
            <div className="spec-group">
              <h3>Processor</h3>
              <p>Intel Core i7-4790K</p>
            </div>
            <div className="spec-group">
              <h3>Memory</h3>
              <p>32GB DDR3 in Dual Channel</p>
            </div>
            <div className="spec-group">
              <h3>Storage</h3>
              <p>6x 1TB HDDs (RAIDZ2)</p>
              <p>SanDisk 16GB SATA SSD (OS)</p>
            </div>
            <div className="spec-group">
              <h3>Network</h3>
              <p>Built-In 1-Gigabit Intel NIC</p>
            </div>
            <div className="spec-group">
              <h3>OS</h3>
              <p>TrueNAS Community Edition (Formerly Scale)</p>
            </div>
            <div className="spec-group">
              <h3>Power</h3>
              <p>850W "80+ Gold PSU" (somehow hasn't died)</p>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>File Storage</h3>
              <p>Network-attached SMB share accessible across all devices on the local network</p>
            </div>
            <div className="service-card">
              <h3>Media Server</h3>
              <p>Emby for streaming my personal photo gallery</p>
            </div>
            <div className="service-card">
              <h3>Development</h3>
              <p>Testing environment for various projects and applications</p>
            </div>
            <div className="service-card">
              <h3>Redundancy</h3>
              <p>Two HDDs could fail, and all data would be safe thanks to RAIDZ2</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ctooth.site</p>
      </footer>
    </div>
  )
}

export default App
