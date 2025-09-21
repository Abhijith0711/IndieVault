import React from 'react';
import { featuredGames } from '../data/games';
import GameCard from './GameCard'; // Import our new reusable component
import '../styles/GamesPage.css';

const GamesPage = () => {
  return (
    <div className="games-page-container">
      <h1 className="games-page-title">All Games</h1>
      <div className="games-grid-container">
        {featuredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;