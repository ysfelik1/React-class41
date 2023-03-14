
import heartRegularSvg from './../assets/heart-regular.svg';
import heartSolidSvg from './../assets/heart-solid.svg';

const Favorite = ({isFavorite}) => {
    return (
        <img
        className='fav'
        src={isFavorite ? heartSolidSvg : heartRegularSvg}
        alt='favorite'/>
    )
}

export default Favorite;