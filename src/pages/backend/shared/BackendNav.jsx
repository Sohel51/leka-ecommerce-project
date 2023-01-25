import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext';

const BackendNav = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            {/* LEFT MAIN SIDEBAR */}
            <div className="ec-left-sidebar ec-bg-sidebar">
                <div id="sidebar" className="sidebar ec-sidebar-footer">
                    <div className="ec-brand">
                        <Link to='/' title="Ekka">
                            <img className="ec-brand-icon" src="" alt="" />
                            <span className="ec-brand-name text-truncate">Leka</span>
                        </Link>
                    </div>
                    {/* begin sidebar scrollbar */}
                    <div className="ec-navigation overflow-style" data-simplebar>
                        {/* sidebar menu */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            {/* Dashboard */}
                            <li className="active">
                                <Link className="sidenav-item-link" to="/admin">
                                    <i className="mdi mdi-view-dashboard-outline" />
                                    <span className="nav-text">Dashboard</span>
                                </Link>
                                <hr />
                            </li>
                            {/* Products */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" onClick={() => document.getElementById('tr1').classList.toggle('d-block')} to="#">
                                    <i className="mdi mdi-palette-advanced" />
                                    <span className="nav-text">Products</span> <b className="caret" />
                                </a>
                                <div className="collapse" id="tr1">
                                    <ul className="sub-menu" id="vendors" data-parent="#sidebar-menu">
                                        <li className>
                                            <Link className="sidenav-item-link" to="allcategory">
                                                <span className="nav-text">All Category</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="addproduct">
                                                <span className="nav-text">Add Product</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="listproduct">
                                                <span className="nav-text">All Product</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* User Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" onClick={() => document.getElementById('tr2').classList.toggle('d-block')} to="#">
                                    <i className="mdi mdi-account-group" />
                                    <span className="nav-text">Users</span> <b className="caret" />
                                </a>
                                <div className="collapse" id="tr2">
                                    <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
                                        <li>
                                            <Link className="sidenav-item-link" to="usergrid">
                                                <span className="nav-text">User Grid</span>
                                            </Link>
                                        </li>

                                        <li className>
                                            <Link className="sidenav-item-link" to="userlist">
                                                <span className="nav-text">User List</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="userprofile">
                                                <span className="nav-text">Users Profile</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                            </li>
                            {/* Order Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" onClick={() => document.getElementById('tr3').classList.toggle('d-block')} to="#">
                                    <i className="mdi mdi-cart" />
                                    <span className="nav-text">Orders</span> <b className="caret" />
                                </a>
                                <div className="collapse" id="tr3">
                                    <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                        <li className>
                                            <Link className="sidenav-item-link" to="neworder">
                                                <span className="nav-text">New Order</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="orderhistory">
                                                <span className="nav-text">Order History</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="orderdetails">
                                                <span className="nav-text">Order Detail</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="invoice">
                                                <span className="nav-text">Invoice</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Blog Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" onClick={() => document.getElementById('tr4').classList.toggle('d-block')} to="#">
                                    <i className="mdi mdi-cart" />
                                    <span className="nav-text">Blogs</span> <b className="caret" />
                                </a>
                                <div className="collapse" id="tr4">
                                    <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                        <li className>
                                            <Link className="sidenav-item-link" to="allblog">
                                                <span className="nav-text">All Blogs</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="blogcategory">
                                                <span className="nav-text">Blog Catagory</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="comment">
                                                <span className="nav-text">Comments</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Frontend Management */}
                            <li className="has-sub">
                                <a className="sidenav-item-link" onClick={() => document.getElementById('tr5').classList.toggle('d-block')} to="#">
                                    <i className="mdi mdi-cart" />
                                    <span className="nav-text">Frontend</span> <b className="caret" />
                                </a>
                                <div className="collapse" id="tr5">
                                    <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                        <li className>
                                            <Link className="sidenav-item-link" to="basicinfo">
                                                <span className="nav-text">Basic info</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="banner">
                                                <span className="nav-text">Banner</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="brand">
                                                <span className="nav-text">Brand</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="advertise">
                                                <span className="nav-text">Advertise</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="discount">
                                                <span className="nav-text">Discount</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="features">
                                                <span className="nav-text">Features</span>
                                            </Link>
                                        </li>
                                        <li className>
                                            <Link className="sidenav-item-link" to="review">
                                                <span className="nav-text">Review</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="sidenav-item-link logout-cursor" to="#/" onClick={logout}>
                                    <i className="mdi mdi-tag-faces" />
                                    <span className="nav-text">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className='p-6'>
                <Outlet></Outlet>
            </header>
        </div>
    )
}

export default BackendNav