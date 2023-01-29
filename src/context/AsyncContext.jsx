import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AsyncContext = createContext(null);

const AsyncContextProvider = ({children}) => {
    const [name, setName] = useState({
        first_name: null,
        last_name: null,
    })
    return (
        <AsyncContext.Provider value={{name, setName}}>
            {children}
        </AsyncContext.Provider>
    )
}

export default AsyncContextProvider