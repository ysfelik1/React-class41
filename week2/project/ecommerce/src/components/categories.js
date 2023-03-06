import allCategories from '../fake-data/all-categories';
import Category from './category';

const Categories = ({ selectCategory, category }) => {
  return (
    <div className="category">
      {allCategories.map((categoryItem, index) => {
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