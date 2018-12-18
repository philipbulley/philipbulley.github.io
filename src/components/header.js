import React from 'react';
import styled from 'styled-components';
import Grid from '../shared/grid/grid';
import { Link } from 'gatsby';

const Header = () => (
  <HeaderStyled>
    <Grid>
      <StyledLink to={'/'}>pb.codes</StyledLink>
    </Grid>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.div`
  grid-column: span 12;
  width: 100%;
  height: 140px;
  color: white;
  background-color: ${({ theme }) => theme.color.accent};
  font-weight: ${({ theme }) => theme.font.weightBold};

  transition: background-color 0.1s ease-out 0.5s;
`;

const StyledLink = styled(Link)`
  grid-column: span 12;
  align-self: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
`;
