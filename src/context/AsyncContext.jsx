import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

const reducers = (state, {type, payload}) =>{
    switch (type) {
        case 'insert':
            let tempState = {...state};
            tempState.push({
                productId: state.length + 1,
                price: Math.random(),
            })
            return tempState
            break;
    
        default:
            break;
    }
}

export const AsyncContext = createContext(null);
const AsyncContextProvider = ({children}) => {
    const [carts, dispatch] = useReducer(reducers, [])

    return (
        <AsyncContext.Provider value={{carts, dispatch}}>
            {children}
        </AsyncContext.Provider>
    )
}

export default AsyncContextProvider