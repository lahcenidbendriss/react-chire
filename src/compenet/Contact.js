import React, { useState } from 'react';
import './Contact.css';
import NavbarComp from './NavbarComp';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch the user data from db.json
      const response = await fetch('/data/db.json');
      const data = await response.json();

      // Find user by username
      const user = data.products.find(user => user.username === username);

      if (user) {
        // Check if password matches
        if (user.password === password) {
          // Login successful
          console.log('Login successful!');
        } else {
          setError('Incorrect password. Please try again.');
        }
      } else {
        setError('User not found.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <NavbarComp />
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
            <div className='register-botn'><p>Don't have an account? <a href='/register' className='register-link'>Register</a></p></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
