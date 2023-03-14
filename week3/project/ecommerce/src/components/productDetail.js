import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './loader';
import Favorite from './favorite';
import { useFavorites } from '../contexts/contextFavorite';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const  {favorites, setFavorites}=useFavorites();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <Loader/>;
  }


  return (
    <div className="product-detail">
      <h3>{product.title}</h3>
     {console.log(favorites)} 
      <Favorite productId={product.id} ></Favorite> 

      <div className="product-info">
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
        </div>
    </div>
  );
};

export default ProductDetail;
