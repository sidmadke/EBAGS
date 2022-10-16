import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

const ProductCard = (props) => {
    const product = props.product
    return (
        <div className="card my-3">
            <Link to={`/products/${product.url}`}> <img src={product.image} className="card-img-top" alt={product.title} /></Link>
            <div className="card-body">

                <div className='d-flex justify-content-between align-items-center pb-3'>
                    <h5 className="card-title d-inline-flex m-0">{product.title}</h5>
                    <button className="btn btn-warning btn-sm" onClick={()=>props.handleAddCart(props.product)}>
                        <p className='m-0 fw-bolder'>Cart <i class="fa-solid fa-cart-shopping"></i>
                        </p></button>
                </div>
                <Rating rating={product.rating} reviews={product.reviews} />
                <p className='fs-4 m-0'>₹{product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;