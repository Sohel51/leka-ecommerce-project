import React from 'react'
import { Link } from 'react-router-dom'

const BackendNav = () => {
    return (
        <div>
            {/* LEFT MAIN SIDEBAR */}
            <div className="ec-left-sidebar ec-bg-sidebar">
                <div id="sidebar" className="sidebar ec-sidebar-footer">
                    <div className="ec-brand">
                        <Link to='/' title="Ekka">
                            <img className="ec-brand-icon" src="assets/img/logo/ec-site-logo.png" alt="" />
                            <span className="ec-brand-name text-truncate">Ekka</span>
                        </Link>
                    </div>
                    {/* begin sidebar scrollbar */}
                    <div className="ec-navigation" data-simplebar>
                        {/* sidebar menu */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            {/* Dashboard */}
                            <li className="active">
                                <a className="sidenav-item-link" href="index.html">
                                    <i className="mdi mdi-view-dashboard-outline" />
                                    <span className="nav-text">Dashboard</span>
                                </a>
                                <hr />
                            </li>
                            {/* Products */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)">
                                    <i className="mdi mdi-palette-advanced" />
                                    <span className="nav-text">Products</span> <b className="caret" />
                                </a>
                                <div className="collapse">
                                    <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                                        <li className>
                                            <a className="sidenav-item-link" href="product-add.html">
                                                <span className="nav-text">Add Product</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="product-list.html">
                                                <span className="nav-text">List Product</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="product-grid.html">
                                                <span className="nav-text">Grid Product</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="product-detail.html">
                                                <span className="nav-text">Product Detail</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* User Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)">
                                    <i className="mdi mdi-account-group" />
                                    <span className="nav-text">Users</span> <b className="caret" />
                                </a>
                                <div className="collapse">
                                    <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
                                        <li>
                                            <a className="sidenav-item-link" href="user-card.html">
                                                <span className="nav-text">User Grid</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="user-list.html">
                                                <span className="nav-text">User List</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="user-profile.html">
                                                <span className="nav-text">Users Profile</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                            </li>                       
                            {/* Order Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)">
                                    <i className="mdi mdi-cart" />
                                    <span className="nav-text">Orders</span> <b className="caret" />
                                </a>
                                <div className="collapse">
                                    <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                        <li className>
                                            <a className="sidenav-item-link" href="new-order.html">
                                                <span className="nav-text">New Order</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="order-history.html">
                                                <span className="nav-text">Order History</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="order-detail.html">
                                                <span className="nav-text">Order Detail</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a className="sidenav-item-link" href="invoice.html">
                                                <span className="nav-text">Invoice</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Frontend Management */}
                            <li>
                                <a className="sidenav-item-link" href="brand-list.html">
                                    <i className="mdi mdi-tag-faces" />
                                    <span className="nav-text">Front End</span>
                                </a>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackendNav