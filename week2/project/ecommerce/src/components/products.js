import Product from './product';
import React, { useEffect, useState } from 'react';

const Products = ({ category }) => {

  const [allProducts, setProducts] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    }; 
    fetchData();
  }, [category]);


  return (
    <div className="cards">
      {allProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
export default Products;
