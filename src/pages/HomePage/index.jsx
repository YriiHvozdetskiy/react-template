import styles from './HomePage.module.scss';
import {Header} from '../../components/Header';
import {useEffect} from 'react';
import {apiRefreshUser} from '../../api';
import {useDispatch} from 'react-redux';

export const HomePage = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(apiRefreshUser());
   }, []);

   return (
      <main className={styles.container}>
         <Header isLoggedIn={true}/>
         <h1 className={styles.title}>homePage</h1>
      </main>
   );
};