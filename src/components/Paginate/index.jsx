import styles from './Paginate.module.scss';
import ReactPaginate from 'react-paginate';
import './Paginate.css';

export const Paginate = (props) => {
   const {
      pageCount,
      setPage,
   } = props;

   const handlePageClick = (event) => {
      const page = event.selected + 1;

      setPage(page);
   };

   return (
      <div className={styles.wrapper}>
         <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Prev"
            renderOnZeroPageCount={null}
            containerClassName={styles.pagination}
            // pageClassName={styles.item}
            pageClassName="page-item"
            pageLinkClassName={styles.link}
            previousClassName="page-item"
            // previousClassName={styles.item}
            previousLinkClassName="page-link"
            // nextClassName={styles.item}
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName={styles.item}
            breakLinkClassName="page-link"
            activeClassName="active"
         />
      </div>
   );
};