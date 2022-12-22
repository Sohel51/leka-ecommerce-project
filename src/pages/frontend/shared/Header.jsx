import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Header = () => {
  const {
    authStatus,
    logout,
    login,
  } = useAuth();

  return (
    <div>
      <header className="header">
        <div className="top-header">
          <div className="container">
            <div className="top-header-menu">
              <a href="#"><i className="fa fa-phone" /> +880 1879-904012</a>
              <a href="#"><i className="fa fa-clock-o" /> SAT - THU: 10 am - 05 pm</a>
              <a href="#"><i className="fa fa-envelope-o" /> sohelrana51@gmail.com</a>
            </div>
            <div className="top-header-right">
              <ul>
                <li><Link to='/login'><i className="fa fa-key" /> LOGIN</Link></li>
                <li><Link to='/register'><i className="fa fa-user" /> REGISTER</Link></li>
                <li className="dropdown">
                  <a data-toggle="dropdown" href="#"><i className="fa fa-cog" /> USER Shortlinks</a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
                <li className="dropdown language">
                  <a data-toggle="dropdown" href="#"><img src="/images/en.jpg" alt="" />ENGLISH</a>
                  <ul className="dropdown-menu">
                    <li><a className="current" href="#">ENGLISH</a></li>
                    <li><a href="#">FRENCH<img src="/images/fr.jpg" alt="" /></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="container main-header-inner">
            <div id="form-search" className="form-search">
              <form>
                <input type="text" placeholder="YOU CAN SEARCH HERE..." />
                <button className="btn-search"><i className="fa fa-search" /></button>
              </form>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="#"><img src="/images/logo.png" alt="" /></a>
                </div>
              </div>
              <div className="col-sm-10 main-menu-wapper">
                <a href="#" className="mobile-navigation"><i className="fa fa-bars" /></a>
                <nav id="main-menu" className="main-menu">
                  <ul className="navigation">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/checkout'>Check Out</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-sm-2">
                {/* Icon search */}
                <div className="icon-search">
                  <span className="icon"><i className="fa fa-search" /></span>
                </div>
                {/* ./Icon search */}
                {/* Mini cart */}
                <div className="mini-cart">
                  <a className="icon" href="#">Cart <span className="count">2</span></a>
                  <div className="mini-cart-content">
                    <ul className="list-cart-product">
                      <li>
                        <div className="product-thumb">
                          <a href="#"><img src="/images/products/product-cart1.jpg" alt="" /></a>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name"><a href="#">Ledtead Predae</a></h5>
                          <span className="price">$90.00</span>
                          <span className="qty">Qty: 1 - Size: L</span>
                          <a href="#" className="remove">remove</a>
                        </div>
                      </li>
                      <li>
                        <div className="product-thumb">
                          <a href="#"><img src="/images/products/product-cart2.jpg" alt="" /></a>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name"><a href="#">Ledtead Predae</a></h5>
                          <span className="price">$90.00</span>
                          <span className="qty">Qty: 1 - Size: M</span>
                          <a href="#" className="remove">remove</a>
                        </div>
                      </li>
                    </ul>
                    <p className="sub-toal-wapper">
                      <span>SUBTOTAL</span>
                      <span className="sub-toal">$180.00</span>
                    </p>
                    <a href="#" className="btn-view-cart">VIEW SHOPPING CART</a>
                    <a href="#" className="btn-check-out">PROCESS TO CHECK OUT</a>
                  </div>
                </div>
                {/* ./Mini cart */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header