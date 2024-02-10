import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../imageys/logoImage.png';

const Navbarcomp = ({scrollToBottom}) => {
  return (
    <>
<nav>
  <div>
    <a href="/"><img src={logoImage} alt="logo" height="60" /></a>
    <div id="navbarNav">
      <ul>
        <Link to="/"><li><button className='boton'>Home</button></li></Link>
        <Link to="/product"><li><button className='boton' >Product</button></li></Link>
        <li><button className='boton'  onClick={scrollToBottom}>Contact us</button></li>
        
      </ul>
    </div>
    <div >
      
      
      <Link to="/register"  ><button className='btnlogin' >Sign Up</button></Link>
      <Link to="/contact"  ><button className='btnlogin' >Login</button></Link>
      
      
    </div>
  </div>
</nav>
    
    
    
    
    
    </>
   
  );
};

export default Navbarcomp;