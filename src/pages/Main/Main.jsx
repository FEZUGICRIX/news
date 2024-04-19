import { useEffect, useState } from 'react';
import style from './styles.module.css';

import { getNews } from '../../api/apiNews';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton'

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNew = async () => {
      try {
        setIsLoading(true)
        const response = await getNews()
        setNews(response.news);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchNew()
  }, [])

  return (
    <main className={style.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type='banner' />}
      
      {!isLoading ?
        <NewsList news={news} /> :
        <Skeleton count={15} type='item' /> 
      }
    </main>
  );
}