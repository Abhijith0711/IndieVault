import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/PlaceholderPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const game = location.state?.game;

  if (!game) {
    return (
      <div className="placeholder-container">
        <h1>No Game Selected</h1>
        <p>Please select a game to purchase from the store.</p>
        <Link to="/" style={{marginTop: '1rem', color: '#818cf8'}}>Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="placeholder-container">
      <h1>Checkout</h1>
      <div style={{
          backgroundColor: '#1f2937',
          padding: '2rem',
          borderRadius: '0.5rem',
          textAlign: 'left',
          maxWidth: '500px',
          width: '100%'
        }}>
        <h2 style={{marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '1rem'}}>Order Summary</h2>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem'}}>
          <span>{game.title}</span>
          <strong>{game.price}</strong>
        </div>
        <button style={{width: '100%', marginTop: '2rem', backgroundColor: '#4f46e5', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: 'pointer'}}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;