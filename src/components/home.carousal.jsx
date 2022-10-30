import React from 'react';
// import cover1 from '../assets/homeCarousal-cover-1.png'
// import cover2 from '../assets/homeCarousal-cover-2.png'
// import cover3 from '../assets/homeCarousal-cover-3.png'
import cover4 from '../assets/homeCarousal-cover-4.png'
import cover5 from '../assets/homeCarousal-cover-5.png'
import cover6 from '../assets/homeCarousal-cover-6.png'
import cover7 from '../assets/homeCarousal-cover-7.png'
import Carousal from './common/carousal';

const HomeCarousal = () => {
  return (
    <div className='primary-color '>
      {/* <div id="carouselExampleIndicators" className="carousel slide max-width-1600 mx-auto " data-bs-ride="carousel">
        <div className='mx-auto '>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div className="carousel-inner ">
            <div className='row'>
              <div className='col-lg-5 col-md-0 col-sm-3 offset-1 static p-5'>
                <strong><h1 className='text-black title'>Meet Our</h1>
                <h1 className='text-black title'>New Products</h1></strong>
              </div>
              <div className='col-lg-10 col-md-12 col-sm-3 offset-1'>
                <Carousal text="New Stylish Gym Bag for everyone."
                  image={cover4} class="carousel-item active img-fluid" />
                <Carousal text="Unique Styled College Bag. Go and check at Product Section."
                  image={cover5} class="carousel-item col-md-12 img-fluid" />
                <Carousal text="Hand Bag. Your All time companion."
                  image={cover6} class="carousel-item col-md-12 img-fluid" />
                <Carousal text="Your Gym Buddy."
                  image={cover7} class="carousel-item col-md-12 img-fluid" />
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
      </div> */}
    </div>
  );
}

export default HomeCarousal;
