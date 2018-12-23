import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Nav from './nav';
import Bio from './bio';
import GridGuide from '../shared/grid/guide';
import Footer from './footer';
import styled, { withTheme } from 'styled-components';

const Layout = ({ children, hostRef, location, theme }) => (
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
      <Container ref={hostRef}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Freelance front-end web developer, Philip Bulley, London. TypeScript, JavaScript and React web development.' },
            { name: 'keywords', content: 'Philip Bulley, web developer London, freelance web developer, React, Redux, RxJS, TypeScript, JavaScript' },
            { name: 'theme-color', content: theme.color.accent },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Bio />
          <GridGuide />
          <Nav currentPath={location.pathname} />
          <Main>{children}</Main>
          <Footer />
        </>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default withTheme(Layout);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > * {
    flex: 0 1 auto;
  }
`;

const Main = styled.div`
  flex: 1 0 auto;
`;
