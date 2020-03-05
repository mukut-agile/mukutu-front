import React from 'react';

import { auth } from '../../firebase/firebase.urils';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer, OptionLogoutContainer, LogoImageContainer } from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoImageContainer />
    <LogoContainer to="/" />
    <OptionsContainer>
      {currentUser ? (
        <OptionLogoutContainer onClick={() => auth.signOut()}>ログアウト</OptionLogoutContainer>
      ) : (
        <OptionContainer to="/signin">ログイン/登録</OptionContainer>
      )}
      <OptionContainer to="/event">イベント作成</OptionContainer>
      <OptionContainer to="/community">コミュニティ作成</OptionContainer>
      <OptionContainer to="/mypage">マイページ</OptionContainer>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;