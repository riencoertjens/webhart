import React from 'react';

const ContactPage = props => (
  <main>
    <form 
      name="contact-form" 
      data-netlify="true"
      netlify-honeypot="bot-field" 
      method="POST"
    >
      <input name="bot-field" className="visually-hidden" />
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="text" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </main>
);

export default ContactPage;
