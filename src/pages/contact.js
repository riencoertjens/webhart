import React from 'react';

const ContactPage = props => (
  <main>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="name" type="text"></input>
      <input name="email" placeholder="email" type="text"></input>
      <input name="message" placeholder="message" type="textarea"></input>
      <button>send</button>
    </form>
  </main>
);

export default ContactPage;
