const Category = ({ className, selectCategory, categoryName }) => {
    return (
      <button className={className} onClick={() => selectCategory(categoryName)}>
        {categoryName}
      </button>
      
    );
  };
  export default Category;