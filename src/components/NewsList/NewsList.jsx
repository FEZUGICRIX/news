import NewsItem from '../NewsItem/NewsItem';
import style from './styles.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={style.list}>
      {news.map(item => 
        <NewsItem item={item} key={item.id} />
      )}
    </ul>
  );
}

export default NewsList;