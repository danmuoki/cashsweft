import React from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/ApplicationForm');
    };

    return (
        <div>
            <h1>Welcome to the Loan Application Portal</h1>
            <button onClick={handleButtonClick}>Apply for a Loan</button>
        </div>
    );
};

export default Input;
