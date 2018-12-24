import React from 'react';
import { Link as LinkComponent } from 'gatsby';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import _Grid from '../shared/grid/grid';
import { easeOutExpo } from '../shared/easing';
import query, { matches, minWidth } from '../shared/media';

const Nav = ({ currentPath }) => (
  <Grid>
    <NavItem initialPose="init" pose={getPose('/projects/', currentPath)}>
      <Link to={'/projects/'}>
        Projects.
        <Underline />
      </Link>
    </NavItem>
    <NavItem initialPose="init" pose={getPose('/about/', currentPath)}>
      <Link to={'/about/'}>
        About.
        <Underline />
      </Link>
    </NavItem>
    <NavItem initialPose="init" pose={getPose('/contact/', currentPath)}>
      <Link to={'/contact/'}>
        Contact.
        <Underline />
      </Link>
    </NavItem>
  </Grid>
);

export default Nav;

// const Container = posed.div({
//   init: {},
//   show: { staggerChildren: 500 },
//   // inactive: { staggerChildren: 500 },
// });

const getPose = (matchPath, currentPath) =>
  currentPath.startsWith(matchPath) ? 'active' : 'inactive';
const navItemTransition = { ease: [0.19, 1.0, 0.22, 1.0], duration: 500 };
const NavItemPosed = posed.div({
  init: {
    y: 0,
    opacity: 0,
  },
  active: {
    y: () => (matches(minWidth.sm) ? 50 : 0),
    opacity: 1,
    transition: navItemTransition,
  },
  inactive: {
    y: 0,
    transition: navItemTransition,
    opacity: 1,
  },
});
const NavItem = styled(NavItemPosed)`
  ${({ theme }) => css`
    display: inline-block;
    font-weight: ${theme.font.weightDemiBold};
    font-size: 20px;

    a {
      text-decoration: none;
      color: ${theme.color.one};
    }

    &:nth-child(1) {
      grid-column: 1 / span 4;
    }

    &:nth-child(2) {
      text-align: center;
      grid-column: 5 / span 4;
    }

    &:nth-child(3) {
      text-align: right;
      grid-column: 9 / span 4;
    }

    ${query.sm} {
      font-size: 24px;
      text-align: left;

      grid-column-end: span 4;

      &:nth-child(2) {
        text-align: left;
        grid-column: 6 / span 3;
      }

      &:nth-child(3) {
        grid-column: 9 / span 4;
      }
    }
  `};
`;
const underlineTransition = { ease: easeOutExpo, duration: 5000 };
const UnderlinePosed = posed.div({
  active: { width: '100%', transition: underlineTransition },
  inactive: { width: 0, transition: { ...underlineTransition, duration: 0 } },
});
const Underline = styled(UnderlinePosed)`
  width: 0;
  margin-top: 3px;
  height: 4px;
  background-color: ${({ theme }) => theme.color.accent};
`;

const Link = styled(LinkComponent)`
  display: inline-block;
`;

const Grid = styled(_Grid)`
  margin-top: 70px;
  margin-bottom: 90px;

  ${query.sm} {
    margin-top: 50px;
    margin-bottom: 130px;
  }
`;
