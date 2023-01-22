import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
  return (
    <div className="d-card">
      <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
        <h3>All Products</h3>
        <div>
          <Link to="/admin/addproduct" className='btn btn-md-size btn-info'><i className='fas fa-plus'>Add Product</i></Link>
        </div>
      </div>
      <div className="card-body table-responsive">
        <table className='table table-hover text-center'>
          <thead>
            <tr>
              <th>SI</th>
              <th>Title</th>
              <th>Image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>D Price</th>
              <th>Creator</th>
              <th style={{ width: '150px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className='d-flex gap-2 flex-wrap justify-content-end' style={{ gap: '5px' }}>
                  <a href="" className='btn btn-sm btn-info'>Details</a>
                  <Link to="" className='btn btn-sm btn-warning'>Edit</Link>
                  <a href="" className='btn btn-sm btn-danger'>Delete</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct