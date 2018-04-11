import React from 'react'

const Skill = props => (
  <div className={"card " + props.className}>
    <span className="skillIcon">{props.icon}</span>
    <h3>{props.skill}</h3>
  </div>
)

export default Skill