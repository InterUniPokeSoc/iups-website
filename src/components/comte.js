import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import * as styles from './comte.module.scss';

function Comte(props) {

  return (
    <div className={ styles.comteContainer }>
        <p className={ styles.name }>{ props?.name || "" }</p>
        <p className={ styles.title }>{ props?.title || "" }</p>
        <p className={ styles.description }>{ props?.description || "" }</p>
    </div>
  )
}

export default Comte;