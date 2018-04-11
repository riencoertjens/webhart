import React from 'react';
import Card from '../components/Card';
import CTA from '../components/CTA';

import code from "../assets/icons/code.svg";
import network from "../assets/icons/network.svg";
import analytics from "../assets/icons/analytics.svg";
import communication from "../assets/icons/communication.svg";



import babel from "../assets/icons/technologies/babel.svg";
import css from "../assets/icons/technologies/css.svg";
import gatsby from "../assets/icons/technologies/gatsby.svg";
import git from "../assets/icons/technologies/git.svg";
import github from "../assets/icons/technologies/github.svg";
import html from "../assets/icons/technologies/html.svg";
import javascript from "../assets/icons/technologies/javascript.svg";
import laravel from "../assets/icons/technologies/laravel.svg";
import mysql from "../assets/icons/technologies/mysql.svg";
import npm from "../assets/icons/technologies/npm.svg";
import php from "../assets/icons/technologies/php.svg";
import react from "../assets/icons/technologies/react.svg";
import sass from "../assets/icons/technologies/sass.svg";
import sketch from "../assets/icons/technologies/sketch.svg";
import webpack from "../assets/icons/technologies/webpack.svg";

import {
  IoSocialHtml5Outline,
  IoSocialCss3Outline,
  IoSocialJavascript
} from "react-icons/lib/io";

import {
  FaDiamond
} from "react-icons/lib/fa"

const SkillsPage = props => (
  <main>
    <Card 
      icon={code}
      title="coding artisan"
      tagline="An artisan is a craftsman who makes things by hand."
      className="artisan"
    />
    <Card 
      icon={network}
      title="network"
      tagline="community over competition"
      descriptionBottom="I can't do everything related to building websites. I focus on development and surround myself with people who are experts in their discipline to help create an online (and offline) identity for you. Are you looking for a developer? Get in touch!"
      className="network"
    />
    <Card 
      icon={communication}
      title="communication"
      tagline="let's use emoticons"
      descriptionBottom="Regular interactions and showing progress makes sure problems can be solved and changes can be made before it is too late. Communication with everyone involved (client, developer, designer, ...) should be a direct. No degrees of separation."
      className="communication"
    />
    <div className="tools">
      <h3>These are some technologies and tools I like and use</h3>
      <a href="https://www.google.com/search?q=html" target="_blank"><img src={html} /></a>
      <a href="https://www.google.com/search?q=css" target="_blank"><img src={css} /></a>
      <a href="https://www.google.com/search?q=javascript" target="_blank"><img src={javascript} /></a>
      <a href="https://reactjs.org/" target="_blank"><img src={react} /></a>
      <a href="https://www.gatsbyjs.org/" target="_blank"><img src={gatsby} /></a>
      <a href="https://sass-lang.com/" target="_blank"><img src={sass} /></a>
      <a href="https://webpack.js.org/" target="_blank"><img src={webpack} /></a>
      <a href="https://babeljs.io/" target="_blank"><img src={babel} /></a>
      <a href="https://www.sketchapp.com/" target="_blank"><img src={sketch} /></a>
      <a href="https://git-scm.com/" target="_blank"><img src={git} /></a>
      <a href="https://github.com/" target="_blank"><img src={github} /></a>
      <a href="https://www.npmjs.com/" target="_blank"><img src={npm} /></a>
    </div>
    <div className="cta_container">
      <CTA to="contact" label="get in touch" className="solid" />
      <CTA to="about" label="more about me" />
    </div>

  </main>
);

export default SkillsPage;
