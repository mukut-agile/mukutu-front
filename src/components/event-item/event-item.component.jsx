import React from 'react';

import { EventItemContainer, EventItemBackgroundImageContainer, EventItemTitle, EventItemAddress } from './event-item.styles';

const EventItem = ({ event_title, place, imageUrl }) => (
  <EventItemContainer>
    <EventItemBackgroundImageContainer imageUrl={imageUrl}/>
    <EventItemTitle>{event_title}</EventItemTitle>
    <EventItemAddress>{place}</EventItemAddress>
  </EventItemContainer>
);

export default EventItem;