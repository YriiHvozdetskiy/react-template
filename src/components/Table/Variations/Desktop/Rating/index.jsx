import styles from './Rating.module.scss';
import {Evaluate} from '../../../../Evaluate';
import {Button} from '../../../../Button';
import {apiEvaluateQuestion} from '../../../../../api';
import {useState} from 'react';

export const Rating = (props) => {
   const {
      item,
      evaluateValue,
      setShowQuiz,
      setEvaluateValue,
      questionId,
      setQuestionId,
   } = props;

   const [evaluate, setEvaluate] = useState(null);
   // TODO в score?.id нема ід, томущо ми його не оцінили ще (при POST перший раз)
   const value = {
      value: evaluate,
      answer: item?.answers?.id,
   };

   const handleClick = async () => {
      console.log('Confirm');
      console.log('evaluateValue', evaluateValue);
      const {data} = evaluateValue
         // changeRating    item?.answers?.score?.id
         ? await apiEvaluateQuestion(value, questionId, 'PATCH')
         // evaluate
         : await apiEvaluateQuestion(value, null, 'POST');

      setEvaluateValue(data?.value);
      // TODO записуєм ід по якому будем робити патч
      if (data.score?.id) {
         setQuestionId(data.score?.id); // ???
      }

      setShowQuiz(prev => !prev);
   };
   console.log('item?.answers?.score?.id', item?.answers?.score?.id);
   console.log('questionId', questionId);
   return (
      <>
         <div className={styles.wrapper}>
            <div className={styles.body}>
               <span className={styles.text}>Select a grade for this question</span>
               <Evaluate
                  setEvaluate={setEvaluate}
               />
               <Button
                  type={'button'}
                  text={'Confirm'}
                  modifier={'button_accent'}
                  handleClick={handleClick}
               />
            </div>
         </div>
      </>
   );
};