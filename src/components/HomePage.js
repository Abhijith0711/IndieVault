import React from 'react';
import { featuredGames } from '../data/games';
import GameCard from './GameCard';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Unveil Your Next Gaming Obsession</h1>
          <p>
            Dive into a meticulously curated collection of independent games. Find unique adventures and support creators.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Titles</h2>
        <div className="game-cards-container">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;