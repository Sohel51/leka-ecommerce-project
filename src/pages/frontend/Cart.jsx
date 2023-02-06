import React from 'react'
import resourceLink from '../../hooks/resourceLink';
import useFrontendContext from '../../hooks/useFrontendContext';

const Cart = () => {
  const { state, dispatch } = useFrontendContext();
  const { carts, total_cart_ammount } = state;

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
              {
                carts?.map((product, index) => {
                  return <tr key={index} className="cart_item">
                    <td className="product-thumbnail">
                      <a href="#">
                        <img src={resourceLink(product.image)} alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="#">{product.title}</a>
                      <dl className="variation">
                        <dt className="variation-Size">Size:</dt>
                        <dd className="variation-Size">
                          <p>XS</p>
                        </dd>
                      </dl>
                    </td>
                    <td className="product-quantity">
                      <input
                        onChange={(e) => dispatch({
                          fn: null, type: 'update_cart_qty', payload: {
                            product,
                            index,
                            qty: +e.target.value
                          }
                        })}
                        className=''
                        type="number"
                        min={1}
                        defaultValue={product.qty} />
                    </td>
                    <td className="product-price">
                      <span className="amount">${product.qty} x {product.discountPrice || product.price}</span>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">${product.qty * (product.discountPrice || product.price)}</span>
                    </td>
                    <td className="product-remove text-danger">
                      <a className="remove"
                        onClick={() => dispatch({ fn: null, type: 'removeCart', payload: { index } })}
                        href="#">Remove</a>
                    </td>
                  </tr>
                })
              }
              {/* <tr>
                      <td colSpan={6} className="actions">
                        <button className="button pull-left">Continue Shopping</button>
                        <input type="submit" className="button" name="update_cart" defaultValue="UPDATE SHOPPING CART" />
                        <button className="button">CLEAR SHOPPING CART</button>
                      </td>
                    </tr> */}
            </tbody>
          </table>
          <div className="cart-collaterals">
            <div className="row">
              <div className="col-sm-12 col-md-4 float-right">
                <div className="cart_totals ">
                  <h2>Cart Totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td><span className="amount">${total_cart_ammount}</span></td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <strong><span className="amount">${total_cart_ammount}</span></strong>
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
        </div>
      </div>
    </div>
  )
}

export default Cart