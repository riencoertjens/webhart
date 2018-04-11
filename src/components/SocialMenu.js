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
    <a target="_blank" href="https://www.facebook.com/webhartdevelopment/"><IoSocialFacebook /></a>
    <a target="_blank" href="https://www.instagram.com/web_hart/"><IoSocialInstagram /></a>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=32499461295"><IoSocialWhatsapp /></a>
    <Link to="/contact"><IoChatbubbles /></Link>
  </nav>
)

export default SocialMenu