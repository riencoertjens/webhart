import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../sass/style.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo'
import Copyright from '../components/Copyright'



class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(){
    // document.body.className = 'bg-1';
    const bgClassName = document.body.className
    if (bgClassName == '') {
      document.body.className = 'bg-1';
    } else {
      const bgNumber = parseInt(bgClassName.substring('bg-'.length));
      const newBgNumber = bgNumber < 38 ? bgNumber+1 : 0;
      document.body.className = 'bg-'+newBgNumber;
    }
  }

  render(){
    const siteTitle = this.props.data.site.siteMetadata.title
    let location = this.props.location.pathname == '/' ? 'home' : this.props.location.pathname.substr(1)

    const classNames = location + " app_wrapper"

    return(
      <div className={classNames}>
        <a className="bg-changer" href="javascript:;" onClick={() => this.handleClick()} >don't click me</a>
        <Helmet
         title={siteTitle}
        />
        <div className="flexTop">
          <Logo />
        </div>
        <div className="content">
          <Header />
          {this.props.children()}
          <Footer />
          <Copyright />
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allDataJson {
      edges {
        node {
          bgImages
        }
      }
    }
  }
`
