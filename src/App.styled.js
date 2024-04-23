import styled from 'styled-components';
import img from './images/contacts-bg.jpg';

export const Container = styled.div`
  max-width: 960px;
  min-height: 600px;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  padding: 0 15px;
`;
