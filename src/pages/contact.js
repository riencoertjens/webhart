import React from 'react';

import Page from '../components/Page';

import {
  IoIosHomeOutline,
  IoIosEmailOutline,
  IoAt,
  IoIosTelephoneOutline
} from "react-icons/lib/io";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid:{
        name: false,
        email: false,
        message: false
      }
    }
  }

  validateMail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

  validate(element){

    let isValid = false;
    let validState = this.state.valid;

    if (element.target.value.length > 0){
      if ((element.target.name === 'email' && !this.validateMail(element.target.value))) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
    
    if (isValid) {
      element.target.className = 'valid';
      validState[element.target.name] = true;
    } else {
      element.target.className = 'invalid';
      validState[element.target.name] = false;
    }
    this.setState({valid:validState})
    if (this.state.valid.name && this.state.valid.email && this.state.valid.message) {
      console.log('yaaaay');
      document.getElementById('form-submit').className = 'valid'
      document.getElementById('form-submit').disabled = false
    } else {
      console.log('naaaay');
      document.getElementById('form-submit').className = 'invalid'
      document.getElementById('form-submit').disabled = true
    }
  }

  render(){
    return(
      <main>
        <form
          name="contact-form" 
          data-netlify="true"
          netlify-honeypot="bot-field" 
          method="POST"
        >
          <input name="bot-field" className="visually-hidden" />
          <label className="name-field">
            Name<input onChange={(e) => this.validate(e)} type="text" name="name" />
          </label>
          <label className="mail-field">
            Email<input onChange={(e) => this.validate(e)} type="text" name="email" />
          </label>
          <label className="message-field">
            Message<textarea onChange={(e) => this.validate(e)} name="message"></textarea>
          </label>
          <button className="invalid" type="submit" id="form-submit" disabled>Send</button>
        </form>
        <div className="contact-info">
          <p className="address"><IoIosHomeOutline className="icon" />
            currently in Girona:<br/>
            Rien Coertjens - webhart<br />
            CoEspai<br />
            C/Anselm Clavé, 32, 3r<br />
            17001, Girona, Spain
          </p>
          <p className="email"><IoIosEmailOutline className="icon" />rien@web-hart.com</p>
          <p className="phone"><IoIosTelephoneOutline className="icon" />(+34) 722 25 60 67<br/>please use WhatsApp if possible</p>
        </div>
      </main>
    )
  }
}

export default ContactPage;



// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);