import Product from './product';
import Categories from './categories';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../loader.css';
import Loader from './loader';

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

  const  selectCategory=(categoryName)=> {
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
      }
    };
    fetchData();
  }, [category]);

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
              <Link key={product.id} to={`/products/${product.id}`}>
                <Product {...product} />
              </Link>
            );
          })}
        </div>
        </>
      )}
    </div>
  );
};

export default Products;