import React from 'react';

const About = () => {
    return (
        <div className='col-10 offset-1'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='/images/aboutCover-1.png' className='col-9' />
                </div>
                <div className='col-6 mt-5'>
                    <h2 className='primary-text'>About Us</h2>
                    <p className='my-3'>
                        To discover new Furniture design ideas was never so handy, browse over 500 products from our top categories for ultimate online furniture shopping experience. To choose  furniture for a living space as tricky as doing the interiors. Either you are redoing or changing the place,all you need to know is cheap online furniture shops from where you can buy quality products.
                    </p>
                    <div>
                        <p><i class="fa fa-check primary-text" aria-hidden="true"></i> Free Home Delivery</p>
                        <p><i class="fa fa-check primary-text" aria-hidden="true"></i><span> Easy Returns</span></p>
                        <p><i class="fa fa-check primary-text"></i><span> Quality Assurance</span></p>
                    </div>
                </div>

                <div className='col-6 mt-4 mb-5'>
                    <h2 className='mb-4 primary-text'>Our Brand Philosophy</h2>
            
                    <h5>CUSTOMER EXPERIENCE</h5>
                    <p >Everything we create is designed with our customer in mind, and we’re committed to an incredible service experience that leaves our customer smiling each time they visit us online or speak to one of our cheerful customer service associate.</p>
                    <h5>COMFORT</h5>
                    <p >Whether it is comfort of shopping with us or the comfort provided by our products like sofas and chairs using high quality material like foams, fibers and down feathers, we have taken care of all your comfort needs in our products</p>
                </div>
                <div className='col-6 mt-4 mb-5'>
                    <img src='/images/aboutCover-2.png' className='col-9 offset-3'/>
                </div>
            </div>

        </div>
    );
}

export default About;