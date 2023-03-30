import Product from './product';
import Categories from './categories';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../loader.css';
import Loader from './loader';
import ErrorPage from './errorPage';
import { useFavorites } from '../contexts/contextFavorite';

import Favorite from './favorite';
import useFetch from '../useFetch';

function getURL(category) {
  let myURL = 'https://fakestoreapi.com/products';
  if (category !== 'all') {
    myURL = `https://fakestoreapi.com/products/category/${category}`;
  }
  return myURL;
}

const Products = ({ isFavRoute }) => {
  const [category, setCategory] = useState('all');

  const { favorites } = useFavorites();

  const selectCategory = (categoryName) => {
    if (categoryName === category) {
      setCategory('all');
    } else {
      setCategory(categoryName);
    }
  }

  const { data: allProducts, isLoading, error } = useFetch(getURL(category));

  const favoriteProducts = allProducts?.filter((product) =>
    favorites.includes(product.id)
  );

  if (error) {
    return (
      <ErrorPage errorText={error.message} />
    );
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        isFavRoute ? (
          <div>
            <h1>Favorites</h1>
            <div className="cards">
              {favoriteProducts?.length > 0 ? (
                favoriteProducts.map((product) => (
                <div  key={product.id}>
                    <Link to={`/favorites`}>
                      <Product {...product} isFavRoute={isFavRoute} />
                    </Link>
                    <Favorite productId={product.id}></Favorite>
                    </div>
                ))
              ) : (
                <p>No favorite products selected.</p>
              )}
            </div>
          </div>
        ) : (
          <>
            <h1>Products</h1>
            <Categories selectCategory={selectCategory} category={category} />
            <div className="cards">
              {allProducts?.map((product) => {
                return (
                  <div  key={product.id}>
                    <Link to={`/products/${product.id}`}>
                      <Product {...product} isFavRoute={isFavRoute} />
                    </Link>
                    <Favorite productId={product.id}></Favorite>
                    </div>
                );
              })}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Products;