import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import httpRequest from '../../hooks/httpRequest'
import ProductItem from './components/ProductItem'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        httpRequest('/product/all')
            .then(res => {
                console.log(res);
                setProducts((products) => products = res.data)
            })
    }, [])

    return (
        <div>
            {/* Slide */}
            <div className="section-slide position-relative">
                <div className="slide-home" data-animatein="fadeIn" data-animateout="fadeOut" data-margin={0} data-nav="true" data-autoplay="true" data-loop="true" data-responsive="{&quot;0&quot;:{&quot;items&quot;:1,&quot;nav&quot;:false},&quot;600&quot;:{&quot;items&quot;:1},&quot;1000&quot;:{&quot;items&quot;:1}}">
                    <div className="item-slide ">
                        <figure><img src="/images/slide/slide1-2.jpg" alt="" /></figure>
                        <div className="overlay" />
                        <div className="content-slide">
                            <img src="/images/slide/logo-slide2.png" alt="" />
                            <h2 className="caption-title-1">End of Season</h2>
                            <p className="caption-small-1">SHORT VELVET DRESS</p>
                            <div className="ground-button">
                                <a href="#" className="leka-button">SHOP NOW</a>
                                <a href="#" className="leka-button button-style2">BUY THEME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ./Slide */}
            {/* Tab product */}
            <div className="section-tabslide">
                <div className="container">
                    <div className="title-section text-center">
                        <h2 className="title">Feature Products</h2>
                    </div>
                    <div className="tab-slide-category">
                        <ul className="products-tab nav nav-tabs" role="tablist">
                            <li className="active" role="presentation"><a href="#tab-product-1" aria-controls="tab-product-1" role="tab" data-toggle="tab">WOMEN</a></li>
                            <li role="presentation"><a href="#tab-product-2" aria-controls="tab-product-2" role="tab" data-toggle="tab">MEN’S</a></li>
                            <li role="presentation"><a href="#tab-product-3" aria-controls="tab-product-3" role="tab" data-toggle="tab">BAG &amp; SHOES</a></li>
                            <li role="presentation"><a href="#tab-product-4" aria-controls="tab-product-4" role="tab" data-toggle="tab">ACCESSORIES</a></li>
                            <li role="presentation"><a href="#tab-product-5" aria-controls="tab-product-5" role="tab" data-toggle="tab">CROP TOP</a></li>
                        </ul>
                        <div className="row" >
                            {
                                products.map((product, index) => {
                                    return <div key={index} className="col-md-3">
                                        <ProductItem index={index} product={product}></ProductItem>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* ./Tab product */}
            {/* Colection */}
            {/* Colection */}
            {/* Tab product */}
            {/* <div className="section-tabslide">
                <div className="container">
                    <div className="title-section text-center">
                        <h2 className="title">Latest Products</h2>
                    </div>
                    <div className="tab-slide-category">
                        <ul className="products-tab nav nav-tabs" role="tablist">
                            <li className="active" role="presentation"><a href="#tab-product-6" aria-controls="tab-product-6" role="tab" data-toggle="tab">WOMEN</a></li>
                            <li role="presentation"><a href="#tab-product-7" aria-controls="tab-product-7" role="tab" data-toggle="tab">MEN’S</a></li>
                            <li role="presentation"><a href="#tab-product-8" aria-controls="tab-product-8" role="tab" data-toggle="tab">BAG &amp; SHOES</a></li>
                            <li role="presentation"><a href="#tab-product-9" aria-controls="tab-product-9" role="tab" data-toggle="tab">ACCESSORIES</a></li>
                            <li role="presentation"><a href="#tab-product-10" aria-controls="tab-product-10" role="tab" data-toggle="tab">CROP TOP</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-product-6" role="tabpanel" className="tab-pane fade in active">
                                <div className="product-slide owl-carousel" data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;600&quot;:{&quot;items&quot;:3},&quot;1000&quot;:{&quot;items&quot;:4}}" data-margin={30} data-items={4} data-nav="true">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product1.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-product-7" role="tabpanel" className="tab-pane fade">
                                <div className="product-slide owl-carousel" data-responsive="{&quot;0&quot;:{&quot;items&quot;:1},&quot;600&quot;:{&quot;items&quot;:3},&quot;1000&quot;:{&quot;items&quot;:4}}" data-margin={30} data-items={4} data-nav="true">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product8.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product7.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product6.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product5.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product4.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="/images/products/product3.png" alt="" />
                                            </a>
                                            <div className="product-button">
                                                <a href="#" className="button-compare">Compare</a>
                                                <a href="#" className="button-wishlist">Wishlist</a>
                                                <a href="#" className="button-quickview">Quick view</a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3><a href="#">Ledtead Predae</a></h3>
                                            <span className="product-price">$89.00</span>
                                            <a href="#" className="button-add-to-cart">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* ./Tab product */}
            {/* Banner section */}
            {/* ./Banner section */}
            {/* parallax */}
            {/* parallax */}
            <div className="section-feture-product2">
                <div className="container">
                    <div className="product-feture position-right">
                        <div className="row">
                            <div className="col-sm-6 product-image">
                                <a href="#">
                                    <img src="/images/product-ft2.png" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-6 product-info">
                                <h2><a href="#">Shop Owner</a></h2>
                                <span className="price-product">John Smith</span>
                                <div className="desc-product"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p></div>
                                <a href="#" className="leka-button button-add-to-cart">Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home