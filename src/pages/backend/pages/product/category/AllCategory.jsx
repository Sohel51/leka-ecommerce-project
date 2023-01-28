import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../../hooks/httpRequest';

const AllCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                setData(res.data);
            })
    }

    const deleteItem = (e, id) => {
        e.preventDefault();
        if (window.confirm('Sure! Want to delete?')) {
            fetch('http://localhost:5000/category/delete', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                },
                body: JSON.stringify({ id })
            })
            .then(res=>res.json())
            .then(res=>{
                getCategory();
            })
        }
    }


    return (
        <div className="d-card">
            <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
                <h3>All Categroies</h3>
                <div>
                    <Link to="/admin/createcategory" className='btn btn-md-size btn-info'><i className='fas fa-plus'>Create</i></Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-hover text-center'>
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Title</th>
                            <th>Products</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(i => {
                                return (
                                    <tr key={i._id}>
                                        <td>{i._id}</td>
                                        <td>{i.title}</td>
                                        <td>0</td>
                                        <td>
                                            <div className='d-flex gap-2 flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                                <a href="" className='btn btn-sm btn-info'>Details</a>
                                                <Link to={`/admin/edit/${i._id}/${encodeURI(i.title.replaceAll(' ', '-'))}`} className='btn btn-sm btn-warning'>Edit</Link>
                                                <a onClick={(e) => deleteItem(e, i._id)} href="" className='btn btn-sm btn-danger'>Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCategory