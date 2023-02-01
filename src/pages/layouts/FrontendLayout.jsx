import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AsyncContext } from '../../context/AsyncContext'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

export const FrontendLayout = () => {
    const { state, dispatch } = useContext(AsyncContext);
    const { carts, showAlert } = state;
    console.log(state);

    return (
        <>
            <button onClick={() => dispatch({ fn: null, type: 'insertCart', payload: null })}>Add to Cart</button>
            <ul>
                {
                    carts.map((item, index) => {
                        return <li key={index}>
                            <h1>{item.productId} : {parseInt(item.price * 100)}</h1>
                            <button onClick={() => dispatch({ fn: null, type: 'deleteCart', payload: { index } })} >Delete</button>
                        </li>
                    })
                }
            </ul>
            <button onClick={() => dispatch({ fn: 'async', type: 'toggleAlert', payload: {method: 'saveCart'} })} >Alert</button>
            {
                showAlert &&
                <div className='alert alert-danger'>Lorem ipsum dolor sit.</div>
            }
            {/* Header */}
            <Header></Header>

            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </>
    )
}
