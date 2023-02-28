import { useState } from 'react';
import './App.css';
import Categories from './components/categories';
import Products from './components/products';

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
    <div className="App">
      <h1>Products</h1>
      <Categories selectCategory={selectCategory} category={category} />
      <Products category={category} />
    </div>
  );
}

export default App;
