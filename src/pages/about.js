import React from 'react';
import Link from 'gatsby-link';

import CTA from '../components/CTA';

import ProfileImage from '../assets/ProfileImg.jpg';

import {
  IoSocialInstagram,
  IoSocialFacebook,
  IoSocialLinkedin
} from "react-icons/lib/io";

const AboutPage = props => (
  <main>
    <img src={ProfileImage} width="100%"/>
    <p className="about-me">
      Hi, my name is Rien <i>(pronounced ‘reen’ in english)</i><br/>
      Born in 1990 in Antwerp, Belgium. Currently living in Girona, Spain.<br/>
      Apart from building websites I also work as a bike mechanic.<br/>
      When I'm not working, I'm probably riding my bike or learning something new
    </p>
    <hr/>
    <p className="about-totem">When I went to the scouts, everyone was given a totem - an animal based on their personality. Mine is “Trustworthy Hart” which as you can guess I’m quite proud of. The description goes as follows:<br />
    <span>“All the movements of the Hart are graceful, proud and dignified. The Hart is careful but when it feels safe, it gives its confidence. It has excellent developed senses. In the mating season, the Hart often becomes irritated and angry for the slightest trifle. The Hart is sensitive and social, but mutually combative. The Hart is quick, vigilant and inseparable from their fawns.”</span>
    </p>
    <div className="personalSocial">
      <a target="_blank" href="https://www.facebook.com/rien.coertjens">
        <IoSocialFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/rien_coertjens/">
        <IoSocialInstagram />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/rien-coertjens/">
        <IoSocialLinkedin />
      </a>
    </div>
    <div className="cta_container">
      <CTA to="contact" label="let's talk" />
    </div>
  </main>
);

export default AboutPage;
