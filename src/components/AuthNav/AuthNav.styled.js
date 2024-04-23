import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  text-decoration: none;
  border-radius: 3px;
  padding: 10px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: white;
    background-color: black;
  }
`;
