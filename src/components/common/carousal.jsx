import React from 'react'

const Carousal = (props) => {
    return ( 
        <div class={props.class}>
                  <div className='row vh-2 col-lg-12 col-md-12'>
                    <div className='col-lg-5 col-md-12 col-sm-2 p-5 d-flex align-items-end vh-lg-6 vh-md-7'>
                      <p className='text-black subtitle'>{props.text}</p>
                    </div>
                    <div className='col-lg-7 col-md-3 col-sm-10 d-flex justify-content-center py-lg-3 py-md-0 vh-6'>
                      <img src={props.image} class="d-block h-100 py-1 img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
     );
}
 
export default Carousal;
