import styles from './ResetPasswordPage.module.scss';
import {Header} from '../../components/Header';
import {Title} from '../../components/Title';
import {Footer} from '../../components/Footer';
import * as Yup from 'yup';
import {validationSchema} from '../../utils';
import {Form, Formik} from 'formik';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {apiRefreshUser} from '../../api';

const initialValues = {
   email: '',
};

const initialValuesCode = {
   code_email: '',
   new_password: '',
   confirm_password: '',
};

export const ResetPasswordPage = () => {
   const [isEmail, setIsEmail] = useState(true);
   const dispatch = useDispatch();
   const [isCode, setIsCode] = useState(true);

   const handleSubmit = async (values, action) => {
      console.log('values', values);
   };

   const handleSubmitCode = async (values, action) => {
      console.log('values Code', values);
   };

   const handleSendAgain = () => {
      console.log('send again');
   };

   useEffect(() => {
      dispatch(apiRefreshUser());
   }, []);

   // TODO якщощ такого емейлу немає: "This email does not exist"
   return (
      <>
         <Header isLoggedIn={false}/>
         <main className={styles.container}>
            <div className={styles.wrapper}>
               <Title text={'Reset password'}/>
               <p className={styles.subTitle}>
                  Enter your Email.
                  A password recovery code will be sent to him
               </p>
               {isEmail &&
                  <Formik
                     initialValues={initialValues}
                     validationSchema={
                        Yup.object({
                           email: validationSchema.email,
                        })
                     }
                     onSubmit={handleSubmit}
                  >
                     <Form className={`${styles.form} ${styles.form_email}`}>
                        <label className={`${styles.label} ${styles.label_email}`}>
                           E-mail
                           <Input
                              type={'email'}
                              name={'email'}
                              placeholder={'Example@gmail.com'}
                           />
                        </label>
                        <Button
                           type={'submit'}
                           text={'Send'}
                           modifier={'button_accent'}
                        />
                     </Form>
                  </Formik>}

               {isCode &&
                  <Formik
                     initialValues={initialValuesCode}
                     validationSchema={
                        Yup.object({
                           code_email: validationSchema.code_email,
                           new_password: validationSchema.new_password,
                           confirm_password: validationSchema.confirm_password,
                        })
                     }
                     onSubmit={handleSubmitCode}
                  >
                     <Form className={`${styles.form} ${styles.form_code}`}>
                        <label className={`${styles.label}`}>
                           Code
                           <Input
                              type={'password'}
                              name={'code_email'}
                              placeholder={'********'}
                           />
                        </label>
                        <label className={`${styles.label}`}>
                           New password
                           <Input
                              type={'password'}
                              name={'new_password'}
                              placeholder={'********'}
                           />
                        </label>
                        <label className={`${styles.label}`}>
                           Repeat the new password
                           <Input
                              type={'password'}
                              name={'confirm_password'}
                              placeholder={'********'}
                           />
                        </label>
                        <div className={styles.repeat_wrapper}>
                           <span className={styles.repeat_time}>20</span>
                           <button
                              className={styles.repeat_text}
                              type={'button'}
                              onClick={handleSendAgain}
                              // disabled={true}
                           >
                              send code again
                           </button>
                        </div>
                        <Button
                           type={'submit'}
                           text={'Reset'}
                           modifier={'button_accent'}
                        />
                     </Form>
                  </Formik>}
            </div>
         </main>
         <Footer/>
      </>
   );
};