import React, { Component } from 'react';
import './create-event.css';
import { withRouter } from 'react-router';
import EventInput from '../../components/event-input/event-input.component';
import TimeInput from '../../components/time-input/time-input';
import ShowEventDate from '../../components/show-event-date/show-event-date.component';
import Calendar from '../../components/calendar/calendar.component';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                owner_id: 1,
                event_title: '',
                overview: '',
                event_date:　'2020-03-06',
                start_datetime: '00:00',
                end_datetime: '00:00',
                place: '',
                fee: '',
                max_member: '',
            },
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const data = this.state.data;
        switch (event.target.name) {
            case 'event_title':
                data.event_title = event.target.value;
                break;
            case 'overview':
                data.overview = event.target.value;
                break;
            case 'place':
                data.place = event.target.value;
                break;
            case 'fee':
                data.fee = event.target.value;
                break;
            case 'max_member':
                data.max_member = event.target.value;
                break;
        }
        this.setState({
            data: data
        });
    }

    changeDate(date) {
        const data = this.state.data;
        data.event_date = date;
        this.setState({data: data});
        console.log(this.state.data)
    }

    handleStartTimeChange (event) {
        const data = this.state.data;
        data.start_datetime = event.target.value;
        this.setState({data: data});
    }

    handleEndTimeChange (event) {
        const data = this.state.data;
        data.end_datetime = event.target.value;
        this.setState({data: data});
    }

    handleSubmit() {
        const data = this.state.data;
        data.start_datetime = `${data.event_date} ${data.start_datetime}`;
        data.end_datetime = `${data.event_date} ${data.end_datetime}`;
        delete data.event_date;
        postData(`https://mukut-back.herokuapp.com/api/v1/events`, data)
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .then(() => this.props.handleUpdate())
        .catch(error => console.error(error));
        this.props.history.push('/');

        function postData(url = ``, data = {}) {
        // 既定のオプションには * が付いています
        return fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        })
        .then(response => response.json()); // レスポンスの JSON を解析
        }
    }

    renderEventInput(label, property, type) {
        return(<EventInput label={label} type={type} name={property} value={this.state.data.property} onChange={this.handleChange}/>);
    }

    renderStartTimeInput(label) {
        return(<TimeInput label={label} value={this.state.value} onChange={this.handleStartTimeChange}/>);
    }

    renderEndTimeInput(label) {
        return(<TimeInput label={label} value={this.state.value} onChange={this.handleEndTimeChange}/>);
    }

    render() {
        return (
            <div className="App">
                <div className="Title-container">
                    <h1 className="Title">イベント作成</h1>
                </div>
                <form className="Form-event" action="javascript:void(0)" onSubmit={this.handleSubmit}>
                    <div className="Left-side-content">
                        <div className="Form-wrapper">
                            {this.renderEventInput("イベント名", "event_title","text")}
                            <ShowEventDate eventDate={this.state.data.event_date}/>
                            <div className="Event-time">
                                {this.renderStartTimeInput("開始時間")}
                                {this.renderEndTimeInput("終了時間")}
                            </div>
                            {this.renderEventInput("概要", "overview","text")}
                            {this.renderEventInput("会場", "place","text")}
                            {this.renderEventInput("参加費", "fee","text")}
                            {this.renderEventInput("募集人数", "max_member","text")}
                        </div>
                    </div>
                    <div className="Right-side-content">
                        <Calendar callMethod={(valueDate) => this.changeDate(valueDate)}/>
                        <div className="Button-submit">
                            <button type="submit">募集開始</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(CreateEvent);
