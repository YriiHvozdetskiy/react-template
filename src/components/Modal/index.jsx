import styles from './Modal.module.scss';
import {ModalConfirm} from './ModalConfirm';
import {ModalVideo} from './ModalVideo';
import {ModalTestDescription} from "./ModalTestDescription";

export const Modal = (props) => {
   const {
      confirm = false,
      video = false,
      testDescription = false,
      setShowModal,
      deleteListId,
      updateList,
      videoLink,
      description,
   } = props;

   const handleClick = (event) => {
      if (event.target === event.currentTarget) {
         setShowModal(false);
      }
   };

   return (
      <div
         onClick={handleClick}
         className={styles.backdrop}
      >
         {(confirm) &&
            <ModalConfirm
               onClose={setShowModal}
               deleteListId={deleteListId}
               updateList={updateList}
            />}
         {(video) && <ModalVideo videoLink={videoLink}/>}
         {(testDescription) && <ModalTestDescription description={description} onClose={setShowModal}/>}
      </div>
   );
};