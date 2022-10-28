import React from 'react';

const About = () => {
    return (
        <div className='col-10 offset-1'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='/img/thoratbags logo black.png' className='col-9 logo' />
                </div>
                <div className='col-6 mt-5'>
                    <h2 className='primary-text'>About Us</h2>
                    <p className='my-3'>
                    Finding a clear gap in the market for high-profile bags, the brothers group decided to establish a world-class brand. They travelled through vibrant landscapes across India to find design inspirations and source the finest materials. These travels from 2010 to 2012 inspired the birth of Thorat Bags.
                    </p>
                    <div>
                        <p><i class="fa fa-check primary-text" aria-hidden="true"></i> Free Home Delivery</p>
                        <p><i class="fa fa-check primary-text" aria-hidden="true"></i><span> Easy Returns</span></p>
                        <p><i class="fa fa-check primary-text"></i><span> Quality Assurance</span></p>
                    </div>
                </div>

                <div className='col-6 mt-4 mb-5'>
                    <h2 className='mb-4 primary-text'>Buy Bags Online</h2>
            
                    <h5>Our Collection</h5>
                    <p >Check out our collection of fashion bags to raise your fashion quotient effortlessly. With tons of styles, colours and materials, our collection of fashion bags for men and women is drool worthy. Only question is where to start from! Let us guide you on all that is available here.</p>
                    <h5>Our Range</h5>
                    <p >The company’s brand portfolio includes product lines that range from affordable and mass-market to luxurious, high-end style and cater to every age group, from children and youth to men and women..</p>
                </div>
                <div className='col-6 my-auto logo'>
                    <img src='/img/thoratbags black.png' className='col-9 offset-3'/>
                </div>
            </div>

        </div>
    );
}

export default About;