import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css'; 

const PublisherLoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-overlay"></div>
      <div className="login-form-card">
        <div className="login-header">
          <h2>Publisher Portal</h2>
          <p>Log in to manage your games</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Publisher Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="publisher@example.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <p className="signup-link-text">
          Want to publish on IndieVault?{' '}
          <Link to="/contact" className="signup-link">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PublisherLoginPage;