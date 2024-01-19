import React from 'react';

export default function Contact() {
  return (
    <section className="contactus">
      <h2>Contact Us!</h2>
  
      <section className="contact-form">
        <form id="vvForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
  
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
  
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="5"></textarea>
  
          <button type="submit">Send</button>
        </form>
      </section>
  
 
    </section>
  );
}
