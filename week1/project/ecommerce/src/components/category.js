const Category = ({ className, selectCategory, categoryName }) => {
    return (
      <div className={className} onClick={() => selectCategory(categoryName)}>
        {categoryName}
      </div>
    );
  };
  export default Category;