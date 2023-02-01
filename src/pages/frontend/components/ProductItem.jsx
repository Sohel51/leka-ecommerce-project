import React from 'react'
import resourceLink from '../../../hooks/resourceLink'
import useFrontendContext from '../../../hooks/useFrontendContext'

const ProductItem = ({ product }) => {
    const { dispatch } = useFrontendContext();
    return (
        <>
            <div className="product">
                <div className="product-thumb">
                    <a href="single-product.html">
                        <img className='h-400' src={resourceLink(product.image)} alt="" />
                    </a>
                    <div className="product-button">
                        <a href="#" className="button-compare">Compare</a>
                        <a href="#" className="button-wishlist">Wishlist</a>
                        <a href="#" className="button-quickview">Quick view</a>
                    </div>
                </div>
                <div className="product-info">
                    <h3><a href="#">{product.title}</a></h3>
                    <span className="product-price">${product.price}</span>
                    <a onClick={() => dispatch({ fn: null, type: 'insertCart', payload: { product } })} className="button-add-to-cart">ADD TO CART</a>
                </div>
            </div>
        </>
    )
}

export default ProductItem