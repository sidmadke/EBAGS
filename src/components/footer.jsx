import React from 'react'

const Footer = () => {
    return (
        <div className='footer py-4 mt-5'>
            <div className='d-flex justify-content-center pb-3'>
                <a href="#" className="px-3 footer-icon"><i className="fa-brands fa-square-facebook"
                /></a>
                <a href="#" className="px-3 footer-icon"><i className="fa-brands fa-twitter"
                /></a>
                <a href="#" className="px-3 footer-icon"><i className="fa-brands fa-youtube"
                /></a>
                <a href="#" className="px-3 footer-icon"><i className="fa-brands fa-instagram"
                /></a>
            </div>
            <div className="text-center">
                <p className='footer-text m-0'>&copy; 2021. Foodies. All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;