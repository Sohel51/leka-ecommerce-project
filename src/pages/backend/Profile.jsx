import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="container">
      <div id="backendWrap">
        <div className="ec-header-fixed ec-sidebar-light ec-header-light" id="body">
          <div className="wrapper">
            <div className="ec-page-wrapper flex-row pt-0">
              {/* LEFT MAIN SIDEBAR */}
              <div className="ec-left-sidebar ec-bg-sidebar">
                <div id="sidebar" className="sidebar ec-sidebar-footer">
                  <div className="ec-brand">
                    <Link to='/' title="Ekka" className='border-bottom-0'>
                      <img className="ec-brand-icon" src="" alt="" />
                      <span className="ec-brand-name text-truncate">Leka</span>
                    </Link>
                  </div>
                  {/* begin sidebar scrollbar */}
                  <div className="ec-navigation" data-simplebar>
                    {/* sidebar menu */}
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                      {/* Dashboard */}
                      <li className="active">
                        <Link className="sidenav-item-link" to='/profile'>
                          <i className="mdi mdi-view-dashboard-outline" />
                          <span className="nav-text">Dashboard</span>
                        </Link>
                        <hr />
                      </li>
                      {/* Products */}
                      <li className="has-sub">
                        <Link className="sidenav-item-link" to="orderlist">
                          <i className="mdi mdi-palette-advanced" />
                          <span className="nav-text">Orders</span>
                        </Link>
                      </li>
                      {/* User Management */}
                      <li className="has-sub">
                        <Link to='cartlist' className="">
                          <i className="mdi mdi-account-group" />
                          <span className="nav-text">Cart</span>
                        </Link>
                        <hr />
                      </li>
                      {/* Order Management */}
                      <li className="has-sub">
                        <Link className="sidenav-item-link" to="wishlist">
                          <i className="mdi mdi-cart" />
                          <span className="nav-text">Wish List</span>
                        </Link>
                      </li>
                      {/* Frontend Management */}
                      <li>
                        <Link className="sidenav-item-link" to="payment">
                          <i className="mdi mdi-tag-faces" />
                          <span className="nav-text">Payment</span>
                        </Link>
                        <hr />
                      </li>
                      <li>
                        <Link className="sidenav-item-link" to="settings">
                          <i className="mdi mdi-tag-faces" />
                          <span className="nav-text">Settings</span>
                        </Link>
                      </li>
                      <li>
                        <a className="sidenav-item-link" href="#/" onClick={logout}>
                          <i className="mdi mdi-tag-faces" />
                          <span className="nav-text">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> {/* End Wrapper */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile