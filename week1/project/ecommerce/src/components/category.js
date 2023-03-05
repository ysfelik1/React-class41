const Category = ({ className, selectCategory, categoryName }) => {
    return (
      <nav className={className} onClick={() => selectCategory(categoryName)}>
        {categoryName}
      </nav>
      
    );
  };
  export default Category;