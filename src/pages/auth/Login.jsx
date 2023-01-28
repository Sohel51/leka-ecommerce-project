import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import httpRequest from '../../hooks/httpRequest'

const Login = () => {
    const [formErrrors, setformErrrors] = useState()
    const { checkAuth, setcheckAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        let pathName = window?.authPrevLink?.pathname;
        delete window?.authPrevLink;
        if (checkAuth.isAuth && pathName) {
            navigate(pathName);
        }
        else if (checkAuth.isAuth && checkAuth.data.role === 'customer') {
            navigate('/profile');
        }
        else if (checkAuth.isAuth && checkAuth.data.role === 'admin') {
            navigate('/admin');
        }
        else {

        }
    }, [checkAuth])


    function loginHandler(e) {
        e.preventDefault();
        setformErrrors({});

        httpRequest('/user/login', 'POST', new FormData(e.target))
            .then(res => {
                if (res.status === 422) {
                    let tempError = {
                        username: [],
                        email: [],
                        password: [],
                    };
                    res.data.errors.forEach((e, index) => {
                        tempError[e.param].push(
                            <li key={index} className='text-danger'>
                                {e.msg}
                            </li>
                        )
                    });
                    setformErrrors(tempError)
                }

                if (res.status === 200) {
                    window.localStorage.setItem('token', res.data.token)
                    setcheckAuth({
                        isAuth: true,
                        token: res.data.token,
                        data: {
                            email: res.data.email,
                            username: res.data.username,
                            role: res.data.role,
                        }
                    })
                }
            })
    }

    return (
        <>
            {
                !checkAuth?.isAuth ?

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
                                            <input className="form-control" defaultValue={"admin@gmail.com"} type="email" name="email" placeholder="E-mail Address" />
                                            <ul className='mb-2'>
                                                {formErrrors?.email}
                                            </ul>
                                            <input className="form-control" defaultValue={"123456"} type="password" name="password" placeholder="Password" />
                                            <ul className='mb-2'>
                                                {formErrrors?.password}
                                            </ul>
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
                    :
                    ''
            }
        </>
    )
}

export default Login