import Category from './category';
import React, { useEffect, useState } from 'react';
const Categories = ({ selectCategory, category }) => {
 
  const [allCategories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="category">
      {allCategories.map((categoryItem, index) => {
        return (
          <Category
            key={index}
            className={`category-item ${
              categoryItem === category ? 'category-item-selected' : ''
            }`}
            selectCategory={selectCategory}
            categoryName={categoryItem}
          />
        );
      })}
    </div>
  );
};

export default Categories;