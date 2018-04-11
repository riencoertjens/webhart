import React from 'react'
import Link from 'gatsby-link'

const MainMenu = props => (
  <nav className="main">
    <Link activeClassName="activeMenuLink" to="/home">what</Link>
    <Link activeClassName="activeMenuLink" to="/skills">how</Link>
    <Link activeClassName="activeMenuLink" to="/about">who</Link>
    <Link activeClassName="activeMenuLink" to="/contact">contact</Link>
  </nav>
)

export default MainMenu