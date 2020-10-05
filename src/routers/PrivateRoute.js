import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/login-token-service';

function PrivateRoute({component, ...props}) {
    const Component = component;
    return (
        <Route 
            {...props}
            render={compProps => (
                authService.hasAuthToken() 
                    ? <Component {...compProps} />
                    : <Redirect to={{
                        pathname: '/login',
                    }} />
            )}
        />
    )
}

export default PrivateRoute;