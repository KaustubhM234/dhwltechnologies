import React from 'react';

const ContactUs = () => {
  return (
    // <div className="contact-us-section">
    //   <h2>Contact Us</h2>
    //   <p>
    //     Feel free to reach out to us via email or phone. You can also connect with us on Twitter.
    //   </p>

    //   <div className="contact-info">
    //     <div className="contact-item">
    //       <strong>Email:</strong>
    //       <a href="mailto:your.email@gmail.com">your.email@gmail.com</a>
    //     </div>
    //     <div className="contact-item">
    //       <strong>Phone:</strong>
    //       <span>Your Phone Number</span>
    //     </div>
    //     <div className="contact-item">
    //       <strong>Twitter:</strong>
    //       <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
    //         @YourTwitterHandle
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className='contactMain'>

      <div className='contactForm'>

        <h2 className='contHead'> Contact Form </h2>

        <form className='mainForm' action=''>

          <div className='inputs'>

            <h5 className='fieldName'>
              Name
            </h5>
            <input className='fieldValue' name='name' type='text' placeholder='Your Name' required />

          </div>

          <div className='inputs'>

            <h5 className='fieldName'>
              Email
            </h5>
            <input className='fieldValue' name='Email' type='email' placeholder='Your Email' required />

          </div>

          <div className='inputs'>

            <h5 className='fieldName'>
              Message
            </h5>
            <input className='fieldValue message' name='message' type='textarea' placeholder='Message' required wrap="hard"/>

          </div>

          <input type='submit' className='sendBtn' value='Send'/> 

        </form>

      </div>
      <div className='contactVector'></div>
      
    </div>
  );
};

export default ContactUs;
