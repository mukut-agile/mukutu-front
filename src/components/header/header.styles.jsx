import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled(Link)`
  width: 30%;
  height: 100%;
`

export const HeaderOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderOption = styled(Link)`
  width: 20%;
  height: auto;
  margin: 0 5px;
`