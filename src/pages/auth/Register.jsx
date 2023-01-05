import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const [formErrrors, setformErrrors] = useState()
    const { checkAuth, setcheckAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (checkAuth.isAuth) {
            navigate('/');
        }
    }, [checkAuth])

    //creating a new user
    function registrationHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        setformErrrors({}); // remove the previous details
        formData.append('full-form', 'recieve the new full form-data');

        fetch('http://localhost:5000/user/register', {
            method: "POST",
            // headers: {'Content-Type': 'application/json' },
            // body: JSON.stringify(info)
            body: formData
        })
            .then(async (res) => {
                let data = await res.json();
                return {
                    status: res.status,
                    data,
                }
            })
            .then(res => {
                console.log(res);
                if (res.status === 422) {
                    let tempError = {
                        username: [],
                        email: [],
                        password: [],
                    };
                    setformErrrors({});
                    res.data.errors.forEach((e, index) => {
                        tempError[e.param].push(
                            <li key={index} className='text-danger'>
                                {e.msg}
                            </li>
                        )
                    });
                    setformErrrors(tempError)
                }

                // reset the form
                if (res.status === 201) {
                    e.target.reset();
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
        <div className="form-body without-side">
            <div className="website-logo">
                <Link to='/'>
                    <div className="">
                        <img className="size" src="/images/logo.png" alt="" />
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
                            <h3>Register new account</h3>
                            <p>Access to the most powerfull tool in the entire design and web industry.</p>
                            <form onSubmit={(e) => registrationHandler(e)}>
                                <input className="form-control mb-1" type="text" name="username" placeholder="Full Name" />
                                <ul className='mb-2'>
                                    {formErrrors?.username}
                                </ul>
                                <input className="form-control mb-1" type="email" name="email" placeholder="E-mail Address" />
                                <ul className='mb-2'>
                                    {formErrrors?.email}
                                </ul>
                                <input className="form-control mb-1" type="password" name="password" placeholder="Password" />
                                <ul className='mb-2'>
                                    {formErrrors?.password}
                                </ul>
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">Register</button>
                                </div>
                            </form>
                            <div className="other-links">
                                <div className="text">Or register with</div>
                                <a href="#"><i className="fab fa-facebook-f" />Facebook</a><a href="#"><i className="fab fa-google" />Google</a><a href="#"><i className="fab fa-linkedin-in" />Linkedin</a>
                            </div>
                            <div className="page-links">
                                <Link to='/login'>Login to account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register