import styled from 'styled-components';
import img from './images/contacts-bg.jpg';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const WrapperToCenter = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HomePageWrapper = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HomePageHeader = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

export const ContactsPageWrapper = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
