import React from 'react';
import '../App.css';

const Contact = () => {
  const sendEmail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email sending logic here with the new SecureToken
    window.Email.send({
      SecureToken: "7ae35071-57a7-4fb2-aa23-e740336b7758",
      To: 'abpatel1249@gmail.com',
      From: "abpatel1249@gmail.com",
      Subject: "New Message from FW PORTFOLIO!",
      Body: `Name: ${name}<br> Email: ${email}<br> Message: ${message}`
    }).then(
      message => alert("Message sent successfully!")
    ).catch(
      error => alert("There was an error sending your message: " + error)
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-moldure">
        <div className="contact-content">
          <h1>Contact</h1>
          <h2>Get in touch with me 👇</h2>
          <form onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <textarea id="message" rows="4" placeholder="Share what's on your mind" required></textarea>
            <button type="submit" id="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
