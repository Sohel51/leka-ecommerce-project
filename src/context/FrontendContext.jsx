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
    let { carts, total_cart_ammount, wishListh, showAlert, showModal } = tempState;
    switch (type) {
        case 'insertCart':
            const { _id, price, discount, discountPrice, title, image, } = payload.product;

            let qty = 1;
            let product = carts.find(i => i._id == _id);
            product ? qty = product.qty++ : qty = 1;

            !product &&
                carts.unshift({
                    _id, price, discountPrice, title, image, qty
                });

            tempState.total_cart_ammount = carts.reduce((total, i) => {
                return i.discountPrice ? total += i.discountPrice * i.qty : total += i.price * i.qty;
            }, 0)

            window.s_alert('Added to cart');
            return tempState

        case 'update_cart_qty':
            console.log(payload);
            carts[payload.index].qty = payload.qty

            tempState.total_cart_ammount = carts.reduce((total, i) => {
                return i.discountPrice ? total += i.discountPrice * i.qty : total += i.price * i.qty;
            }, 0)

            window.s_alert('Product Updated');
            return tempState

        case 'removeCart':
            carts.splice(payload.index, 1);
            tempState.total_cart_ammount = carts.reduce((total, i) => {
                return i.discountPrice ? total += i.discountPrice * i.qty : total += i.price * i.qty;
            }, 0)
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
        total_cart_ammount: 0,
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
