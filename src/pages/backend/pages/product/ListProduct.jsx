import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../hooks/httpRequest'
import resourceLink from '../../../../hooks/resourceLink'

const ListProduct = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    httpRequest('/product/all')
      .then(res => {
        setData(res.data);
      })
  }

  const deleteHandler = (id) => {
    httpRequest('/product/delete', 'POST', JSON.stringify({ id }), {
      'Content-Type': 'application/json'
    })
      .then(res => {
        let temp = [...data].filter(i => i._id !== id);
        setData(temp);
      })
  }

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
            {
              data.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{i._id}</td>
                    <td>{i.title}</td>
                    <td><img src={resourceLink(i.image)} style={{ width: 100, }} alt="" /></td>
                    <td>{i.title}</td>
                    <td>{i.category.title}</td>
                    <td>{i.price}</td>
                    <td>{i.discount}</td>
                    <td>{i.discoutnPrice}</td>
                    <td>
                      <div className='d-flex gap-2 flex-wrap justify-content-end' style={{ gap: '5px' }}>
                        <Link to={`/admin/productdetail/${i._id}`} className='btn btn-sm btn-info'>Details</Link>
                        <Link to={`/admin/updateproduct/${i._id}/${i.title}`} className='btn btn-sm btn-warning'>Edit</Link>
                        <a onClick={() => deleteHandler(i._id)} href="" className='btn btn-sm btn-danger'>Delete</a>
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

export default ListProduct