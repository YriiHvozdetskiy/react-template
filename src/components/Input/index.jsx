import {Field} from 'formik';
import styles from './Input.module.scss';
import {ErrorText} from '../ErrorText';

export const Input = (props) => {
   const {
      type,
      name,
      nameClass,
      placeholder,
      as,
      id,
      disabled = false,
   } = props;

   return (
      <>
         <Field
            className={`${styles[nameClass]} ${styles.input}`}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            as={as}
            disabled={disabled}
         />
         <ErrorText
            name={name}
            tag={'p'}
         />
      </>
   );
};