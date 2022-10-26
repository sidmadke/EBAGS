import React from 'react';

const About = () => {
    return (
        <div className='col-10 offset-1'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='/images/about.jpg' className='col-9' />
                </div>
                <div className='col-6 mt-5'>
                    <h2 className='primary-text'>About Us</h2>
                    <p className='my-3'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem sequi beatae voluptate sint nemo nesciunt autem assumenda temporibus voluptatum officiis provident fugiat, omnis vero dolores similique eligendi sit voluptates!
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
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, repudiandae nihil. Repudiandae, tempore laboriosam quidem deserunt repellat hic? Quidem dolor quisquam ut? Impedit eligendi quae commodi cumque deleniti, consectetur, eius, cupiditate rerum amet ducimus eum omnis nobis. Voluptates, at maxime, labore possimus architecto explicabo qui nisi molestiae tempore dolorem fugiat?</p>
                    <h5>COMFORT</h5>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi labore minus, dicta quidem explicabo quasi temporibus vel quod optio consequatur laborum natus eum odit, inventore voluptate blanditiis esse praesentium.</p>
                </div>
                <div className='col-6 mt-4 mb-5'>
                    <img src='/images/customer.jpg' className='col-9 offset-3'/>
                </div>
            </div>

        </div>
    );
}

export default About;