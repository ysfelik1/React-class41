import Product from './product';
import React, { useEffect, useState } from 'react';

const Products = ({ category }) => {

  const [allProducts, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let filteredProducts = allProducts;
  if (category !== 'all') {
    filteredProducts = allProducts.filter((product) => {
      return product.category === category;
    });
  }
  return (
    <div className="cards">
      {filteredProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
export default Products;