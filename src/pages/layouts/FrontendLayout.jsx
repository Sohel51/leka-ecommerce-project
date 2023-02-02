import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useFrontendContext from '../../hooks/useFrontendContext'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

export const FrontendLayout = () => {
    const { state, dispatch } = useFrontendContext();
    useEffect(() => {
        dispatch({ fn: null, type: 'loadCart', payload: null })
    }, [])


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
