import React, { Component } from 'react';
import './create-event.css';
import EventInput from "../../components/event-input/event-input.component";
import Calendar from '../../components/calendar/calendar.component.jsx';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                owner_id: 1,
                event_title: '',
                overview: '',
                start_datetime: '',
                end_datetime: '',
                place: '',
                fee: '',
                max_member: '',
            },
        };
        this.handleChange = this.handleChange.bind(this)
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
            case 'start_datetime':
                data.start_datetime = event.target.value;
                break;
            case 'end_datetime':
                data.end_datetime = event.target.value;
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

    handleSubmit() {
        postData(`https://mukutapi.herokuapp.com/api/v1/events`, this.state.data)
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));

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
                            {this.renderEventInput("概要", "overview","text")}
                            {this.renderEventInput("開始日時", "start_datetime","text")}
                            {this.renderEventInput("終了日時", "end_datetime","text")}
                            {this.renderEventInput("会場", "place","text")}
                            {this.renderEventInput("参加費", "fee","text")}
                            {this.renderEventInput("募集人数", "max_member","text")}
                        </div>
                    </div>
                    <div className="Right-side-content">
                        <Calendar />
                        <div className="Button-submit">
                            <button type="submit">募集開始</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateEvent;
