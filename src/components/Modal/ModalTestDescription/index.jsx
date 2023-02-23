import styles from './ModalTestDescription.module.scss';
import {CrossSvg} from '../../../assets/icons';

export const ModalTestDescription = (props) => {
   const {
      description,
      onClose,
   } = props;

   return (
      <div className={styles.wrapper}>
         <button
            className={styles.deleteBtn}
            type={'button'}
            onClick={() => onClose(false)}
         >
            <CrossSvg/>
         </button>
         <p className={styles.text}>{description}</p>
         <div className={styles.score}>
            <div className={styles.score__block}>
               <span>Latest assessment: </span>
               <span>4/10</span>
            </div>
            <div className={styles.score__block}>
               <span>Average score: </span>
               <span>8/10</span>
            </div>
         </div>
      </div>
   );
};