import { Link } from 'react-router-dom';
const MenuLinks = () => {
  return (
    <div className="menu">
      <Link to={`/`}>Products
      </Link>
      <Link to={`/favorites`}>Favorites
      </Link>
    </div>
  );
};

export default MenuLinks;