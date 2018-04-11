import React from 'react'

const Card = props => (
  <div className={"card " + props.className}>
    <img className="cardIcon" src={props.icon} />
    {props.title ? <h2>{props.title}</h2> : ''}
    {props.description ? <p>{props.description}</p> : ''}
    {props.tagline ? <p className="tagline">{props.tagline}</p> : ''}
    {props.descriptionBottom ? <p>{props.descriptionBottom}</p> : ''}
  </div>
)

export default Card