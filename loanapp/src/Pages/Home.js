// Home.js
import React from 'react';
import './style.css'; // Import the CSS file
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import intrest from '../Images/intrest rate.jpg';
 import interest from '../Images/loanimage 1.jpg';
import imgb from '../Images/images.jpg';
import img1 from '../Images/loan2.jpg';
import img2 from '../Images/loan3.jpg';
import online from '../Images/online.jpg';
import approve from '../Images/appr.jpg';
import receve from '../Images/get fund.jpg'
const Home = () => {
  return (
    <>

       <Header/>
      <main>
        
        <section className="hero">
          <h1>Get the Funds You Need, When You Need Them</h1>
          <p>Whether you're buying a new home or refinancing your current mortgage, we're here to help you every step of the way.</p>
          
        </section>

        
        <section className="introduction">
       

          <h2>Welcome to Our Loan Services</h2>
          <p>We offer competitive rates and flexible terms to meet your financial needs. Let us help you achieve your dreams with our reliable loan products.</p>
        </section>

      
        <section className="loan-products">
          <h2>Our Loan Products</h2>
          <div className='cont_loanproducts'>
          <div className="product">
            <h3>Home Loans</h3>
            <p>Low interest rates and flexible terms <br/> for your new home.</p>
            <img src={img2} alt='imag1' />
          </div>
          <div className="product">
            <h3>Refinancing</h3>
            <p>Refinance your existing mortgage for <br/> better rates.</p>
            <img src={img1} alt='imag1' />
          </div>
          <div className="product">
            <h3>Personal Loans</h3>
            <p>Quick and easy personal loans for <br/>various needs.</p>
            <img src={intrest} alt='intrest rate'/>
          </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h4>1. Apply Online</h4>
              <p>Fill out our simple online application.</p>
              <img src={online} alt='imag3' className='imgh'/>
            </div>
            <div className="step">
              <h4>2. Get Approved</h4>
              <p>Receive approval in minutes.</p>
              <img src={approve} alt='approval' className='imgh'/>
            </div>
            <div className="step">
              <h4>3. Receive Funds</h4>
              <p>Get your money in as little as 24 hours.</p>
              <img src={receve} alt='funds' />
            </div>
          </div>
        </section>
       
        <section className="faqs">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <h4>What is the interest rate for home loans?</h4>
            <p>Our interest rates vary depending on the loan product and<br/> your credit profile. Please contact us for more details.</p>
          </div>
          <br/><br/>
          <div className="faq">
            <h4>How long does it take to get approved?</h4>
            <p>Approval times can vary, but most customers receive a <br/>decision within minutes.</p>
          </div>
          
        </section>
      </main>
      
   
     
    <Footer/> 
    </>
  );
};

export default Home;