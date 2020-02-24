import React from 'react';

import { EventItemContainer, EventItemBackgroundImageContainer, EventItemTitle, EventItemAddress } from './event-item.styles';

const EventItem = ({ imageUrl, title, address }) => (
  <EventItemContainer>
    <EventItemBackgroundImageContainer imageUrl={imageUrl}/>
    <EventItemTitle>{title}</EventItemTitle>
    <EventItemAddress>{address}</EventItemAddress>
  </EventItemContainer>
);

export default EventItem;