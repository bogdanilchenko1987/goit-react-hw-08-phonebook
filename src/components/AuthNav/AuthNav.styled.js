import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// export const Wrapper = styled.div`
//   margin-left: auto;
// `;

export const StyledLink = styled(NavLink)`
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
