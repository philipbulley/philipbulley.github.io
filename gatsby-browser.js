/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import posed from 'react-pose';
import Layout from './src/components/layout';
import GlobalStyle from './src/shared/global-style';
import theme from './src/shared/theme';
import { ThemeProvider } from 'styled-components';

const LayoutPosed = posed(Layout)({
  enter: {},
  exit: {},
});

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  console.log('replaceComponentRenderer:', { component }, { props });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <LayoutPosed pose={props.location.pathname} {...props}>
            {React.createElement(component, props)}
          </LayoutPosed>
        </>
      </ThemeProvider>
    </div>
  );
};
