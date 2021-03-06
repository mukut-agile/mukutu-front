import styled from 'styled-components';

export const EventItemContainer = styled.div`
    width: calc(90% / 2 - 0px);
    height: 90%;
    display: flex;
    align-items: center;
    border: solid 1px black;
    margin: 10px 2.5%;
`

export const EventItemBackgroundImageContainer = styled.div`
  width: 40%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const EventOverviewContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EventItemTitle = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
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