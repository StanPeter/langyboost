import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

// NOT IMPLEMENTED YET

interface IPrivateRoute extends RouteProps {}
/* Pirvate route (through token) */
const PrivateRoute: React.FC<IPrivateRoute> = ({ element }) => {
    const token = 'token';

    return (
        <>
            {token ? (
                element
            ) : (
                <Navigate
                    to={'/'}
                    state={{
                        // save the route in case I try it without being logged in
                        prevRoute: location.pathname,
                    }}
                />
            )}
        </>
    );
};

export default PrivateRoute;
