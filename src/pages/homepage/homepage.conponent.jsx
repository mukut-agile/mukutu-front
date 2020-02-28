import React from 'react';

import EventList from '../../components/event-list/event-list.component';

import { HomePageTopContainer, HomePageContainer, HomePageImageContainer, HomePageContentContainer, HomePageContentTitle, HomePageContentSubtitle } from './homepage.styles';

const HomePage = ({ events }) => (
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
    <EventList events={events} />
  </HomePageContainer>
);

export default HomePage;