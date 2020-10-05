import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/login-token-service';

function PublicRoute({component, ...props}) {
    const Component = component;
    return (
        <Route {...props}
            render={compProps => {
               return authService.hasAuthToken()
                    ? <Redirect to={'/'} />
                    : <Component {...compProps} />
            }} 
            />
    )
}

export default PublicRoute;