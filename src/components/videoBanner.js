import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as videoBannerStyles from './videoBanner.module.scss';

function VideoBanner(props) {

  return (
    <div className={videoBannerStyles.videoBannerWrapper}>
      <video src={props.videoSource} title={props.alt} className={videoBannerStyles.topVideo} autoPlay loop muted>
        {/* <source src={props.videoSource} type={"video/"+props.type}/> */}
      </video>
    </div>
  );
}

export default VideoBanner;