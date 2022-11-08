import React from 'react';
import logo from '../../../assets/delivery-service-logo-template-vector-20477137.jpg';

const Footer = () => {
    return (
        <footer className="footer p-5 bg-black text-white">
            <div className='mx-20'>
                {/* <img className='w-24' src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p> */}
            </div>

            <div>
                <p>Copyright@2022 || Delivery Services</p>
            </div>
            <div >
                {/* <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a> */}
            </div>
        </footer>
    );
};

export default Footer;