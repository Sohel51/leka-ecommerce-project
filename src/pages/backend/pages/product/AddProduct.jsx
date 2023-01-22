import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';

const AddProduct = () => {
  const [formErrors, setFormErrors] = useState();
  const [categories, setCategories] = useState([]);
  const editorRef = useRef(null);
  const previewImage = useRef(null);
  const discount_field = useRef(null);
  const price_field = useRef(null);
  const discountPrice_field = useRef(null);

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
        setCategories(res);
      })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors({}); // for remove the errors
    let formData = new FormData(e.target);
    formData.append('description', editorRef.current.getContent());

    fetch(`http://localhost:5000/product/create`, {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      },
      body: formData,
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
          e.target.reset();
          previewImage.current.src = '';
          window.alert('New Product Created')
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
        <h3>Add Product</h3>
        <div>
          <Link to="/admin/listproduct" className='btn btn-md-size btn-info'><i className='fas fa-minus'>Product List</i></Link>
        </div>
      </div>
      <div className="card-body">
        <form action="" encType='multipart/form-data' onSubmit={submitHandler}>
          <div className="from-group mb-3">
            <label htmlFor="">Title</label>
            <input type="text" className='form-control' name='title' />
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
            <input ref={price_field} type="text" className='form-control' name='price' />
            <ul>
              {formErrors?.price}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount</label>
            <input max={100} onKeyUp={discountHandler} ref={discount_field} type="text" className='form-control' name='discount' />
            <ul>
              {formErrors?.discount}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount Price</label>
            <input readOnly ref={discountPrice_field} type="text" className='form-control' name='discountPrice' />
            <ul>
              {formErrors?.discountPrice}
            </ul>
          </div>
          <div className="from-group mb-3">
            <label htmlFor="">Discount Date</label>
            <input type="date" className='form-control' name='discountDate' />
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
              initialValue="<p>This is the initial content of the editor.</p>"
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

export default AddProduct