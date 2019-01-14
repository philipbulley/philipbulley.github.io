import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Project = styled.div`
  margin: 0 0 100px;

  a {
    color: ${({ theme }) => theme.color.accent};
    font-weight: ${({ theme }) => theme.font.weightDemiBold};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.accent};
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
