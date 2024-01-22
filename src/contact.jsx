import React, { useState } from 'react';
import validator from 'validator';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(formData.email)) {
      setIsValid(false);
      alert('Please enter a valid email');
    } else {
      setIsValid(true);
      // Your form submission logic goes here
    }
  };

  return (
    <section className="contactus">
      <h2>Contact Us!</h2>
  
      <section className="contact-form">
        <form id="vvForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
  
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
  
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="5"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
  
          <button type="submit">Send</button>
        </form>
      </section>
  
      {!isValid && <p>Please fix the form errors before submitting.</p>}
    </section>
  );
}
