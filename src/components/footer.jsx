import React from 'react'

const Footer = () => {
    return (
        <div className='footer py-4'>
            <div className='d-flex justify-content-center pb-3'>
                <a href="#" class="px-3 footer-icon"><i class="fa-brands fa-square-facebook"
                /></a>
                <a href="#" class="px-3 footer-icon"><i class="fa-brands fa-twitter"
                /></a>
                <a href="#" class="px-3 footer-icon"><i class="fa-brands fa-youtube"
                /></a>
                <a href="#" class="px-3 footer-icon"><i class="fa-brands fa-instagram"
                /></a>
            </div>
            <div class="text-center">
                <p className='footer-text m-0'>&copy; 2021. Foodies. All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;