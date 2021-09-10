import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import Button from '../Button';
import TextInput from '../TextInput';
import Form from './Form';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState ("");
  const [loading, setLoading] = useState ("");

  const {login} = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
   
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/")
    } catch(err) {
      console.log(err);
      setLoading(false);
      setError("Wrong Email or Password !");
    }



  }
   
    return (
         <Form style={{height : "330px"}} onSubmit={handleSubmit}>
             <TextInput type="text"
             required
               placeholder="Enter email"
               icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
               
                <TextInput type="password"
                required
               placeholder="Enter password"
               icon="lock" value={password} onChange={(e) => setPassword(e.target.value)}/>
               
                <Button disabled={loading} type="submit"><span>Login</span></Button>
                
                {error && <p className="error">{error}</p>}

              <div className="info">
                 Don't have an account? <Link to="signup"> Signup </Link>
              </div>
              </Form>
    );
};

export default LoginForm;