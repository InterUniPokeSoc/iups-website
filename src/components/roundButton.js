import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as roundButtonStyles from './roundButton.module.scss';

function RoundButton(props) {

  return (
    <a className={roundButtonStyles.roundButton + " " +  props.className + " " + (props.dark ? roundButtonStyles.dark : null)} href={props.link}>
      {props.text}
    </a>
  );
}

export default RoundButton;