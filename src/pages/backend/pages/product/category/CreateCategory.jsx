import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        fetch('http://localhost:5000/category/all', {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            })
    }


    const submithandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        fetch('http://localhost:5000/category/create', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                window.alert('Category Successfully Created')
                e.target.reset();
            })
    }

    return (
        <div className="d-card">
            <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
                <h3>Create Categroies</h3>
                <div>
                    <Link to="/admin/allcategory" className='btn btn-md-size btn-info'><i className='fas fa-minus'>Categories</i></Link>
                </div>
            </div>
            <div className="card-body">
                <form action="" onSubmit={submithandler}>
                    <div className="from-group mb-3">
                        <label htmlFor="">Title</label>
                        <input type="text" className='form-control' name='title' />
                    </div>
                    <div className="from-group mb-3">
                        <label htmlFor="">Parent</label>
                        <ul>
                            <li>
                                <label htmlFor="none">
                                    <input defaultChecked value='none' id="none" name='parent' type="radio" />
                                    &nbsp; None
                                </label>
                            </li>
                            {
                                data.map(i => {
                                    return (
                                        <li key={i._id}>
                                            <label htmlFor={i._id}>
                                                <input value={i._id} id={i._id} name='parent' type="radio" />
                                                &nbsp; {i.title}
                                            </label>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCategory