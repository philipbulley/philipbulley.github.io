import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Grid } from 'react-styled-flexboxgrid';
import Header from './header';
import './layout.css';
import Nav from './nav';
import Bio from './bio';
import { ThemeProvider } from 'styled-components';
import theme from '../shared/theme';

const Layout = ({ children, hostRef, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div ref={hostRef}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Bio />
            <Grid>
              <Nav currentPath={location.pathname} />
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                {children}
              </div>
            </Grid>
          </>
        </ThemeProvider>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
