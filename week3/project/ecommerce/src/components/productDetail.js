import { useParams } from 'react-router-dom';
import Loader from './loader';
import Favorite from './favorite';
import useFetch from '../useFetch';
const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="product-detail">
      <h3>{data.title}</h3>
      <Favorite productId={data.id} />
      <div className="product-info">
        <img src={data.image} alt={data.title} />
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
