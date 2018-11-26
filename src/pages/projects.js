import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Project from '../components/project'

const Projects = () => <Row>
  <Col sm={8} smOffset={1}>
    <Project/>
    <Project/>
  </Col>
</Row>;

export default Projects;
