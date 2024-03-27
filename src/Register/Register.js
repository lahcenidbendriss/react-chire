import React, { useState } from 'react';
import Navbarcomp from '../compenet/NavbarComp';
import './Register.css';
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have an API endpoint to handle registration data
            const response = await fetch('http://localhost:3500/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, phoneNumber, password }),
            });

            // Check if the request was successful
            if (response.ok) {
                // Handle success
                alert('Registration successful!');
            } else {
                // Handle error response
                const errorData = await response.json();
                setError(errorData.message); // Assuming your API returns error message
            }
        } catch (error) {
            // Handle network errors or other issues
            console.error('Error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Navbarcomp />
            <div className='register-container'>
                <div className='register-form'>
                    <h1 className='text-center mb-4'>Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                id='username'
                                placeholder='Enter your username'
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                placeholder='Enter your email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input
                                type='text'
                                id='phoneNumber'
                                placeholder='Enter your phone number'
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Enter your password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control'
                            />
                        </div>
                        {error && <div className='text-danger mb-3'>{error}</div>}
                        <button type='submit' className='btn btn-primary btn-block'>Register</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
