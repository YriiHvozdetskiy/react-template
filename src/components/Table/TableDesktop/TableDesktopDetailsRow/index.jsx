import styles from './TableDesktopDetailsRow.module.scss';
import {useRef, useState} from 'react';
import {Play, StopVoice} from '../../../../assets/icons';

export const TableDesktopDetailsRow = (props) => {
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
         <div className={styles.row}
              key={quantity}>
            <div
               className={styles.position}
               style={typeTables?.sizeQuestions?.number}
            >
               <span>{quantity}</span>
            </div>
            <div
               className={styles.description}
               style={typeTables?.sizeQuestions?.name}
            >
               <span>{elem?.question_name}</span>
            </div>
            {(typeTables?.sizeQuestions?.email) &&
               <div
                  className={`${styles.button} ${styles.button_question}`}
                  style={typeTables?.sizeQuestions?.email}
               >
                  <span>Example_1@gmail.com</span>
               </div>
            }
            {(typeTables?.sizeQuestions?.questions) &&
               <div
                  className={`${styles.button} ${styles.button_question}`}
                  style={typeTables?.sizeQuestions?.questions}
               >
                  <button
                     onClick={() => handleOpenVideo(elem?.question_link)}
                     type={'button'}
                  >
                     <Play/>
                  </button>
               </div>
            }
            {(typeTables?.sizeQuestions?.rightAnswer) &&
               <div
                  className={`${styles.button} ${styles.button_answer}`}
                  style={typeTables?.sizeQuestions?.rightAnswer}
               >
                  <button
                     onClick={() => handleOpenVideo(elem?.question_answer)}
                     type={'button'}
                  >
                     <Play/>
                  </button>
               </div>
            }
            {(typeTables?.sizeQuestions?.userAnswer) &&
               <div
                  className={`${styles.button} ${styles.button_question}`}
                  style={typeTables?.sizeQuestions?.userAnswer}
               >
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
                     </button>}
               </div>
            }
            {(typeTables?.sizeQuestions?.score) &&
               <div
                  className={styles.score}
                  style={typeTables?.sizeQuestions?.score}
               >
                  <span>8/10</span>
               </div>
            }
         </div>
      </>
   );
};