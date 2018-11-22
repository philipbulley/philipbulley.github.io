import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-styled-flexboxgrid';
import posed from 'react-pose';

const Nav = ({ currentPath }) => (
  <Row>
    <Col md={3} mdOffset={1}>
      <NavItem pose={currentPath === '/projects' ? 'active' : 'inactive'}>
        <Link to={'/projects'}>Projects.</Link>
      </NavItem>
    </Col>
    <Col md={3} mdOffset={1}>
      <NavItem pose={currentPath === '/about' ? 'active' : 'inactive'}>
        <Link to={'/about'}>About.</Link>
      </NavItem>
    </Col>
    <Col md={3} mdOffset={1}>
      <NavItem pose={currentPath === '/contact' ? 'active' : 'inactive'}>
        <Link to={'/contact'}>Contact.</Link>
      </NavItem>
    </Col>
  </Row>
);

export default Nav;

const NavItem = posed.div({
  active: { y: 50 },
  inactive: { y: 0 },
});
