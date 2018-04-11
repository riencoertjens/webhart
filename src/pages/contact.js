import React from 'react';

const ContactPage = props => (
  <main>
    <form name="contact" netlify-honeypot="bot-field" method="POST" netlify>
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
        <button>Send</button>
      </p>
    </form>
  </main>
);

export default ContactPage;
