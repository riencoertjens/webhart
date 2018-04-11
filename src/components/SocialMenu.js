import React from 'react'
import Link from 'gatsby-link'

import {
  IoSocialInstagram,
  IoSocialFacebook,
  IoSocialWhatsapp,
  IoChatbubbles
} from "react-icons/lib/io";


const SocialMenu = props => (
  <nav className="social">
    <a target="_blank" href="http://facebook.com/Webhartonline"><IoSocialFacebook /></a>
    <a target="_blank" href="http://instagram.com"><IoSocialInstagram /></a>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=32499461295"><IoSocialWhatsapp /></a>
    <Link to="/contact"><IoChatbubbles /></Link>
  </nav>
)

export default SocialMenu