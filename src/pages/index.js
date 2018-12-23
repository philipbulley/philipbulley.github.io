import React from 'react';
import styled from 'styled-components';
import Grid from '../shared/grid/grid';
import posed from 'react-pose';
import query from '../shared/media';

const IndexPage = () => (
  <Container initialPose="init" pose="show">
    <Grid>
      <Paragraph>
        <Badge>Latest</Badge>
        Tier 1 Investment Bank
      </Paragraph>

      <Paragraph>Loves web app dev and user interface</Paragraph>

      <Paragraph>
        <a href="mailto:hello@pb.codes">hello@pb.codes</a>
      </Paragraph>
    </Grid>
  </Container>
);

export default IndexPage;

const Container = posed(styled.div`
  display: none;
  margin-top: -100px;

  ${query.sm} {
    display: block;
  }
`)({
  init: {},
  show: { staggerChildren: 500 },
});

const ParagraphPosed = posed.p({
  init: {
    opacity: 0,
    y: '-5px',
  },
  show: {
    opacity: 1,
    y: '0px',
    transition: { delay: 1000, duration: 1000 },
  },
});

const Paragraph = styled(ParagraphPosed)`
  opacity: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.two};

  &:nth-child(1) {
    grid-column: 1 / span 3;
  }

  &:nth-child(2) {
    grid-column: 6 / span 3;
  }

  &:nth-child(3) {
    text-align: right;
    grid-column: 10 / span 3;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.three};
  color: ${({ theme }) => theme.color.white};
  border-radius: 2px;
  font-size: 13px;
  line-height: 1.5;
  padding: 0 6px;
  margin: 0 5px 0 0;
`;
