import React from 'react';
import { useNavigate } from 'react-router-dom';


const Button2 = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        
        navigate('/Signup');
    };

    return (
        <>
      
        
       
        <div className='button_1'>
               <button onClick={handleButtonClick}>Sign Up</button>
        </div>

    
        </>
    );
};

export default Button2;
