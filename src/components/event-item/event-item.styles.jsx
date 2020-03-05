import styled from 'styled-components';

export const EventItemContainer = styled.div`
    width: calc(75% / 5 - 0px);
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px black;
    margin: 10px 2.5%;
`

export const EventItemBackgroundImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`
export const EventItemTitle = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #444;
`
export const EventItemAddress = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  color: #444;
`;