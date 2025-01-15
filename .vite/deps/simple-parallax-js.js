import {
  require_react
} from "./chunk-L3FOL4I5.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/simple-parallax-js/dist/react/simpleParallax.es.js
var import_react = __toESM(require_react());
var d = class _d {
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.animationFrameId = null;
  }
  static getInstance() {
    return _d.instance || (_d.instance = new _d()), _d.instance;
  }
  register(t) {
    this.callbacks.add(t), this.animationFrameId === null && this.start();
  }
  unregister(t) {
    this.callbacks.delete(t), this.callbacks.size === 0 && this.animationFrameId !== null && this.stop();
  }
  start() {
    const t = () => {
      this.callbacks.forEach((n) => n()), this.animationFrameId = requestAnimationFrame(t);
    };
    this.animationFrameId = requestAnimationFrame(t);
  }
  stop() {
    this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
  }
};
var S = d.getInstance();
var A = (e) => {
  const [t, n] = (0, import_react.useState)(0), [a, i] = (0, import_react.useState)(false), r = (0, import_react.useRef)(null), s = (0, import_react.useCallback)(() => {
    r.current && n(r.current.height);
  }, []);
  return (0, import_react.useEffect)(() => {
    const u = () => {
      i(true), s();
    }, c = r.current;
    return c && (c.complete ? u() : c.addEventListener("load", u)), window.addEventListener("resize", s), () => {
      c && c.removeEventListener("load", u), window.removeEventListener("resize", s);
    };
  }, [e, s]), [r, t, a];
};
var j = (e, t) => e * t - e;
var q = (e, t) => Math.ceil(e / 100 * t - t / 2);
var B = (e, t) => {
  const { top: n, height: a } = e, i = -a, r = t;
  if (n < i)
    return 0;
  if (n > r)
    return 100;
  const s = (n - i) / (r - i) * 100;
  return Math.min(Math.max(s, 0), 100);
};
var G = (e, t) => {
  switch (t) {
    case "up":
      return `0, ${e}px, 0`;
    case "right":
      return `${-e}px, 0, 0`;
    case "down":
      return `0, ${-e}px, 0`;
    case "left":
      return `${e}px, 0, 0`;
    case "up left":
      return `${e}px, ${e}px, 0`;
    case "up right":
      return `${-e}px, ${e}px, 0`;
    case "down left":
      return `${e}px, ${-e}px, 0`;
    case "left right":
      return `${-e}px, ${-e}px, 0`;
    default:
      return `0, ${e}px, 0`;
  }
};
var O = () => {
  const [e, t] = (0, import_react.useState)(null);
  return (0, import_react.useEffect)(() => {
    const n = () => {
      t(window.innerHeight);
    };
    if (typeof window < "u")
      return t(window.innerHeight), window.addEventListener("resize", n), () => {
        window.removeEventListener("resize", n);
      };
  }, []), e;
};
var W = ({
  isLoaded: e,
  imageHeight: t,
  scale: n,
  boundingClientRect: a,
  orientation: i,
  maxTransition: r
}) => {
  const [s, u] = (0, import_react.useState)(0), [c, w] = (0, import_react.useState)(0), [g, x] = (0, import_react.useState)(""), [p, b] = (0, import_react.useState)(0), h = O();
  return (0, import_react.useEffect)(() => {
    if (!e)
      return;
    const l = j(t, n);
    u(l);
  }, [e, t, n]), (0, import_react.useEffect)(() => {
    if (!e || !h || !a)
      return;
    let l = B(a, h);
    r && (l = Math.min(l, 100 - r)), b(l);
  }, [e, a, h]), (0, import_react.useEffect)(() => {
    const l = q(p, s);
    w(l);
  }, [p, s]), (0, import_react.useEffect)(() => {
    const l = G(c, i);
    x(l);
  }, [c, i]), g;
};
var Y = (e = {}) => {
  const [t, n] = (0, import_react.useState)(false), a = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => {
    const i = new IntersectionObserver(
      (s) => {
        const [u] = s;
        u && (u.isIntersecting ? n(true) : n(false));
      },
      {
        ...e
      }
    ), { current: r } = a;
    return r && i.observe(r), () => {
      r && i.unobserve(r);
    };
  }, [e]), [a, t];
};
var D = "/Users/geoffrey/Desktop/perso/simpleParallax.js/src/react/index.tsx";
var _ = ({
  delay: e = 0.4,
  orientation: t = "up",
  scale: n = 1.4,
  overflow: a = false,
  transition: i = "cubic-bezier(0,0,0,1)",
  maxTransition: r = null,
  children: s
}) => {
  var F;
  const u = t ?? "up", c = n ?? 1.2, w = (F = s == null ? void 0 : s.props) == null ? void 0 : F.src, [g, x] = (0, import_react.useState)(false), [p, b] = (0, import_react.useState)(0), [h, l] = (0, import_react.useState)(null), [C, k] = (0, import_react.useState)(""), [T, z] = (0, import_react.useState)(""), [I, L, P] = A(w), [M, E] = Y({
    root: null,
    rootMargin: "0px",
    threshold: Array.from(Array(101).keys(), (m) => m / 100)
  }), R = W({
    isLoaded: P,
    imageHeight: L,
    scale: c,
    boundingClientRect: h,
    orientation: u,
    maxTransition: r
  }), $ = (0, import_react.useCallback)(() => {
    var m;
    if (!(!E && g) && (window.scrollY !== p || !g)) {
      const v = (m = I.current) == null ? void 0 : m.getBoundingClientRect();
      v && l(v), g || x(true), b(window.scrollY);
    }
  }, [p, E, I]);
  (0, import_react.useEffect)(() => {
    let m = `translate3d(${R})`;
    a || (m += ` scale(${c})`), k(m);
  }, [R, c]), (0, import_react.useEffect)(() => {
    !i || !e || z(`transform ${e}s ${i}`);
  }, [i, e]), (0, import_react.useEffect)(() => (S.register($), () => {
    S.unregister($);
  }), [$]);
  const N = import_react.default.isValidElement(s) ? import_react.default.cloneElement(s, {
    style: {
      ...s.props.style ?? {},
      transform: C,
      willChange: "transform",
      transition: T
    },
    ref: I
  }) : null;
  return import_react.default.createElement("div", { ref: M, style: {
    overflow: a ? "visible" : "hidden"
  }, __self: void 0, __source: {
    fileName: D,
    lineNumber: 92,
    columnNumber: 5
  } }, N);
};
export {
  _ as default
};
//# sourceMappingURL=simple-parallax-js.js.map
