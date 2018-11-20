/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import posed from 'react-pose';
import Layout from './src/components/layout';

const LayoutPosed = posed(Layout)({
  enter: {},
  exit: {},
});

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  console.log('replaceComponentRenderer:', { component }, { props });

  return (
    <div>
      {/*<pre>*/}
      {/*replaceComponentRenderer: {props.location.pathname}, pose:{' '}*/}
      {/*{getPose(props.location.pathname)}*/}
      {/*</pre>*/}
      <LayoutPosed pose={props.location.pathname} {...props}>
        {React.createElement(component, props)}
      </LayoutPosed>
    </div>
  );
};
