// SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/logininput/', credentials);
      if (response.status === 200) {
        // Navigate to dashboard on successful signup
        navigate('/dashboard');
      } else {
        // Handle signup error
        setErrorMessage(response.data.message || 'Failed to sign up');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error.message);
      setErrorMessage('Network or server error');
    }
  };

  return (
    <div>
      <section className='sighn_section'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className='btn2'>Sign Up</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}

      </section>
    </div>
  );
}

export default Signup;
