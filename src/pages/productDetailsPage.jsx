import React, { Component } from 'react'
import axios from 'axios'
import Rating from '../components/common/rating'
import { Link } from 'react-router-dom'

class ProductDetailsPage extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const category = this.props.category
        const product = this.props.product

        const { data } = await axios.get(`http://localhost:5000/api/products/${category}/${product}`)
        this.setState({ product: data })
    }

    render() {
        const product = this.state.product
        if (!product) {
            return
        }
        return (
            <div className='container max-width-1200 my-5 px-5'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={product.image} className='col-10' />
                    </div>
                    <div className='col-6 row'>
                        <div className='col-8 '>
                            <h1>{product.title}</h1>
                            <p>By - {product.brand}</p>
                            <Rating rating={product.rating} reviews={product.reviews} />

                            <p className='m-0 mt-3'>Description:</p>
                            <p>{product.description}</p>
                        </div>
                        <div className='col-4 pt-2 ps-2 border-start border-2'>
                            <p>Price: <span className='ms-3'>₹{product.price}</span></p>
                            <p className='mb-4'>Status:
                                {product.stock > 0 ?
                                    (<span class="ms-3 badge bg-success">In Stock</span>) :
                                    (<span class="ms-3 badge bg-danger">Out Of Stock</span>)
                                }
                            </p>
                            {product.stock > 0 &&
                                <div className='d-flex justify-content-center my-3'>
                                    <button type="button" class="btn btn-warning btn-sm" onClick={()=>this.props.handleAddCart(product)}><p className='m-0 fw-bolder'>Add to Cart<i class="fa-solid fa-cart-shopping"></i>
                                </p></button>
                                </div>
                            }

                            {product.stock > 0 &&
                                <div className='d-flex justify-content-center my-3'>
                                    <Link to='/cart' className="btn btn-warning btn-sm bg-orange">
                                        <p className='m-0 fw-bolder'>Buy Now<i class="fa-solid fa-cart-shopping"></i>
                                        </p></Link>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductDetailsPage;