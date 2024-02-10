import React, { useState } from 'react';
import './Contact.css';

import NavbarComp from './NavbarComp';



const Contact = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for username and password
    if (username === 'demo' && password === '123456') {
      alert("Successful login")
      // Successful login
      console.log('Login successful!');
      setError(' ');
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };
    return(
        <>
            
            <NavbarComp/>
            <div className='wrapper'>
            <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='Titel-h2'>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username" className='username-login'>Username:</label>
          <input
          className='input-login'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='username-login'>Password:</label>
          <input
          className='input-login'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn3'>Login</button>
        <div className='register-botn'><p>Dont have an account? <a href='/#²' className='register-link'>Register</a></p></div>
        
      </form>
    </div>

            </div>
            
            
            
 

        </>
    );
};
export default Contact;