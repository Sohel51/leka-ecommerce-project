import React from 'react'
import BackendFooter from './shared/BackendFooter'
import BackendHeader from './shared/BackendHeader'
import BackendNav from './shared/BackendNav'

const Admin = () => {
    return (
        <div id="backendWrap">
            <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light" id="body">
                <div className="wrapper">

                    {/*  PAGE WRAPPER */}
                    <div className="ec-page-wrapper">
                        <BackendNav></BackendNav>
                        {/* Header */}
                        <BackendHeader></BackendHeader>
                        {/* CONTENT WRAPPER */}
                        {/* End Content Wrapper */}
                        {/* Footer */}
                        <BackendFooter></BackendFooter>
                    </div> {/* End Page Wrapper */}
                </div> {/* End Wrapper */}
            </div>
        </div>
    )
}

export default Admin