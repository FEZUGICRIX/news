import style from './styles.module.css';

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  return (
    <div className={style.pagination}>
      <button
        onClick={handlePreviousPage}
        className={style.arrow}
        disabled={currentPage <= 1}>
        {'<'}
      </button>

      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={style.pageNumber}
            disabled={index + 1 === currentPage}>
            {index + 1}
          </button>
        )
      })}
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages} >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;