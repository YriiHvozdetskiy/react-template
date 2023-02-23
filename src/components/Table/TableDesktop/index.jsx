import styles from './TableDesktop.module.scss';
import {Paginate} from '../../Paginate';
import {TableDesktopItem} from './TableDesktopItem';
import {useState} from 'react';
import {sortTypes} from '../../../utils';
import {SORT_TYPES} from '../../../constants';
import {Sort} from '../../../assets/icons';

export const TableDesktop = (props) => {
   const {
      pageCount,
      list,
      setList,
      setSort,
      setPage,
      typeTables,
   } = props;

   const [isDescending, setIsDescending] = useState(false);

   const handleSortName = () => {
      const sortType = sortTypes(
         isDescending,
         SORT_TYPES.nameDescending,
         SORT_TYPES.nameAscending,
      );

      setIsDescending(prev => !prev);

      setSort(sortType);
   };

   const handleSortDate = () => {
      const sortType = sortTypes(
         isDescending,
         SORT_TYPES.dateDescending,
         SORT_TYPES.dateAscending,
      );

      setIsDescending(prev => !prev);

      setSort(sortType);
   };

   const handleSortAdmin = () => {
      console.log('sort admin');
   };

   const handleSortScore = () => {
      console.log('sort score');
   };

   const handleSortAssigned = () => {
      console.log('sort assigned');
   };

   return (
      <>
         <div className={styles.header}>
            <div className={styles.position}>
               <span>№</span>
            </div>
            {(typeTables?.photo) &&
               <div
                  className={styles.photo}
                  style={typeTables?.size?.photo}
               >
                  <span>Photo</span>
               </div>
            }
            {(typeTables?.name) &&
               <button
                  className={typeTables?.size?.name?.sort
                     ? `${styles.name} ${styles.icon_sort}`
                     : `${styles.name} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.name?.sort ? handleSortName : null}
                  style={typeTables?.size?.name}
               >
                  <span>{typeTables?.text?.name}</span>
                  {(typeTables?.size?.name?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.mail) &&
               <button
                  className={
                     typeTables?.size?.mail?.sort
                        ? `${styles.mail} ${styles.icon_sort}`
                        : `${styles.mail} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.mail?.sort ? handleSortDate : null}
                  style={typeTables?.size?.mail}
               >
                  <span>Mail</span>
                  {(typeTables?.size?.mail?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.phone) &&
               <button
                  className={
                     typeTables?.size?.phone?.sort
                        ? `${styles.phone} ${styles.icon_sort}`
                        : `${styles.phone} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.phone?.sort ? handleSortDate : null}
                  style={typeTables?.size?.phone}
               >
                  <span>Phone</span>
                  {(typeTables?.size?.phone?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.question) &&
               <div
                  className={styles.question}
                  style={typeTables?.size?.question}
               >
                  <span>Question</span>
               </div>
            }
            {(typeTables?.rightAnswer) &&
               <div
                  className={styles.rightAnswer}
                  style={typeTables?.size?.rightAnswer}
               >
                  <span>Right Answer</span>
               </div>
            }
            {(typeTables?.userAnswer) &&
               <div
                  className={styles.userAnswer}
                  style={typeTables?.size?.userAnswer}
               >
                  <span>User's Answer</span>
               </div>
            }
            {(typeTables?.date) &&
               <button
                  className={
                     typeTables?.size?.date?.sort
                        ? `${styles.date} ${styles.icon_sort}`
                        : `${styles.date} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.date?.sort ? handleSortDate : null}
                  style={typeTables?.size?.date}
               >
                  <span>Date</span>
                  {(typeTables?.size?.date?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.admin) &&
               <button
                  className={
                     typeTables?.size?.admin?.sort
                        ? `${styles.admin} ${styles.icon_sort}`
                        : `${styles.admin} ${styles.icon}`}
                  onClick={typeTables?.size?.admin?.sort ? handleSortAdmin : null}
                  type={'button'}
                  style={typeTables?.size?.admin}
               >
                  <span>Admin</span>
                  {(typeTables?.size?.admin?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.assigned) &&
               <button
                  className={
                     typeTables?.size?.assigned?.sort
                        ? `${styles.assigned} ${styles.icon_sort}`
                        : `${styles.assigned} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.assigned?.sort ? handleSortAssigned : null}
                  style={typeTables?.size?.assigned}
               >
                  <span>Assigned user`s</span>
                  {(typeTables?.size?.assigned?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.group) &&
               <div
                  className={styles.group}
                  style={typeTables?.size?.group}
               >
                  <span>{typeTables?.text?.group}</span>
               </div>
            }
            {(typeTables?.score) &&
               <button
                  className={
                     typeTables?.size?.score?.sort
                        ? `${styles.score} ${styles.icon_sort}`
                        : `${styles.score} ${styles.icon}`}
                  type={'button'}
                  onClick={typeTables?.size?.score?.sort ? handleSortScore : null}
                  style={typeTables?.size?.score}
               >
                  <span>Score</span>
                  {(typeTables?.size?.score?.sort) &&
                     <Sort/>}
               </button>
            }
            {(typeTables?.actions) &&
               <div
                  className={styles.actions}
                  style={typeTables?.size?.actions}
               ></div>
            }
         </div>
         <div className={styles.list}>
            {(list?.length > 0) &&
               list.map((item, index) => {
                  const position = index + 1;
                  return (
                     <TableDesktopItem
                        // key={item?.id}
                        key={index}
                        id={item?.id}
                        // position={item?.index}
                        position={position}
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