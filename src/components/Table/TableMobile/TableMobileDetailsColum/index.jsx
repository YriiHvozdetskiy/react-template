import styles from './TableMobileDetailsColum.module.scss';
import {useRef, useState} from 'react';
import {Play, StopVoice} from '../../../../assets/icons';

export const TableMobileDetailsColum = (props) => {
   const {
      quantity,
      elem,
      typeTables,
      handleOpenVideo,
      handlePause,
      handlePlay,
   } = props;

   const [play, setPlay] = useState(true);
   const audio = useRef(null);

   return (
      <>
         <div
            className={styles.questionItem}
            key={quantity}
         >
            <p className={styles.quantity}>№ {quantity}</p>
            <p className={styles.description}>{elem?.question_name}</p>
            {(typeTables?.sizeQuestions?.questions) &&
               <div className={styles.video}>
                  <p>Question</p>
                  <button
                     onClick={() => handleOpenVideo(elem?.question_link)}
                     type={'button'}
                  >
                     <Play/>
                  </button>
               </div>
            }
            {(typeTables?.sizeQuestions?.rightAnswer) &&
               <div className={`${styles.video} ${styles.answer}`}>
                  <p>Right answer</p>
                  <button
                     className={`${styles.button} ${styles.button_rightAnswer}`}
                     onClick={() => handleOpenVideo(elem?.question_answer)}
                     type={'button'}
                  >
                     <Play/>
                  </button>
               </div>

            }
            {(typeTables?.sizeQuestions?.userAnswer) &&
               <div
                  className={`${styles.answer} ${styles.answer_user}`}
               >
                  <span>User’s answer</span>
                  <audio
                     className={styles.audio}
                     controls
                     src={elem?.answers?.answer}
                     ref={audio}
                  ></audio>
                  {play
                     ?
                     <button
                        className={`${styles.button} ${styles.button_play}`}
                        type={'button'}
                        onClick={() => handlePlay(audio, setPlay)}
                     >
                        <Play/>
                     </button>
                     :
                     <button
                        className={`${styles.button} ${styles.button_pause}`}
                        type={'button'}
                        onClick={() => handlePause(audio, setPlay)}
                     >
                        <StopVoice/>
                     </button>
                  }
               </div>
            }
         </div>
      </>
   );
};