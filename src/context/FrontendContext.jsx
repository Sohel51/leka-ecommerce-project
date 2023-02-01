import React, { createContext } from 'react'
import { useReducer } from 'react';

const saveCart = (dispatch, type, payload) => {
    fetch('http://localhost:3002/test')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch({ type, payload })
        })
}

const reducers = (state, { type, payload }) => {
    let tempState = { ...state };
    let { carts, wishListh, showAlert, showModal } = tempState;
    switch (type) {
        case 'insertCart':
            const { _id, price, title, image } = payload.product;
            carts.push({
                _id, price, title, image
            })
            return tempState

        case 'removeCart':
            carts.splice(payload.index, 1);
            return tempState

        case 'toggleAlert':
            tempState.showAlert = !showAlert;
            return tempState

        default:
            return state;
    }
}

export const FrontendContext = createContext(null);
const FrontendContextProvider = ({ children }) => {
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
        <FrontendContext.Provider value={{ state, dispatch: thunkDispatch }}>
            {children}
        </FrontendContext.Provider>
    )
}

export default FrontendContextProvider
