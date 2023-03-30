import Category from './category';
import useFetch from '../useFetch';
import ErrorPage from './errorPage';

const Categories = ({ selectCategory, category }) => {
  const { data: allCategories, error } = useFetch('https://fakestoreapi.com/products/categories');

  if (error) {
    return <ErrorPage errorText={error} />;
  }

  return (
    <div className="category">
      {allCategories &&
        allCategories.map((categoryItem, index) => {
          return (
            <Category
              key={index}
              className={`category-item ${
                categoryItem === category ? 'category-item-selected' : ''
              }`}
              selectCategory={selectCategory}
              categoryName={categoryItem}
            />
          );
        })}
    </div>
  );
};

export default Categories;
