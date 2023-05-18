import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logo1 from '../../../assets/logo1.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link to="/" className="toy-logo"> <img src={logo1} alt="" /> </Link>
                <h4 className='font-bold text-2xl mb-0 mt-4'>Toy Emporium</h4>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>
                <a className="link link-hover font-semibold">About us</a>
                <a className="link link-hover font-semibold">Contact</a>
                <a className="link link-hover font-semibold">Jobs</a>
                <a className="link link-hover font-semibold">Press kit</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a> <FaLinkedin className='social-icon' /> </a>
                    <a> <FaYoutube className='social-icon' /> </a>
                    <a> <FaFacebook className='social-icon' /> </a>
                </div>
                <h5 className='font-semibold my-6'>Bangladesh, Chittagong</h5>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;