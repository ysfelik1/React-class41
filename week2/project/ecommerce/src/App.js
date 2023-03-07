import { useState } from 'react';
import './App.css';
import './loader.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Categories from './components/categories';
import Products from './components/products';
import ProductDetail from './components/productDetail';

function App() {
  const [category, setCategory] = useState('all');

  function selectCategory(categoryName) {
    if (categoryName === category) {
      setCategory('all');
    } else {
      setCategory(categoryName);
    }
  }

  return (
    <Router>
    <div className="App">
      <h1>Products</h1>
      <Categories selectCategory={selectCategory} category={category} />
      <Routes>
        <Route exact path="/" element={<Products category={category} />} />
        <Route exact path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
