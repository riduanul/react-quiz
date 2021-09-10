import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../../Styles/MiniPlayer.module.css';

const MiniPlayer = ({id, title}) => {
    const buttonRef = useRef();
    const [status, setStatus] = useState();
    const videoURL= `https://www.youtube.com/watch?v=${id}`

    function toggleMiniPlayer() {
        if(!status) {
            buttonRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        } else {
             buttonRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        }
    }
    return (
       <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}  ref={buttonRef} onClick={toggleMiniPlayer}>
           <span className={`${classes.open} material-icons-outlined `}>
               play_circle_filled
           </span>
           <span className={`${classes.close} material-icons-outlined`} onClick={toggleMiniPlayer}>
               close
           </span>

           <ReactPlayer 
        //    className={classes.player}
           url={videoURL} 
           width="300px" 
           height="168px" 
           playing={status} 
           controls 
           />

           <p>{title}</p>

       </div>
    );
};

export default MiniPlayer;