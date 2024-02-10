// Register.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../redux_user/userActions';

const Register = ({ postUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      phoneNumber,
      password,
    };

    // Dispatch the postUser action
    postUser(newUser);

    // Optionally, you can reset the form fields after successful submission
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form inputs */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { postUser })(Register);



