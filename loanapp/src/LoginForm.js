// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css'

function LoginForm() {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/logininput/ ', credentials);
      if (response.status === 200) {
        // Navigate to dashboard on successful login
        navigate('/ApplicationForm');
      } else {
        // Handle authentication error
        setErrorMessage(response.data.message || 'Failed to authenticate');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error.message);
      setErrorMessage('Network or server error');
    }
  };

  return (
    
    <div className='login_cont'>
      <section className='login_sect'>
      <h2>Login</h2>
      <form onSubmit={handleLogin} >
        <div className='cont-form'>
        <label>
          Username:
          <input className='logint'
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        </div>
        <br />
        <div className='cont-form'>
        <label>
          Password:
          <input  className='logint'
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        </div>
        <br />
        <button type="submit" className='btn1'>Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      </section>
    </div>
  );
}

export default LoginForm;
