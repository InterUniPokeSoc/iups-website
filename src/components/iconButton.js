import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as iconButtonStyles from './iconButton.module.scss';
import './styles/font-awesome.css';

function IconButton(props) {

  return (
    <a className={iconButtonStyles.iconButton + " " +  props.className} href={props.link}>
      <i className={props.icons + " " + iconButtonStyles.icon}></i>
      {props.text}
    </a>
  );
}

export default IconButton;