import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDynamicPluginComponent } from './data/hooks';
import { pluginShape } from './data/shapes';
import { loadPluginComponent } from './data/utils';

function PluginComponent({ plugin, fallback, ...props }) {
  if (!plugin) {
    return null;
  }
  const [comp, setComponent] = useState({ component:null });
  useEffect(() => {
    if (comp.component == null) {
      (async () => {
        const pc = await loadPluginComponent(plugin)();
        setComponent({
          component: pc.default
        });
      })();
    }
  }, []);
  const Component = comp.component;
  return (
    // <Suspense fallback={<div>fallback</div>}>
    Component && <Component {...props} {...plugin.props} />
    // </Suspense>
  );
}

PluginComponent.propTypes = {
  plugin: pluginShape,
  fallback: PropTypes.node,
};

PluginComponent.defaultProps = {
  plugin: null,
  fallback: null,
};

export default PluginComponent;
