import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from './images/contacts-bg.jpg';

export const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 5px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #a19b19;
  }
`;

export const Main = styled.main`
  /* height: 600px;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
`;

export const Footer = styled.footer`
  border-top: 5px solid black;
`;
export const FooterHeader = styled.h2`
  /* &:hover,
  &:focus {
    color: #a19b19;
  } */
  color: #a19b19;
`;

export const FooterHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
