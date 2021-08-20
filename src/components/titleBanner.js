import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as titleBannerStyles from './titleBanner.module.scss';

function TitleBanner(props) {

  return (
    <div className={titleBannerStyles.titleBannerWrapper}>
      <img src={props.imageSource} className={titleBannerStyles.topImage} />
      <h1 className={ "title titleBannerImage " + titleBannerStyles.topImageTitle }>{ props.title }</h1>
    </div>
  );
}

export default TitleBanner;