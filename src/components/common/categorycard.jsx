import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    return (
        <div className="card my-3 shadow">
             <Link to={`/product/${props.url}`}><img src={props.image} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <div className='d-flex justify-content-between align-items-center pb-3'>
                    <h5 className="card-title d-inline-flex m-0">{props.title}</h5>
                </div>

                <p className="card-text m-0">{props.description}</p>
                <p className="card-text">{`Starting from ${props.price}`}</p>
            </div>
        </div>
    );
}

export default CategoryCard;