import React from 'react';
import cover1 from '../assets/homeCarousal-cover-1.png'
import cover2 from '../assets/homeCarousal-cover-2.png'
import cover3 from '../assets/homeCarousal-cover-3.png'

const HomeCarousal = () => {
  return (
    <div className='primary-color '>
      <div id="carouselExampleIndicators" class="carousel slide max-width-1600 mx-auto " data-bs-ride="carousel">
        <div className='mx-auto '>

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner ">
            <div className='row'>
              <div className='col-5 offset-1 static p-5'>
                <h1 className='text-white '>Meet Our</h1>
                <h1 className='text-white '>New Products</h1>
              </div>
              <div className='col-10 offset-1'>
                <div class="carousel-item active ">
                  <div className='row vh-6'>
                    <div className='col-5 p-5 d-flex align-items-end vh-6'>
                      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='col-7 d-flex justify-content-center py-3 vh-6'>
                      <img src={cover1} class="d-block h-100 py-1" alt="..." />
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='row vh-6'>
                    <div className='col-5 p-5 d-flex align-items-end vh-6'>
                      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='col-7 d-flex justify-content-center py-3 vh-6'>
                      <img src={cover2} class="d-block h-100 py-1" alt="..." />
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='row vh-6'>
                    <div className='col-5 p-5 d-flex align-items-end vh-6'>
                      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='col-7 d-flex justify-content-center py-3 vh-6'>
                      <img src={cover3} class="d-block h-100 py-1" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default HomeCarousal;