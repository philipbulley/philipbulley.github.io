import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const GridGuides = () => (
  <Container>
    <Grid>
      <Row>
        <ColGuide xs={12} lg={1}>
          <Content>1</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>2</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>3</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>4</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>5</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>6</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>7</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>8</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>9</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>10</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>11</Content>
        </ColGuide>
        <ColGuide xs={12} lg={1}>
          <Content>12</Content>
        </ColGuide>
      </Row>
    </Grid>
  </Container>
);

export default GridGuides;

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 200px;
  z-index: 100;
`;
const Content = styled(Grid)`
  height: 100vh;
`;
const ColGuide = styled(Col)`
  background-clip: content-box;
  background-color: rgba(255, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;
