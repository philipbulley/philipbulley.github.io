import React from 'react'
import styled from 'styled-components'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import '../shared/global-style';

const Bio = () => (
  <BioStyled>
    <Grid>
      <Row>
        <Col>
          {1 === 2 ? <>xA London-based freelance front-end developer specialising in web
            application development. Loves TypeScript/JavaScript & React.</> : <>Lorem ipsum dolor sit amet</>}
        </Col>
      </Row>
    </Grid>
  </BioStyled>
)

export default Bio

const BioStyled = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid #000;
`;
