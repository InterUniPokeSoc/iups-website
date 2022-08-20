import React from 'react';
import * as styles from './event.module.scss';

function Event(props) {

    const testEvent = {
        name: "Event"
    }

    const event = props.event ?? testEvent

    if (event == null) { return }

    return (
        <div className={ [styles.eventContainer].join(' ') }>
            <h2 className={ [styles.eventTitle].join(' ') }>{event.name ?? ""}</h2>
        </div>
    )
}

export default Event;