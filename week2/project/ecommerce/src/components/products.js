import Product from './product';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../loader.css';
import Loader from './loader';

const Products = ({ category }) => {
  const [allProducts, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getURL(category) {
      let myURL = 'https://fakestoreapi.com/products';
      if (category !== 'all') {
        myURL = `https://fakestoreapi.com/products/category/${category}`;
      }
      return myURL;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(getURL(category));
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cards">
          {allProducts.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Product {...product} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;