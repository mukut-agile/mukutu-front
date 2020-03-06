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

import {
  GoogleCalendarPageContainer,
  UserDetailWrapper,
  UserImageWrapper,
  UserImage,
  UserWrapper,
  InfoWrapper,
  Wrapper,
  InfoLabel,
  InfoOutPut,
  EventScheduleWrapper,
  Title,
  EventSchedule,
  EventSchedule2
} from "./my-page.styles";

const MyPage = ({ history }) => (
  <GoogleCalendarPageContainer>
    <UserDetailWrapper>
      <UserImageWrapper>
        <UserImage src={`images/user-image.jpg`}/>
      </UserImageWrapper>
      <InfoWrapper>
        <UserWrapper>
          <Wrapper>
            <InfoLabel>ユーザー名</InfoLabel>
            <InfoOutPut>MUKUT</InfoOutPut>
          </Wrapper>
          <Wrapper>
            <InfoLabel>メールアドレス</InfoLabel>
            <InfoOutPut>mukut@sample.com</InfoOutPut>
          </Wrapper>
          <Wrapper>
            <InfoLabel>趣味</InfoLabel>
            <InfoOutPut>レジャー</InfoOutPut>
          </Wrapper>
          <Wrapper>
            <InfoLabel></InfoLabel>
            <InfoOutPut>スポーツ</InfoOutPut>
          </Wrapper>
        </UserWrapper>
        <CustomButton
          isGoogleSignIn
          onClick={() => {
            handleAuthClickAndEvents()
            history.push('/')
          }}
        >
            Googleカレンダー連携
        </CustomButton>
      </InfoWrapper>
    </UserDetailWrapper>
    <EventScheduleWrapper>
      <Title>参加予定イベント</Title>
      <EventSchedule>3月31日：プログラミング好きによる花見in荒川</EventSchedule>
      <EventSchedule2>3月27日：プログラミング初学者によるデータベース勉強会in港区</EventSchedule2>
      <EventSchedule>3月24日：令和２年　第３回フットサル大会in渋谷（ミックス）</EventSchedule>
      <EventSchedule2>3月16日：プログラミング初学者によるバックエンド勉強会in港区</EventSchedule2>
      <EventSchedule>3月14日：令和２年　第２回フットサル大会in渋谷（ミックス）</EventSchedule>
      <EventSchedule2>3月10日：プログラミング初学者によるフロントエンド勉強会in渋谷区</EventSchedule2>
    </EventScheduleWrapper>
  </GoogleCalendarPageContainer>
);

export default MyPage;
