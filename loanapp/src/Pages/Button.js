import React from 'react';
import { useNavigate } from 'react-router-dom';


const Button = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/si');
      
    };

    return (
        <>
      
        <div className='button_1'>
           
            <button onClick={handleButtonClick}>Log In</button>

        </div>
       
       

    
        </>
    );
};

export default Button;
