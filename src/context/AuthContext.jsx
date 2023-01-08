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

    async function check_user(params) {
        let req = await fetch('http://localhost:5000/user/check-user', {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        });
        let res = await req.json();
        let status = await req.status;
        if (status === 200) {
            setcheckAuth({
                isAuth: true,
                token: window.localStorage.getItem('token'),
                data: {
                    email: res.email,
                    username: res.username,
                    role: res.role,
                }
            })
        }else{
            setcheckAuth(false)
        }
    }

    useEffect(() => {
        check_user(true);
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