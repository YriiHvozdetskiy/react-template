import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Logo} from '../../assets/icons/Logo/Logo';
import {Navigation} from '../Navigation';
import {useEffect, useState} from 'react';
import {Burger, CrossSvg} from '../../assets/icons';
import {DEVICE} from '../../constants';

export const Header = ({isLoggedIn}) => {
   const [isOpen, setIsOpen] = useState(false);

   const windowWidth = window.innerWidth;

   const handleClick = () => {
      setIsOpen(prev => !prev);
   };

   useEffect(() => {
      if (windowWidth >= DEVICE.desktop) {
         setIsOpen(prev => !prev);
      }
   }, []);

   return (
      <header className={
         isLoggedIn
            ? `${styles.header} ${styles.header_loggedIn}`
            : `${styles.header} ${styles.header_notLoggedIn}`}
      >
         <Link to={'/'}>
            <Logo/>
         </Link>
         <Navigation
            isLoggedIn={isLoggedIn}
            isOpen={isOpen}
         />
         <button
            type={'button'}
            onClick={handleClick}
         >
            {isOpen
               ? <CrossSvg/>
               : <Burger/>}
         </button>
      </header>
   );
};