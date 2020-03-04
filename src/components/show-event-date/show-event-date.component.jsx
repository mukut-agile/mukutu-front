import React from 'react';
import { EventDateContainer, EventLabel, EventDate, UnderLine } from './show-event-date.styles';
import { InputUnderLine } from '../event-input/event-input.styles';

const ShowEventDate = (props) => {
    return(
        <EventDateContainer>
            <EventLabel>開始日（カレンダーから選択）</EventLabel>
            <EventDate>{props.eventDate}</EventDate>
            <UnderLine></UnderLine>
        </EventDateContainer>
    );
};

export default ShowEventDate;