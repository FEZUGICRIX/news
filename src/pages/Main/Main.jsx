import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import style from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';

export const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNew = async () => {
      try {
        const response = await getNews()
        setNews(response.news);
        console.log(response.news);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNew()
  }, [])

  return (
    <main className={style.main}>
      {news.length > 0 ? <NewsBanner item={news[19]} /> : null}

      <NewsList news={news} />
    </main>
  );
}