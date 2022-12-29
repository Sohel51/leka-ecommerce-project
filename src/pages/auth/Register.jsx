import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    //creating a new user
    function registrationHandler(e) {
        e.preventDefault();
        // sending single data value
        // let info = {
        //     name: e.target.username.value,
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        // }
        // console.log(info);

        // sending full form data
        let formData = new FormData(e.target);
        formData.append('full-form', 'recieve the new full form-data');

        fetch('http://localhost:5000/user/register', {
            method: "POST",
            // headers: {'Content-Type': 'application/json' },
            // body: JSON.stringify(info)
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    //get the all user data
    function getUser() {
        fetch('http://localhost:5000/user/all')
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    //find an user by email
    function getUserByEmail() {
        let email = 'user2@gmail.com' //static email
        fetch('http://localhost:5000/user/get/' + email) //link where from we want to delete the data
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    //delete user by email
    function deleteUserByEmail() {
        let email = 'demo@gmail.com'
        fetch('http://localhost:5000/user/delete/' + email)
            .then(res => res.json())
            .then(res => {
                console.log(res);
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
                                <input className="form-control" type="text" name="username" placeholder="Full Name" required />
                                <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                <input className="form-control" type="password" name="password" placeholder="Password" required />
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
                            <div className="form-button">
                                <button onClick={getUser} id="submit" type="submit" className="ibtn">All Users</button>
                            </div>
                            <div className="form-button">
                                <button onClick={getUserByEmail} id="submit" type="submit" className="ibtn">Find User</button>
                            </div>
                            <div className="form-button">
                                <button onClick={deleteUserByEmail} id="submit" type="submit" className="ibtn">Delete User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register