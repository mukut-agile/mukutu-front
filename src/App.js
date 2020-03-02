import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from './firebase/firebase.urils';
import { handleClientLoad } from "./google/google.utils";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.conponent';
import SignIn from './pages/sign-in/sign-in.component';
import GoogleCalendarPage from './pages/google-calendar-page/google-calendar-page.component';
import CreateEvent from './pages/create-event/create-event';


import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      events: []
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });

    fetch("https://mukut-back.herokuapp.com/api/v1/events")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ events: this.state.events.concat(result) });
        },
        error => {
          console.log(error);
        }
      );
      
      handleClientLoad();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    console.log(this.state.events);

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage events={this.state.events} />}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route exact path="/event" component={CreateEvent} />
          <Route exact path="/mypage" component={GoogleCalendarPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
