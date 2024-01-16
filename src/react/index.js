/**
 * **Import members from `@openedx/frontend-platform/react`**
 *
 * The React module provides a variety of React components, hooks, and contexts for use in an
 * application.
 *
 * @module React
 */

export { default as AppContext } from './AppContext.js';
export { default as AppProvider } from './AppProvider.jsx';
export { default as AuthenticatedPageRoute } from './AuthenticatedPageRoute.js';
export { default as ErrorBoundary } from './ErrorBoundary.js';
export { default as ErrorPage } from './ErrorPage.jsx';
export { default as LoginRedirect } from './LoginRedirect.js';
export { default as PageWrap } from './PageWrap.js';
export { useAppEvent } from './hooks.js';

// Export types too - required for interfaces to be documented by TypeDoc:
/** @typedef {import('./AppContext.js').IAppContext} IAppContext */
