import React from 'react';
import cover1 from '../assets/homeCarousal-cover-1.png'
import cover2 from '../assets/homeCarousal-cover-2.png'
import cover3 from '../assets/homeCarousal-cover-3.png'
import Carousal from './common/carousal';

const HomeCarousal = () => {
  return (
    <div className='primary-color '>
      <div id="carouselExampleIndicators" className="carousel slide max-width-1600 mx-auto " data-bs-ride="carousel">
        <div className='mx-auto '>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner ">
            <div className='row'>
              <div className='col-5 offset-1 static p-5'>
                <h1 className='text-white '>Meet Our</h1>
                <h1 className='text-white '>New Products</h1>
              </div>
              <div className='col-10 offset-1'>
                <Carousal text="Lorem ipsum dolor sit amet consectetur adipisicing."
                  image={cover1} class="carousel-item active" />
                <Carousal text="Lorem ipsum dolor sit amet consectetur adipisicing."
                  image={cover2} class="carousel-item" />
                <Carousal text="Lorem ipsum dolor sit amet consectetur adipisicing."
                  image={cover3} class="carousel-item" />
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default HomeCarousal;