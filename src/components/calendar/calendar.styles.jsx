import styled from 'styled-components';

export const CalendarContainer = styled.div`
    width:100%;
`
export const CalendarMonth = styled.h2`
    text-align: center;
    margin: 0px;
    position: relative;
`
export const Month = styled.div`
    font-weight: bold;
`
export const Samples = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 30%;
    top: 0px;
    right: 0px;
`
export const Sample0 = styled.div`
    background-color: #FFF;
    width: calc(100% / 5 - 0px);
    font-size: 12px;
    margin: auto 0px;
`
export const Sample1 = styled.div`
    background-color: #FFD5EC;
    width: calc(100% / 5 - 0px);
    font-size: 15px;
`
export const Sample2 = styled.div`
    background-color: #FF97C2;
    width: calc(100% / 5 - 0px);

`
export const Sample3 = styled.div`
    background-color: #FF5192;
    width: calc(100% / 5 - 0px);
`
export const Sample4 = styled.div`
    background-color: #FF0461;
    width: calc(100% / 5 - 0px);
    font-size: 15px;
`

export const CalendarDays = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
export const CalendarDay = styled.div`
    width: calc(100% / 7 - 0px);
`
export const Sunday = styled.p`
    margin: 0px;
    color: #FF0000;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`
export const WeekDays = styled.p`
    margin: 0px;
    color: #000000;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`
export const Saturday = styled.p`
    margin: 0px;
    color: #0000FF;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`