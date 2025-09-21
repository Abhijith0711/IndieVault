import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-overlay"></div>
      <div className="login-form-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Log in to your IndieVault account</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <Link to="#" className="forgot-password-link">
                Forgot password?
              </Link>
            </div>
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
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;