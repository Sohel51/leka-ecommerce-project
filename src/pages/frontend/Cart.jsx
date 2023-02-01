import React from 'react'

const Cart = () => {
  return (
    <div>
      <section className="banner banner-cart position-relative">
        <div className="overlay" />
        <div className="container">
          <div className="banner-content text-center">
            <h2 className="page-title">SHOPPING CART</h2>
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span>SHOPPING CART</span>
            </div>
          </div>
        </div>
      </section>
      <div className="maincontainer">
        <div className="container">
          {/* Step Checkout*/}
          <div className="step-checkout">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <div className="step cart active">
                  <div className="icon" />
                  <span className="step-count">01</span>
                  <h3 className="step-name">Shopping Cart</h3>
                </div>
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-2">
                <div className="step checkout">
                  <div className="icon" />
                  <span className="step-count">02</span>
                  <h3 className="step-name">Check out</h3>
                </div>
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-2">
                <div className="step complete">
                  <div className="icon" />
                  <span className="step-count">03</span>
                  <h3 className="step-name">Oder Complete</h3>
                </div>
              </div>
            </div>
          </div>
          {/* ./Step Checkout*/}
          {/* Table cart */}
          <table className="shop_table cart">
            <thead>
              <tr>
                <th className="product-thumbnail">Product</th>
                <th className="product-name">Name</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-price">Price</th>
                <th className="product-subtotal">Total price</th>
                <th className="product-remove">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart_item">
                <td className="product-thumbnail">
                  <a href="#">
                    <img src="/images/products/p-cart1.png" alt="" />
                  </a>
                </td>
                <td className="product-name">
                  <a href="#">FLUSAS DEMIN DRESS</a>
                  <dl className="variation">
                    <dt className="variation-Color">Color:</dt>
                    <dd className="variation-Color">
                      <p>Dark Brown</p>
                    </dd>
                    <dt className="variation-Size">Size:</dt>
                    <dd className="variation-Size">
                      <p>XS</p>
                    </dd>
                  </dl>
                </td>
                <td className="product-quantity">
                  {/* <div className="box-qty">
                    <a href="#" className="quantity-plus"><i className="fa fa-angle-up" /></a>
                    <input type="text" step={1} min={1} name="quantity" defaultValue={01} title="Qty" className="input-text qty text" size={4} />
                    <a href="#" className="quantity-minus"><i className="fa fa-angle-down" /></a>
                  </div> */}
                </td>
                <td className="product-price">
                  <span className="amount">$44.00</span>
                </td>
                <td className="product-subtotal">
                  <span className="amount">$44.00</span>
                </td>
                <td className="product-remove">
                  <a className="remove" href="#"><i className="fa fa-times" /></a>
                </td>
              </tr>
              <tr className="cart_item">
                <td className="product-thumbnail">
                  <a href="#">
                    <img src="/images/products/p-cart2.png" alt="" />
                  </a>
                </td>
                <td className="product-name">
                  <a href="#">LONG Tube Dress</a>
                  <dl className="variation">
                    <dt className="variation-Color">Color:</dt>
                    <dd className="variation-Color">
                      <p>Dark Brown</p>
                    </dd>
                    <dt className="variation-Size">Size:</dt>
                    <dd className="variation-Size">
                      <p>XS</p>
                    </dd>
                  </dl>
                </td>
                <td className="product-quantity">
                  {/* <div className="box-qty">
                    <a href="#" className="quantity-plus"><i className="fa fa-angle-up" /></a>
                    <input type="text" step={1} min={1} name="quantity" defaultValue={01} title="Qty" className="input-text qty text" size={4} />
                    <a href="#" className="quantity-minus"><i className="fa fa-angle-down" /></a>
                  </div> */}
                </td>
                <td className="product-price">
                  <span className="amount">$44.00</span>
                </td>
                <td className="product-subtotal">
                  <span className="amount">$44.00</span>
                </td>
                <td className="product-remove">
                  <a className="remove" href="#"><i className="fa fa-times" /></a>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="actions">
                  <button className="button pull-left">Continue Shopping</button>
                  <input type="submit" className="button" name="update_cart" defaultValue="UPDATE SHOPPING CART" />
                  <button className="button">CLEAR SHOPPING CART</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-collaterals">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="discount-codes">
                  <h2>Discount codes</h2>
                  <p className="notice">Enter your coupon code if you have one.</p>
                  <form className="form">
                    <p><input type="text" placeholder="COUPON CODE.." /></p>
                    <button className="button">APPLY COUPON</button>
                  </form>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="shipping-form">
                  <h2>ESTIMATE SHIPPING AND TAX</h2>
                  <p className="notice">Enter your coupon code if you have one.</p>
                  <form className="form">
                    <p>
                      <label>Country</label>
                      <select>
                        <option value>United states</option>
                        <option value>Hanoi</option>
                        <option value>HoChiMinh City</option>
                        <option value>USA</option>
                      </select>
                    </p>
                    <p>
                      <label className>STATE/PROVICE</label>
                      <select>
                        <option value>Please select region, state or province</option>
                      </select>
                    </p>
                    <p>
                      <label>zip / postal code</label>
                      <input type="text" />
                    </p>
                    <button className="button">ESTIMATE</button>
                  </form>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="cart_totals ">
                  <h2>Cart Totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td><span className="amount">£15.00</span></td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <strong><span className="amount">£15.00</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="wc-proceed-to-checkout">
                    <a href="#" className="checkout-button button alt wc-forward">PROCEED TO CHECKOUT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Sell products*/}
          <div className="related-products">
            <div className="title-section text-center">
              <h2 className="title">SELL PRODUCTS</h2>
            </div>
            <div className="product-slide" data-dots="false" data-nav="true" data-margin={30} data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;600&quot;:{&quot;items&quot;:3},&quot;1000&quot;:{&quot;items&quot;:4}}">
              <div className="product">
                <div className="product-thumb">
                  <a href="single-product.html">
                    <img src="/images/products/product8.png" alt="" />
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
              </div>
              <div className="product">
                <div className="product-thumb">
                  <a href="single-product.html">
                    <img src="/images/products/product7.png" alt="" />
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
              </div>
              <div className="product">
                <div className="product-thumb">
                  <a href="single-product.html">
                    <img src="/images/products/product6.png" alt="" />
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
              </div>
            </div>
          </div>
          {/*./Sell products*/}
        </div>
      </div>
    </div>
  )
}

export default Cart