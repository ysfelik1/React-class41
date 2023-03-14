import Product from './product';
import Categories from './categories';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../loader.css';
import Loader from './loader';
import ErrorPage from './errorPage';

import Favorite from './favorite';

function getURL(category) {
  let myURL = 'https://fakestoreapi.com/products';
  if (category !== 'all') {
    myURL = `https://fakestoreapi.com/products/category/${category}`;
  }
  return myURL;
}




const Products = () => {
  const [allProducts, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('all');
  const [error, setError] = useState(null);


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
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Products</h1>
          <Categories selectCategory={selectCategory} category={category} />
          <div className="cards">
            {allProducts.map((product) => {
            
              return (
                <React.Fragment key={product.id}>
                <Favorite ></Favorite>
                
                  <Link to={`/products/${product.id}`}>
                    <Product {...product} />
                  </Link>
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
