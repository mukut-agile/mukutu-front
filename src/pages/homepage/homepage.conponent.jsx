import React from 'react';

import EventList from '../../components/event-list/event-list.component';

import { HomePageTopContainer, HomePageContainer, HomePageImageContainer, HomePageContentContainer, HomePageContentTitle, HomePageContentSubtitle } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <HomePageTopContainer>
      <HomePageImageContainer />
      <HomePageContentContainer>
        <HomePageContentTitle>
          MUKUTイベント管理サービス
        </HomePageContentTitle>
        <HomePageContentSubtitle>
          MUKUTUとはhogefufg
        </HomePageContentSubtitle>
      </HomePageContentContainer>
    </HomePageTopContainer>
    <EventList />
  </HomePageContainer>
);

export default HomePage;