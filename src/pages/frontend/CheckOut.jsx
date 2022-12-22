import React from 'react'
import Footer from './shared/Footer'
import Header from './shared/Header'

const CheckOut = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* ./Header */}
      <section className="banner banner-checkout banner-cart position-relative">
        <div className="overlay" />
        <div className="container">
          <div className="banner-content text-center">
            <h2 className="page-title">CHECK OUT PAGE</h2>
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span>CHECK OUT PAGE</span>
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
                <div className="step cart">
                  <div className="icon" />
                  <span className="step-count">01</span>
                  <h3 className="step-name">Shopping Cart</h3>
                </div>
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-2">
                <div className="step checkout active">
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
          <div className="checkout-page">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="form">
                  <h3 className="form-title">BILLING DETAILS</h3>
                  <p>
                    required
                    <label>Country <span className="required">*</span></label>
                    <select>
                      <option>United states</option>
                      <option>Hanoi</option>
                    </select>
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <label>FIRST NAME <span className="required">*</span></label>
                        <input type="text" />
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        <label>LAST NAME <span className="required">*</span></label>
                        <input type="text" />
                      </p>
                    </div>
                  </div>
                  <p>
                    <label>COMPANY NAME</label>
                    <input type="text" />
                  </p>
                  <p>
                    <label>ADDRESS <span className="required">*</span></label>
                    <select>
                      <option>Street address</option>
                      <option>No 1</option>
                    </select>
                  </p>
                  <p>
                    <input type="text" placeholder="Apartment, suite, unit etc (optional)" />
                  </p>
                  <p>
                    <label>TOWN / CITY <span className="required">*</span></label>
                    <select>
                      <option>United states</option>
                    </select>
                  </p>
                  <p>
                    <label>POSTAL / ZIP CODE <span className="required">*</span></label>
                    <input type="text" />
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <label>EMAIL ADDRESS <span className="required">*</span></label>
                        <input type="email" />
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        <label>PHONE NUMBER <span className="required">*</span></label>
                        <input type="email" />
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox1" defaultValue="option1" /> CREATE AN ACCOUNT ?
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox2" defaultValue="option2" /> SHIP TO BILLING ADDRESS ?
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <h3 className="form-title">YOUR ODERS</h3>
                <div className="order-review">
                  <table>
                    <tbody>
                      <tr>
                        <td>Product name</td>
                        <td>Qty</td>
                        <td>Sub total</td>
                      </tr>
                      <tr>
                        <td>FLUSAS DEMIN DRESS</td>
                        <td>01</td>
                        <td><span className="amount">$252.56</span></td>
                      </tr>
                      <tr>
                        <td colSpan={2}>CART SUBTOTAL</td>
                        <td>
                          <span className="amount">$252.56</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>SHIPPING &amp; HANDLING</td>
                        <td>
                          FREE SHIPPINg
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>ORDER TOTAL</td>
                        <td>
                          <span className="amount">$252.56</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="paymment-method">
                  <h3 className="form-title">PAYMENT METHOD</h3>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      SHIP TO BILLING ADDRESS ?
                    </label>
                    <br />
                    <small>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</small>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      CEQUE PAYMENT
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      PAYPAL
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      I’VE READ AND ACCEPT THE TEMR &amp; CONDITIONS
                    </label>
                  </div>
                </div>
                <button className="button pull-right">PLACE ODER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
      {/* Footer */}
    </div>
  )
}

export default CheckOut