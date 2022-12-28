import React from 'react'
import Footer from './shared/Footer'
import Header from './shared/Header'

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* ./Header */}
      <section className="banner banner-contact position-relative">
        <div className="overlay" />
        <div className="container">
          <div className="banner-content text-center">
            <h2 className="page-title">CONTACT US</h2>
            <div className="breadcrumbs">
              <a href="#">Home</a>
              <span>CONTACT US</span>
            </div>
          </div>
        </div>
      </section>
      <div className="maincontainer page-contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="section-contact-info">
                <h3 className="block-title">CONTACT INFOMATION</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                <div className="block-info-contact">
                  <div className="social-network">
                    <span>CONNECT WITH US</span>
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                  </div>
                  <div className="infomation">
                    <span>
                      <span className="icon"><i className="fa fa-anchor" /></span>
                      1234 Heaven Stress, Beverly United State
                    </span>
                    <span>
                      <span className="icon"><i className="fa fa-phone" /></span>
                      PHONE: (95) 943 994 870
                    </span>
                    <span>
                      <span className="icon"><i className="fa fa-life-ring" /></span>
                      SUPPORT@LEKASTUDIO.COM
                    </span>
                    <span>
                      <span className="icon"><i className="fa fa-clock-o" /></span>
                      OPEN TIME: 9AM - 6PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="section-contact-info">
                <h3 className="block-title">LEAVE MESSAGE</h3>
                <div className="form-contact">
                  <div id="message-box-conact" />
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <label>Name <span className="required">*</span></label>
                        <input id="name" type="text" />
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        <label>Email <span className="required">*</span></label>
                        <input id="email" type="text" />
                      </p>
                    </div>
                  </div>
                  <p>
                    <label>Website</label>
                    <input id="website" type="text" />
                  </p>
                  <p>
                    <label>Subject</label>
                    <input id="subject" type="text" />
                  </p>
                  <p>
                    <label>Content</label>
                    <textarea id="content" rows={5} defaultValue={""} />
                  </p>
                  <button id="btn-send-contact" className="button">SEND MESSAGE</button>
                </div>
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

export default Contact