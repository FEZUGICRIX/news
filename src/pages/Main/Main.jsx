import { useEffect, useState } from 'react';
import style from './styles.module.css';

import { getNews } from '../../api/apiNews';
import useDebounce from '../../helpers/hooks/useDebounce';
import { getCategories } from '../../api/apiNews';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination';
import NewsList from '../../components/NewsList/NewsList';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState('')
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
        keywords: debouncedKeywords
      })
      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory, debouncedKeywords])

  useEffect(() => {
    fetchCategories()
  }, [])


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={style.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />

      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type='banner' />}

      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage} />

      <Search
        keywords={keywords}
        setKeywords={setKeywords} />

      {!isLoading ?
        <NewsList news={news} /> :
        <Skeleton count={10} type='item' /> 
      }
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage} />
    </main>
  );
}