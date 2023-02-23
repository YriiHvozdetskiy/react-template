import styles from './TableMobileItem.module.scss';
import defaultImage from '../../../../assets/img/default.jpg';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ROUTS} from '../../../../constants';
import {Modal} from '../../../Modal';
import {DeleteQuiz, Edit} from '../../../../assets/icons';
import {TableMobileDetails} from '../TableMobileDetails';

export const TableMobileItem = (props) => {
   const {
      id,
      position,
      update,
      item,
      typeTables,
   } = props;
   const [showQuiz, setShowQuiz] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const navigate = useNavigate();

   const cssClass = styles.open;

   const handleToggle = (event) => {
      const wrapper = event.target.getAttribute('data-wrapper');
      const edit = event.target.getAttribute('data-edit');

      if (edit) {
         navigate(ROUTS.createTest);
         return;
      }

      if (!wrapper) {
         setShowModal(true);
         return;
      }

      event.currentTarget.classList.toggle(cssClass);

      setShowQuiz(prev => !prev);
   };

   return (
      <>
         <div className={styles.item}>
            {(showModal) &&
               <Modal
                  confirm={true}
                  setShowModal={setShowModal}
                  deleteListId={id}
                  updateList={update}
               />
            }
            <div
               className={styles.wrapper}
               onClick={handleToggle}
               data-wrapper="wrapper"
            >
               <span
                  data-wrapper="wrapper"
                  className={styles.position}
               >
                  {position}
               </span>
               <img
                  className={styles.img}
                  data-wrapper="wrapper"
                  src={item?.picture ? item?.picture : defaultImage} alt=""
               />
               <span
                  data-wrapper="wrapper"
                  className={styles.name}
               >
                  {item?.name}
               </span>
               {(typeTables?.actions) &&
                  <>
                     <button
                        className={styles.icon}
                        type={'button'}
                        data-edit="edit"
                     >
                        <Link to={`${id}`}>
                           <Edit/>
                        </Link>
                     </button>
                     <button
                        className={styles.icon}
                        type={'button'}
                     >
                        <DeleteQuiz/>
                     </button>
                  </>
               }
            </div>
            <TableMobileDetails
               toggle={showQuiz}
               item={item}
               typeTables={typeTables}
            />
         </div>
      </>
   );
};