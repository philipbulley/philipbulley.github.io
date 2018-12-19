import React from 'react';
import styled from 'styled-components';
import '../shared/global-style';
import Grid from '../shared/grid/grid';
import query from '../shared/media';

const Bio = () => (
  <BioStyled>
    <Grid>
      <BioText>
        <strong>I'm Philip Bulley.</strong> An experienced London-based
        freelance front-end developer specialising in web application
        development. Loves TypeScript, JavaScript & React.
      </BioText>
    </Grid>
  </BioStyled>
);

export default Bio;

const BioStyled = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.accent};
  transition: border-bottom 0.1s ease-out 0.5s;
`;

const BioText = styled.div`
  grid-column: span 12;
  color: ${({ theme }) => theme.color.three};

  ${query.sm} {
    grid-column: 1 / span 9;
  }

  strong {
    color: ${({ theme }) => theme.color.one};
    font-weight: normal;
  }
`;
