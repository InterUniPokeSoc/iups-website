import React from 'react';
import * as circleImageTitleStyles from './circleImageTitle.module.scss';

function CircleImageTitle(props) {

  return (
    <section id={circleImageTitleStyles.mainSection}>
        <img id={circleImageTitleStyles.circleImage} src={props.src}/>
        <a id={circleImageTitleStyles.title}>{props.children}</a>
    </section>
  );
}

export default CircleImageTitle;