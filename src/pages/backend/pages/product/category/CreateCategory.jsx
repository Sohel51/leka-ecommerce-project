import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const CreateCategory = () => {
    return (
        <div className="d-card">
            <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
                <h3>Create Categroies</h3>
                <div>
                    <Link to="/admin/allcategory" className='btn btn-md-size btn-info'><i className='fas fa-plus'>Categories</i></Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-border text-center'>
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Title</th>
                            <th>Products</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ti</td>
                            <td>35</td>
                            <td>
                                <div className='d-flex gap-2 flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                    <a href="" className='btn btn-sm btn-info'>Details</a>
                                    <a href="" className='btn btn-sm btn-warning'>Edit</a>
                                    <a href="" className='btn btn-sm btn-danger'>Delete</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default CreateCategory