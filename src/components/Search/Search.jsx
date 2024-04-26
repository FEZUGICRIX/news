import style from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <input
      type="text"
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      placeholder='JavaScript'
      className={style.search} />
  );
}

export default Search