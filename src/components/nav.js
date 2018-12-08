import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-styled-flexboxgrid';
import posed from 'react-pose';
import styled from 'styled-components';
import GridGuides from './guides';

const Nav = ({ currentPath }) => (
  <>
    <NavStyled>
      <Col sm={3} smOffset={1}>
        <NavItem pose={currentPath === '/projects' ? 'active' : 'inactive'}>
          <Link to={'/projects'}>Projects.</Link>
        </NavItem>
      </Col>
      <Col sm={3}>
        <NavItem pose={currentPath === '/about' ? 'active' : 'inactive'}>
          <Link to={'/about'}>About.</Link>
        </NavItem>
      </Col>
      <Col sm={3}>
        <NavItem pose={currentPath === '/contact' ? 'active' : 'inactive'}>
          <Link to={'/contact'}>Contact.</Link>
        </NavItem>
      </Col>
    </NavStyled>
  </>
);

export default Nav;

const NavStyled = styled(Row)`
  margin-top: 50px;
  margin-bottom: 130px;
`;

const NavItemPosed = posed.div({
  active: { y: 50 },
  inactive: { y: 0 },
});
const NavItem = styled(NavItemPosed)`
  font-weight: ${({ theme }) => theme.font.weightDemiBold};
  font-size: 24px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.one};
  }
`;
