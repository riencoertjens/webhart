import React from 'react'
import Link from 'gatsby-link'

import LogoSvg from '../assets/logo_white.svg'

const Logo = props => (
  <Link to="/home" className="logo">
    <img src={LogoSvg}/>
  </Link>
)

export default Logo
