import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import styled from 'styled-components';
import Grid from '../shared/grid/grid';

const Nav = ({ currentPath }) => (
  <Grid>
    <NavItem pose={currentPath === '/projects' ? 'active' : 'inactive'}>
      <Link to={'/projects'}>Projects.</Link>
    </NavItem>
    <NavItem pose={currentPath === '/about' ? 'active' : 'inactive'}>
      <Link to={'/about'}>About.</Link>
    </NavItem>
    <NavItem pose={currentPath === '/contact' ? 'active' : 'inactive'}>
      <Link to={'/contact'}>Contact.</Link>
    </NavItem>
  </Grid>
);

export default Nav;

const NavItemPosed = posed.div({
  active: { y: 50 },
  inactive: { y: 0 },
});
const NavItem = styled(NavItemPosed)`
  margin-top: 50px;
  margin-bottom: 130px;
  font-weight: ${({ theme }) => theme.font.weightDemiBold};
  font-size: 24px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.one};
  }

  grid-column-end: span 3;

  &:nth-child(1) {
    grid-column-start: 2;
  }

  &:nth-child(2) {
    grid-column-start: 6;
  }

  &:nth-child(3) {
    grid-column-start: 10;
  }
`;
