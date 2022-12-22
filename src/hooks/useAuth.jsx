import React, { useState } from 'react'

function useAuth() {
    const [authStatus, setAuthStatus] = useState(false)

    function login() {
        setAuthStatus(true);
        console.log('login')
    }

    function logout(params) {
        setAuthStatus(false);
        console.log('logout')
    }

    return {
        authStatus, 
        logout,
        login,
    }
}

export default useAuth