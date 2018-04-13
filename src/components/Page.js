import React from 'react';

class PageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className:"unmounting"
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({className:"mounted"});
      }.bind(this),
      400
    );
  }
  componentWillUnmount() {
    this.setState({className:"unmounting"})
  }
  componentWillMount() {
    this.setState({className:"unmounting"})
  }
}

export default PageClass;



// emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);