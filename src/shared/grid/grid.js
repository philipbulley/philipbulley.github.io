import styled, { css } from 'styled-components';
import query, { breakpoint } from '../media';

const Grid = styled.div`
  ${({ debug }) => css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
    height: 100%;
    ${debug &&
      css`
        background-color: #ff880066;
      `};

    ${query.sm} {
      width: ${breakpoint.sm}px;
      margin: 0 auto;
      ${debug &&
        css`
          background-color: #ff00cc66;
        `};
    }

    ${query.md} {
      width: ${breakpoint.md}px;
      margin: 0 auto;
      ${debug &&
        css`
          background-color: #9acd3266;
        `};
    }

    ${query.lg} {
      width: ${breakpoint.lg}px;
      margin: 0 auto;
      ${debug &&
        css`
          background-color: #00bfff66;
        `};
    }
  `};
`;

export default Grid;
