import React from 'react';
import './Course.css';
import Webdevelopment from '../../assets/webimage.jpg';
import UiUx from '../../assets/uiux.png';
import MachineLearing from '../../assets/machine.jpg';
import DataScience from '../../assets/data science.jpg'

const Course = () => {
  return (
    <div className='for-course-whole'>
       <div className="courses-container">
      <div className="horizontal-line-container">
        <hr className="horizontal-line" />
        <li id="para"><b >COURSES</b></li> <li id="para1"><b>WE OFFER</b></li>
        <hr className="horizontal-line" />
      </div>
      {/* Your other course cards or content */}
    </div>
    <div><p className='paraintro'>We Help Students to learn the Technologies of industrial level</p></div>
    <div className="card-container">
      <div className="card">
        <img src={Webdevelopment} alt="Card 1" />
        <div className="card-content">
          <h2 className='for-h2'>Web Development</h2>
          <p className='for-para'>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).</p><br/><br/>
          <button className='btn'>Learn More</button><br/>
        </div><br/>
      </div>

      <div className="card">
        <img src={UiUx} alt="Card 2" />
        <div className="card-content">
          <h2 className='for-h2'>UI/UX Designing</h2>
          <p className='for-para'>UX design involves managing the user journey as they interact with a product or service, while Ul design focuses.</p><br/><br/>
          <button className='btn'>Learn More</button><br/>
        </div>
      </div>

      <div className="card">
        <img src={MachineLearing} alt="Card 3" />
        <div className="card-content">
          <h2 className='for-h2'>Machine Learning</h2>
          <p className='for-para'>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn.</p><br/><br/>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="card">
        <img src={DataScience} alt="Card 4" />
        <div className="card-content">
        <h2 className='for-h2'>Data Science</h2>
         <p className='for-para'>Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter.</p><br/><br/>
          <button className='btn'>Learn More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Course;
