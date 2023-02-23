import styles from './TableDesktopDetails.module.scss';
import {Rating, Requests, SubTable} from '../../Variations/Desktop';

export const TableDesktopDetails = (props) => {
   const {
      toggle,
      typeTables,
      item,
      setShowQuiz,
      evaluateValue,
      setEvaluateValue,
      questionId,
      setQuestionId,
   } = props;

   return (
      <>
         {toggle && typeTables?.variations?.rating &&
            <Rating
               item={item}
               evaluateValue={evaluateValue}
               setShowQuiz={setShowQuiz}
               setEvaluateValue={setEvaluateValue}
               questionId={questionId}
               setQuestionId={setQuestionId}
            />
         }

         {toggle && typeTables?.variations?.subTable &&
            <SubTable
               list={item}
               typeTables={typeTables}
            />
         }

         {toggle && typeTables?.variations?.requests &&
            <Requests
               list={item}
               typeTables={typeTables}
            />
         }
      </>
   );
};