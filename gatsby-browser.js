/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import posed from 'react-pose';
import Layout from './src/components/layout';
import GlobalStyle from './src/shared/global-style';
import theme, {
  themeBlueAccent,
  themeRedAccent,
  themeYellowAccent,
} from './src/shared/theme';
import { ThemeProvider } from 'styled-components';

const LayoutPosed = posed(Layout)({
  enter: {},
  exit: {},
});

const themeOverrides = {
  '/projects': themeBlueAccent,
  '/about': themeYellowAccent,
  '/contact': themeRedAccent,
};

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { pathname } = props.location;
  const { component } = props.pageResources;
  // console.log('replaceComponentRenderer:', { component }, { props });

  const themeOverride =
    themeOverrides[
      Object.keys(themeOverrides).find(key => pathname.startsWith(key))
    ];

  return (
    <div>
      <ThemeProvider theme={themeOverride || theme}>
        <>
          <GlobalStyle />
          <LayoutPosed pose={pathname} {...props}>
            {React.createElement(component, props)}
          </LayoutPosed>
        </>
      </ThemeProvider>
    </div>
  );
};
