import styles from './Title.module.scss';

export const Title = ({text}) => {

   return (
      <>
         <h1 className={styles.title}>{text}</h1>
      </>
   );
};