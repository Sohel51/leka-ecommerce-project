import React from 'react'
import Footer from './shared/Footer'
import Header from './shared/Header'

const Products = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* ./Header */}
      <section className="banner position-relative">
        <div className="overlay" />
        <div className="container">
          <div className="banner-content text-center">
            <h2 className="page-title">PRODUCTS</h2>
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span>PRODUCTS</span>
            </div>
          </div>
        </div>
      </section>
      <div className="maincontainer">
        <div className="container">
          <div className="sortBar">
            <div className="sortBar-left">
              <form className="ordering">
                <select>
                  <option value>SHORT BY</option>
                  <option value>Sort by popularity</option>
                  <option value>Sort by average rating</option>
                  <option value>Sort by price: low to high</option>
                </select>
                <select>
                  <option value>Postion</option>
                  <option value>Sort by popularity</option>
                  <option value>Sort by average rating</option>
                  <option value>Sort by price: low to high</option>
                </select>
              </form>
              <div className="display-product-option">
                <a href="#" className="view-as-grid selected"><i className="fa fa-th-large" /></a>
                <a href="#" className="view-as-list"><i className="fa fa-th-list" /></a>
              </div>
            </div>
            <div className="sortBar-right">
              <select>
                <option value>By color</option>
                <option value>Read</option>
                <option value>Blue</option>
                <option value>Black</option>
              </select>
              <select>
                <option value>By Price</option>
                <option value>&lt;100</option>
                <option value>100 - 200</option>
              </select>
              <select>
                <option value>By Size</option>
                <option value>X</option>
                <option value>Xl</option>
                <option value>XX</option>
              </select>
              <div className="result-count">
                SHOW ITEMS 1 to 12 of 36 total
              </div>
            </div>
          </div>
          <ul className="products row">
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p7.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p8.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p9.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p10.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p11.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p12.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p13.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p14.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p15.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p16.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p17.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
            <li className="product col-sm-4 col-md-3">
              <div className="product-thumb">
                <a href="single-product.html">
                  <img src="/images/products/p18.jpg" alt="" />
                </a>
                <div className="product-button">
                  <a href="#" className="button-compare">Compare</a>
                  <a href="#" className="button-wishlist">Wishlist</a>
                  <a href="#" className="button-quickview">Quick view</a>
                </div>
              </div>
              <div className="product-info">
                <h3><a href="#">Ledtead Predae</a></h3>
                <span className="product-price">$89.00</span>
                <a href="#" className="button-add-to-cart">ADD TO CART</a>
              </div>
            </li>
          </ul>
          <nav className="pagination">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
      {/* Footer */}
    </div>
  )
}

export default Products