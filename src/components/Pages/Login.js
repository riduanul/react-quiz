import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../Styles/Login.module.css';
import Button from '../Button';
import TextInput from '../TextInput';
import Form from './Form';
import Illustration from './Illustration';

const Login = () => {
    return (
        <>
          <h1>Login to your account</h1>
          <div className="column">
            <Illustration/>
            <Form className={classes.login}>
             <TextInput type="text"
               placeholder="Enter email"
               icon="alternate_email"/>
                <TextInput type="password"
               placeholder="Enter password"
               icon="lock"/>
                <Button><span>Login</span></Button>
              <div className="info">
                 Don't have an account? <Link to="signup"> Signup </Link>
              </div>
              </Form>
              </div>  
        </>
    );
};

export default Login;