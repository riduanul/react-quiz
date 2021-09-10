import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../Context/AuthContext';

const PublicRoute = ({children, ...rest}) => {
    const {currentUser} = useAuth();
    return (
        !currentUser ? (
            <Route {...rest}> {(props) => <children {...props}/>}</Route>
        ) : (
            <Redirect to="/" />
        )
    );
};

export default PublicRoute;