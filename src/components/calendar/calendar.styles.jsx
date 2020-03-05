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
export const Sample = styled.div`
    background-color: #FFF;
    width: calc(100% / 6 - 0px);
    font-size: 12px;
    margin: auto 0px;
`
export const Sample0 = styled.div`
    background-color: #FFF;
    width: calc(100% / 6 - 0px);
    font-size: 15px;
    margin: auto 0px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
`
export const Sample1 = styled.div`
    background-color: #FFD5EC;
    width: calc(100% / 6 - 0px);
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`
export const Sample2 = styled.div`
    background-color: #FF97C2;
    width: calc(100% / 6 - 0px);
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

`
export const Sample3 = styled.div`
    background-color: #FF5192;
    width: calc(100% / 6 - 0px);
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`
export const Sample4 = styled.div`
    background-color: #FF0461;
    width: calc(100% / 6 - 0px);
    font-size: 15px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
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
export const RadioButtonWrapper = styled.div`
    margin: 10px 5px 0px 5px;
`
export const Category = styled.p`
    font-weight: bold;
    margin:0px;
`

export const RadioCategoryWrapper = styled.div`
    padding-top: 5px;
`
export const RadioCategoryName = styled.div`
    font-weight: bold;
    margin-left: 10px
`
export const RadioButtons = styled.div`
    margin: 0px 0px;

`
export const RadioLabel = styled.label`
    font-size: 15px;
    margin-left: 10px
`