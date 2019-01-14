import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '../shared/grid/grid';
import query from '../shared/media';
import posed from 'react-pose';

const Contact = () => (
  <Grid>
    <ContactText initialPose="init" pose="show">
      Please say
      <Anchor big href="mailto:hello@pb.codes">
        hello@pb.codes
      </Anchor>
      or find me on
      <Anchor href="https://www.linkedin.com/in/philipbulley">LinkedIn</Anchor>
      <Anchor href="https://twitter.com/milkisevil">Twitter</Anchor>
      <Anchor href="https://github.com/philipbulley">GitHub</Anchor>
      <Anchor href="https://stackoverflow.com/users/619602/philip-bulley">
        Stack Overflow
      </Anchor>
    </ContactText>
  </Grid>
);

export default Contact;

const ContactText = posed(styled.div`
  text-align: right;
  grid-column: span 12;
  color: ${({ theme }) => theme.color.two};

  ${query.md} {
    grid-column: 9 / span 4;
  }
`)({
  init: {},
  show: { staggerChildren: 100 },
});

const Anchor = posed(styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.font.weightDemiBold};
  color: ${({ theme }) => theme.color.accent};
  margin: 0 0 40px 0;
  text-decoration: none;

  ${({ big }) =>
    big &&
    css`
      font-size: 24px;
      margin: 0 0 60px 0;
      font-weight: ${({ theme }) => theme.font.weightBold};
    `};
`)({
  init: { opacity: 0 },
  show: { opacity: 1 },
});
