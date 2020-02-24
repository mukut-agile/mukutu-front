import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div` 
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
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