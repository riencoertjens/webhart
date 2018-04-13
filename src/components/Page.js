import React from 'react';

class PageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className:"unmounting"
    };
  }
  componentDidMount() {
    console.log('haaai');
    this.setState({className:"mounted"})
  }
  componentWillUnmount() {
    console.log('baaai');
    this.setState({className:"unmounting"})
  }
}

export default PageClass;



// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);