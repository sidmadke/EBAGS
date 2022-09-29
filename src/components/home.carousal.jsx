import React from 'react';
import couchCover from '../assets/couch.jpg'
import bedCover from '../assets/bed.jpg'
import tableCover from '../assets/table.jpg'
import cupboardCover from '../assets/cupboard.jpg'
import chairCover from '../assets/chair.jpg'

const HomeCarousal = () => {
  return (
    <div >
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <h1>title</h1>
          <div class="carousel-item active ">
            <div className='row'>
            <div className='col-5 '>
              <h1></h1>
            </div>
            <div className='col-7 '>
            <img src={bedCover} class="d-block h-100" alt="..."/>
            </div>
            </div>
            
          </div>
          <div class="carousel-item">
          <div className='row'>
            <div className='col-5 order-1'>
              <h1>this is text</h1>
            </div>
            <div className='col-7 order-2'>
            <img src={bedCover} class="d-block h-100" alt="..."/>
            </div>
            </div>
          </div>
          <div class="carousel-item">
          <div className='row'>
            <div className='col-5 order-1'>
              <h1>this is text</h1>
            </div>
            <div className='col-7 order-2'>
            <img src={bedCover} class="d-block h-100" alt="..."/>
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
  );
}

export default HomeCarousal;