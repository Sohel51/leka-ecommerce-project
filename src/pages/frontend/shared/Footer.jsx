import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="#"><img src="/images/logo-footer.png" alt="" /></a>
                        </div>
                        <div className="col-sm-4">
                            <div className="widget">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                            </div>
                            <div className="widget widget-social">
                                <div className="list-social">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-google-plus" /></a>
                                    <a href="#"><i className="fa fa-skype" /></a>
                                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                                </div>
                            </div>
                            <div className="widget widget-newaletter">
                                <form>
                                    <input type="text" className="newaletter-email" placeholder="EMAIL FOR NEWSLETTER" />
                                    <span><button type="submit" className="newaletter-button"><i className="fa fa-envelope-o" /></button></span>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <div className="widget widget_nav_menu">
                                <h3 className="widget-title">COMPANY</h3>
                                <ul>
                                    <li><a href="#">ABOUT US</a></li>
                                    <li><a href="#">OFFICES</a></li>
                                    <li><a href="#">STORES</a></li>
                                    <li><a href="#">WORK WITH US</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <div className="widget widget_nav_menu">
                                <h3 className="widget-title">SHOPPING GUIDE</h3>
                                <ul>
                                    <li><a href="#">HOW TO BUY</a></li>
                                    <li><a href="#">INFOMATION</a></li>
                                    <li><a href="#">PAYMENT</a></li>
                                    <li><a href="#">SHIPPING</a></li>
                                    <li><a href="#">EXCHANGES</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <div className="widget widget_nav_menu">
                                <h3 className="widget-title">COMPANY</h3>
                                <ul>
                                    <li><a href="#">ABOUT US</a></li>
                                    <li><a href="#">OFFICES</a></li>
                                    <li><a href="#">STORES</a></li>
                                    <li><a href="#">WORK WITH US</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <div className="widget widget_nav_menu">
                                <h3 className="widget-title">SHOPPING GUIDE</h3>
                                <ul>
                                    <li><a href="#">HOW TO BUY</a></li>
                                    <li><a href="#">INFOMATION</a></li>
                                    <li><a href="#">PAYMENT</a></li>
                                    <li><a href="#">SHIPPING</a></li>
                                    <li><a href="#">EXCHANGES</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="coppyright">
                            <p>© LEKA E-COMMERCE TEMPLATE. Created By MD. SOHEL RANA</p>
                        </div>
                        <div className="payment_methods">
                            <img src="/images/payment_methods.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer