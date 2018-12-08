import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Nav from './nav';
import Bio from './bio';
import GridGuide from '../shared/grid/guide';
import Grid from '../shared/grid/grid';

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

        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Bio />
          <GridGuide />
          <Nav currentPath={location.pathname} />
          {children}
        </>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
