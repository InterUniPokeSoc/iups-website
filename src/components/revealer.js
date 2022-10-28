import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import * as styles from './revealer.module.scss';

function Revealer(props) {

  const [show, setShow] = useState(false);

  return (
    <div className={ styles.revealerContainer }>
        <div className={ styles.revealer } onClick={ () => { setShow(!show) } }>
            <p className={ styles.revealerTitle } >{ props.title != null ? props.title : "" }</p>
            <FontAwesomeIcon className={ [styles.icon, show ? styles.iconUp : ""].join(' ') } icon={ faChevronDown } />
        </div>

        { props.children != null &&
          <div className={ [styles.childContent, show ? styles.show : styles.hide].join(" ") } >
            { props.children }
          </div>
        }
    </div>
  )
}

export default Revealer;