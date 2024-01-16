import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext.js';
import PageWrap from './PageWrap.js';
import { getLoginRedirectUrl } from '../auth/index.js';

/**
 * A react-router route that redirects to the login page when the route becomes active and the user
 * is not authenticated.  If the application has been initialized with `requireAuthenticatedUser`
 * false, an authenticatedPageRoute can be used to protect a subset of the application's routes,
 * rather than the entire application.
 *
 * It can optionally accept an override URL to redirect to instead of the login page.
 *
 * Like a `PageWrap`, also calls `sendPageEvent` when the route becomes active.
 *
 * @see PageWrap
 * @see {@link module:frontend-platform/analytics~sendPageEvent}
 * @param {Object} props
 * @param {string} props.redirectUrl The URL anonymous users should be redirected to, rather than
 * viewing the route's contents.
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 */
export default function AuthenticatedPageRoute({ redirectUrl, children }) {
  const { authenticatedUser } = useContext(AppContext);
  if (authenticatedUser === null) {
    const destination = redirectUrl || getLoginRedirectUrl(global.location.href);
    global.location.assign(destination);

    return null;
  }

  return React.createElement(PageWrap, {}, children);
}

AuthenticatedPageRoute.propTypes = {
  redirectUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AuthenticatedPageRoute.defaultProps = {
  redirectUrl: null,
};
