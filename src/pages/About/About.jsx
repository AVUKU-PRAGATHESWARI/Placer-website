import React from 'react'
import './About.css'
import cut from '../../assets/cut.jpg'
import group from '../../assets/Group 30.png'

const About = () => {
  
  return (

    <div className='for-about-section'>
      <div className='for-image-section'>
        <img src={group} height={300}/>
      </div>
      <div className='for-about-rightside'>
        <h1>We are here to <span className='for-data'>help the students</span></h1>
        <p className="for-para-about">

          Step into the world of industrial technologies with Placer.
          We are here to support and empower students on their journey towards
          mastering the latest industrial technologies. Our platform provides 
          comprehensive training and expert guidance to help you to build a strong 
          foundation for yourfuture career.
      
        </p>
        <button className='for-button'>Know more</button>
      </div>

    </div>
  //   <div>
  //     <h4>
  //       <span>We are here to </span>
  //       <span>help the student</span>
  //     </h4>
   
  //   <div className="align">
  //     <h7 class="t2">Step into the world of industrial technologies with Placer.
  // <br/>We are here to support and empower students on their journey towards
  // <br/>mastering the latest industrial technologies. Our platform provides 
  // comprehensive <br/>training and expert guidance to help you to build a strong 
  // foundation for your <br/>future career. trust your partner in success as you unlock new opportunities and 
  // <br/>gain the skills needed to excel in the dynamic industrial landscape.</h7><br/><br/>
      
      
  //   </div>
  // </div>

   )
 }
 
 export default About;
