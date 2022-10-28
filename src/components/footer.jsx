import React from 'react'

const Footer = () => {
    return (
        <div className='footer py-4 mt-auto primary-color'>
            <div className='d-flex justify-content-center pb-3'>
                <a href="https://pages.razorpay.com/thoratbag" target="_blank"className="px-3 text-black"><i className="fa-brands fa-square-facebook"
                /></a>
                <a href="https://pages.razorpay.com/thoratbag" target="_blank"className="px-3 text-black"><i className="fa-brands fa-twitter"
                /></a>
                <a href="https://youtu.be/SzYXVlLxJow?t=6" target="_blank"className="px-3 text-black"><i className="fa-brands fa-youtube"
                /></a>
                <a href="https://www.instagram.com/thoratbags/" target="_blank"className="px-3 text-black"><i className="fa-brands fa-instagram"
                /></a>
            </div>
            <div className="text-center">
                <p className='text-black m-0'>&copy; 2022. Thorat Bags. My Team Members All Right Reserved</p>
            
            </div>
        </div>
    );
}

export default Footer;