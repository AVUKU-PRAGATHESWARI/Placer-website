import './App.css';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Course from './pages/Courses/Course';
import HomePage from './pages/Homepage/Homepage';

function App() {

  return (
    <>
      <HomePage/>  
      <Course/>   
      <About/>
      <Info/>
      <Footer/>
      
    </>
  );
  
}

export default App;
