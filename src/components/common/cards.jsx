import React from 'react'

const Cards = (props) => {
    return (
        <div className="card my-3 shadow">
            <img src={props.web} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <a href="#" className="btn btn-outline-dark btn-md explore-btn">Explore</a>
                </div>
        </div>
    );
}

export default Cards;