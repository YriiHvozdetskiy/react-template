import styles from './SubTableMobile.module.scss';
import {Modal} from '../../../../Modal';
import {useState} from 'react';
import {TableMobileDetailsColum} from '../../../TableMobile/TableMobileDetailsColum';

export const SubTableMobile = (props) => {
   const {
      typeTables,
      list,
   } = props;

   const [showModal, setShowModal] = useState(false);
   const [video, setVideo] = useState(null);

   const handleOpenVideo = (video) => {
      setVideo(video);

      setShowModal(true);
   };

   const handlePlay = (audio, setPlay) => {
      audio.current.play();

      audio.current.onended = function () {
         setPlay(prev => !prev);
      };

      setPlay(prev => !prev);
   };

   const handlePause = (audio, setPlay) => {
      audio.current.pause();

      setPlay(prev => !prev);
   };

   return (
      <>
         <div className={styles.body}>
            {(typeTables?.date) &&
               <div className={styles.info}>
                  <span>Date</span>
                  {/*<span>{item?.creation_date}</span>*/}
                  <span>12/32/1193</span>
               </div>
            }
            {(typeTables?.actions) &&
               <div className={styles.info}>
                  <span>Assigned users</span>
                  <span>2</span>
               </div>
            }
            {(typeTables?.group) &&
               <div className={styles.info}>
                  <span>Group</span>
                  <span>Private test</span>
               </div>
            }
            {(typeTables?.admin) &&
               <div className={styles.info}>
                  <span>Admin</span>
                  <span>Joe Baden</span>
               </div>
            }
            {(typeTables?.score) &&
               <div className={styles.info}>
                  <span>Score</span>
                  {/*<span>{item?.score}</span>*/}
                  <span>8/10</span>
               </div>
            }
            {(showModal) &&
               <Modal
                  video={true}
                  setShowModal={setShowModal}
                  videoLink={video}
               />
            }
            {list?.questions?.length > 0 &&
               list?.questions.map((elem, index) => {
                  const quantity = index + 1;
                  return (
                     <TableMobileDetailsColum
                        key={index}
                        quantity={quantity}
                        elem={elem}
                        typeTables={typeTables}
                        handleOpenVideo={handleOpenVideo}
                        handlePlay={handlePlay}
                        handlePause={handlePause}
                     />
                  );
               })
            }
         </div>
      </>
   );
};