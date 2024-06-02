import React from 'react';
import './style.css'; // Import the CSS file
import Header from "../Components/Header";
import int from '../Images/integrity1.jpg';
import trns from '../Images/transp1.png';
import excl from '../Images/exelenc.jpg';
import cust from '../Images/customer.jpg';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <div className="about_section1">
        <Header />
        <main>
          {/* About Us Section */}
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>We are a leading provider of loan services dedicated to helping individuals and families achieve their financial goals. Our team of experienced professionals is committed to providing personalized solutions tailored to meet your unique needs.</p>
          </section>

          {/* Mission Statement Section */}
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>Our mission is to empower our clients by offering flexible and affordable loan options, and to make the loan application process as smooth and straightforward as possible. We aim to be the trusted financial partner for our customers, helping them to achieve their dreams and secure their financial futures.</p>
          </section>

          {/* Company History Section */}
          <section className="history-section">
            <h2>Our History</h2>
            <p>Founded in 2024, our company has grown from a small local lender to a nationally recognized financial institution. Over the years, we have helped thousands of customers secure the funding they need for a variety of purposes, including home purchases, refinancing, and personal expenses. Our growth and success are a testament to our unwavering commitment to customer satisfaction and financial integrity.</p>
          </section>

          {/* Our Values Section */}
          <section className="values-section">
            <h2>Our Values</h2>
            <div className='inte_cont'>
              <div>
                <h5>Integrity</h5>
                <p>We operate with honesty in all our dealings.</p>
                <div className='img-1'>
                  <img src={int} alt='Integrity' />
                </div>
              </div>
              <div>
                <h5>Transparency</h5>
                <p>We are transparent with our customers and employees.</p>
                <div className='img-1'>
                  <img src={trns} alt='Transparency' />
                </div>
              </div>
              <div>
                <h5>Excellence</h5>
                <p>We strive for excellence in all our endeavors.</p>
                <div className='img-1'>
                  <img src={excl} alt='Excellence' />
                </div>
              </div>
              <div>
                <h5>Customer Satisfaction</h5>
                <p>Customer satisfaction is our top priority.</p>
                <div className='img-1'>
                  <img src={cust} alt='Customer Satisfaction' />
                </div>
              </div>
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="team-section">
            <h2>Meet the Team</h2>
            <p>Our dedicated team of professionals is here to assist you every step of the way. With years of experience in the financial industry, our team members are well-equipped to provide expert advice and personalized service.</p>
            <div className="team-members">
              <div className="team-member">
                <h5>John Doe</h5>
                <p>CEO & Founder</p>
                <p>John has over 20 years of experience in the financial sector and is passionate about helping clients achieve their financial goals.</p>
              </div>
              <div className="team-member">
                <h5>Jane Smith</h5>
                <p>Chief Financial Officer</p>
                <p>Jane oversees our financial operations, ensuring that we remain financially healthy and capable of serving our clients.</p>
              </div>
              <div className="team-member">
                <h5>Emily Johnson</h5>
                <p>Head of Customer Service</p>
                <p>Emily is dedicated to ensuring that every customer has a positive experience and receives the support they need.</p>
              </div>
              <div className="team-member">
                <h5>Michael Brown</h5>
                <p>Lead Loan Officer</p>
                <p>Michael works directly with clients to help them find the best loan products for their needs.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
