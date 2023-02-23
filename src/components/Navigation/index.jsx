import styles from './Navigation.module.scss';
import {Link, NavLink} from 'react-router-dom';
import {loggedIn, notLoggedIn} from './mock';
import {ROUTS} from '../../constants';

export const Navigation = ({isLoggedIn = false, isOpen}) => {

   return (
      <>
         {(isOpen) &&
            <div className={
               isLoggedIn
                  ? `${styles.wrapper} ${styles.wrapper_loggedIn}`
                  : `${styles.wrapper} ${styles.wrapper_notLoggedIn}`}>
               <nav className={
                  isLoggedIn
                     ? `${styles.nav} ${styles.nav_loggedIn}`
                     : `${styles.nav} ${styles.nav_notLoggedIn}`}
               >
                  {isLoggedIn
                     ? <ul>
                        {loggedIn(ROUTS).map((item, index) =>
                           (<li key={index}>
                              <NavLink
                                 className={
                                    ({isActive}) =>
                                       (isActive
                                             ? `${styles.active} ${styles.active_loggedIn}`
                                             : `${styles.inactive} ${styles.inactive_loggedIn}`
                                       )
                                 }
                                 to={item?.link}
                              >
                                 {item?.svg}
                                 <span>{item?.navigate}</span>
                              </NavLink>
                           </li>),
                        )}
                     </ul>
                     : <ul>
                        {notLoggedIn(ROUTS).map((item, index) =>
                           (<li key={index}>
                                 <Link to={item?.link}>
                                    {item?.navigate}
                                 </Link>
                              </li>
                           ))}
                     </ul>}
               </nav>
               {isLoggedIn
                  ? null
                  : <div className={styles.singIn}>
                     <Link to={ROUTS.login}>
                        Sing In
                     </Link>
                  </div>}
            </div>}
      </>
   );
};