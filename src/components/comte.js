import React from 'react';

import * as styles from './comte.module.scss';

function Comte(props) {

  const member = props.member

  return (
    <div className={ styles.comteContainer }>
        <p className={ styles.name }>{ member?.name || "" }</p>
        <p className={ styles.pronouns }>{ member?.pronouns || "" }</p>
        <p className={ styles.title }>{ member?.role || "" }</p>
        <p className={ styles.description }>{ member?.description || "" }</p>
    </div>
  )
}

export default Comte;