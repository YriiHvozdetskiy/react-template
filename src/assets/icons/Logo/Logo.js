import styles from './Logo.module.scss';

export const Logo = () => {

   return (
      <div className={styles.wrapper}>
         <svg viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M41.7227 20.4999L34.4727 7.94252L34.2227 7.5095L34.2101 7.51673C31.7552 3.7822 26.7816 2.56801 22.8614 4.8313C18.9413 7.09459 17.506 12.0089 19.5127 16.0023L19.5002 16.0095L19.7502 16.4425L27.0002 28.9999L32.1964 25.9999L33.4464 28.1649C34.1367 29.3607 35.6657 29.7704 36.8614 29.08C38.0572 28.3897 38.4669 26.8607 37.7765 25.6649L36.5265 23.4999L41.7227 20.4999ZM36.5265 23.4999L29.2765 10.9425C28.5861 9.74678 27.0572 9.3371 25.8614 10.0275C24.6657 10.7178 24.256 12.2468 24.9464 13.4425L32.1964 25.9999L36.5265 23.4999Z"
                  fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.2773 37.4999L19.5273 50.0572L19.7773 50.4903L19.7899 50.483C22.2448 54.2176 27.2184 55.4317 31.1386 53.1685C35.0587 50.9052 36.494 45.9908 34.4873 41.9975L34.4998 41.9903L34.2498 41.5572L26.9998 28.9999L21.8036 31.9999L20.5536 29.8348C19.8633 28.6391 18.3343 28.2294 17.1386 28.9197C15.9428 29.6101 15.5331 31.1391 16.2235 32.3348L17.4735 34.4999L12.2773 37.4999ZM17.4735 34.4999L24.7235 47.0572C25.4139 48.253 26.9428 48.6627 28.1386 47.9723C29.3343 47.2819 29.744 45.753 29.0536 44.5572L21.8036 31.9999L17.4735 34.4999Z"
                  fill="black"/>
         </svg>
         <p className={styles.text}>Sales Simulator</p>
      </div>
   );
};