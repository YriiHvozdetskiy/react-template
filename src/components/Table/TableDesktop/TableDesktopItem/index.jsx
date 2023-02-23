import styles from './TableDesktopItem.module.scss';
import defaultImage from '../../../../assets/img/default.jpg';
import {useEffect, useRef, useState} from 'react';
import {TableDesktopDetails} from '../TableDesktopDetails';
import {DeleteQuiz, Edit, Play, StopVoice} from '../../../../assets/icons';
import {ROUTS} from '../../../../constants';
import {Modal} from '../../../Modal';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '../../../Button';

export const TableDesktopItem = (props) => {
   const {
      id,
      position,
      update,
      item,
      typeTables,
   } = props;

   const [showQuiz, setShowQuiz] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const [play, setPlay] = useState(true);
   const [video, setVideo] = useState(null);
   // TODO тут зберігаєм ід score?.id після POST і передамо в Rating(не збирігаєм бо воно ререндириться)
   const [questionId, setQuestionId] = useState(null);
   const [evaluateValue, setEvaluateValue] = useState(item?.answers?.score?.value);
   const audio = useRef(null);
   const navigate = useNavigate();

   const cssClass = styles.open;

   const handleOpenVideo = (video) => {
      setVideo(video);

      setShowModal(true);
   };

   const handlePlay = () => {
      audio.current.play();

      audio.current.onended = function () {
         setPlay(prev => !prev);
      };

      setPlay(prev => !prev);
   };

   const handlePause = () => {
      audio.current.pause();

      setPlay(prev => !prev);
   };

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
      setShowQuiz(!showQuiz);
   };

   const handleEvaluate = () => {
      console.log('go evaluate');
      console.log('evaluateValue', evaluateValue);
      setShowQuiz(prev => !prev);
      // setQuestionId(item?.answers?.id);
      // setChangeRating(prev => !prev);
   };

   const handleChangeRating = () => {
      console.log('ChangeRating');
      console.log('evaluateValue', evaluateValue);

      setShowQuiz(prev => !prev);

      // setChangeRating(prev => !prev);
   };
   console.log('item', item);
   return (
      <>
         <div className={styles.item}>
            {(showModal) &&
               <Modal
                  video={true}
                  setShowModal={setShowModal}
                  videoLink={video}
               />
            }
            {/*{(showModal) &&*/}
            {/*   <Modal*/}
            {/*      confirm={true}*/}
            {/*      setShowModal={setShowModal}*/}
            {/*      deleteListId={id}*/}
            {/*      updateList={update}*/}
            {/*   />*/}
            {/*}*/}
            <div
               className={styles.wrapper}
               onClick={(typeTables?.toggle) ? handleToggle : null}
               data-wrapper="wrapper"
               style={(!typeTables?.toggle) ? {cursor: 'auto'} : null}
            >
               <div
                  className={styles.position}
                  data-wrapper="wrapper"
               >
                  <span data-wrapper="wrapper">{position}</span>
               </div>
               {(typeTables?.photo) &&
                  <div
                     className={styles.photo}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.photo}
                  >
                     <img
                        src={item?.picture ? item?.picture : defaultImage} alt=""
                        data-wrapper="wrapper"
                     />
                  </div>
               }
               {(typeTables?.name) &&
                  <div
                     data-wrapper="wrapper"
                     className={styles.name}
                     style={typeTables?.size?.name}
                  >
                      <span data-wrapper="wrapper">
                         {(item?.name) && item?.name}
                         {(item?.question_name) && item?.question_name}
                      </span>
                  </div>
               }
               {(typeTables?.question) &&
                  <div
                     className={`${styles.button} ${styles.button_question}`}
                     style={typeTables?.size.question}
                  >
                     <button
                        onClick={() => handleOpenVideo(item?.question_link)}
                        type={'button'}
                     >
                        <Play/>
                     </button>
                  </div>
               }
               {(typeTables?.rightAnswer) &&
                  <div
                     className={`${styles.button} ${styles.button_answer}`}
                     style={typeTables?.size?.rightAnswer}
                  >
                     <button
                        onClick={() => handleOpenVideo(item?.question_answer)}
                        type={'button'}
                     >
                        <Play/>
                     </button>
                  </div>
               }
               {(typeTables?.userAnswer) &&
                  <div
                     className={`${styles.button} ${styles.button_question}`}
                     style={typeTables?.size?.userAnswer}
                  >
                     <audio
                        className={styles.audio}
                        controls
                        src={item?.answers?.answer}
                        ref={audio}
                     ></audio>
                     {play
                        ?
                        <button
                           className={`${styles.button} ${styles.button_play}`}
                           type={'button'}
                           onClick={handlePlay}
                        >
                           <Play/>
                        </button>
                        :
                        <button
                           className={`${styles.button} ${styles.button_pause}`}
                           type={'button'}
                           onClick={handlePause}
                        >
                           <StopVoice/>
                        </button>}
                  </div>}

               {(typeTables?.date) &&
                  <span
                     className={styles.date}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.date}
                  >
                     {item?.updated_at}
                  </span>
               }
               {(typeTables?.admin) &&
                  <div
                     className={styles.admin}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.admin}
                  >
                     <span data-wrapper="wrapper">J.Baden</span>
                  </div>}
               {(typeTables?.assigned) &&
                  <span
                     className={styles.assigned}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.assigned}
                  >
                     2
                  </span>
               }
               {(typeTables?.group) &&
                  <span
                     className={styles.group}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.group}
                  >
                     {item?.users
                        ? <>
                           {item?.users?.length
                              ? item?.users?.length
                              : 0
                           }
                        </>
                        : 'Puplic test'
                     }
                  </span>
               }
               {(typeTables?.score) &&
                  <div
                     className={styles.score}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.score}
                  >
                     {(typeTables?.type?.evaluate) &&
                        <>
                           {evaluateValue
                              ? <button
                                 type={'button'}
                                 className={styles.changeRating}
                                 onClick={handleChangeRating}
                              >
                                 {evaluateValue}/10 - Change rating
                              </button>
                              : <Button
                                 text={'To evaluate'}
                                 type={'button'}
                                 modifier={'button_addTest'}
                                 handleClick={handleEvaluate}
                              />}
                        </>
                     }
                     {(typeTables?.type?.score) &&
                        <span data-wrapper="wrapper">8/10</span>
                     }
                  </div>
               }
               {(typeTables?.actions) &&
                  <div
                     className={styles.actions}
                     data-wrapper="wrapper"
                     style={typeTables?.size?.actions}
                  >
                     {(typeTables?.type?.edit) &&
                        <>
                           <button
                              className={`${styles.icon} ${styles.icon_button}`}
                              type={'button'}
                              data-edit="edit"
                           >
                              <Link to={`${id}`}>
                                 <Edit/>
                              </Link>
                           </button>
                           <button
                              className={`${styles.icon} ${styles.icon_button}`}
                              type={'button'}
                           >
                              <DeleteQuiz/>
                           </button>
                        </>
                     }
                     {(typeTables?.type?.access) &&
                        <div className={styles.seniorActions}
                             style={typeTables?.size?.actions}>
                           <Button nameClass="button__seniorDashboard" text={'Accept admin'}/>
                           <Button nameClass="button__seniorDashboard" text={'Accept user'}/>
                           <Button nameClass="button__seniorDashboard" text={'Refuse'}/>
                        </div>
                     }
                  </div>
               }
            </div>
            <TableDesktopDetails
               toggle={showQuiz}
               item={item}
               typeTables={typeTables}
               evaluateValue={evaluateValue}
               setShowQuiz={setShowQuiz}
               setEvaluateValue={setEvaluateValue}
               questionId={questionId}
               setQuestionId={setQuestionId}
            />
         </div>
      </>
   );
};