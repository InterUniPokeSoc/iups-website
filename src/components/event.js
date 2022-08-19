import React from 'react';
import * as styles from './event.module.scss';

function Event(props) {

    const event = {
        title: "Event"
    }

    if (event == null) { return }

    return (
    <div className={ [styles.eventContainer].join(' ') }>
        <h2 className={ [styles.eventTitle].join(' ') }>{event.title ?? ""}</h2>
    </div>
    )
}

export default Event;