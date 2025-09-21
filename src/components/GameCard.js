import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imageUrl} alt={game.title} className="game-card-image" />
      <div className="game-card-content">
        <h3 className="game-card-title">{game.title}</h3>
        <p className="game-card-genre">{game.genre}</p>
        <div className="game-card-footer">
          <span className="game-card-price">{game.price}</span>
          <Link to={`/game/${game.id}`} className="game-card-button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;