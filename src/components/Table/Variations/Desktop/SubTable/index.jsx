import styles from './SubTable.module.scss';
import {Modal} from '../../../../Modal';
import {TableDesktopDetailsRow} from '../../../TableDesktop/TableDesktopDetailsRow';
import {useState} from 'react';

export const SubTable = (props) => {
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
            <div className={styles.questionTable}>
               <div className={styles.header}>
                  <div
                     className={styles.number}
                     style={typeTables?.sizeQuestions?.number}
                  >
                     <span>№</span>
                  </div>
                  <div
                     className={styles.name}
                     style={typeTables?.sizeQuestions?.name}
                  >
                     <span>{typeTables?.textQuestions?.name}</span>
                  </div>
                  {(typeTables?.sizeQuestions?.email) &&
                     <div
                        className={styles.email}
                        style={typeTables?.sizeQuestions?.email}
                     >
                        <span>E-mail</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.questions) &&
                     <div
                        className={styles.question}
                        style={typeTables?.sizeQuestions?.questions}
                     >
                        <span>Question</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.rightAnswer) &&
                     <div
                        className={styles.answer}
                        style={typeTables?.sizeQuestions?.rightAnswer}
                     >
                        <span>Right answer</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.userAnswer) &&
                     <div
                        className={`${styles.answer} ${styles.answer_user}`}
                        style={typeTables?.sizeQuestions?.userAnswer}
                     >
                        <span>User answer</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.score) &&
                     <div
                        className={styles.score}
                        style={typeTables?.sizeQuestions?.score}
                     >
                        <span>Score</span>
                     </div>
                  }
                  {(showModal) &&
                     <Modal
                        video={true}
                        setShowModal={setShowModal}
                        videoLink={video}
                     />
                  }
               </div>
               {list?.questions?.length > 0 &&
                  list?.questions.map((elem, index) => {
                     const quantity = index + 1;
                     return (
                        <TableDesktopDetailsRow
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
         </div>
      </>
   );
};