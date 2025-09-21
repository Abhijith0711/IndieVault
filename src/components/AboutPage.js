import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section className="about-hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover IndieVault</h1>
          <p>Your trusted gateway to a universe of unique indie games.</p>
          <Link to="/games" className="hero-button">
            Explore Indie Games &rarr;
          </Link>
        </div>
      </section>

      <main className="about-main-content">
        <div className="content-wrapper">
          <h2>About IndieVault – The Future of Indie Gaming</h2>
          <p className="intro-text">
            Are you looking for a platform to discover unique <strong>indie games</strong>? Look no further! IndieVault offers an extensive collection of PC games from passionate developers worldwide.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <h3>DRM-Free & Safe to Play</h3>
              <p>
                Our library is <strong>completely DRM-free</strong>. Our platform is safe to use, and your gaming experience will not be disrupted by unwanted software.
              </p>
            </div>

            <div className="feature-box">
              <h3>Smart Library Features</h3>
              <p>
                We offer a smart and convenient <strong>cloud sync</strong> feature that keeps your save games backed up and synced across your devices.
              </p>
            </div>

            <div className="feature-box">
              <h3>Support Creators Directly</h3>
              <p>
                A significant portion of every purchase goes <strong>directly to the indie developers</strong>, helping them to continue creating the amazing games you love.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;