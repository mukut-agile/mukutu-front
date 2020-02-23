import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Signin from './components/sign-in/sign-in.component';
import Signup from "./components/sign-up/sign-up.component";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
