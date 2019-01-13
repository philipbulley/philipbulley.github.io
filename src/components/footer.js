import React from 'react';
import styled from 'styled-components';
import Grid from '../shared/grid/grid';
import query from '../shared/media';

const Footer = () => (
  <Grid>
    <FooterStyled>
      <CompanyText>
        <Copyright>© MMXIX pb.codes</Copyright>a trading name of milkisevil
        ltd.
      </CompanyText>
    </FooterStyled>
  </Grid>
);

export default Footer;

const FooterStyled = styled.div`
  margin: 220px 0 20px;
  grid-column: span 12;

  ${query.sm} {
    grid-column: 1 / span 12;
  }
`;

const CompanyText = styled.div`
  display: inline-block;
  font-size: 10px;
  color: ${({ theme }) => theme.color.two};
  //transform: rotate(-90deg);
  transform-origin: top left;
`;

const Copyright = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weightBold};
  color: ${({ theme }) => theme.color.accent};
`;
