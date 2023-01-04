import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [data, setData] = useState({
        first_name: 'mr kalam',
        last_name: 'khan',
    });

    const [checkAuth, setcheckAuth] = useState(false)

    function change_data(property, value) {
        data[property] = value;
        setData({ ...data })
    };

    useEffect(() => {
        let check = window.localStorage.getItem('token');
        if (check) {
            setcheckAuth({
                isAuth: true,
                token: check,
            })
        }
    }, [])

    const logout = () => {
        setcheckAuth((state) => state = {
            isAuth: false,
            token: null,
        });
        window.localStorage.removeItem('token');
    }

    const value = {
        data,
        change_data,
        checkAuth,
        setcheckAuth,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider