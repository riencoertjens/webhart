import React from 'react'
import Link from 'gatsby-link'

const CTA = props => (
    <Link className={"cta " + props.className} to={props.to}>{props.label}</Link>
)

export default CTA