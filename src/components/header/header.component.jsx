import React from 'react'

import { HeaderContainer, HeaderLogo, HeaderOptions, HeaderOption } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <HeaderLogo> MUKUT </HeaderLogo>
    <HeaderOptions>
      <HeaderOption to='/mukut/signin'>ログイン</HeaderOption>
      <HeaderOption to='/mukut/signup'>新規登録</HeaderOption>
      <HeaderOption to='/mukutu/event'>イベント作成</HeaderOption>
    </HeaderOptions>
  </HeaderContainer>
);

export default Header;