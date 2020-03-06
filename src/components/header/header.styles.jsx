import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const LogoImageContainer = styled.div`
  width: 100%;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-image: url('/logo.png');
  position: relative;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    position: absolute;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OptionContainer = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

export const OptionLogoutContainer = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;