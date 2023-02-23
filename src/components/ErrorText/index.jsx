import styles from './ErrorText.module.scss';
import {ErrorMessage} from 'formik';

export const ErrorText = ({name, tag}) => {

   return (
      <>
         <ErrorMessage
            className={styles.error}
            name={name}
            component={tag}
         />
      </>
   );
};