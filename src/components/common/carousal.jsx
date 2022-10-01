import React from 'react'

const Carousal = (props) => {
    return ( 
        <div class={props.class}>
                  <div className='row vh-6'>
                    <div className='col-5 p-5 d-flex align-items-end vh-6'>
                      <p className='text-white'>{props.text}</p>
                    </div>
                    <div className='col-7 d-flex justify-content-center py-3 vh-6'>
                      <img src={props.image} class="d-block h-100 py-1" alt="..." />
                    </div>
                  </div>
                </div>
     );
}
 
export default Carousal;