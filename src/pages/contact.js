import React from 'react';

const ContactPage = props => (
  <main>
<form name="contact" netlify-honeypot="bot-field" method="POST" action="thank-you" netlify>
    <p class="visually-hidden"><label><input name="bot-field" /></label>
    </p>
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
