import './App.css';
import './loader.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Products from './components/products';
import ProductDetail from './components/productDetail';

function App() {
  
  return (
    <Router>
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Products/>} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
