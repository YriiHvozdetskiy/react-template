import styles from './TableMobile.module.scss';
import {Paginate} from '../../Paginate';
import {TableMobileItem} from './TableMobileItem';

export const TableMobile = (props) => {
   const {
      pageCount,
      list,
      setList,
      setPage,
      typeTables,
   } = props;

   return (
      <>
         <div className={styles.header}>
            <p className={styles.id}>№</p>
            <p>Name</p>
         </div>
         <div className={styles.list}>
            {(list.length > 0) &&
               list.map((item) => {
                  return (
                     <TableMobileItem
                        key={item?.id}
                        id={item?.id}
                        position={item?.index}
                        update={setList}
                        item={item}
                        typeTables={typeTables}
                     />);
               })
            }
            {(pageCount > 1) &&
               <Paginate
                  pageCount={pageCount}
                  setPage={setPage}
               />
            }
         </div>
      </>
   );
};