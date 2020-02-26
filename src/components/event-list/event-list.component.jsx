import React from 'react';

import EventItem from '../event-item/event-item.component';

import { EventListContainer } from './event-list.styles';

import { EVENT_LIST } from './event-list.js'

const EventList = ({ events }) => {

    return (
      <EventListContainer>
        {
            events.map(({ id, ...otherProps }) => (
          <EventItem key={id} {...otherProps} />
        ))}
      </EventListContainer>
    );
};

export default EventList;