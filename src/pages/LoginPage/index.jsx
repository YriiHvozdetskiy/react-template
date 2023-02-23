import styles from './LoginPage.module.scss';
import {Header} from '../../components/Header';
import {Title} from '../../components/Title';
import {Form, Formik} from 'formik';
import {Input} from '../../components/Input';
import {validationSchema} from '../../utils';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';
import * as Yup from 'yup';
import {apiLogIn} from '../../api';
import {useDispatch} from 'react-redux';
import {ROUTS} from '../../constants';
import {Footer} from '../../components/Footer';

const initialValues = {
   email: '',
   password: '',
};

export const LoginPage = () => {
   const dispatch = useDispatch();

   const handleSubmit = async (values, action) => {
      dispatch(apiLogIn(values));
   };
   // TODO коли нажали "запамятати мене" задаєм якийсь термін токену при запису в локалСтор
   return (
      <>
         <Header isLoggedIn={false}/>
         <main className={styles.container}>
            <div className={styles.wrapper}>
               <Title text={'Sign In'}/>
               <p className={styles.subTitle}>
                  Hello User, enter your
                  login details
               </p>
               <Formik
                  initialValues={initialValues}
                  validationSchema={
                     Yup.object({
                        email: validationSchema.email,
                        password: validationSchema.password,
                     })
                  }
                  onSubmit={handleSubmit}
               >
                  <Form className={styles.form}>
                     <label className={styles.label}>
                        E-mail
                        <Input
                           type={'email'}
                           name={'email'}
                           placeholder={'Write your E-mail'}
                        />
                     </label>
                     <label className={styles.label}>
                        Password
                        <Input
                           type={'password'}
                           name={'password'}
                           placeholder={'Sales Simulator'}
                        />
                     </label>
                     <div className={styles.inner}>
                        <label className={styles.checkbox}>
                           <input type="checkbox"/>
                           Remember me
                        </label>
                        <Link
                           to={ROUTS.resetPassword}
                           className={styles.forgot}
                        >
                           Forgot Login Details?
                        </Link>
                     </div>
                     <Button
                        type={'submit'}
                        text={'Login'}
                        modifier={'button_accent'}
                     />
                  </Form>
               </Formik>
               <div className={styles.box}>
                  <p className={styles.text}>Don't have an account?
                     Take a small test to be able to register
                  </p>
                  <Link
                     to={'/test'}
                     className={styles.goto}
                  >
                     Go to the test
                  </Link>
               </div>
            </div>
         </main>
         <Footer/>
      </>
   );
};