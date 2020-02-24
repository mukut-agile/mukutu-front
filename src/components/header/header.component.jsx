import React from 'react';

import { auth } from '../../firebase/firebase.urils';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer, OptionLogoutContainer } from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/">MUKUT</LogoContainer>
    <OptionsContainer>
      {currentUser ? (
        <OptionLogoutContainer onClick={() => auth.signOut()}>ログアウト</OptionLogoutContainer>
      ) : (
        <OptionContainer to="/signin">ログイン/登録</OptionContainer>
      )}
      <OptionContainer to="/event">イベント作成</OptionContainer>
      <OptionContainer to="/community">コミュニティ作成</OptionContainer>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;