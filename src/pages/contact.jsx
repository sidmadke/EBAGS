import React from 'react';
import { Helmet } from 'react';

const Contact = () => {

    return (
        <div className='row col-lg-12'>
            <div className='col-lg-6 col-md-6 col-sm-6 mt-4 px-auto'>
                <div className='col-12 mx-5'>
                    <p className='text-center display-5'>Contact Us</p>
                    <h3 className='text-center'>Do you have any questions?<br/>Please do not hesitate to contact us directly.</h3>
                </div>

                <div className='col-12 d-flex flex-column mt-4 offset-5 pt-4'>
                    <div className='col-4 d-flex flex-column align-items-center mb-3'>
                        <i class="fa-solid fa-location-dot fs-2 primary-text"></i>
                        <p>Mumbai, India</p>
                    </div>
                    <div className='col-4 d-flex flex-column align-items-center mb-3'>
                        <i class="fa-solid fa-phone fs-2 primary-text"></i>
                        <p>9869796324</p>
                    </div>
                    <div className='col-4 d-flex flex-column align-items-center'>
                        <i class="fa-solid fa-envelope fs-2 primary-text"></i>
                        <p>enquirythoratbags@gmail.com</p>
                    </div>
                </div>
            </div>
                <div class="col-lg-6 form_main px-5 pt-3 my-4 mx-auto">
                    <div class="form">
                        <h3 class="text-center">Contact Form</h3>
                        <hr class="mx-auto"/>
                        <form action="javascript:sendmail()" method="post">
                            <div class="field">
                                <label>Your Name:</label><br />
                                <input type="text" class="form-control" name="Name" id="Name" placeholder="" required="" /><br />
                            </div>
                            <div class="field">
                                <label>Your Email:</label><br />
                                <input type="email" class="form-control" name="Sender" id="Sender" placeholder="" required="" /><br />
                            </div>

                            <label>Message:</label><br />
                            <textarea name="Message" class="form-control" id="Message" placeholder="" required=""></textarea><br />
                            <div className="text-center">
                                <button type="submit" class="btn btn-contact text-center bg-warning px-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}



export default Contact;