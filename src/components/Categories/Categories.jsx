import style from './styles.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={style.categories}>
      {categories.map(category => 
        <button key={category}
          onClick={() => setSelectedCategory(category)}
          className={
            category === selectedCategory ? style.active : style.item
          }>
          {category}
        </button>
      )}
    </div>
  );
}

export default Categories