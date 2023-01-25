import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import moment from 'moment';

const ProductDetail = () => {
  const [data, setData] = useState(null)
  const param = useParams();

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = () => {
    fetch(`http://localhost:5000/product/get/${param.id}`, {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setData(res);
      })
  }
  return (
    data ?
      <div className="d-card">
        <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
          <h3>Product Details</h3>
          <div>
            <Link to="/admin/listproduct" className='btn btn-md-size btn-info'><i className='fas fa-arrow-left'>All Products</i></Link>
          </div>
        </div>
        <div className="card-body">
          {data &&
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <img className='img-fluid' src={'http://localhost:5000/' + data.image} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>ID</td>
                      <td>:</td>
                      <td>{data.category._id}</td>
                    </tr>
                    <tr>
                      <td style={{ width: 120, }}>Title</td>
                      <td style={{ width: 3, }}>:</td>
                      <td>{data.title}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>:</td>
                      <td>{data.category?.title}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>:</td>
                      <td>{data.price}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>:</td>
                      <td>{data.discount}</td>
                    </tr>
                    <tr>
                      <td>Discount Price</td>
                      <td>:</td>
                      <td>{data.discountPrice}</td>
                    </tr>
                    <tr>
                      <td>Discount Date</td>
                      <td>:</td>
                      <td>{moment(data.discountDate).format('DD MMMM YYYY hh:mm:a')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-12 mt-3">
                <h2>Description</h2>
                {
                  parse(data.description)
                }
              </div>
            </div>
          }
        </div>
      </div>
      :
      <h3>...Loading</h3>
  )
}

export default ProductDetail