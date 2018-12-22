import React from 'react';
import Layout from './src/components/layout';
import GlobalStyle from './src/shared/global-style';
import theme, {
  themeBlueAccent,
  themeRedAccent,
  themeYellowAccent,
} from './src/shared/theme';
import { ThemeProvider } from 'styled-components';

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
          <Layout {...props}>
            {React.createElement(component, props)}
          </Layout>
        </>
      </ThemeProvider>
    </div>
  );
};
