
import heartRegularSvg from './../assets/heart-regular.svg';
import heartSolidSvg from './../assets/heart-solid.svg';
import { useFavorites } from '../contexts/contextFavorite';

const Favorite = ({productId}) => {
    

    const  {favorites, setFavorites}=useFavorites();
    const isFavorite = favorites.includes(productId);
    const handleClick = (itemId) => {
        if (favorites.includes(itemId)) {
          setFavorites(favorites.filter((id) => id !== itemId));
        } else {
          setFavorites([...favorites, itemId]);
        }
      
      };

    return (

      
        <img onClick={() => handleClick(productId)}
        className='fav'
        src={isFavorite ? heartSolidSvg : heartRegularSvg}
        alt='favorite'/>
    )
}

export default Favorite;