import React from 'react';
import aboutCover from '../assets/about.png'



const About = () => {
    return (
        <div className="about container" >
            <div className="about-img">
                <img src={aboutCover} alt="" />
            </div>

            <div className="about-text">
                <h2>About Us</h2>
                <p>To discover new Furniture design ideas was never so handy, browse over 500 products from our top categories for ultimate  online furniture ashopping experience. to choose  furniture for a living space as tricky as doing the interiors. Either you are redoing or changing the place,all you need to know is cheap online furniture shops from where you can buy quality products.</p>
                <div className="features">
                    <i class='bx bxs-checkbox-checked'><span>Free Home Delivery</span></i>
                    <i class='bx bxs-checkbox-checked'><span>Easy Returns</span></i>
                    <i class='bx bxs-checkbox-checked'><span>Quality Assurance</span></i>
                </div>
            </div>
            <div className="about-info">
                <h2 className="about-h2">OUR BRAND PHILOSOPHY</h2>
                <h1 className="about-h1">As a brand we believe in the following design philosophy and principles:</h1>
                <h3 className="about-h3">CUSTOMER EXPERIENCE</h3>
                <p >Everything we create is designed with our customer in mind, and we’re committed to an incredible service experience that leaves our customer smiling each time they visit us online or speak to one of our cheerful customer service associate.</p>
                <h4 className="about-h4">COMFORT</h4>
                <p >Whether it is comfort of shopping with us or the comfort provided by our products like sofas and chairs using high quality material like foams, fibers and down feathers, we have taken care of all your comfort needs in our products</p>
            </div>
        </div>
    );
}

export default About;