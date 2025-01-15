import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_identifier,
  useTheme_default
} from "./chunk-K2CWTRL5.js";
import {
  require_react
} from "./chunk-L3FOL4I5.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
init_defaultTheme();
init_identifier();
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

export {
  useTheme
};
//# sourceMappingURL=chunk-F22JAWEP.js.map
