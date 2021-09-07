import React from 'react';
import image from '../../Assets/images/3.jpg';
import classes from '../../Styles/MiniPlayer.module.css';

const MiniPlayer = () => {
    return (
       <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
           <span className={`${classes.open} material-icons-outlined `}>
               play_circle_filled
           </span>
           <span className={`${classes.close} material-icons-outlined`}>
               close
           </span>
           <img src={image} alt="mini Player" />
           <p>#23 React Hooks Bangla - React useReducer hook bangla</p>
       </div>
    );
};

export default MiniPlayer;