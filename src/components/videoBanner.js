import React from 'react';
import * as videoBannerStyles from './videoBanner.module.scss';

export default function VideoBanner(props) {

  return (
    <div className={videoBannerStyles.videoBannerWrapper}>
      <video src={props.videoSource} title={props.alt} className={videoBannerStyles.topVideo} autoPlay loop muted>
      </video>
    </div>
  );
}