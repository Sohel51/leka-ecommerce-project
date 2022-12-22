import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPass = () => {
    return (
        <div className="form-body without-side">
            <div className="website-logo">
                <Link to='/'>
                    <div className="">
                        <img className="" src="/images/logo.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className="row">
                <div className="img-holder">
                    <div className="bg" />
                    <div className="info-holder">
                        <img src="/images/graphic3.svg" alt="" />
                    </div>
                </div>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Password Reset</h3>
                            <p>To reset your password, enter the email address you use to sign in to leka</p>
                            <form>
                                <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
                                <div className="form-button full-width">
                                    <button id="submit" type="submit" className="ibtn btn-forget">Send Reset Link</button>
                                </div>
                            </form><br />
                            <div className="page-links">
                                <Link to='/login'>Login to account</Link>
                            </div>
                        </div>
                        <div className="form-sent">
                            <div className="tick-holder">
                                <div className="tick-icon" />
                            </div>
                            <h3>Password link sent</h3>
                            <p>Please check your inbox <a href="https://brandio.io/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c7aea8a1b5aa87aea8a1b5aab3a2aab7aba6b3a2e9aea8">[email&nbsp;protected]</a></p>
                            <div className="info-holder">
                                <span>Unsure if that email address was correct?</span> <a href="#">We can help</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPass