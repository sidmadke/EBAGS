import React from 'react';

const Contact = () => {
    return (
        <div className='col-10 offset-1 my-4'>
            <div className='col-8 offset-2'>
                <h1 className='text-center'>Contact Us</h1>
                <p className='text-center'>Do you have any questions? Please do not hesitate to contact us directly.</p>
            </div>

            <form className='mt-5'>
                <div className='row'>
                    <div className='col-9'>
                        <div className='row'>
                            <div class="mb-3 col-6">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 col-6">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 col-6">
                                <label class="form-label">Message</label>
                                <textarea class="form-control" placeholder="Leave a comment here" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary ">Submit</button>
                    </div>
                    <div className='col-3'>
                        <div className='col-12 d-flex flex-column align-items-center mb-3'>
                            <i class="fa-solid fa-location-dot fs-2 primary-text"></i>
                            <p>Mumbai, India</p>
                        </div>
                        <div className='col-12 d-flex flex-column align-items-center mb-3'>
                            <i class="fa-solid fa-phone fs-2 primary-text"></i>
                            <p>+01 234 567 89</p>
                        </div>
                        <div className='col-12 d-flex flex-column align-items-center'>
                            <i class="fa-solid fa-envelope fs-2 primary-text"></i>
                            <p>contactwoodworks@gmail.com</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;