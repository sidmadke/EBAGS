import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    const category = props.category
    return (
        <div className="card my-3 shadow">
             <Link to={`/products/${category.url}`}><img src={category.image} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <div className='d-flex justify-content-between align-items-center pb-3'>
                    <h5 className="card-title d-inline-flex m-0">{category.title}</h5>
                </div>
                <p className="card-text m-0">{category.description}</p>
                <p className="card-text">{`Starting from ${category.price}`}</p>
            </div>
        </div>
    );
}

export default CategoryCard;