import React from 'react';
import signupImage from '../../Assets/images/signup.svg';
import classes from '../../Styles/Illustration.module.css';

const Illustration = () => {
    return (
       <div className={classes.illustration}>
           <img src={signupImage} alt="signupImage" />
       </div>
    );
};

export default Illustration;