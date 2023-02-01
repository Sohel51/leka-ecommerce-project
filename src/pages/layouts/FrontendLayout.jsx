import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import useFrontendContext from '../../hooks/useFrontendContext'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

export const FrontendLayout = () => {
    const { state, dispatch } = useFrontendContext();
    console.log(state);

    return (
        <>
            {/* Header */}
            <Header></Header>

            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </>
    )
}
