import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

const ProductCard = (props) => {
    return (
        <div className="card my-3">
            <Link to={`/products/${props.url}`}> <img src={props.image} className="card-img-top" alt={props.title} /></Link>
            <div className="card-body">

                <div className='d-flex justify-content-between align-items-center pb-3'>
                    <h5 className="card-title d-inline-flex m-0">{props.title}</h5>
                    <Link to='/cart' className="btn btn-warning btn-sm">
                        <p className='m-0 fw-bolder'>Cart <i class="fa-solid fa-cart-shopping"></i>
                        </p></Link>
                </div>
                <Rating rating={props.rating} reviews={props.reviews} />
                <p className='fs-4 m-0'>₹{props.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;