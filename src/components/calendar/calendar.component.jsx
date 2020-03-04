import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {CalendarContainer, CalendarMonth, Month, Samples, Sample0, Sample1, Sample2, Sample3, Sample4, CalendarDays, CalendarDay, Sunday, WeekDays, Saturday, RadioButtonWrapper,　Category, RadioCategoryWrapper, RadioCategoryName, RadioButtons, RadioLabel} from './calendar.styles';
import calendarData from './calendar-data.js';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            radioGender: [
                {name:"選択なし", checked:true,},
                {name:"男性", checked:false,},
                {name:"女性", checked:false}
            ],
            radioHobby: [
                {name:"全て", checked:true,},
                {name:"スポーツ", checked:false,},
                {name:"レジャー", checked:false},
                {name:"街コン", checked:false,},
                {name:"ライブ", checked:false},
                {name:"勉強会", checked:false,},
            ],
        };
        this.handleRadioGenderClick = this.handleRadioGenderClick.bind(this);
        this.handleRadioHobbyClick = this.handleRadioHobbyClick.bind(this);
    }

    changeCalendar(){
        if(this.state.radioGender[0].checked && this.state.radioHobby[0].checked) {
            return calendarData[0][0];
        }else if(this.state.radioGender[0].checked && this.state.radioHobby[1].checked) {
            return calendarData[0][1];
        }else if(this.state.radioGender[0].checked && this.state.radioHobby[2].checked) {
            return calendarData[0][2];
        }else if(this.state.radioGender[0].checked && this.state.radioHobby[3].checked) {
            return calendarData[0][3];
        }else if(this.state.radioGender[0].checked && this.state.radioHobby[4].checked) {
            return calendarData[0][4];
        }else if(this.state.radioGender[0].checked && this.state.radioHobby[5].checked) {
            return calendarData[0][5];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[0].checked) {
            return calendarData[1][0];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[1].checked) {
            return calendarData[1][1];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[2].checked) {
            return calendarData[1][2];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[3].checked) {
            return calendarData[1][3];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[4].checked) {
            return calendarData[1][4];
        }else if(this.state.radioGender[1].checked && this.state.radioHobby[5].checked) {
            return calendarData[1][5];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[0].checked){
            return calendarData[2][0];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[1].checked) {
            return calendarData[2][1];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[2].checked) {
            return calendarData[2][2];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[3].checked) {
            return calendarData[2][3];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[4].checked) {
            return calendarData[2][4];
        }else if(this.state.radioGender[2].checked && this.state.radioHobby[5].checked) {
            return calendarData[2][5];
        }
    }

    handleRadioGenderClick(e) {
        let name  = e.target.name;
        let value = this.state.radioGender.map( (item)=>{
            return({
                name: item.name,
                checked: (item.name===name)? true:false,
            })
        });
        this.setState({
            radioGender: value,
        });
        this.changeCalendar()
    }

    handleRadioHobbyClick(e) {
        let name  = e.target.name;
        let value = this.state.radioHobby.map( (item)=>{
            return({
                name: item.name,
                checked: (item.name===name)? true:false,
            })
        });
        this.setState({
            radioHobby: value,
        });
        this.changeCalendar()
    }

    render () {
        const listItemsGender = this.state.radioGender.map((r) =>
        <RadioLabel>
            <input
                type="radio"
                name={r.name}
                checked={r.checked}
                onChange={this.handleRadioGenderClick} />
            {r.name}
        </RadioLabel>
        );
        const listItemsHobby = this.state.radioHobby.map((r) =>
        <RadioLabel>
            <input
                type="radio"
                name={r.name}
                checked={r.checked}
                onChange={this.handleRadioHobbyClick} />
            {r.name}
            </RadioLabel>
        );
        return (
            <CalendarContainer>
                <CalendarMonth>
                    <Month>3月</Month>
                    <Samples>
                        <Sample0>暇人</Sample0>
                        <Sample1>少</Sample1>
                        <Sample2></Sample2>
                        <Sample3></Sample3>
                        <Sample4>多</Sample4>
                    </Samples>
                </CalendarMonth>
                <CalendarDays>
                    <CalendarDay><Sunday>日</Sunday></CalendarDay>
                    <CalendarDay><WeekDays>月</WeekDays></CalendarDay>
                    <CalendarDay><WeekDays>火</WeekDays></CalendarDay>
                    <CalendarDay><WeekDays>水</WeekDays></CalendarDay>
                    <CalendarDay><WeekDays>木</WeekDays></CalendarDay>
                    <CalendarDay><WeekDays>金</WeekDays></CalendarDay>
                    <CalendarDay><Saturday>土</Saturday></CalendarDay>
                </CalendarDays>
                <CalendarHeatmap
                    horizontal={false}
                    startDate={new Date('2020-02-29')}
                    endDate={new Date('2020-03-31')}
                    values={this.changeCalendar()}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                            return `color-scale-${value.count}`;
                    }}
                    onClick={(value) => this.props.callMethod(value.date)}
                    showMonthLabels={false}
                    showWeekdayLabels={false}
                    showOutOfRangeDays={false}
                    transformDayElement={(element, value, index) => (
                        <g>
                            {element}
                            <text
                                x={element["props"].x}
                                y={element["props"].y + 10}
                                style={{
                                    fontSize: "3px",
                                    fill: "#000"
                                }}
                            >
                                {index + 1}
                            </text>
                        </g>
                    )}
                />
                <RadioButtonWrapper>
                    <Category>ユーザー</Category>
                    <RadioCategoryWrapper>
                        <RadioCategoryName>性別</RadioCategoryName>
                        <RadioButtons>{listItemsGender}</RadioButtons>
                    </RadioCategoryWrapper>
                    <RadioCategoryWrapper>
                        <RadioCategoryName>趣味</RadioCategoryName>
                        <RadioButtons>{listItemsHobby}</RadioButtons>
                    </RadioCategoryWrapper>
                </RadioButtonWrapper>
            </CalendarContainer>
        );
    };
};

export default Calendar;