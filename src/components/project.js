import React from 'react';
import styled from 'styled-components';

const Project = () => (
  <ProjectStyled>
    <Date>June 2017 - 1 year 5 months+</Date>
    <Heading>Top Tier Investment Bank — Research Web Apps</Heading>
    <Paragraph>
      Based on-site, Fleet Street. Working within the Investment Research
      division on the bank's headline research presentation site and related
      apps.
    </Paragraph>
    <ul>
      <li>Data-heavy apps</li>
      <li>React / Redux / ag-Grid / AEM integration</li>
      <li>
        Via <a href="http://www.somoglobal.com">Somo</a>
      </li>
    </ul>
  </ProjectStyled>
);

export default Project;

const ProjectStyled = styled.div`
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

const Heading = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.weightBold};
  margin: 0 0 30px;
`;

const Paragraph = styled.p`
  margin: 0 0 30px;
`;

const Date = styled.div`
  margin: 0 0 12px;
`;
