import React from 'react';
import { EventInputContainer, LabelInput, FormInput, InputUnderLine } from './event-input.styles';

const EventInput = (props) => (
    <EventInputContainer>
        <LabelInput htmlFor={props.name}>{props.label}</LabelInput>
        <FormInput type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange}></FormInput>
        <InputUnderLine></InputUnderLine>
    </EventInputContainer>
);

export default EventInput;
