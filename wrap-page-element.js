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

const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  const { pathname } = props.location;

  const themeOverride =
    themeOverrides[
      Object.keys(themeOverrides).find(key => pathname.startsWith(key))
      ];
  return (
    <div>
      <ThemeProvider theme={themeOverride || theme}>
        <>
          <GlobalStyle />
          <Layout {...props}>{element}</Layout>
        </>
      </ThemeProvider>
    </div>
  );
};

export default wrapPageElement;
