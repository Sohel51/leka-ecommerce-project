import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthCustomerRoute = ({ children }) => {
    const { checkAuth } = useContext(AuthContext);
    const location = useLocation();
    window.authPrevLink = location;

    return (
        checkAuth.isAuth && checkAuth.data.role === 'customer'?
            { ...children }
        :
        <Navigate to={'/login'}></Navigate>
    )
}

export default AuthCustomerRoute
