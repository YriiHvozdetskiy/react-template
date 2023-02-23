import React from 'react';
import styles from './Requests.module.scss'

export const Requests = (props) => {

   const {
      typeTables,
      list,
   } = props;
   console.log(list)
   return (
      <>
         <div className={styles.body}>
            <div className={styles.questionTable}>
               <div className={styles.header}>
                  {(typeTables?.sizeQuestions?.mail) &&
                     <div
                        className={styles.question}
                        style={typeTables?.sizeQuestions?.mail}
                     >
                        <span>Mail</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.phone) &&
                     <div
                        className={styles.answer}
                        style={typeTables?.sizeQuestions?.phone}
                     >
                        <span>Phone</span>
                     </div>
                  }
                  {(typeTables?.sizeQuestions?.date) &&
                     <div
                        className={styles.answer}
                        style={typeTables?.sizeQuestions?.date}
                     >
                        <span>Date</span>
                     </div>
                  }
               </div>
               <div className={styles.row}>
                  <div
                     className={styles.description}
                     style={typeTables?.sizeQuestions?.mail}
                  >
                     <span>{list?.mail}</span>
                  </div>
                  <div
                     className={styles.description}
                     style={typeTables?.sizeQuestions?.phone}
                  >
                     <span>{list?.phone}</span>
                  </div>
                  <div
                     className={styles.description}
                     style={typeTables?.sizeQuestions?.updated_at}
                  >
                     <span>{list?.updated_at}</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

