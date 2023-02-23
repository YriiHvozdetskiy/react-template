import styles from './ModalConfirm.module.scss';
import {CrossSvg} from '../../../assets/icons';
import {Button} from '../../Button';
import {apiListQuiz, apiDeleteQuiz} from '../../../api';

export const ModalConfirm = (props) => {
   const {
      onClose,
      updateList,
      deleteListId,
   } = props;

   const fetchDelete = async (id) => {
      await apiDeleteQuiz(id);
      const {data} = await apiListQuiz();
      updateList(data.results);
   };

   const handleConfirmDelete = async () => {
      await fetchDelete(deleteListId);
      onClose(false);
   };

   return (
      <div className={styles.wrapper}>
         <button
            className={styles.deleteBtn}
            type={'button'}
            onClick={() => onClose(false)}
         >
            <CrossSvg/>
         </button>
         <h1 className={styles.title}>Confirmation</h1>
         <p className={styles.text}>Are you sure you want to delete this test?</p>
         <div className={styles.box}>
            <Button
               type={'button'}
               text={'Cancel'}
               handleClick={() => onClose(false)}
            />
            <Button
               type={'button'}
               text={'Confirm'}
               modifier={'button_accent'}
               handleClick={handleConfirmDelete}
            />
         </div>
      </div>
   );
};