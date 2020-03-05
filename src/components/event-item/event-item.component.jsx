import React from 'react';

import {
  EventItemContainer,
  EventItemBackgroundImageContainer,
  EventItemTitle,
  EventItemAddress,
  EventOverviewContainer
} from "./event-item.styles";

const EventItem = ({
  event_title,
  place,
  imageUrl,
  start_datetime,
  overview
}) => (
  <EventItemContainer>
    <EventItemBackgroundImageContainer imageUrl={imageUrl} />
    <EventOverviewContainer>
      <EventItemTitle>{event_title}</EventItemTitle>
      <EventItemTitle>開催日時:{start_datetime.substr(0, 10)}</EventItemTitle>
      <EventItemTitle>概要:{overview}</EventItemTitle>
      <EventItemTitle>開催地:{place}</EventItemTitle>
    </EventOverviewContainer>
  </EventItemContainer>
);

export default EventItem;