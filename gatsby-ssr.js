/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// export { default as wrapPageElement } from './wrap-page-element' causes gatsby build to fail?!?!
import _wrapPageElement from './wrap-page-element';
export const wrapPageElement = _wrapPageElement;
