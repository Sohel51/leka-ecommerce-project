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
                    {
                        product.discount ?
                            <span className="product-price">
                                <span className='product-price-custom-discount'>${product.price}</span>
                                <span className='product-discountprice-custom'>&nbsp; %{product.discount} </span>
                                &nbsp;${product.discountPrice}
                            </span>
                            :
                            <span className="product-price">
                                <span className='product-price-custom'>${product.price} </span>
                            </span>

                    }
                    <a onClick={() => dispatch({ fn: null, type: 'insertCart', payload: { product } })} className="button-add-to-cart">ADD TO CART</a>
                </div>
            </div>
        </>
    )
}

export default ProductItem