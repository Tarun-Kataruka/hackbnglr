import React from 'react';
import './contact.css';



const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any questions or concerns</p>
      <form>
        <label>Name:</label>
        <input type="text" />
        
        <label>Email:</label>
        <input type="email" />
        
        <label>Message:</label>
        <textarea />
        
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactUs;