import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import GameDetailsPage from './components/GameDetailsPage';
import LibraryPage from './components/LibraryPage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import PublisherLoginPage from './components/PublisherLoginPage';
import CheckoutPage from './components/CheckoutPage';
import GamesPage from './components/GamesPage'; // Import the new page

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ paddingTop: '68px', flex: '1' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
            <Route path="/publisher/login" element={<PublisherLoginPage />} />
            <Route path="/games" element={<GamesPage />} /> {/* Add new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;