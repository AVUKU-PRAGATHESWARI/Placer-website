import React from 'react';
import {
    FaLinkedin,
    FaTwitterSquare,
    FaInstagramSquare,
  } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className='for-footer'>
        <h1 className='for-footer-heading'>Placer</h1>
        <div className='for-footer-descrciption'>
            Our Main Motto is discover Opportunities
            with Placer. Where students thrive and Alumni Guide
        </div>
        <div className="social-media">
  <ul className="social-media-desktop">
    <li>
      <a href="#" target="_blank" className="social-link">
        <FaTwitterSquare className="social-icon twitter" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/ignite_svuce/?hl=en" target="_blank" className="social-link">
        <FaInstagramSquare className="social-icon instagram" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/ignite-svuce/" target="_blank" className="social-link">
        <FaLinkedin className="social-icon linkedin"/>
      </a>
    </li>
  </ul>
</div>
        <h2 className='for-footer-quotation'>Elevate your future to New Heights</h2>
    </div>
  )
}

export default Footer