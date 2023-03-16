import './App.css';
import './loader.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuLinks from './components/menuLinks';
import Products from './components/products';
import ProductDetail from './components/productDetail';
import { FavoritesProvider } from './contexts/contextFavorite';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <div>  <MenuLinks /></div>
          <Routes>
            <Route exact path="/" element={<Products isFavRoute={ false } />} />
            <Route exact path="/products/:id" element={<ProductDetail />} />
            <Route exact path="/favorites" element={<Products  isFavRoute={ true }/>}/>
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
