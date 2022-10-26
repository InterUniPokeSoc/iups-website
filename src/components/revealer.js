import React, { useState } from 'react';
import * as styles from './revealer.module.scss';

function Revealer(props) {

  const [show, setShow] = useState(false);

  return (
    <div className={ styles.revealerContainer }>
        <div className={ styles.revealer } onClick={ () => { setShow(!show) } }>
            <p className={ styles.revealerTitle } >{ props.title != null ? props.title : "" }</p>
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