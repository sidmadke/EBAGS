import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

const ProductCard = (props) => {
    return (
        <div className="card my-3">

            <Link to={`/product/${props.url}`}> <img src={props.image} className="card-img-top" alt="..." /></Link>
            <div className="card-body">

                <div className='d-flex justify-content-between align-items-center pb-3'>
                    <h5 className="card-title d-inline-flex m-0">{props.title}</h5>
                    <Link to='/cart' className="btn btn-warning btn-sm">
                        <p className='m-0 fw-bolder'>Cart <i class="fa-solid fa-cart-shopping"></i>
                        </p></Link>
                </div>

                <p className="card-text m-0">{props.description}</p>
                <p className="card-text m-0">{props.brand}</p>
                <Rating rating={props.rating} reviews={props.reviews}/>
            </div>
        </div>
    );
}

export default ProductCard;