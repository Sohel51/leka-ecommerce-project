import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    function loginHandler(e) {
        e.preventDefault();

        fetch('http://localhost:5000/user/login', {
            method: "POST",
            body: new FormData(e.target),
        })
        .then(res => res.json())
        .then(res =>{
            console.log(res);
        })
    }

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
                            <h3>Login to account</h3>
                            <p>Access to the most powerfull tool in the entire design and web industry.</p>
                            <form onSubmit={loginHandler}>
                                <input className="form-control" type="text" name="username" placeholder="E-mail Address" />
                                <input className="form-control" type="password" name="password" placeholder="Password" />
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">Login</button> 
                                    <Link to='/forgetpass'>Forget password?</Link>
                                </div>
                            </form>
                            <div className="other-links">
                                <div className="text">Or login with</div>
                                <a href="#"><i className="fab fa-facebook-f" />Facebook</a><a href="#"><i className="fab fa-google" />Google</a><a href="#"><i className="fab fa-linkedin-in" />Linkedin</a>
                            </div>
                            <div className="page-links">
                                <Link to='/register'>Register new account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login