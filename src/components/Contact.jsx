import React from 'react';
import '../App.css';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
   const sendEmail = ()=>{
    toast.success('🦄 successfully send data', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    }
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};

export default Contact;
