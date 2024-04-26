import style from './styles.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={style.categories}>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={category === selectedCategory && style.active}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;