import styles from './Table.module.scss';
import {TableDesktop} from './TableDesktop';
import {DEVICE} from '../../constants';
import {TableMobile} from './TableMobile';

export const Table = (props) => {
   const windowWidth = window.innerWidth;
   const {
      pageCount,
      list,
      setList,
      setSort,
      setPage,
      typeTables,
   } = props;

   return (
      <>
         {(windowWidth <= DEVICE.mobile) &&
            <TableMobile
               pageCount={pageCount}
               list={list}
               setList={setList}
               setPage={setPage}
               typeTables={typeTables}
            />
         }
         {(windowWidth >= DEVICE.desktop) &&
            <TableDesktop
               pageCount={pageCount}
               list={list}
               setList={setList}
               setSort={setSort}
               setPage={setPage}
               typeTables={typeTables}
            />
         }
      </>
   );
};