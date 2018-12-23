import React from 'react';
import styled from 'styled-components';
import query from '../shared/media';
import Grid from '../shared/grid/grid';
import posed from 'react-pose';

const About = () => (
  <Container initialPose="init" pose="show">
    <Grid>
      <SubHeading>A love for application development.</SubHeading>
      <SubHeading>A passion for user interface.</SubHeading>
      <AboutText>
        <Paragraph>
          With 19 years of industry experience, I've developed a keen eye for
          visual design and an intuitive approach to application architecture. I
          apply well known software development patterns whilst being an
          advocate of KISS, DRY and YAGNI principles.
        </Paragraph>

        <Paragraph>
          My career spans the entire stack from dev ops to back-end to front-end
          to UX design. Whilst I have a solid full-stack understanding, I’m most
          at home working on the front-end at the intersection of clean
          performant code and effective, engaging user interface design.
        </Paragraph>

        <Paragraph>
          During my career, my advertising work has won awards at the highest
          level; I’ve co-founded two tech start-ups;{' '}
          <strong>
            most recently, I’ve relished the challenges of working within
            complex FinTech domains, delivering apps that shine in both form and
            function.
          </strong>
        </Paragraph>
      </AboutText>
    </Grid>
  </Container>
);

export default About;

const SubHeading = posed(styled.h2`
  grid-column: span 12;
  font-size: 24px;
  margin: 0 0 20px 0;

  &:last-of-type {
    margin: 0 0 60px 0;
  }

  ${query.lg} {
    grid-column: 3 / span 7;
  }
`)({
  init: { opacity: 0 },
  show: { opacity: 1 },
});

const AboutText = styled.div`
  grid-column: span 12;
  color: ${({ theme }) => theme.color.two};

  ${query.sm} {
    grid-column: 6 / span 5;
  }

  strong {
    color: ${({ theme }) => theme.color.one};
    font-weight: ${({ theme }) => theme.font.weightDemiBold};
  }
`;

const Paragraph = posed.p({
  init: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 100, duration: 1000, ease: 'linear' } },
});

const Container = posed.p({
  init: {},
  show: { staggerChildren: 300 },
});
