import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

function App() {
  const [formData, setFormData] = useState({
    full_name: '',
    date_of_birth: '',
    social_security_number: '',
    address: '',
    phone_number: '',
    email: '',
    identification_type: '',
    identification_number: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/loanapplication/', formData)
      .then((response) => {
        console.log(response.data);
        alert('Application submitted successfully');


        setFormData({
            full_name: '',
            date_of_birth: '',
            social_security_number: '',
            address: '',
            phone_number: '',
            email: '',
            identification_type: '',
            identification_number: '',

        });
      })
      .catch((error) => {
        console.error(error);
        alert('Error submitting application');
      });
  };

  return (
    <div className='application_cont'>
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='loan_cont'>
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Social Security Number</label>
          <input
            type="text"
            name="social_security_number"
            value={formData.social_security_number}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Identification Type</label>
          <input
            type="text"
            name="identification_type"
            value={formData.identification_type}
            onChange={handleChange}
          />
        </div>
        <div className='loan_cont'>
          <label>Identification Number</label>
          <input
            type="text"
            name="identification_number"
            value={formData.identification_number}
            onChange={handleChange}
          />
          
        </div>
        <br/>
        <button type="submit" className='btn3'>Submit</button>
      </form>
    </div>
  );
}

export default App;
