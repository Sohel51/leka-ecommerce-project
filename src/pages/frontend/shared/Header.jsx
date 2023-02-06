import React, { createRef } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext';
import resourceLink from '../../../hooks/resourceLink';
import useFrontendContext from '../../../hooks/useFrontendContext';

const Header = () => {
  const { checkAuth, logout } = useContext(AuthContext);
  async function tokentCheck() {
    let req = await fetch('http://localhost:5000/user/get/63b5015711a3b401ec1f9ab1', {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    });
    let res = await req.json();
    console.log(res);
  }

  const { state, dispatch } = useFrontendContext();
  const { carts, total_cart_ammount } = state;

  const main_menu = createRef();

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
                {
                  !checkAuth.isAuth ?
                    <li><Link to='/login'><i className="fa fa-key" /> LOGIN</Link></li>
                    :
                    <li>
                      <a href="#/" onClick={logout}>
                        <i className="fa fa-key"></i>Logout
                      </a>
                    </li>
                }
                {
                  checkAuth.isAuth && checkAuth.data.role === 'admin' ?
                    <li><Link to='/admin'><i className="fa fa-cog" /> ADMIN</Link></li>
                    :
                    <li><Link to='/profile'><i className="fa fa-lock" />User PROFILE</Link></li>
                }
                <li><Link to='/register'><i className="fa fa-user" /> REGISTER</Link></li>
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
                  <Link to='/'><img src="/images/logo.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-sm-10 main-menu-wapper">
                <a href="#" onClick={() => main_menu.current.classList.toggle('show')} className="mobile-navigation"><i className="fa fa-bars" /></a>
                <nav id="main-menu" ref={main_menu} className="main-menu">
                  <ul className="navigation">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/checkout'>Check Out</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><a onClick={tokentCheck} href='#/'></a></li>
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
                  <a className="icon" href="#">Cart <span className="count">
                    {
                      carts?
                      carts.length
                      :
                      0
                    }
                    </span></a>
                  <div className="mini-cart-content">
                    <ul className="list-cart-product">
                      {
                        carts.map((product, index) => {
                          return <li key={index}>
                            <div className="product-thumb">
                              <a href="#"><img src={resourceLink(product.image)} alt="" /></a>
                            </div>
                            <div className="product-info">
                              <h5 className="product-name"><a href="#">{product.title}</a></h5>
                              <span className="price">${product.price}</span>
                              <span className="qty">{product.qty} x {product.discountPrice || product.price} = {product.qty * (product.discountPrice || product.price)}</span>
                              <a className="remove"
                                onClick={() => dispatch({ fn: null, type: 'removeCart', payload: { index } })}
                                href="#">remove</a>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                    <p className="sub-toal-wapper">
                      <span>SUBTOTAL</span>
                      <span className="sub-toal">${total_cart_ammount}</span>
                    </p>
                    <Link to="/cart" className="btn-view-cart">VIEW SHOPPING CART</Link>
                    <Link to="/checkout" className="btn-check-out">PROCESS TO CHECK OUT</Link>
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