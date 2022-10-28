import React from 'react';
import { Helmet } from 'react';

const Contact = () => {
    
    return (
        <div className='col-10 offset-1 my-4'>
            <div className='col-8 offset-2'>
                <h1 className='text-center'>Contact Us</h1>
                <p className='text-center'>Do you have any questions? Please do not hesitate to contact us directly.</p>
            </div>

            <div class="form_main">
        <div class="form">
            <h2>Contact Form</h2>
            <hr/>
            <form action="javascript:sendmail()" method="post">
                <div class="field">
                    <label>Your Name:</label><br/>
                    <input type="text" class="form-control" name="Name" id="Name" placeholder="" required=""/><br/>
                </div>
                <div class="field">
                    <label>Your Email:</label><br/>
                    <input type="email" class="form-control" name="Sender" id="Sender" placeholder="" required=""/><br/>
                </div>

                <label>Message:</label><br/>
                <textarea name="Message" class="form-control" id="Message" placeholder="" required=""></textarea><br/>
                <div class="btn">
                    <button type="submit" class="btn btn-contact">Submit </button>
                </div>
            </form>
        </div>
    </div>

                    <div className='col-3 d-flex flex-row align-items-center mb-3 mt-5 pl-3'>
                        <div className='col-12 d-flex flex-column align-items-center mb-3'>
                            <i class="fa-solid fa-location-dot fs-2 primary-text"></i>
                            <p>Mumbai, India</p>
                        </div>
                        <div className='col-12 d-flex flex-column align-items-center mb-3'>
                            <i class="fa-solid fa-phone fs-2 primary-text"></i>
                            <p>9869796324</p>
                        </div>
                        <div className='col-12 d-flex flex-column align-items-center'>
                            <i class="fa-solid fa-envelope fs-2 primary-text"></i>
                            <p>enquirythoratbags@gmail.com</p>
                        </div>
                    </div>
                </div>
    );
}



export default Contact;