import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredGames } from '../data/games';
import './GameDetailsPage.css';

const GameDetailsPage = () => {
  const { id } = useParams();
  const game = featuredGames.find(g => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="details-container not-found">
        <h2>Game Not Found</h2>
        <Link to="/" className="back-link">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-header" style={{ backgroundImage: `url(${game.screenshots[0]})` }}>
        <div className="header-overlay"></div>
        <div className="header-content">
          <img src={game.imageUrl} alt={game.title} className="header-cover-art" />
          <div className="header-info">
            <h1>{game.title}</h1>
            <p className="genre">{game.genre}</p>
            <div className="price-tag">{game.price}</div>
            <div className="action-buttons">
              <button className="add-to-cart-button">Add to Cart</button>
              <Link to="/checkout" state={{ game: game }} className="buy-now-button">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="details-main-content">
        <h2>About this game</h2>
        <p>{game.description}</p>

        <h2>Screenshots</h2>
        <div className="screenshots-container">
          {game.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="screenshot" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;