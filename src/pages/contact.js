import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '../shared/grid/grid';
import query from '../shared/media';

const Contact = () => (
  <Grid>
    <ContactText>
      Please say
      <Anchor big href="mailto:hello@pb.codes">
        hello@pb.codes
      </Anchor>
      or find me on
      <Anchor href="https://www.linkedin.com/in/philipbulley">LinkedIn</Anchor>
      <Anchor href="https://twitter.com/milkisevil">Twitter</Anchor>
      <Anchor href="https://github.com/philipbulley">Github</Anchor>
      <Anchor href="https://stackoverflow.com/users/619602/philip-bulley">
        Stack Overflow
      </Anchor>
    </ContactText>
  </Grid>
);

export default Contact;

const ContactText = styled.div`
  grid-column: 2 / span 10;
  color: ${({ theme }) => theme.color.two};

  ${query.sm} {
    grid-column: 10 / span 3;
  }
`;

const Anchor = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.font.weightDemiBold};
  margin: 0 0 40px 0;
  text-decoration: none;

  ${({ big }) =>
    big &&
    css`
      font-size: 24px;
      margin: 0 0 60px 0;
      font-weight: ${({ theme }) => theme.font.weightBold};
    `};
`;
