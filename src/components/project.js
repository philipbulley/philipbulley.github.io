import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const inTiming = '100ms ease-out';
const outTiming = '200ms ease-out';
const Project = styled.div`
  margin: 0 0 100px;

  a {
    display: inline-block;
    position: relative;
    color: ${({ theme }) => theme.color.accent};
    font-weight: ${({ theme }) => theme.font.weightDemiBold};
    text-decoration: none;
    padding: 3px;
    transition: background ${outTiming}, color ${outTiming};

    &:hover {
      color: ${({ theme }) => theme.color.white};
      transition: background ${inTiming}, color ${inTiming};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.color.accent};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform ${outTiming};
    }

    &:hover:before {
      color: ${({ theme }) => theme.color.white};
      transform: scaleX(1);
      transition: transform ${inTiming};
    }
  }
`;
export default Project;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.weightBold};
  margin: 0 0 30px;
`;

export const Paragraph = posed(styled.p`
  margin: 0 0 30px;
`)({
  out: { opacity: 0 },
  in: { opacity: 1 },
});

export const Date = posed(styled.div`
  margin: 0 0 12px;
`)({
  out: { opacity: 0 },
  in: { opacity: 1, transition: { delay: 100 } },
});

export const List = ({ children, ...rest }) => <ul {...rest}>{children}</ul>;

export const ListItem = posed.li({
  out: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 500 } },
});
