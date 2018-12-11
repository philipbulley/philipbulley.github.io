import React from 'react';
import styled from 'styled-components';
import query from '../shared/media';
import Grid from '../shared/grid/grid';

const About = () => (
  <Grid>
    <SubHeading>A love for application development.</SubHeading>
    <SubHeading>A passion for user interface.</SubHeading>
    <AboutText>
      <p>
        With 19 years of industry experience, I've developed a keen eye for
        visual design and an intuitive approach to application architecture. I
        apply well known software development patterns whilst being an advocate
        of KISS, DRY and YAGNI principles.
      </p>

      <p>
        My career spans the entire stack from dev ops to back-end to front-end
        to UX design. Whilst I have a solid full-stack understanding, I’m most
        at home working on the front-end at the intersection of clean performant
        code and effective, engaging user interface design.
      </p>

      <p>
        During my career, my advertising work has won awards at the highest
        level; I’ve co-founded two tech start-ups;{' '}
        <strong>
          most recently, I’ve relished the challenges of working within complex
          FinTech domains, delivering apps that shine in both form and function.
        </strong>
      </p>
    </AboutText>
  </Grid>
);

export default About;

const SubHeading = styled.h2`
  grid-column: 2 / span 10;
  font-size: 24px;
  margin: 0 0 5px 0;

  &:last-of-type {
    margin: 0 0 60px 0;
  }

  ${query.lg} {
    grid-column: 3 / span 7;
  }
`;

const AboutText = styled.div`
  grid-column: 2 / span 10;
  color: ${({ theme }) => theme.color.two};

  ${query.sm} {
    grid-column: 6 / span 4;
  }

  strong {
    color: ${({ theme }) => theme.color.one};
    font-weight: ${({ theme }) => theme.font.weightDemiBold};
  }
`;
