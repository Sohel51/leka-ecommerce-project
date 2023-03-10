import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';
import httpRequest from '../../../../hooks/httpRequest';

const UpdateProduct = () => {
  const [data, setData] = useState({})
  const [formErrors, setFormErrors] = useState();
  const [categories, setCategories] = useState([]);
  const editorRef = useRef(null);
  const previewImage = useRef(null);
  const discount_field = useRef(null);
  const price_field = useRef(null);
  const discountPrice_field = useRef(null);
  const param = useParams();

  useEffect(() => {
    getCategory();
    getProduct();
  }, [])

  const getCategory = () => {
    httpRequest('/category/all')
      .then(res => {
        setCategories(res.data);
      })
  }

  const getProduct = () => {
    httpRequest(`/product/get/${param.id}`)
      .then(res => {
        setData(res.data);
      })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors({}); // for remove the errors
    let formData = new FormData(e.target);
    formData.append('description', editorRef.current.getContent());
    formData.append('_id', param.id);

    httpRequest('/product/update', 'POST', formData)
      .then(res => {
        if (res.status === 422) {
          let tempError = {
            title: [],
            category: [],
            price: [],
            image: [],
            description: [],
          };
          res.data.errors.forEach((e, index) => {
            tempError[e.param].push(
              <li key={index} className='text-danger'>
                {e.msg}
              </li>
            )
          });
          setFormErrors(tempError)
        }

        // reset the form
        if (res.status === 201) {
          previewImage.current.src = '';
          window.alert('Update Completed')
        }
      })
  }

  const discountHandler = () => {
    let price = +price_field.current.value;
    let discount = +discount_field.current.value;
    if (discount > 100) {
      discount_field.current.value = 100
      discount = 100;
    }
    if (discount < 0) {
      discount_field.current.value = 0
    }
    if (discount > 0) {
      let discountPrice = price - ((price * discount) / 100);
      discountPrice_field.current.value = discountPrice;
      console.log(price, discount, discountPrice);
    } else {
      discountPrice_field.current.value = '';
      discount_field.current.value = '';
    }
  }

  return (
    <div className="d-card">
      <div className="card-header m-0 align-items-center d-flex flex-wrap justify-content-between">
        <h3>Update Product</h3>
        <div>
          <Link to="/admin/listproduct" className='btn btn-md-size btn-info'><i className='fas fa-arrow-left'>Product List</i></Link>
        </div>
      </div>
      <div className="card-body">
        <form action="" encType='multipart/form-data' onSubmit={submitHandler}>
          <div className="from-group mb-3">
            <label htmlFor="">Title</label>
            <input defaultValue={data.title} type="text" className='form-control' name='title' />
            <ul>
              {formErrors?.title}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Category</label>
            <select className='form-control' name="category" id="">
              {
                categories.map(i => {
                  return <option key={i._id} value={i._id}>{i.title}</option>
                })
              }
            </select>
            <ul>
              {formErrors?.category}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Price</label>
            <input defaultValue={data.price} ref={price_field} type="text" className='form-control' name='price' />
            <ul>
              {formErrors?.price}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount</label>
            <input defaultValue={data.discount} max={100} onKeyUp={discountHandler} ref={discount_field} type="text" className='form-control' name='discount' />
            <ul>
              {formErrors?.discount}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount Price</label>
            <input defaultValue={data.discountPrice} readOnly step=".00" ref={discountPrice_field} type="text" className='form-control' name='discountPrice' />
            <ul>
              {formErrors?.discountPrice}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount Date</label>
            <input defaultValue={data.discountDate?.split('T')[0]} type="date" className='form-control' name='discountDate' />
            <ul>
              {formErrors?.discountDate}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Image</label>
            <input onChange={(e) => previewImage.current.src = window.URL.createObjectURL(e.target.files[0])}
              type="file"
              className='' name='image' />
            <img src="" style={{ width: 120, marginTop: 5, }} ref={previewImage} />
            <ul>
              {formErrors?.image}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Description</label>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={data.description}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
            {/* <textarea type="text" className='form-control h-100' rows="10" name='description' /> */}
            <ul>
              {formErrors?.description}
            </ul>
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct