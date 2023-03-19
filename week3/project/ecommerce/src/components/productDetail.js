import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './loader';
import Favorite from './favorite';
import ErrorPage from './errorPage';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return (
      <ErrorPage errorText={error.message} />
    );
  }
  if (!product) {
    return <Loader />;
  }

  return (
    <div className="product-detail">
      <h3>{product.title}</h3>
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
