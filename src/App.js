import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from './firebase/firebase.urils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.conponent';
import SignIn from './pages/sign-in/sign-in.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    return fetch("http://weather.livedoor.com/forecast/webservice/json/v1?city=400040", {mode: "no-cors"})
      .then(response => console.log(response))
      .then(responseJson => {
        console.log(responseJson)
      })
      .catch(error => {
        console.error(error);
      });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route 
            exact 
            path="/signin"
            render={() => 
              this.state.currentUser ? <Redirect to='/'/> : <SignIn />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
