import React from 'react';
import './Header.css'; 
import group1 from '../../assets/group1.jpg';
import group2 from '../../assets/group2.jpg';
import group3 from '../../assets/group3.jpg';
import Navbar from '../../components/Navbar/Navbar';

const Header = () => {
  return (
    <div className='for-homepage-body'>
    
    <div className="homepage">
      <div className="content">
        <p className='for-content-top-head'>Discover</p>
        <h1 className='for-home-data-heading-over'>
          Endless <span className='for-color-head'>Opportunities</span> with <span className='for-color-head'>Placer</span>
        </h1>
        <p className='for-home-data-below'>Where Students Thrive and Alumni Guide</p>
        <button className='for-home-button'>Login</button>
      </div>

      <div className="image-slider">
        <div className="slider-image blur rotate-image">
            <img src={group1} height={100} className='for-image'/> 
        </div>
        <div className="slider-image highlight rotate-image">
            <img src={group2} height={100} className='for-image'/> 
        </div>
        <div className="slider-image blur rotate-image">
            <img src={group3} height={100} className='for-image'/> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;