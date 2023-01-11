import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditCategory = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState({})
    const { id, title } = useParams();

    useEffect(() => {
        getCategory();
        getCategoryById();
    }, [])

    const getCategoryById = () => {
        fetch('http://localhost:5000/category/get/' + id, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(res => {
                setCategory(res)
            })
    }

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
        formData.append('id', id)
        fetch('http://localhost:5000/category/update', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            },
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                window.alert('Category Successfully Updated')
                // e.target.reset();
                getCategoryById();
                getCategory();
            })
    }

    return (
        <div className="d-card">
            <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
                <h3>Edit Categroies</h3>
                <div>
                    <Link to="/admin/allcategory" className='btn btn-md-size btn-info'><i className='fas fa-minus'>Categories</i></Link>
                </div>
            </div>
            <div className="card-body">
                <form action="" onSubmit={submithandler}>
                    <div className="from-group mb-3">
                        <label htmlFor="">Title</label>
                        <input type="text" defaultValue={category.title} className='form-control' name='title' />
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
                                        i._id !== category._id ?
                                        <li key={i._id}>
                                            <label htmlFor={i._id}>
                                                {
                                                    i._id === category.parent?._id ?
                                                        <input
                                                            defaultChecked
                                                            value={i._id}
                                                            id={i._id}
                                                            name='parent'
                                                            type="radio" />
                                                        :
                                                        <input
                                                            value={i._id}
                                                            id={i._id}
                                                            name='parent'
                                                            type="radio" />
                                                }
                                                &nbsp; {i.title}
                                            </label>
                                        </li>
                                        : ''
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <button className='btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCategory