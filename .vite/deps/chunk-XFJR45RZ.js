import {
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps2 as init_useThemeProps,
  require_react_is,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-K2CWTRL5.js";
import {
  require_jsx_runtime
} from "./chunk-DSQISG24.js";
import {
  _extends,
  init_extends
} from "./chunk-Z4UQL4KD.js";
import {
  require_react
} from "./chunk-L3FOL4I5.js";
import {
  require_prop_types
} from "./chunk-D2UTQ6KG.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/BottomNavigation/BottomNavigation.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getBottomNavigationUtilityClass(slot) {
  return generateUtilityClass("MuiBottomNavigation", slot);
}
var bottomNavigationClasses = generateUtilityClasses("MuiBottomNavigation", ["root"]);
var bottomNavigationClasses_default = bottomNavigationClasses;

// node_modules/@mui/material/BottomNavigation/BottomNavigation.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "component", "onChange", "showLabels", "value"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getBottomNavigationUtilityClass, classes);
};
var BottomNavigationRoot = styled_default("div", {
  name: "MuiBottomNavigation",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  height: 56,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));
var BottomNavigation = React.forwardRef(function BottomNavigation2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiBottomNavigation"
  });
  const {
    children,
    className,
    component = "div",
    onChange,
    showLabels = false,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component,
    showLabels
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(BottomNavigationRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: React.Children.map(children, (child, childIndex) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      if (true) {
        if ((0, import_react_is.isFragment)(child)) {
          console.error(["MUI: The BottomNavigation component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
        }
      }
      const childValue = child.props.value === void 0 ? childIndex : child.props.value;
      return React.cloneElement(child, {
        selected: childValue === value,
        showLabel: child.props.showLabel !== void 0 ? child.props.showLabel : showLabels,
        value: childValue,
        onChange
      });
    })
  }));
});
true ? BottomNavigation.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child.
   */
  onChange: import_prop_types.default.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   * @default false
   */
  showLabels: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: import_prop_types.default.any
} : void 0;
var BottomNavigation_default = BottomNavigation;

export {
  getBottomNavigationUtilityClass,
  bottomNavigationClasses_default,
  BottomNavigation_default
};
//# sourceMappingURL=chunk-XFJR45RZ.js.map
