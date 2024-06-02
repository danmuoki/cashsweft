import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import homel from '../Images/home loan.jpg';
import dwnl from '../Images/download.jpg';
import buiss from '../Images/bussiness.png';
import './style.css';

const Service = () => {
    return (
        <>
            <Header />
            <div className="services">
                <h1>Our Services</h1>
                
                {/* Personal Loans Section */}
                <div className="service">
                    <h2>Personal Loans</h2>
                    <div className="cont_main">
                    <img src={dwnl} alt='Personal Loans' />
                    <p>Flexible personal loan options tailored to your needs. Whether you need funds for medical expenses, home renovation, or a special occasion, our personal loans can help you achieve your financial goals.</p>
                    </div>
                    <div className="cont_services">
                      <div>
                    <h3>Features:</h3>
                    <ul>
                        <li>Competitive interest rates</li>
                        <li>Flexible repayment terms</li>
                        <li>Quick and easy application process</li>
                        <li>No hidden fees</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Fast access to funds</li>
                        <li>Improved credit score with timely <br/>repayments</li>
                        <li>Use the loan for any purpose</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Eligibility Criteria:</h3>
                    <ul>
                        <li>Minimum age: 21 years</li>
                        <li>Proof of stable income</li>
                        <li>Good credit history</li>
                    </ul>
                    </div>
                    <div>
                    <h3>How to Apply:</h3>
                    <ul>
                        <li>Fill out the online application form</li>
                        <li>Submit necessary documents</li>
                        <li>Receive approval and get funds within <br/>24hours</li>
                    </ul>
                    </div>
                  </div>
                </div>

                {/* Home Loans Section */}
                <div className="service">
                    <h2>Home Loans</h2>
                    <div className="cont_main">
                    <img src={homel} alt='Home Loans' />
                    <p>Get the funding you need to buy your dream home. Our home loans offer attractive interest rates and flexible terms to help you secure your ideal property.</p>
                    </div>
                   <div className="cont_services">
                    <div>
                    <h3>Features:</h3>
                    <ul>
                        <li>Low interest rates</li>
                        <li>Long repayment tenure up to 30 years</li>
                        <li>Option to balance transfer</li>
                        <li>Minimal documentation</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Tax benefits on principal and <br/>interest repayment</li>
                        <li>Ownership of your dream home</li>
                        <li>Customizable EMI options</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Eligibility Criteria:</h3>
                    <ul>
                        <li>Minimum age: 21 years</li>
                        <li>Stable income source</li>
                        <li>Good credit score</li>
                        <li>Proof of property</li>
                    </ul>
                    </div>
                    <div>
                    <h3>How to Apply:</h3>
                    <ul>
                        <li>Fill out the online application form</li>
                        <li>Submit necessary documents</li>
                        <li>Receive loan approval and disbursement</li>
                    </ul>
                    </div>
                    </div>
                </div>

               
                <div className="service">
                    <h2>Business Loans</h2>
                    <div className="cont_main">
                    <img src={buiss} alt='Business Loans' />
                    <p>Grow your business with our range of business loan solutions. We offer customized financing options to help you expand operations, purchase equipment, or manage cash flow.</p>
                    </div>
                   <div className="cont_services">
                    <div>
                    <h3>Features:</h3>
                    <ul>
                        <li>High loan amount</li>
                        <li>Flexible repayment options</li>
                        <li>Quick processing and disbursement</li>
                        <li>Collateral-free options available</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Boost your business growth</li>
                        <li>Manage operational costs effectively</li>
                        <li>Enhance business productivity</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Eligibility Criteria:</h3>
                    <ul>
                        <li>Minimum business vintage: 2 years</li>
                        <li>Profitable business operations</li>
                        <li>Good credit score</li>
                    </ul>
                    </div>
                    <div>
                    <h3>How to Apply:</h3>

                    <ul>
                        <li>Complete the online application form</li>
                        <li>Provide business and financial documents</li>
                        <li>Receive loan approval and funds</li>
                    </ul>
                    </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Service;
