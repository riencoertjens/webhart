import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Page from '../components/Page';

import Card from '../components/Card';
import CTA from '../components/CTA';

import bolt from "../assets/icons/bolt.svg";
import code from "../assets/icons/code.svg";
import cut from "../assets/icons/cut.svg";
import heart from "../assets/icons/heart.svg";
import phone from "../assets/icons/phone.svg";
import search from "../assets/icons/search.svg";
import analytics from "../assets/icons/analytics.svg";



class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <main>
        <Helmet title={"what I do - "+this.props.data.site.siteMetadata.title}>
        </Helmet>
        <Card
          icon={cut}
          title="first impressions last the longest"
          className="artisan"
          description="By starting from a blank canvas and selecting the right patterns and materials we create killer websites, made to impress and engage."
          tagline="No better way to impress than with a tailor made suit!"
          descriptionBottom="Our handmade websites are: "
        />
        <Card
          icon={bolt}
          title="fast"
          className="fast"
          description="Because you have two seconds to convince half your visitors!"
          tagline="in the blink of an eye"
        />
        <Card
          icon={phone}
          title="Responsive"
          className="responsive"
          description="Because the other half will be mobile users"
          tagline="responsive development goes beyond good looks"
        />
        <Card
          icon={search}
          title="SEO(ptimized)"
          className="seo"
          description="Because you can't make an impression if people can't see you"
          tagline="search engine optimized"
        />
        <Card
          icon={heart}
          title="and loved by all!"
          tagline="make the internet great again"
          className="love"
        />
        <Card 
          icon={analytics}
          description="one more thing..."
          tagline="create - launch - iterate"
          descriptionBottom="Online 'the only constant is change'. A website isn't finished after a launch. After letting the world loose on a website, we see how it is used and where it can be improved to create a better experience"
          className="analytics"
        />
        <div className="cta_container">
          <CTA to="contact" label="get in touch" className="solid" />
          <CTA to="skills" label="learn more" />
        </div>
      </main>
    )
  }
}

export default HomePage;

export const homePageQuery = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
