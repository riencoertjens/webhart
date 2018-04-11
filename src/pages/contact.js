/* global graphql */

import React from 'react';

const ContactPage = props => (
  <main>
    <form
      name="contact"
      method="post"
      netlify
    >
      <input name="name" placeholder="name" type="text"></input>
      <input name="email" placeholder="email" type="text"></input>
      <input name="message" placeholder="message" type="textarea"></input>
      <button>send</button>
    </form>
  </main>
);

export default ContactPage;
