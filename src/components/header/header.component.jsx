import React from 'react';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">MUKUT</LogoContainer>
    <OptionsContainer>
      <OptionContainer to='/signin'>ログイン/登録</OptionContainer>
      <OptionContainer to='/event'>イベント作成</OptionContainer>
      <OptionContainer to='/community'>コミュニティ作成</OptionContainer>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;