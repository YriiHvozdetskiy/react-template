import styles from './Footer.module.scss';
import {Logo} from '../../assets/icons/Logo/Logo';
import {Link} from 'react-router-dom';
import {SheepFishLogo} from '../../assets/icons/SheepFishLogo';
import {ROUTS} from '../../constants';

export const Footer = () => {

   return (
      <footer className={styles.wrapper}>
         <div className={styles.body}>
            <Link to={'/'}>
               <Logo/>
            </Link>
            <div className={styles.inner}>
               <div className={`${styles.list} ${styles.list_info}`}>
                  <a className={styles.phone}
                     href={'tel:8179009169'}
                  >
                     817-900-9169</a>
                  <span className={styles.address}>2000 E Lamar Blvd 6th Floor,Arlington, TX 76006</span>
                  <a href={'mailto:info@salessimulator.com'}>
                     info@salessimulator.com</a>
               </div>
               <div className={`${styles.list} ${styles.list_page}`}>
                  <Link to={ROUTS.faq}>F.A.Q.</Link>
                  <Link to={ROUTS.about}>About us</Link>
                  <Link to={ROUTS.contact}>Contact</Link>
               </div>
               <div className={`${styles.list} ${styles.list_socialNetworks}`}>
                  <a href={'/'}>Facebook</a>
                  <a href={'/'}>Twitter</a>
                  <a href={'/'}>Linkedin</a>
                  <a href={'/'}>Medium</a>
               </div>
            </div>
         </div>
         <div className={styles.footer}>
            <span className={styles.copyright}>©2022 Sales Simulator. All Rights Reserved</span>
            <div className={styles.box}>
               <Link to={'/'}>
                  Privacy Policy
               </Link>
               <Link to={'/'}>
                  Terms of Use
               </Link>
            </div>
            <div className={styles.made}>
               <span>Made by:</span>
               <Link to={'/'}>
                  <SheepFishLogo/>
               </Link>
            </div>
         </div>
      </footer>
   );
};