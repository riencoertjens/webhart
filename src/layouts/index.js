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

  handleClick(element, bgImages){
    const bgImage = parseInt(element.target.getAttribute('data-bg'));

    let NewBgImage = bgImage == (bgImages.length - 1) ? 0 : bgImage+1

    element.target.setAttribute('data-bg', NewBgImage);

    document.body.style.backgroundImage = "url('"+bgImages[NewBgImage]+"')";
  }

  render(){
    const siteTitle = this.props.data.site.siteMetadata.title
    let location = this.props.location.pathname == '/' ? 'home' : this.props.location.pathname.substr(1)
    let bgImages = this.props.data.allDataJson.edges[0].node.bgImages;
    let bgNumber = Math.floor(Math.random()*(bgImages.length - 1)) + 1;

    const classNames = location + " app_wrapper"

    return(
      <div className={classNames}>
        <a data-bg={bgNumber} className="bg-changer" href="javascript:;" onClick={(e) => this.handleClick(e, bgImages)} >don't click me</a>
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
