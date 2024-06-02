import Contact from "../Pages/Contact";


    import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/apply');
    };
    return ( 
        <>
        
         <footer>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact Us</a>
       
    </nav>


    
    
    

    <br/><br/>

    <p>&copy; 2024 Your Loan Company</p>
</footer>

        </>
     );
}
 
export default Footer;