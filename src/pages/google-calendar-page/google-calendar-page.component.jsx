import React from "react";

import { withRouter } from "react-router";

import CustomButton from '../../components/custom-button/custom-button.component';

import {
  handleAuthClick,
  handleClientLoad,
  handleEvents,
  GoogleAuth,
  handleCalendarId,
  handleAuthClickAndEvents
} from "../../google/google.utils";

import { GoogleCalendarPageContainer } from "./google-calendar-page.styles";

const GoogleCalendarPage = ({ history }) => (
  <GoogleCalendarPageContainer>
    <CustomButton 
        isGoogleSignIn 
        onClick={() => {
          handleAuthClickAndEvents()
          history.push('/')
        }} 
    >
        Googleカレンダー連携
    </CustomButton>
  </GoogleCalendarPageContainer>
);

export default GoogleCalendarPage;
