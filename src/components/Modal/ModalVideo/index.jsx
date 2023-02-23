import styles from './ModalVideo.module.scss';
import ReactPlayer from 'react-player';

export const ModalVideo = ({videoLink}) => {

   return (
      <>
         <ReactPlayer
            className={styles.video}
            url={videoLink}
            // disableDeferredLoading={true}
            // muted={true}
            playing={true}
         />
      </>
   );
};