import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  margin: 0 0 100px;

  a {
    color: ${({ theme }) => theme.color.blue};
    font-weight: ${({ theme }) => theme.font.weightDemiBold};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.blue};
    }
  }
`;
export default Project;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.weightBold};
  margin: 0 0 30px;
`;

export const Paragraph = styled.p`
  margin: 0 0 30px;
`;

export const Date = styled.div`
  margin: 0 0 12px;
`;
