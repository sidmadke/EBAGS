import React, { Component } from 'react'

class Rating extends Component {
    render() {
        const {rating, reviews} = this.props;
        return (
            <div>
                <span className='text-warning'>
                    <i className={
                        rating>=1?"fa-solid fa-star":
                        rating>=0.5?"fa-regular fa-star-half-stroke":"fa-regular fa-star"
                    }></i>
                </span>
                <span className='text-warning'>
                    <i className={
                        rating>=2?"fa-solid fa-star":
                        rating>=1.5?"fa-regular fa-star-half-stroke":"fa-regular fa-star"
                    }></i>
                </span>
                <span className='text-warning'>
                    <i className={
                        rating>=3?"fa-solid fa-star":
                        rating>=2.5?"fa-regular fa-star-half-stroke":"fa-regular fa-star"
                    }></i>
                </span>
                <span className='text-warning'>
                    <i className={
                        rating>=4?"fa-solid fa-star":
                        rating>=3.5?"fa-regular fa-star-half-stroke":"fa-regular fa-star"
                    }></i>
                </span>
                <span className='text-warning'>
                    <i className={
                        rating>=5?"fa-solid fa-star":
                        rating>=4.5?"fa-regular fa-star-half-stroke":"fa-regular fa-star"
                    }></i>
                </span>
                <span className='fw-bold ms-2'>
                   {reviews} reviews
                </span>
            </div>
        );
    }
}
 
export default Rating;