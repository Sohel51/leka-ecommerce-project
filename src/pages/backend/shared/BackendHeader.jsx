import React from 'react'

const BackendHeader = () => {
    return (
        <div>
            <header className="ec-main-header" id="header">
                <nav className="navbar navbar-static-top navbar-expand-lg">
                    {/* Sidebar toggle button */}
                    <button id="sidebar-toggler" className="sidebar-toggle" />
                    {/* search form */}
                    <div className="search-form d-lg-inline-block">
                        <div className="input-group">
                            <input type="text" name="query" id="search-input" className="form-control" placeholder="search.." autofocus autoComplete="off" />
                            <button type="button" name="search" id="search-btn" className="btn btn-flat">
                                <i className="mdi mdi-magnify" />
                            </button>
                        </div>
                        <div id="search-results-container">
                            <ul id="search-results" />
                        </div>
                    </div>
                    {/* navbar right */}
                    <div className="navbar-right">
                        <ul className="nav navbar-nav">
                            {/* User Account */}
                            <li className="dropdown user-menu">
                                <button className="dropdown-toggle nav-link ec-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="backend/img/user/user.png" className="user-image" alt="User Image" />
                                </button>
                            </li>
                            <li className="right-sidebar-in right-sidebar-2-menu">
                                <i className="mdi mdi-settings-outline mdi-spin" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default BackendHeader