import styles from './Button.module.scss';

export const Button = (props) => {
   const {
      text,
      type,
      nameClass,
      modifier,
      handleClick,
      image,
   } = props;
//TODO передавати масив modifier через forEach
   return (
      <>
         <button
            className={`${styles.button} ${styles[nameClass]} ${styles[modifier]}`}
            type={type}
            onClick={handleClick}
         >
            {image &&
               <div className={styles.image}>
                  {image}
               </div>
            }
            <span>{text}</span>
         </button>
      </>
   );
};
