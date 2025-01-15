import {
  HTMLElementType,
  exactProp,
  init_utils,
  setRef,
  useEnhancedEffect_default,
  useForkRef
} from "./chunk-Y4SRJ6CW.js";
import {
  require_jsx_runtime
} from "./chunk-DSQISG24.js";
import {
  require_react_dom
} from "./chunk-QNVHP5GG.js";
import {
  require_react
} from "./chunk-L3FOL4I5.js";
import {
  require_prop_types
} from "./chunk-D2UTQ6KG.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/base/Portal/Portal.js
var React = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(React.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return React.cloneElement(children, newProps);
    }
    return (0, import_jsx_runtime.jsx)(React.Fragment, {
      children
    });
  }
  return (0, import_jsx_runtime.jsx)(React.Fragment, {
    children: mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}

export {
  Portal
};
//# sourceMappingURL=chunk-GYWES7VO.js.map
