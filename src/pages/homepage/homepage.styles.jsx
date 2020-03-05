import styled from 'styled-components';

export const HomePageContainer = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomePageTopContainer = styled.div`
  height: 400px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  margin-bottom: 40px;
`;

export const HomePageImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("images/study.jpeg");
  filter: blur(5px) grayscale(20%);
`

export const HomePageContentContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  background-color: black;
  position: absolute;
`;

export const HomePageContentTitle = styled.span`
  font-weight: bold;
  font-size: 26px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

export const HomePageContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;