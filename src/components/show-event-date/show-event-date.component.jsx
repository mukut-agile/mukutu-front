import React from 'react';
import { EventDateContainer, EventLabel, EventDate } from './show-event-date.styles';

const ShowEventDate = (props) => {
    return(
        <EventDateContainer>
            <EventLabel>開始日（カレンダーから選択してください。）</EventLabel>
            <EventDate>　{props.eventDate}</EventDate>
        </EventDateContainer>
    );
};

export default ShowEventDate;