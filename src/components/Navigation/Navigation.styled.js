import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;

  justify-content: space-between;
`;

export const MainLink = styled(NavLink)`
  font-size: 19px;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  color: #ffff;
  border-radius: 25px;
  &.active {
    color: white;
    background-color: orange;
  }
`;
