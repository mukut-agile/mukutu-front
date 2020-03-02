import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {CalendarContainer, CalendarMonth, Month, Samples, Sample0, Sample1, Sample2, Sample3, Sample4, CalendarDays, CalendarDay, Sunday, WeekDays, Saturday} from './calendar.styles';

const Calendar = () => (
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
            values={[
                { date: '2020-03-01', count: 1 },
                { date: '2020-03-02', count: 3 },
                { date: '2020-03-03', count: 4 },
                { date: '2020-03-04', count: 1 },
                { date: '2020-03-05', count: 3 },
                { date: '2020-03-06', count: 1 },
                { date: '2020-03-07', count: 1 },
                { date: '2020-03-08', count: 2 },
                { date: '2020-03-09', count: 4 },
                { date: '2020-03-10', count: 1 },
                { date: '2020-03-11', count: 3 },
                { date: '2020-03-12', count: 4 },
                { date: '2020-03-13', count: 1 },
                { date: '2020-03-14', count: 0 },
                { date: '2020-03-15', count: 4 },
                { date: '2020-03-16', count: 1 },
                { date: '2020-03-17', count: 3 },
                { date: '2020-03-18', count: 0 },
                { date: '2020-03-19', count: 1 },
                { date: '2020-03-20', count: 3 },
                { date: '2020-03-21', count: 4 },
                { date: '2020-03-22', count: 1 },
                { date: '2020-03-23', count: 3 },
                { date: '2020-03-24', count: 0 },
                { date: '2020-03-25', count: 1 },
                { date: '2020-03-26', count: 3 },
                { date: '2020-03-27', count: 4 },
                { date: '2020-03-28', count: 3 },
                { date: '2020-03-29', count: 3 },
                { date: '2020-03-30', count: 4 },
                { date: '2020-03-31', count: 1 },
            ]}
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
    </CalendarContainer>
);

export default Calendar;