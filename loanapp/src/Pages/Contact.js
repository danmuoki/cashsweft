import Header from '../Components/Header';
import Footer from '../Components/Footer';



const Contact = () => {
  return (
   
    <>
    <Header/>
     
     <section className='sectioncont'>
     <div className="contact-info">
      <h2>Contact Information</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+254 0707-433-469</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>info@cashsweft.com</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>Westland, Nairobi, Kenya </p>
        </div>
      </div>
    </div>
   

    
    
    </section>
   
    <Footer/>
  </>
  );
};

export default Contact;