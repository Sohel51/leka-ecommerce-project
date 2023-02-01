import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

const fakeApi = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve('Ok')
        }, 2000);
     })
}

const saveCart = (dispatch, type, payload) => {
    fakeApi().then(res => {
        console.log(res);
        dispatch({type, payload})
    })
}

const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { carts, wishListh, showAlert, showModal } = tempState;
    switch (type) {
        case 'insertCart':
            carts.push({
                productId: carts.length + 1,
                price: Math.random(),
            })
            return tempState

        case 'deleteCart':
            carts.splice(payload.index, 1);
            return tempState

        case 'toggleAlert':
            tempState.showAlert = !showAlert;
            return tempState

        default:
            return state;
    }
}

export const AsyncContext = createContext(null);
const AsyncContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, {
        carts: [],
        wishListh: [],
        showAlert: false,
        showModal: false,
    })

    const thunkDispatch = ({ fn, type, payload }) => {
        if (fn == 'async') {
            console.log('Async called', payload);
            eval(payload.method)(dispatch, type, payload)
        } else {
            dispatch({ type, payload })
        }
    }

    return (
        <AsyncContext.Provider value={{ state, dispatch: thunkDispatch }}>
            {children}
        </AsyncContext.Provider>
    )
}

export default AsyncContextProvider