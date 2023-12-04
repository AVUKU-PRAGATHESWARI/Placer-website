import React from 'react';
import './Home.css'; 
import Header from '../../components/Header/Header';
import Course from '../Courses/Course';
import About from '../About/About';
import Info from '../../components/Info/Info';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header/>  
      <Course/>
      <About/>
      <Info/>
    </>
  );
};

export default Home;