import React from 'react';
import { Link as LinkComponent } from 'gatsby';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import Grid from '../shared/grid/grid';

const Nav = ({ currentPath }) => (
  <Grid>
    <NavItem pose={getPose('/projects/', currentPath)}>
      <Link to={'/projects/'}>
        Projects.
        <Underline />
      </Link>
    </NavItem>
    <NavItem pose={getPose('/about/', currentPath)}>
      <Link to={'/about/'}>
        About.
        <Underline />
      </Link>
    </NavItem>
    <NavItem pose={getPose('/contact/', currentPath)}>
      <Link to={'/contact/'}>
        Contact.
        <Underline />
      </Link>
    </NavItem>
  </Grid>
);

export default Nav;

const getPose = (matchPath, currentPath) =>
  currentPath.startsWith(matchPath) ? 'active' : 'inactive';
const navItemTransition = { ease: [0.19, 1.0, 0.22, 1.0], duration: 500 };
const NavItemPosed = posed.div({
  active: { y: 50, transition: navItemTransition },
  inactive: { y: 0, transition: navItemTransition },
});
const NavItem = styled(NavItemPosed)`
  ${({ theme, pose }) => css`
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 130px;
    font-weight: ${theme.font.weightDemiBold};
    font-size: 24px;

    a {
      text-decoration: none;
      color: ${theme.color.one};
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
  `};
`;
const underlineTransition = { ease: [0.19, 1.0, 0.22, 1.0], duration: 5000 };
const UnderlinePosed = posed.div({
  active: { width: '100%', transition: underlineTransition },
  inactive: { width: 0, transition: {...underlineTransition, duration: 0} },
});
const Underline = styled(UnderlinePosed)`
  margin-top: 3px;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.accent};
`;

const Link = styled(LinkComponent)`
  display: inline-block;
`;
