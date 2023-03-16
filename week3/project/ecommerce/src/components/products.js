import Product from './product';
import Categories from './categories';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../loader.css';
import Loader from './loader';
import ErrorPage from './errorPage';
import { useFavorites } from '../contexts/contextFavorite';

import Favorite from './favorite';

function getURL(category) {
  let myURL = 'https://fakestoreapi.com/products';
  if (category !== 'all') {
    myURL = `https://fakestoreapi.com/products/category/${category}`;
  }
  return myURL;
}

const Products = ({ isFavRoute }) => {
  const [allProducts, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('all');
  const [error, setError] = useState(null);

  const { favorites } = useFavorites();

  const selectCategory = (categoryName) => {
    if (categoryName === category) {
      setCategory('all');
    } else {
      setCategory(categoryName);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(getURL(category));
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [category]);

  if (error) {
    return (
      <ErrorPage errorText={error.message} />
    );
  }

  const favoriteProducts = allProducts.filter((product) =>
    favorites.includes(product.id)
  );
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) :
        (
          isFavRoute ? (
            <div>
              <h1>Favorites</h1>
              <div className="cards">
                {favoriteProducts.length > 0 ? (
                  favoriteProducts.map((product) => (
                    <React.Fragment key={product.id}>
                      <Link to={`/favorites`}>
                        <Product {...product} isFavRoute={isFavRoute} />
                      </Link>
                      <Favorite productId={product.id}></Favorite>
                    </React.Fragment>
                  ))
                ) : (
                  <p>No favorite products selected.</p>
                )}
              </div>
            </div>
          ) :
            <>

              <h1>Products</h1>
              <Categories selectCategory={selectCategory} category={category} />
              <div className="cards">
                {allProducts.map((product) => {
                  return (
                    <React.Fragment key={product.id}>
                      <Link to={`/products/${product.id}`}>
                        <Product {...product} isFavRoute={isFavRoute} />
                      </Link>
                      <Favorite productId={product.id}></Favorite>
                    </React.Fragment>
                  );
                })}
              </div>
            </>

        )}
    </div>
  );
};

export default Products;
