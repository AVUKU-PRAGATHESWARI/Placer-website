import React from 'react';
import './Home.css'; 
import group1 from '../../assets/group1.jpg';
import group2 from '../../assets/group2.jpg';
import group3 from '../../assets/group3.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to Your Website</h1>
        <p>This is a description of your website.</p>
        <button>Login</button>
      </div>

      <div className="image-slider">
        <div className="slider-image blur rotate-image">
            <img src={group1} height={100}/> 
        </div>
        <div className="slider-image highlight rotate-image">
            <img src={group2} height={100}/> 
        </div>
        <div className="slider-image blur rotate-image">
            <img src={group3} height={100}/> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;