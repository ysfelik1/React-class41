import React from 'react';
import { useFavorites } from '../contexts/contextFavorite';
import Product from './product';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      <div className="cards">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <Link key={favorite.id} to={`/products/${favorite.id}`}>
    <Product  key={favorite.id}  {...favorite} />
            </Link>
          ))
        ) : (
          <p>No favorite products selected.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
