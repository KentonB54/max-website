import React from 'react';
import '../css/Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <motion.div className='contact--page'
      initial={{opacity: 0, transition: { duration: 0.5}}}
      animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5}}}
      exit={{opacity: 0, transition: { duration: 0.5 }}}
    >
    <div className='contact--container'>
      <form action="https://formspree.io/your-email@example.com" method="POST">
        <h1>Contact Me</h1>

        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="_replyto" required/>
        </div>

        <div>
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required/>
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className='send--button'>Send Email</button>

      </form>
      
    </div>
    </motion.div>
  );
};

export default Contact;