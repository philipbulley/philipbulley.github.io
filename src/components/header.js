import React from 'react';
import styled from 'styled-components';

const Header = () => <HeaderStyled>pb.codes</HeaderStyled>;

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  height: 140px;
  color: white;
  background-color: black;
  font-weight: ${({ theme }) => theme.font.weightBold};
`;
