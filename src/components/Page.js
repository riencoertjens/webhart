import React from 'react';

class PageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className:"animationclass"
    };
  }
}

export default PageClass;



// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);