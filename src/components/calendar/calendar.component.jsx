import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {CalendarContainer, CalendarMonth, Month, Samples, Sample0, Sample1, Sample2, Sample3, Sample4, CalendarDays, CalendarDay, Sunday, WeekDays, Saturday} from './calendar.styles';
import calendarData from './calendar-data.js';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            radio: [
                {cd:'red',   name:"女性", checked:false,},
                {cd:'blue',  name:"男性", checked:false,},
                {cd:'black', name:"全体", checked:true,}
            ],
            lastclick: null,  //最後に選択された色を入れる
        };
        this.handleRadioClick = this.handleRadioClick.bind(this);
    }

    changeCalendar(){
        if(this.state.radio[0].checked) {
            return calendarData[0];
        }else if(this.state.radio[1].checked) {
            return calendarData[1];
        }else if(this.state.radio[2].checked){
            return calendarData[2];
        }
    }

    handleRadioClick(e) {
        let name  = e.target.name;
        let value = this.state.radio.map( (item)=>{
            return({
                cd: item.cd,
                name: item.name,
                checked: (item.cd===name)? true:false,
            })
        });
        this.setState({
            radio: value,
            lastclick: name,
        });
        this.changeCalendar()
    }

    render () {
        const radio = this.state.radio;
        const listItems = radio.map((r) =>
        <label key={r.cd.toString()} style={{color: r.cd}}>
            <input
                type="radio"
                name={r.cd}
                value={r.cd}
                checked={r.checked}
                onChange={this.handleRadioClick} />
            {r.name}<br />
        </label>
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
                    onClick={value => alert(` ${value.date}`)}
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
                <form>{listItems}</form>
            </CalendarContainer>
        );
    };
};

export default Calendar;