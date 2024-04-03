var Bu = { exports: {} }, br = {}, Hu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt = Symbol.for("react.element"), rc = Symbol.for("react.portal"), lc = Symbol.for("react.fragment"), oc = Symbol.for("react.strict_mode"), ic = Symbol.for("react.profiler"), uc = Symbol.for("react.provider"), sc = Symbol.for("react.context"), ac = Symbol.for("react.forward_ref"), cc = Symbol.for("react.suspense"), fc = Symbol.for("react.memo"), dc = Symbol.for("react.lazy"), Oi = Symbol.iterator;
function pc(e) {
  return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Qu = Object.assign, Ku = {};
function rt(e, n, t) {
  this.props = e, this.context = n, this.refs = Ku, this.updater = t || Wu;
}
rt.prototype.isReactComponent = {};
rt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
rt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yu() {
}
Yu.prototype = rt.prototype;
function jo(e, n, t) {
  this.props = e, this.context = n, this.refs = Ku, this.updater = t || Wu;
}
var Uo = jo.prototype = new Yu();
Uo.constructor = jo;
Qu(Uo, rt.prototype);
Uo.isPureReactComponent = !0;
var Mi = Array.isArray, Xu = Object.prototype.hasOwnProperty, $o = { current: null }, Gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zu(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null)
    for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n)
      Xu.call(n, r) && !Gu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Kt, type: e, key: o, ref: i, props: l, _owner: $o.current };
}
function mc(e, n) {
  return { $$typeof: Kt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kt;
}
function vc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Di = /\/+/g;
function gl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? vc("" + e.key) : n.toString(36);
}
function hr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kt:
          case rc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + gl(i, 0) : r, Mi(l) ? (t = "", e != null && (t = e.replace(Di, "$&/") + "/"), hr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Vo(l) && (l = mc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Di, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Mi(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + gl(o, u);
      i += hr(o, n, t, s, l);
    }
  else if (s = pc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + gl(o, u++), i += hr(o, n, t, s, l);
  else if (o === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function bt(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return hr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function hc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ie = { current: null }, yr = { transition: null }, yc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: yr, ReactCurrentOwner: $o };
T.Children = { map: bt, forEach: function(e, n, t) {
  bt(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return bt(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return bt(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Vo(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = rt;
T.Fragment = lc;
T.Profiler = ic;
T.PureComponent = jo;
T.StrictMode = oc;
T.Suspense = cc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
T.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Qu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = $o.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in n)
      Xu.call(n, s) && !Gu.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Kt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: sc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: uc, _context: e }, e.Consumer = e;
};
T.createElement = Zu;
T.createFactory = function(e) {
  var n = Zu.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: ac, render: e };
};
T.isValidElement = Vo;
T.lazy = function(e) {
  return { $$typeof: dc, _payload: { _status: -1, _result: e }, _init: hc };
};
T.memo = function(e, n) {
  return { $$typeof: fc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = yr.transition;
  yr.transition = {};
  try {
    e();
  } finally {
    yr.transition = n;
  }
};
T.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function(e, n) {
  return ie.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ie.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ie.current.useEffect(e, n);
};
T.useId = function() {
  return ie.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ie.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ie.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ie.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ie.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ie.current.useRef(e);
};
T.useState = function(e) {
  return ie.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ie.current.useTransition();
};
T.version = "18.2.0";
Hu.exports = T;
var Ju = Hu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc = Ju, wc = Symbol.for("react.element"), kc = Symbol.for("react.fragment"), Sc = Object.prototype.hasOwnProperty, Ec = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n)
    Sc.call(n, r) && !Cc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: wc, type: e, key: o, ref: i, props: l, _owner: Ec.current };
}
br.Fragment = kc;
br.jsx = qu;
br.jsxs = qu;
Bu.exports = br;
var Ii = Bu.exports, zr = {}, bu = { exports: {} }, ye = {}, es = { exports: {} }, ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(C, N) {
    var z = C.length;
    C.push(N);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, X = C[H];
        if (0 < l(X, N))
          C[H] = N, C[z] = X, z = H;
        else
          break e;
      }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var N = C[0], z = C.pop();
    if (z !== N) {
      C[0] = z;
      e:
        for (var H = 0, X = C.length, Jt = X >>> 1; H < Jt; ) {
          var vn = 2 * (H + 1) - 1, yl = C[vn], hn = vn + 1, qt = C[hn];
          if (0 > l(yl, z))
            hn < X && 0 > l(qt, yl) ? (C[H] = qt, C[hn] = z, H = hn) : (C[H] = yl, C[vn] = z, H = vn);
          else if (hn < X && 0 > l(qt, z))
            C[H] = qt, C[hn] = z, H = hn;
          else
            break e;
        }
    }
    return N;
  }
  function l(C, N) {
    var z = C.sortIndex - N.sortIndex;
    return z !== 0 ? z : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], v = 1, m = null, p = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= C)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function h(C) {
    if (k = !1, d(C), !w)
      if (t(s) !== null)
        w = !0, vl(E);
      else {
        var N = t(c);
        N !== null && hl(h, N.startTime - C);
      }
  }
  function E(C, N) {
    w = !1, k && (k = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || C && !xe()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = H(m.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? m.callback = X : m === t(s) && r(s), d(N);
        } else
          r(s);
        m = t(s);
      }
      if (m !== null)
        var Jt = !0;
      else {
        var vn = t(c);
        vn !== null && hl(h, vn.startTime - N), Jt = !1;
      }
      return Jt;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var _ = !1, x = null, P = -1, B = 5, L = -1;
  function xe() {
    return !(e.unstable_now() - L < B);
  }
  function it() {
    if (x !== null) {
      var C = e.unstable_now();
      L = C;
      var N = !0;
      try {
        N = x(!0, C);
      } finally {
        N ? ut() : (_ = !1, x = null);
      }
    } else
      _ = !1;
  }
  var ut;
  if (typeof a == "function")
    ut = function() {
      a(it);
    };
  else if (typeof MessageChannel < "u") {
    var Ri = new MessageChannel(), tc = Ri.port2;
    Ri.port1.onmessage = it, ut = function() {
      tc.postMessage(null);
    };
  } else
    ut = function() {
      F(it, 0);
    };
  function vl(C) {
    x = C, _ || (_ = !0, ut());
  }
  function hl(C, N) {
    P = F(function() {
      C(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, vl(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return C();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, N) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var z = p;
    p = C;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(C, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, C) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = z + X, C = { id: v++, callback: N, priorityLevel: C, startTime: z, expirationTime: X, sortIndex: -1 }, z > H ? (C.sortIndex = z, n(c, C), t(s) === null && C === t(c) && (k ? (f(P), P = -1) : k = !0, hl(h, z - H))) : (C.sortIndex = X, n(s, C), w || g || (w = !0, vl(E))), C;
  }, e.unstable_shouldYield = xe, e.unstable_wrapCallback = function(C) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return C.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ns);
es.exports = ns;
var _c = es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts = Ju, he = _c;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rs = /* @__PURE__ */ new Set(), Tt = {};
function Tn(e, n) {
  Zn(e, n), Zn(e + "Capture", n);
}
function Zn(e, n) {
  for (Tt[e] = n, e = 0; e < n.length; e++)
    rs.add(n[e]);
}
var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wl = Object.prototype.hasOwnProperty, xc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fi = {}, ji = {};
function Pc(e) {
  return Wl.call(ji, e) ? !0 : Wl.call(Fi, e) ? !1 : xc.test(e) ? ji[e] = !0 : (Fi[e] = !0, !1);
}
function Nc(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zc(e, n, t, r) {
  if (n === null || typeof n > "u" || Nc(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ue(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new ue(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ao = /[\-:]([a-z])/g;
function Bo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Ao,
    Bo
  );
  b[n] = new ue(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Ao, Bo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Ao, Bo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ho(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (zc(n, t, l, r) && (t = null), r || l === null ? Pc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ye = ts.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, er = Symbol.for("react.element"), On = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), Wo = Symbol.for("react.strict_mode"), Ql = Symbol.for("react.profiler"), ls = Symbol.for("react.provider"), os = Symbol.for("react.context"), Qo = Symbol.for("react.forward_ref"), Kl = Symbol.for("react.suspense"), Yl = Symbol.for("react.suspense_list"), Ko = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), is = Symbol.for("react.offscreen"), Ui = Symbol.iterator;
function st(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, wl;
function ht(e) {
  if (wl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      wl = n && n[1] || "";
    }
  return `
` + wl + e;
}
var kl = !1;
function Sl(e, n) {
  if (!e || kl)
    return "";
  kl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    kl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? ht(e) : "";
}
function Tc(e) {
  switch (e.tag) {
    case 5:
      return ht(e.type);
    case 16:
      return ht("Lazy");
    case 13:
      return ht("Suspense");
    case 19:
      return ht("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Sl(e.type, !1), e;
    case 11:
      return e = Sl(e.type.render, !1), e;
    case 1:
      return e = Sl(e.type, !0), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case On:
      return "Portal";
    case Ql:
      return "Profiler";
    case Wo:
      return "StrictMode";
    case Kl:
      return "Suspense";
    case Yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case os:
        return (e.displayName || "Context") + ".Consumer";
      case ls:
        return (e._context.displayName || "Context") + ".Provider";
      case Qo:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ko:
        return n = e.displayName || null, n !== null ? n : Xl(e.type) || "Memo";
      case Ge:
        n = e._payload, e = e._init;
        try {
          return Xl(e(n));
        } catch {
        }
    }
  return null;
}
function Lc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xl(n);
    case 8:
      return n === Wo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function us(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Rc(e) {
  var n = us(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function nr(e) {
  e._valueTracker || (e._valueTracker = Rc(e));
}
function ss(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = us(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Tr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, n) {
  var t = n.checked;
  return V({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function $i(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = cn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function as(e, n) {
  n = n.checked, n != null && Ho(e, "checked", n, !1);
}
function Zl(e, n) {
  as(e, n);
  var t = cn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? Jl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Jl(e, n.type, cn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Vi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function Jl(e, n, t) {
  (n !== "number" || Tr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var yt = Array.isArray;
function Wn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + cn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ql(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return V({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ai(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (yt(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: cn(t) };
}
function cs(e, n) {
  var t = cn(n.value), r = cn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Bi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bl(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var tr, ds = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (tr = tr || document.createElement("div"), tr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = tr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Lt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var kt = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(kt).forEach(function(e) {
  Oc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), kt[n] = kt[e];
  });
});
function ps(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || kt.hasOwnProperty(e) && kt[e] ? ("" + n).trim() : n + "px";
}
function ms(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = ps(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var Mc = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function eo(e, n) {
  if (n) {
    if (Mc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function no(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var to = null;
function Yo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ro = null, Qn = null, Kn = null;
function Hi(e) {
  if (e = Gt(e)) {
    if (typeof ro != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = ll(n), ro(e.stateNode, e.type, n));
  }
}
function vs(e) {
  Qn ? Kn ? Kn.push(e) : Kn = [e] : Qn = e;
}
function hs() {
  if (Qn) {
    var e = Qn, n = Kn;
    if (Kn = Qn = null, Hi(e), n)
      for (e = 0; e < n.length; e++)
        Hi(n[e]);
  }
}
function ys(e, n) {
  return e(n);
}
function gs() {
}
var El = !1;
function ws(e, n, t) {
  if (El)
    return e(n, t);
  El = !0;
  try {
    return ys(e, n, t);
  } finally {
    El = !1, (Qn !== null || Kn !== null) && (gs(), hs());
  }
}
function Rt(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = ll(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var lo = !1;
if (He)
  try {
    var at = {};
    Object.defineProperty(at, "passive", { get: function() {
      lo = !0;
    } }), window.addEventListener("test", at, at), window.removeEventListener("test", at, at);
  } catch {
    lo = !1;
  }
function Dc(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (v) {
    this.onError(v);
  }
}
var St = !1, Lr = null, Rr = !1, oo = null, Ic = { onError: function(e) {
  St = !0, Lr = e;
} };
function Fc(e, n, t, r, l, o, i, u, s) {
  St = !1, Lr = null, Dc.apply(Ic, arguments);
}
function jc(e, n, t, r, l, o, i, u, s) {
  if (Fc.apply(this, arguments), St) {
    if (St) {
      var c = Lr;
      St = !1, Lr = null;
    } else
      throw Error(y(198));
    Rr || (Rr = !0, oo = c);
  }
}
function Ln(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ks(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function Wi(e) {
  if (Ln(e) !== e)
    throw Error(y(188));
}
function Uc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Ln(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t)
          return Wi(l), e;
        if (o === r)
          return Wi(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Ss(e) {
  return e = Uc(e), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = Es(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var Cs = he.unstable_scheduleCallback, Qi = he.unstable_cancelCallback, $c = he.unstable_shouldYield, Vc = he.unstable_requestPaint, W = he.unstable_now, Ac = he.unstable_getCurrentPriorityLevel, Xo = he.unstable_ImmediatePriority, _s = he.unstable_UserBlockingPriority, Or = he.unstable_NormalPriority, Bc = he.unstable_LowPriority, xs = he.unstable_IdlePriority, el = null, Fe = null;
function Hc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Le = Math.clz32 ? Math.clz32 : Kc, Wc = Math.log, Qc = Math.LN2;
function Kc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Wc(e) / Qc | 0) | 0;
}
var rr = 64, lr = 4194304;
function gt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = gt(u) : (o &= i, o !== 0 && (r = gt(o)));
  } else
    i = t & ~l, i !== 0 ? r = gt(i) : o !== 0 && (r = gt(o));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
    return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Le(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Yc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Le(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = Yc(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function io(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ps() {
  var e = rr;
  return rr <<= 1, !(rr & 4194240) && (rr = 64), e;
}
function Cl(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function Yt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Le(n), e[n] = t;
}
function Gc(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Le(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function Go(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Le(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function Ns(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zs, Zo, Ts, Ls, Rs, uo = !1, or = [], nn = null, tn = null, rn = null, Ot = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Je = [], Zc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ki(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ot.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mt.delete(n.pointerId);
  }
}
function ct(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = Gt(n), n !== null && Zo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Jc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return nn = ct(nn, e, n, t, r, l), !0;
    case "dragenter":
      return tn = ct(tn, e, n, t, r, l), !0;
    case "mouseover":
      return rn = ct(rn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ot.set(o, ct(Ot.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Mt.set(o, ct(Mt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Os(e) {
  var n = wn(e.target);
  if (n !== null) {
    var t = Ln(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = ks(t), n !== null) {
          e.blockedOn = n, Rs(e.priority, function() {
            Ts(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = so(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      to = r, t.target.dispatchEvent(r), to = null;
    } else
      return n = Gt(t), n !== null && Zo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Yi(e, n, t) {
  gr(e) && t.delete(n);
}
function qc() {
  uo = !1, nn !== null && gr(nn) && (nn = null), tn !== null && gr(tn) && (tn = null), rn !== null && gr(rn) && (rn = null), Ot.forEach(Yi), Mt.forEach(Yi);
}
function ft(e, n) {
  e.blockedOn === n && (e.blockedOn = null, uo || (uo = !0, he.unstable_scheduleCallback(he.unstable_NormalPriority, qc)));
}
function Dt(e) {
  function n(l) {
    return ft(l, e);
  }
  if (0 < or.length) {
    ft(or[0], e);
    for (var t = 1; t < or.length; t++) {
      var r = or[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && ft(nn, e), tn !== null && ft(tn, e), rn !== null && ft(rn, e), Ot.forEach(n), Mt.forEach(n), t = 0; t < Je.length; t++)
    r = Je[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && (t = Je[0], t.blockedOn === null); )
    Os(t), t.blockedOn === null && Je.shift();
}
var Yn = Ye.ReactCurrentBatchConfig, Dr = !0;
function bc(e, n, t, r) {
  var l = O, o = Yn.transition;
  Yn.transition = null;
  try {
    O = 1, Jo(e, n, t, r);
  } finally {
    O = l, Yn.transition = o;
  }
}
function ef(e, n, t, r) {
  var l = O, o = Yn.transition;
  Yn.transition = null;
  try {
    O = 4, Jo(e, n, t, r);
  } finally {
    O = l, Yn.transition = o;
  }
}
function Jo(e, n, t, r) {
  if (Dr) {
    var l = so(e, n, t, r);
    if (l === null)
      Ml(e, n, r, Ir, t), Ki(e, r);
    else if (Jc(l, e, n, t, r))
      r.stopPropagation();
    else if (Ki(e, r), n & 4 && -1 < Zc.indexOf(e)) {
      for (; l !== null; ) {
        var o = Gt(l);
        if (o !== null && zs(o), o = so(e, n, t, r), o === null && Ml(e, n, r, Ir, t), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Ml(e, n, r, null, t);
  }
}
var Ir = null;
function so(e, n, t, r) {
  if (Ir = null, e = Yo(r), e = wn(e), e !== null)
    if (n = Ln(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = ks(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return Ir = e, null;
}
function Ms(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ac()) {
        case Xo:
          return 1;
        case _s:
          return 4;
        case Or:
        case Bc:
          return 16;
        case xs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var be = null, qo = null, wr = null;
function Ds() {
  if (wr)
    return wr;
  var e, n = qo, t = n.length, r, l = "value" in be ? be.value : be.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++)
    ;
  return wr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function kr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ir() {
  return !0;
}
function Xi() {
  return !1;
}
function ge(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ir : Xi, this.isPropagationStopped = Xi, this;
  }
  return V(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ir);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ir);
  }, persist: function() {
  }, isPersistent: ir }), n;
}
var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bo = ge(lt), Xt = V({}, lt, { view: 0, detail: 0 }), nf = ge(Xt), _l, xl, dt, nl = V({}, Xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ei, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== dt && (dt && e.type === "mousemove" ? (_l = e.screenX - dt.screenX, xl = e.screenY - dt.screenY) : xl = _l = 0, dt = e), _l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xl;
} }), Gi = ge(nl), tf = V({}, nl, { dataTransfer: 0 }), rf = ge(tf), lf = V({}, Xt, { relatedTarget: 0 }), Pl = ge(lf), of = V({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uf = ge(of), sf = V({}, lt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), af = ge(sf), cf = V({}, lt, { data: 0 }), Zi = ge(cf), ff = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, df = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, pf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function mf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = pf[e]) ? !!n[e] : !1;
}
function ei() {
  return mf;
}
var vf = V({}, Xt, { key: function(e) {
  if (e.key) {
    var n = ff[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ei, charCode: function(e) {
  return e.type === "keypress" ? kr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hf = ge(vf), yf = V({}, nl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ji = ge(yf), gf = V({}, Xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ei }), wf = ge(gf), kf = V({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sf = ge(kf), Ef = V({}, nl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Cf = ge(Ef), _f = [9, 13, 27, 32], ni = He && "CompositionEvent" in window, Et = null;
He && "documentMode" in document && (Et = document.documentMode);
var xf = He && "TextEvent" in window && !Et, Is = He && (!ni || Et && 8 < Et && 11 >= Et), qi = " ", bi = !1;
function Fs(e, n) {
  switch (e) {
    case "keyup":
      return _f.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function js(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Pf(e, n) {
  switch (e) {
    case "compositionend":
      return js(n);
    case "keypress":
      return n.which !== 32 ? null : (bi = !0, qi);
    case "textInput":
      return e = n.data, e === qi && bi ? null : e;
    default:
      return null;
  }
}
function Nf(e, n) {
  if (Dn)
    return e === "compositionend" || !ni && Fs(e, n) ? (e = Ds(), wr = qo = be = null, Dn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Is && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var zf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function eu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!zf[e.type] : n === "textarea";
}
function Us(e, n, t, r) {
  vs(r), n = Fr(n, "onChange"), 0 < n.length && (t = new bo("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Ct = null, It = null;
function Tf(e) {
  Gs(e, 0);
}
function tl(e) {
  var n = jn(e);
  if (ss(n))
    return e;
}
function Lf(e, n) {
  if (e === "change")
    return n;
}
var $s = !1;
if (He) {
  var Nl;
  if (He) {
    var zl = "oninput" in document;
    if (!zl) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"), zl = typeof nu.oninput == "function";
    }
    Nl = zl;
  } else
    Nl = !1;
  $s = Nl && (!document.documentMode || 9 < document.documentMode);
}
function tu() {
  Ct && (Ct.detachEvent("onpropertychange", Vs), It = Ct = null);
}
function Vs(e) {
  if (e.propertyName === "value" && tl(It)) {
    var n = [];
    Us(n, It, e, Yo(e)), ws(Tf, n);
  }
}
function Rf(e, n, t) {
  e === "focusin" ? (tu(), Ct = n, It = t, Ct.attachEvent("onpropertychange", Vs)) : e === "focusout" && tu();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return tl(It);
}
function Mf(e, n) {
  if (e === "click")
    return tl(n);
}
function Df(e, n) {
  if (e === "input" || e === "change")
    return tl(n);
}
function If(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Oe = typeof Object.is == "function" ? Object.is : If;
function Ft(e, n) {
  if (Oe(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Wl.call(n, l) || !Oe(e[l], n[l]))
      return !1;
  }
  return !0;
}
function ru(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function lu(e, n) {
  var t = ru(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ru(t);
  }
}
function As(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? As(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Bs() {
  for (var e = window, n = Tr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = Tr(e.document);
  }
  return n;
}
function ti(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Ff(e) {
  var n = Bs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && As(t.ownerDocument.documentElement, t)) {
    if (r !== null && ti(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = lu(t, o);
        var i = lu(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var jf = He && "documentMode" in document && 11 >= document.documentMode, In = null, ao = null, _t = null, co = !1;
function ou(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  co || In == null || In !== Tr(r) || (r = In, "selectionStart" in r && ti(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _t && Ft(_t, r) || (_t = r, r = Fr(ao, "onSelect"), 0 < r.length && (n = new bo("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = In)));
}
function ur(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Fn = { animationend: ur("Animation", "AnimationEnd"), animationiteration: ur("Animation", "AnimationIteration"), animationstart: ur("Animation", "AnimationStart"), transitionend: ur("Transition", "TransitionEnd") }, Tl = {}, Hs = {};
He && (Hs = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function rl(e) {
  if (Tl[e])
    return Tl[e];
  if (!Fn[e])
    return e;
  var n = Fn[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in Hs)
      return Tl[e] = n[t];
  return e;
}
var Ws = rl("animationend"), Qs = rl("animationiteration"), Ks = rl("animationstart"), Ys = rl("transitionend"), Xs = /* @__PURE__ */ new Map(), iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, n) {
  Xs.set(e, n), Tn(n, [e]);
}
for (var Ll = 0; Ll < iu.length; Ll++) {
  var Rl = iu[Ll], Uf = Rl.toLowerCase(), $f = Rl[0].toUpperCase() + Rl.slice(1);
  dn(Uf, "on" + $f);
}
dn(Ws, "onAnimationEnd");
dn(Qs, "onAnimationIteration");
dn(Ks, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Ys, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));
function uu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, jc(r, n, void 0, e), e.currentTarget = null;
}
function Gs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          uu(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          uu(l, u, c), o = s;
        }
    }
  }
  if (Rr)
    throw e = oo, Rr = !1, oo = null, e;
}
function D(e, n) {
  var t = n[ho];
  t === void 0 && (t = n[ho] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (Zs(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), Zs(t, e, r, n);
}
var sr = "_reactListening" + Math.random().toString(36).slice(2);
function jt(e) {
  if (!e[sr]) {
    e[sr] = !0, rs.forEach(function(t) {
      t !== "selectionchange" && (Vf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[sr] || (n[sr] = !0, Ol("selectionchange", !1, n));
  }
}
function Zs(e, n, t, r) {
  switch (Ms(n)) {
    case 1:
      var l = bc;
      break;
    case 4:
      l = ef;
      break;
    default:
      l = Jo;
  }
  t = l.bind(null, n, t, e), l = void 0, !lo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Ml(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = wn(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  ws(function() {
    var c = o, v = Yo(t), m = [];
    e: {
      var p = Xs.get(e);
      if (p !== void 0) {
        var g = bo, w = e;
        switch (e) {
          case "keypress":
            if (kr(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = hf;
            break;
          case "focusin":
            w = "focus", g = Pl;
            break;
          case "focusout":
            w = "blur", g = Pl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Pl;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Gi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = wf;
            break;
          case Ws:
          case Qs:
          case Ks:
            g = uf;
            break;
          case Ys:
            g = Sf;
            break;
          case "scroll":
            g = nf;
            break;
          case "wheel":
            g = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ji;
        }
        var k = (n & 4) !== 0, F = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var h = d.stateNode;
          if (d.tag === 5 && h !== null && (d = h, f !== null && (h = Rt(a, f), h != null && k.push(Ut(a, h, d)))), F)
            break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, t, v), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== to && (w = t.relatedTarget || t.fromElement) && (wn(w) || w[We]))
          break e;
        if ((g || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? wn(w) : null, w !== null && (F = Ln(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = Gi, h = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = Ji, h = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? p : jn(g), d = w == null ? p : jn(w), p = new k(h, a + "leave", g, t, v), p.target = F, p.relatedTarget = d, h = null, wn(v) === c && (k = new k(f, a + "enter", w, t, v), k.target = d, k.relatedTarget = F, h = k), F = h, g && w)
            n: {
              for (k = g, f = w, a = 0, d = k; d; d = Rn(d))
                a++;
              for (d = 0, h = f; h; h = Rn(h))
                d++;
              for (; 0 < a - d; )
                k = Rn(k), a--;
              for (; 0 < d - a; )
                f = Rn(f), d--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate)
                  break n;
                k = Rn(k), f = Rn(f);
              }
              k = null;
            }
          else
            k = null;
          g !== null && su(m, p, g, k, !1), w !== null && F !== null && su(m, F, w, k, !0);
        }
      }
      e: {
        if (p = c ? jn(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = Lf;
        else if (eu(p))
          if ($s)
            E = Df;
          else {
            E = Of;
            var _ = Rf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Mf);
        if (E && (E = E(e, c))) {
          Us(m, E, t, v);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && Jl(p, "number", p.value);
      }
      switch (_ = c ? jn(c) : window, e) {
        case "focusin":
          (eu(_) || _.contentEditable === "true") && (In = _, ao = c, _t = null);
          break;
        case "focusout":
          _t = ao = In = null;
          break;
        case "mousedown":
          co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          co = !1, ou(m, t, v);
          break;
        case "selectionchange":
          if (jf)
            break;
        case "keydown":
        case "keyup":
          ou(m, t, v);
      }
      var x;
      if (ni)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Dn ? Fs(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Is && t.locale !== "ko" && (Dn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Dn && (x = Ds()) : (be = v, qo = "value" in be ? be.value : be.textContent, Dn = !0)), _ = Fr(c, P), 0 < _.length && (P = new Zi(P, e, null, t, v), m.push({ event: P, listeners: _ }), x ? P.data = x : (x = js(t), x !== null && (P.data = x)))), (x = xf ? Pf(e, t) : Nf(e, t)) && (c = Fr(c, "onBeforeInput"), 0 < c.length && (v = new Zi("onBeforeInput", "beforeinput", null, t, v), m.push({ event: v, listeners: c }), v.data = x));
    }
    Gs(m, n);
  });
}
function Ut(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Fr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Rt(e, t), o != null && r.unshift(Ut(e, o, l)), o = Rt(e, n), o != null && r.push(Ut(e, o, l))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function su(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Rt(t, o), s != null && i.unshift(Ut(t, s, u))) : l || (s = Rt(t, o), s != null && i.push(Ut(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Af = /\r\n?/g, Bf = /\u0000|\uFFFD/g;
function au(e) {
  return (typeof e == "string" ? e : "" + e).replace(Af, `
`).replace(Bf, "");
}
function ar(e, n, t) {
  if (n = au(n), au(e) !== n && t)
    throw Error(y(425));
}
function jr() {
}
var fo = null, po = null;
function mo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var vo = typeof setTimeout == "function" ? setTimeout : void 0, Hf = typeof clearTimeout == "function" ? clearTimeout : void 0, cu = typeof Promise == "function" ? Promise : void 0, Wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof cu < "u" ? function(e) {
  return cu.resolve(null).then(e).catch(Qf);
} : vo;
function Qf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Dl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Dt(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Dt(n);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function fu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ot = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ot, $t = "__reactProps$" + ot, We = "__reactContainer$" + ot, ho = "__reactEvents$" + ot, Kf = "__reactListeners$" + ot, Yf = "__reactHandles$" + ot;
function wn(e) {
  var n = e[Ie];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[We] || t[Ie]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = fu(e); e !== null; ) {
          if (t = e[Ie])
            return t;
          e = fu(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function Gt(e) {
  return e = e[Ie] || e[We], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function ll(e) {
  return e[$t] || null;
}
var yo = [], Un = -1;
function pn(e) {
  return { current: e };
}
function I(e) {
  0 > Un || (e.current = yo[Un], yo[Un] = null, Un--);
}
function M(e, n) {
  Un++, yo[Un] = e.current, e.current = n;
}
var fn = {}, re = pn(fn), ce = pn(!1), _n = fn;
function Jn(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t)
    l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function fe(e) {
  return e = e.childContextTypes, e != null;
}
function Ur() {
  I(ce), I(re);
}
function du(e, n, t) {
  if (re.current !== fn)
    throw Error(y(168));
  M(re, n), M(ce, t);
}
function Js(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, Lc(e) || "Unknown", l));
  return V({}, t, r);
}
function $r(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fn, _n = re.current, M(re, e), M(ce, ce.current), !0;
}
function pu(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = Js(e, n, _n), r.__reactInternalMemoizedMergedChildContext = e, I(ce), I(re), M(re, e)) : I(ce), M(ce, t);
}
var $e = null, ol = !1, Il = !1;
function qs(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function Xf(e) {
  ol = !0, qs(e);
}
function mn() {
  if (!Il && $e !== null) {
    Il = !0;
    var e = 0, n = O;
    try {
      var t = $e;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $e = null, ol = !1;
    } catch (l) {
      throw $e !== null && ($e = $e.slice(e + 1)), Cs(Xo, mn), l;
    } finally {
      O = n, Il = !1;
    }
  }
  return null;
}
var $n = [], Vn = 0, Vr = null, Ar = 0, we = [], ke = 0, xn = null, Ve = 1, Ae = "";
function yn(e, n) {
  $n[Vn++] = Ar, $n[Vn++] = Vr, Vr = e, Ar = n;
}
function bs(e, n, t) {
  we[ke++] = Ve, we[ke++] = Ae, we[ke++] = xn, xn = e;
  var r = Ve;
  e = Ae;
  var l = 32 - Le(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Le(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Le(n) + l | t << l | r, Ae = o + e;
  } else
    Ve = 1 << o | t << l | r, Ae = e;
}
function ri(e) {
  e.return !== null && (yn(e, 1), bs(e, 1, 0));
}
function li(e) {
  for (; e === Vr; )
    Vr = $n[--Vn], $n[Vn] = null, Ar = $n[--Vn], $n[Vn] = null;
  for (; e === xn; )
    xn = we[--ke], we[ke] = null, Ae = we[--ke], we[ke] = null, Ve = we[--ke], we[ke] = null;
}
var ve = null, me = null, j = !1, Te = null;
function ea(e, n) {
  var t = Se(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function mu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, me = ln(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, me = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = xn !== null ? { id: Ve, overflow: Ae } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Se(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, me = null, !0) : !1;
    default:
      return !1;
  }
}
function go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wo(e) {
  if (j) {
    var n = me;
    if (n) {
      var t = n;
      if (!mu(e, n)) {
        if (go(e))
          throw Error(y(418));
        n = ln(t.nextSibling);
        var r = ve;
        n && mu(e, n) ? ea(r, t) : (e.flags = e.flags & -4097 | 2, j = !1, ve = e);
      }
    } else {
      if (go(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, j = !1, ve = e;
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function cr(e) {
  if (e !== ve)
    return !1;
  if (!j)
    return vu(e), j = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !mo(e.type, e.memoizedProps)), n && (n = me)) {
    if (go(e))
      throw na(), Error(y(418));
    for (; n; )
      ea(e, n), n = ln(n.nextSibling);
  }
  if (vu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = ln(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else
    me = ve ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = me; e; )
    e = ln(e.nextSibling);
}
function qn() {
  me = ve = null, j = !1;
}
function oi(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var Gf = Ye.ReactCurrentBatchConfig;
function Ne(e, n) {
  if (e && e.defaultProps) {
    n = V({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Br = pn(null), Hr = null, An = null, ii = null;
function ui() {
  ii = An = Hr = null;
}
function si(e) {
  var n = Br.current;
  I(Br), e._currentValue = n;
}
function ko(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Xn(e, n) {
  Hr = e, ii = An = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ae = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (ii !== e)
    if (e = { context: e, memoizedValue: n, next: null }, An === null) {
      if (Hr === null)
        throw Error(y(308));
      An = e, Hr.dependencies = { lanes: 0, firstContext: e };
    } else
      An = An.next = e;
  return n;
}
var kn = null;
function ai(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function ta(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, ai(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Qe(e, r);
}
function Qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Ze = !1;
function ci(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ra(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Be(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function on(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Qe(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, ai(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Qe(e, t);
}
function Sr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Go(e, t);
  }
}
function hu(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else
      l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Wr(e, n, t, r) {
  var l = e.updateQueue;
  Ze = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = c : u.next = c, v.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, v = c = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        v !== null && (v = v.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = n, g = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null)
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              Ze = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (c = v = g, s = m) : v = v.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = v, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else
      o === null && (l.shared.lanes = 0);
    Nn |= i, e.lanes = i, e.memoizedState = m;
  }
}
function yu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var la = new ts.Component().refs;
function So(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : V({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var il = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ln(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = sn(e), o = Be(r, l);
  o.payload = n, t != null && (o.callback = t), n = on(e, o, l), n !== null && (Re(n, e, l, r), Sr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = sn(e), o = Be(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = on(e, o, l), n !== null && (Re(n, e, l, r), Sr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = sn(e), l = Be(t, r);
  l.tag = 2, n != null && (l.callback = n), n = on(e, l, r), n !== null && (Re(n, e, r, t), Sr(n, e, r));
} };
function gu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Ft(t, r) || !Ft(l, o) : !0;
}
function oa(e, n, t) {
  var r = !1, l = fn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (l = fe(n) ? _n : re.current, r = n.contextTypes, o = (r = r != null) ? Jn(e, l) : fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = il, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function wu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && il.enqueueReplaceState(n, n.state, null);
}
function Eo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = la, ci(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ce(o) : (o = fe(n) ? _n : re.current, l.context = Jn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (So(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && il.enqueueReplaceState(l, l.state, null), Wr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function pt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        u === la && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function fr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function ku(e) {
  var n = e._init;
  return n(e._payload);
}
function ia(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = an(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, h) {
    return a === null || a.tag !== 6 ? (a = Bl(d, f.mode, h), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, h) {
    var E = d.type;
    return E === Mn ? v(f, a, d.props.children, h, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ge && ku(E) === a.type) ? (h = l(a, d.props), h.ref = pt(f, a, d), h.return = f, h) : (h = Nr(d.type, d.key, d.props, null, f.mode, h), h.ref = pt(f, a, d), h.return = f, h);
  }
  function c(f, a, d, h) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Hl(d, f.mode, h), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function v(f, a, d, h, E) {
    return a === null || a.tag !== 7 ? (a = Cn(d, f.mode, h, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Bl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case er:
          return d = Nr(a.type, a.key, a.props, null, f.mode, d), d.ref = pt(f, null, a), d.return = f, d;
        case On:
          return a = Hl(a, f.mode, d), a.return = f, a;
        case Ge:
          var h = a._init;
          return m(f, h(a._payload), d);
      }
      if (yt(a) || st(a))
        return a = Cn(a, f.mode, d, null), a.return = f, a;
      fr(f, a);
    }
    return null;
  }
  function p(f, a, d, h) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case er:
          return d.key === E ? s(f, a, d, h) : null;
        case On:
          return d.key === E ? c(f, a, d, h) : null;
        case Ge:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            h
          );
      }
      if (yt(d) || st(d))
        return E !== null ? null : v(f, a, d, h, null);
      fr(f, d);
    }
    return null;
  }
  function g(f, a, d, h, E) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return f = f.get(d) || null, u(a, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case er:
          return f = f.get(h.key === null ? d : h.key) || null, s(a, f, h, E);
        case On:
          return f = f.get(h.key === null ? d : h.key) || null, c(a, f, h, E);
        case Ge:
          var _ = h._init;
          return g(f, a, d, _(h._payload), E);
      }
      if (yt(h) || st(h))
        return f = f.get(d) || null, v(a, f, h, E, null);
      fr(a, h);
    }
    return null;
  }
  function w(f, a, d, h) {
    for (var E = null, _ = null, x = a, P = a = 0, B = null; x !== null && P < d.length; P++) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var L = p(f, x, d[P], h);
      if (L === null) {
        x === null && (x = B);
        break;
      }
      e && x && L.alternate === null && n(f, x), a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L, x = B;
    }
    if (P === d.length)
      return t(f, x), j && yn(f, P), E;
    if (x === null) {
      for (; P < d.length; P++)
        x = m(f, d[P], h), x !== null && (a = o(x, a, P), _ === null ? E = x : _.sibling = x, _ = x);
      return j && yn(f, P), E;
    }
    for (x = r(f, x); P < d.length; P++)
      B = g(x, f, P, d[P], h), B !== null && (e && B.alternate !== null && x.delete(B.key === null ? P : B.key), a = o(B, a, P), _ === null ? E = B : _.sibling = B, _ = B);
    return e && x.forEach(function(xe) {
      return n(f, xe);
    }), j && yn(f, P), E;
  }
  function k(f, a, d, h) {
    var E = st(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var _ = E = null, x = a, P = a = 0, B = null, L = d.next(); x !== null && !L.done; P++, L = d.next()) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var xe = p(f, x, L.value, h);
      if (xe === null) {
        x === null && (x = B);
        break;
      }
      e && x && xe.alternate === null && n(f, x), a = o(xe, a, P), _ === null ? E = xe : _.sibling = xe, _ = xe, x = B;
    }
    if (L.done)
      return t(
        f,
        x
      ), j && yn(f, P), E;
    if (x === null) {
      for (; !L.done; P++, L = d.next())
        L = m(f, L.value, h), L !== null && (a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
      return j && yn(f, P), E;
    }
    for (x = r(f, x); !L.done; P++, L = d.next())
      L = g(x, f, P, L.value, h), L !== null && (e && L.alternate !== null && x.delete(L.key === null ? P : L.key), a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
    return e && x.forEach(function(it) {
      return n(f, it);
    }), j && yn(f, P), E;
  }
  function F(f, a, d, h) {
    if (typeof d == "object" && d !== null && d.type === Mn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case er:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Mn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ge && ku(E) === _.type) {
                  t(f, _.sibling), a = l(_, d.props), a.ref = pt(f, _, d), a.return = f, f = a;
                  break e;
                }
                t(f, _);
                break;
              } else
                n(f, _);
              _ = _.sibling;
            }
            d.type === Mn ? (a = Cn(d.props.children, f.mode, h, d.key), a.return = f, f = a) : (h = Nr(d.type, d.key, d.props, null, f.mode, h), h.ref = pt(f, a, d), h.return = f, f = h);
          }
          return i(f);
        case On:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = Hl(d, f.mode, h), a.return = f, f = a;
          }
          return i(f);
        case Ge:
          return _ = d._init, F(f, a, _(d._payload), h);
      }
      if (yt(d))
        return w(f, a, d, h);
      if (st(d))
        return k(f, a, d, h);
      fr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Bl(d, f.mode, h), a.return = f, f = a), i(f)) : t(f, a);
  }
  return F;
}
var bn = ia(!0), ua = ia(!1), Zt = {}, je = pn(Zt), Vt = pn(Zt), At = pn(Zt);
function Sn(e) {
  if (e === Zt)
    throw Error(y(174));
  return e;
}
function fi(e, n) {
  switch (M(At, n), M(Vt, e), M(je, Zt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : bl(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = bl(n, e);
  }
  I(je), M(je, n);
}
function et() {
  I(je), I(Vt), I(At);
}
function sa(e) {
  Sn(At.current);
  var n = Sn(je.current), t = bl(n, e.type);
  n !== t && (M(Vt, e), M(je, t));
}
function di(e) {
  Vt.current === e && (I(je), I(Vt));
}
var U = pn(0);
function Qr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Fl = [];
function pi() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Er = Ye.ReactCurrentDispatcher, jl = Ye.ReactCurrentBatchConfig, Pn = 0, $ = null, K = null, G = null, Kr = !1, xt = !1, Bt = 0, Zf = 0;
function ee() {
  throw Error(y(321));
}
function mi(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t]))
      return !1;
  return !0;
}
function vi(e, n, t, r, l, o) {
  if (Pn = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Er.current = e === null || e.memoizedState === null ? ed : nd, e = t(r, l), xt) {
    o = 0;
    do {
      if (xt = !1, Bt = 0, 25 <= o)
        throw Error(y(301));
      o += 1, G = K = null, n.updateQueue = null, Er.current = td, e = t(r, l);
    } while (xt);
  }
  if (Er.current = Yr, n = K !== null && K.next !== null, Pn = 0, G = K = $ = null, Kr = !1, n)
    throw Error(y(300));
  return e;
}
function hi() {
  var e = Bt !== 0;
  return Bt = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? $.memoizedState = G = e : G = G.next = e, G;
}
function _e() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var n = G === null ? $.memoizedState : G.next;
  if (n !== null)
    G = n, K = e;
  else {
    if (e === null)
      throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? $.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function Ht(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Ul(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var v = c.lane;
      if ((Pn & v) === v)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, $.lanes |= v, Nn |= v;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Oe(r, n.memoizedState) || (ae = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, $.lanes |= o, Nn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function $l(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Oe(o, n.memoizedState) || (ae = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function aa() {
}
function ca(e, n) {
  var t = $, r = _e(), l = n(), o = !Oe(r.memoizedState, l);
  if (o && (r.memoizedState = l, ae = !0), r = r.queue, yi(pa.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || G !== null && G.memoizedState.tag & 1) {
    if (t.flags |= 2048, Wt(9, da.bind(null, t, r, l, n), void 0, null), Z === null)
      throw Error(y(349));
    Pn & 30 || fa(t, n, l);
  }
  return l;
}
function fa(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function da(e, n, t, r) {
  n.value = t, n.getSnapshot = r, ma(n) && va(e);
}
function pa(e, n, t) {
  return t(function() {
    ma(n) && va(e);
  });
}
function ma(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function va(e) {
  var n = Qe(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Su(e) {
  var n = De();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ht, lastRenderedState: e }, n.queue = e, e = e.dispatch = bf.bind(null, $, e), [n.memoizedState, e];
}
function Wt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ha() {
  return _e().memoizedState;
}
function Cr(e, n, t, r) {
  var l = De();
  $.flags |= e, l.memoizedState = Wt(1 | n, t, void 0, r === void 0 ? null : r);
}
function ul(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (o = i.destroy, r !== null && mi(r, i.deps)) {
      l.memoizedState = Wt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Wt(1 | n, t, o, r);
}
function Eu(e, n) {
  return Cr(8390656, 8, e, n);
}
function yi(e, n) {
  return ul(2048, 8, e, n);
}
function ya(e, n) {
  return ul(4, 2, e, n);
}
function ga(e, n) {
  return ul(4, 4, e, n);
}
function wa(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function ka(e, n, t) {
  return t = t != null ? t.concat([e]) : null, ul(4, 4, wa.bind(null, n, e), t);
}
function gi() {
}
function Sa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && mi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ea(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && mi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ca(e, n, t) {
  return Pn & 21 ? (Oe(t, n) || (t = Ps(), $.lanes |= t, Nn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ae = !0), e.memoizedState = t);
}
function Jf(e, n) {
  var t = O;
  O = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = jl.transition;
  jl.transition = {};
  try {
    e(!1), n();
  } finally {
    O = t, jl.transition = r;
  }
}
function _a() {
  return _e().memoizedState;
}
function qf(e, n, t) {
  var r = sn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, xa(e))
    Pa(n, t);
  else if (t = ta(e, n, t, r), t !== null) {
    var l = oe();
    Re(t, e, r, l), Na(t, n, r);
  }
}
function bf(e, n, t) {
  var r = sn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (xa(e))
    Pa(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
      try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, Oe(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, ai(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ta(e, n, l, r), t !== null && (l = oe(), Re(t, e, r, l), Na(t, n, r));
  }
}
function xa(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function Pa(e, n) {
  xt = Kr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Na(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Go(e, t);
  }
}
var Yr = { readContext: Ce, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, ed = { readContext: Ce, useCallback: function(e, n) {
  return De().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Eu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Cr(
    4194308,
    4,
    wa.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Cr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Cr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = De();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = De();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = qf.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = De();
  return e = { current: e }, n.memoizedState = e;
}, useState: Su, useDebugValue: gi, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Su(!1), n = e[0];
  return e = Jf.bind(null, e[1]), De().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = De();
  if (j) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), Z === null)
      throw Error(y(349));
    Pn & 30 || fa(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Eu(pa.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Wt(9, da.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = De(), n = Z.identifierPrefix;
  if (j) {
    var t = Ae, r = Ve;
    t = (r & ~(1 << 32 - Le(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Bt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = Zf++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, nd = {
  readContext: Ce,
  useCallback: Sa,
  useContext: Ce,
  useEffect: yi,
  useImperativeHandle: ka,
  useInsertionEffect: ya,
  useLayoutEffect: ga,
  useMemo: Ea,
  useReducer: Ul,
  useRef: ha,
  useState: function() {
    return Ul(Ht);
  },
  useDebugValue: gi,
  useDeferredValue: function(e) {
    var n = _e();
    return Ca(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Ul(Ht)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: aa,
  useSyncExternalStore: ca,
  useId: _a,
  unstable_isNewReconciler: !1
}, td = { readContext: Ce, useCallback: Sa, useContext: Ce, useEffect: yi, useImperativeHandle: ka, useInsertionEffect: ya, useLayoutEffect: ga, useMemo: Ea, useReducer: $l, useRef: ha, useState: function() {
  return $l(Ht);
}, useDebugValue: gi, useDeferredValue: function(e) {
  var n = _e();
  return K === null ? n.memoizedState = e : Ca(n, K.memoizedState, e);
}, useTransition: function() {
  var e = $l(Ht)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: aa, useSyncExternalStore: ca, useId: _a, unstable_isNewReconciler: !1 };
function nt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Tc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Vl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Co(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var rd = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, n, t) {
  t = Be(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    Gr || (Gr = !0, Mo = r), Co(e, n);
  }, t;
}
function Ta(e, n, t) {
  t = Be(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Co(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Co(e, n), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Cu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = yd.bind(null, e, n, t), n.then(e, e));
}
function _u(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Be(-1, 1), n.tag = 2, on(t, n, 1))), t.lanes |= 1), e);
}
var ld = Ye.ReactCurrentOwner, ae = !1;
function le(e, n, t, r) {
  n.child = e === null ? ua(n, null, t, r) : bn(n, e.child, t, r);
}
function Pu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Xn(n, l), r = vi(e, n, t, r, o, l), t = hi(), e !== null && !ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ke(e, n, l)) : (j && t && ri(n), n.flags |= 1, le(e, n, r, l), n.child);
}
function Nu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Pi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, La(e, n, o, r, l)) : (e = Nr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Ft, t(i, r) && e.ref === n.ref)
      return Ke(e, n, l);
  }
  return n.flags |= 1, e = an(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function La(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ft(o, r) && e.ref === n.ref)
      if (ae = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (ae = !0);
      else
        return n.lanes = e.lanes, Ke(e, n, l);
  }
  return _o(e, n, t, r, l);
}
function Ra(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Hn, pe), pe |= t;
    else {
      if (!(t & 1073741824))
        return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, M(Hn, pe), pe |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, M(Hn, pe), pe |= r;
    }
  else
    o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, M(Hn, pe), pe |= r;
  return le(e, n, l, t), n.child;
}
function Oa(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function _o(e, n, t, r, l) {
  var o = fe(t) ? _n : re.current;
  return o = Jn(n, o), Xn(n, l), t = vi(e, n, t, r, o, l), r = hi(), e !== null && !ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ke(e, n, l)) : (j && r && ri(n), n.flags |= 1, le(e, n, t, l), n.child);
}
function zu(e, n, t, r, l) {
  if (fe(t)) {
    var o = !0;
    $r(n);
  } else
    o = !1;
  if (Xn(n, l), n.stateNode === null)
    _r(e, n), oa(n, t, r), Eo(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = fe(t) ? _n : re.current, c = Jn(n, c));
    var v = t.getDerivedStateFromProps, m = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && wu(n, i, r, c), Ze = !1;
    var p = n.memoizedState;
    i.state = p, Wr(n, r, i, l), s = n.memoizedState, u !== r || p !== s || ce.current || Ze ? (typeof v == "function" && (So(n, t, v, r), s = n.memoizedState), (u = Ze || gu(n, t, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, ra(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Ne(n.type, u), i.props = c, m = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = fe(t) ? _n : re.current, s = Jn(n, s));
    var g = t.getDerivedStateFromProps;
    (v = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && wu(n, i, r, s), Ze = !1, p = n.memoizedState, i.state = p, Wr(n, r, i, l);
    var w = n.memoizedState;
    u !== m || p !== w || ce.current || Ze ? (typeof g == "function" && (So(n, t, g, r), w = n.memoizedState), (c = Ze || gu(n, t, c, r, p, w, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return xo(e, n, t, r, o, l);
}
function xo(e, n, t, r, l, o) {
  Oa(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i)
    return l && pu(n, t, !1), Ke(e, n, o);
  r = n.stateNode, ld.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = bn(n, e.child, null, o), n.child = bn(n, null, u, o)) : le(e, n, u, o), n.memoizedState = r.state, l && pu(n, t, !0), n.child;
}
function Ma(e) {
  var n = e.stateNode;
  n.pendingContext ? du(e, n.pendingContext, n.pendingContext !== n.context) : n.context && du(e, n.context, !1), fi(e, n.containerInfo);
}
function Tu(e, n, t, r, l) {
  return qn(), oi(l), n.flags |= 256, le(e, n, t, r), n.child;
}
var Po = { dehydrated: null, treeContext: null, retryLane: 0 };
function No(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, l & 1), e === null)
    return wo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = cl(i, r, 0, null), e = Cn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = No(t), n.memoizedState = Po, e) : wi(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return od(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = an(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = an(u, o) : (o = Cn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? No(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Po, r;
  }
  return o = e.child, e = o.sibling, r = an(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function wi(e, n) {
  return n = cl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function dr(e, n, t, r) {
  return r !== null && oi(r), bn(n, e.child, null, t), e = wi(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function od(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Vl(Error(y(422))), dr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = cl({ mode: "visible", children: r.children }, l, 0, null), o = Cn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && bn(n, e.child, null, i), n.child.memoizedState = No(i), n.memoizedState = Po, o);
  if (!(n.mode & 1))
    return dr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = Vl(o, r, void 0), dr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ae || u) {
    if (r = Z, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Qe(e, l), Re(r, e, l, -1));
    }
    return xi(), r = Vl(Error(y(421))), dr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, me = ln(l.nextSibling), ve = n, j = !0, Te = null, e !== null && (we[ke++] = Ve, we[ke++] = Ae, we[ke++] = xn, Ve = e.id, Ae = e.overflow, xn = n), n = wi(n, r.children), n.flags |= 4096, n);
}
function Lu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), ko(e.return, n, t);
}
function Al(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ia(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (le(e, n, r.children, t), r = U.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Lu(e, t, n);
          else if (e.tag === 19)
            Lu(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(U, r), !(n.mode & 1))
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && Qr(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Al(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Qr(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Al(n, !0, t, null, o);
        break;
      case "together":
        Al(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function _r(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ke(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Nn |= n.lanes, !(t & n.childLanes))
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = an(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = an(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function id(e, n, t) {
  switch (n.tag) {
    case 3:
      Ma(n), qn();
      break;
    case 5:
      sa(n);
      break;
    case 1:
      fe(n.type) && $r(n);
      break;
    case 4:
      fi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      M(Br, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Da(e, n, t) : (M(U, U.current & 1), e = Ke(e, n, t), e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ia(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ra(e, n, t);
  }
  return Ke(e, n, t);
}
var Fa, zo, ja, Ua;
Fa = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
zo = function() {
};
ja = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Sn(je.current);
    var o = null;
    switch (t) {
      case "input":
        l = Gl(e, l), r = Gl(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ql(e, l), r = ql(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jr);
    }
    eo(t, r);
    var i;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Tt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
          } else
            t || (o || (o = []), o.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Tt.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ua = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function mt(e, n) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function ud(e, n, t) {
  var r = n.pendingProps;
  switch (li(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(n), null;
    case 1:
      return fe(n.type) && Ur(), ne(n), null;
    case 3:
      return r = n.stateNode, et(), I(ce), I(re), pi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (cr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Te !== null && (Fo(Te), Te = null))), zo(e, n), ne(n), null;
    case 5:
      di(n);
      var l = Sn(At.current);
      if (t = n.type, e !== null && n.stateNode != null)
        ja(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return ne(n), null;
        }
        if (e = Sn(je.current), cr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ie] = n, r[$t] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < wt.length; l++)
                D(wt[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              $i(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              Ai(r, o), D("invalid", r);
          }
          eo(t, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ar(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ar(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Tt.hasOwnProperty(i) && u != null && i === "onScroll" && D("scroll", r);
            }
          switch (t) {
            case "input":
              nr(r), Vi(r, o, !0);
              break;
            case "textarea":
              nr(r), Bi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = jr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ie] = n, e[$t] = r, Fa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = no(t, r), t) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < wt.length; l++)
                  D(wt[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                $i(e, r), l = Gl(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Ai(e, r), l = ql(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            eo(t, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? ms(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ds(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Lt(e, s) : typeof s == "number" && Lt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Tt.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Ho(e, o, s, i));
              }
            switch (t) {
              case "input":
                nr(e), Vi(e, r, !1);
                break;
              case "textarea":
                nr(e), Bi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Wn(e, !!r.multiple, o, !1) : r.defaultValue != null && Wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = jr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null)
        Ua(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = Sn(At.current), Sn(je.current), cr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ie] = n, (o = r.nodeValue !== t) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                ar(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ar(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ie] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (I(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (j && me !== null && n.mode & 1 && !(n.flags & 128))
          na(), qn(), n.flags |= 98560, o = !1;
        else if (o = cr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Ie] = n;
          } else
            qn(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ne(n), o = !1;
        } else
          Te !== null && (Fo(Te), Te = null), o = !0;
        if (!o)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : xi())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return et(), zo(e, n), e === null && jt(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return si(n.type._context), ne(n), null;
    case 17:
      return fe(n.type) && Ur(), ne(n), null;
    case 19:
      if (I(U), o = n.memoizedState, o === null)
        return ne(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          mt(o, !1);
        else {
          if (Y !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (i = Qr(e), i !== null) {
                for (n.flags |= 128, mt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return M(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null && W() > tt && (n.flags |= 128, r = !0, mt(o, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Qr(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), mt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !j)
              return ne(n), null;
          } else
            2 * W() - o.renderingStartTime > tt && t !== 1073741824 && (n.flags |= 128, r = !0, mt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = W(), n.sibling = null, t = U.current, M(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return _i(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? pe & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function sd(e, n) {
  switch (li(n), n.tag) {
    case 1:
      return fe(n.type) && Ur(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return et(), I(ce), I(re), pi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return di(n), null;
    case 13:
      if (I(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        qn();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return I(U), null;
    case 4:
      return et(), null;
    case 10:
      return si(n.type._context), null;
    case 22:
    case 23:
      return _i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pr = !1, te = !1, ad = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Bn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        A(e, n, r);
      }
    else
      t.current = null;
}
function To(e, n, t) {
  try {
    t();
  } catch (r) {
    A(e, n, r);
  }
}
var Ru = !1;
function cd(e, n) {
  if (fo = Dr, e = Bs(), ti(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, u = -1, s = -1, c = 0, v = 0, m = e, p = null;
          n:
            for (; ; ) {
              for (var g; m !== t || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
                p = m, m = g;
              for (; ; ) {
                if (m === e)
                  break n;
                if (p === t && ++c === l && (u = i), p === o && ++v === r && (s = i), (g = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = g;
            }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (po = { focusedElem: e, selectionRange: t }, Dr = !1, S = n; S !== null; )
    if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, S = e;
    else
      for (; S !== null; ) {
        n = S;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps, F = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Ne(n.type, k), F);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (h) {
          A(n, n.return, h);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, S = e;
          break;
        }
        S = n.return;
      }
  return w = Ru, Ru = !1, w;
}
function Pt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && To(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function sl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Lo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function $a(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, $a(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ie], delete n[$t], delete n[ho], delete n[Kf], delete n[Yf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Va(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Ro(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = jr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ro(e, n, t), e = e.sibling; e !== null; )
      Ro(e, n, t), e = e.sibling;
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Oo(e, n, t), e = e.sibling; e !== null; )
      Oo(e, n, t), e = e.sibling;
}
var J = null, ze = !1;
function Xe(e, n, t) {
  for (t = t.child; t !== null; )
    Aa(e, n, t), t = t.sibling;
}
function Aa(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(el, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      te || Bn(t, n);
    case 6:
      var r = J, l = ze;
      J = null, Xe(e, n, t), J = r, ze = l, J !== null && (ze ? (e = J, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null && (ze ? (e = J, t = t.stateNode, e.nodeType === 8 ? Dl(e.parentNode, t) : e.nodeType === 1 && Dl(e, t), Dt(e)) : Dl(J, t.stateNode));
      break;
    case 4:
      r = J, l = ze, J = t.stateNode.containerInfo, ze = !0, Xe(e, n, t), J = r, ze = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && To(t, n, i), l = l.next;
        } while (l !== r);
      }
      Xe(e, n, t);
      break;
    case 1:
      if (!te && (Bn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          A(t, n, u);
        }
      Xe(e, n, t);
      break;
    case 21:
      Xe(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Xe(e, n, t), te = r) : Xe(e, n, t);
      break;
    default:
      Xe(e, n, t);
  }
}
function Mu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new ad()), n.forEach(function(r) {
      var l = wd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                J = u.stateNode, ze = !1;
                break e;
              case 3:
                J = u.stateNode.containerInfo, ze = !0;
                break e;
              case 4:
                J = u.stateNode.containerInfo, ze = !0;
                break e;
            }
            u = u.return;
          }
        if (J === null)
          throw Error(y(160));
        Aa(o, i, l), J = null, ze = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        A(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      Ba(n, e), n = n.sibling;
}
function Ba(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Pe(n, e), Me(e), r & 4) {
        try {
          Pt(3, e, e.return), sl(3, e);
        } catch (k) {
          A(e, e.return, k);
        }
        try {
          Pt(5, e, e.return);
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(n, e), Me(e), r & 512 && t !== null && Bn(t, t.return);
      break;
    case 5:
      if (Pe(n, e), Me(e), r & 512 && t !== null && Bn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Lt(l, "");
        } catch (k) {
          A(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && as(l, o), no(u, i);
            var c = no(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i], m = s[i + 1];
              v === "style" ? ms(l, m) : v === "dangerouslySetInnerHTML" ? ds(l, m) : v === "children" ? Lt(l, m) : Ho(l, v, m, c);
            }
            switch (u) {
              case "input":
                Zl(l, o);
                break;
              case "textarea":
                cs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Wn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Wn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[$t] = o;
          } catch (k) {
            A(e, e.return, k);
          }
      }
      break;
    case 6:
      if (Pe(n, e), Me(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Pe(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Dt(n.containerInfo);
        } catch (k) {
          A(e, e.return, k);
        }
      break;
    case 4:
      Pe(n, e), Me(e);
      break;
    case 13:
      Pe(n, e), Me(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ei = W())), r & 4 && Mu(e);
      break;
    case 22:
      if (v = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || v, Pe(n, e), te = c) : Pe(n, e), Me(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !v && e.mode & 1)
          for (S = e, v = e.child; v !== null; ) {
            for (m = S = v; S !== null; ) {
              switch (p = S, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pt(4, p, p.return);
                  break;
                case 1:
                  Bn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      A(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Bn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Iu(m);
                    continue;
                  }
              }
              g !== null ? (g.return = p, S = g) : Iu(m);
            }
            v = v.sibling;
          }
        e:
          for (v = null, m = e; ; ) {
            if (m.tag === 5) {
              if (v === null) {
                v = m;
                try {
                  l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ps("display", i));
                } catch (k) {
                  A(e, e.return, k);
                }
              }
            } else if (m.tag === 6) {
              if (v === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (k) {
                  A(e, e.return, k);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              v === m && (v = null), m = m.return;
            }
            v === m && (v = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Pe(n, e), Me(e), r & 4 && Mu(e);
      break;
    case 21:
      break;
    default:
      Pe(
        n,
        e
      ), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Va(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Lt(l, ""), r.flags &= -33);
          var o = Ou(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ou(e);
          Ro(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function fd(e, n, t) {
  S = e, Ha(e);
}
function Ha(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || pr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || te;
        u = pr;
        var c = te;
        if (pr = i, (te = s) && !c)
          for (S = l; S !== null; )
            i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? Fu(l) : s !== null ? (s.return = i, S = s) : Fu(l);
        for (; o !== null; )
          S = o, Ha(o), o = o.sibling;
        S = l, pr = u, te = c;
      }
      Du(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, S = o) : Du(e);
  }
}
function Du(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              te || sl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !te)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : Ne(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = n.updateQueue;
              o !== null && yu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                yu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Dt(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        te || n.flags & 512 && Lo(n);
      } catch (p) {
        A(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            sl(4, n);
          } catch (s) {
            A(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(n, l, s);
            }
          }
          var o = n.return;
          try {
            Lo(n);
          } catch (s) {
            A(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Lo(n);
          } catch (s) {
            A(n, i, s);
          }
      }
    } catch (s) {
      A(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, S = u;
      break;
    }
    S = n.return;
  }
}
var dd = Math.ceil, Xr = Ye.ReactCurrentDispatcher, ki = Ye.ReactCurrentOwner, Ee = Ye.ReactCurrentBatchConfig, R = 0, Z = null, Q = null, q = 0, pe = 0, Hn = pn(0), Y = 0, Qt = null, Nn = 0, al = 0, Si = 0, Nt = null, se = null, Ei = 0, tt = 1 / 0, Ue = null, Gr = !1, Mo = null, un = null, mr = !1, en = null, Zr = 0, zt = 0, Do = null, xr = -1, Pr = 0;
function oe() {
  return R & 6 ? W() : xr !== -1 ? xr : xr = W();
}
function sn(e) {
  return e.mode & 1 ? R & 2 && q !== 0 ? q & -q : Gf.transition !== null ? (Pr === 0 && (Pr = Ps()), Pr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ms(e.type)), e) : 1;
}
function Re(e, n, t, r) {
  if (50 < zt)
    throw zt = 0, Do = null, Error(y(185));
  Yt(e, t, r), (!(R & 2) || e !== Z) && (e === Z && (!(R & 2) && (al |= t), Y === 4 && qe(e, q)), de(e, r), t === 1 && R === 0 && !(n.mode & 1) && (tt = W() + 500, ol && mn()));
}
function de(e, n) {
  var t = e.callbackNode;
  Xc(e, n);
  var r = Mr(e, e === Z ? q : 0);
  if (r === 0)
    t !== null && Qi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Qi(t), n === 1)
      e.tag === 0 ? Xf(ju.bind(null, e)) : qs(ju.bind(null, e)), Wf(function() {
        !(R & 6) && mn();
      }), t = null;
    else {
      switch (Ns(r)) {
        case 1:
          t = Xo;
          break;
        case 4:
          t = _s;
          break;
        case 16:
          t = Or;
          break;
        case 536870912:
          t = xs;
          break;
        default:
          t = Or;
      }
      t = Ja(t, Wa.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Wa(e, n) {
  if (xr = -1, Pr = 0, R & 6)
    throw Error(y(327));
  var t = e.callbackNode;
  if (Gn() && e.callbackNode !== t)
    return null;
  var r = Mr(e, e === Z ? q : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = Jr(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = Ka();
    (Z !== e || q !== n) && (Ue = null, tt = W() + 500, En(e, n));
    do
      try {
        vd();
        break;
      } catch (u) {
        Qa(e, u);
      }
    while (!0);
    ui(), Xr.current = o, R = l, Q !== null ? n = 0 : (Z = null, q = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = io(e), l !== 0 && (r = l, n = Io(e, l))), n === 1)
      throw t = Qt, En(e, 0), qe(e, r), de(e, W()), t;
    if (n === 6)
      qe(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !pd(l) && (n = Jr(e, r), n === 2 && (o = io(e), o !== 0 && (r = o, n = Io(e, o))), n === 1))
        throw t = Qt, En(e, 0), qe(e, r), de(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          gn(e, se, Ue);
          break;
        case 3:
          if (qe(e, r), (r & 130023424) === r && (n = Ei + 500 - W(), 10 < n)) {
            if (Mr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = vo(gn.bind(null, e, se, Ue), n);
            break;
          }
          gn(e, se, Ue);
          break;
        case 4:
          if (qe(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Le(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vo(gn.bind(null, e, se, Ue), r);
            break;
          }
          gn(e, se, Ue);
          break;
        case 5:
          gn(e, se, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return de(e, W()), e.callbackNode === t ? Wa.bind(null, e) : null;
}
function Io(e, n) {
  var t = Nt;
  return e.current.memoizedState.isDehydrated && (En(e, n).flags |= 256), e = Jr(e, n), e !== 2 && (n = se, se = t, n !== null && Fo(n)), e;
}
function Fo(e) {
  se === null ? se = e : se.push.apply(se, e);
}
function pd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function qe(e, n) {
  for (n &= ~Si, n &= ~al, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Le(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function ju(e) {
  if (R & 6)
    throw Error(y(327));
  Gn();
  var n = Mr(e, 0);
  if (!(n & 1))
    return de(e, W()), null;
  var t = Jr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = io(e);
    r !== 0 && (n = r, t = Io(e, r));
  }
  if (t === 1)
    throw t = Qt, En(e, 0), qe(e, n), de(e, W()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, gn(e, se, Ue), de(e, W()), null;
}
function Ci(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (tt = W() + 500, ol && mn());
  }
}
function zn(e) {
  en !== null && en.tag === 0 && !(R & 6) && Gn();
  var n = R;
  R |= 1;
  var t = Ee.transition, r = O;
  try {
    if (Ee.transition = null, O = 1, e)
      return e();
  } finally {
    O = r, Ee.transition = t, R = n, !(R & 6) && mn();
  }
}
function _i() {
  pe = Hn.current, I(Hn);
}
function En(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Hf(t)), Q !== null)
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch (li(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ur();
          break;
        case 3:
          et(), I(ce), I(re), pi();
          break;
        case 5:
          di(r);
          break;
        case 4:
          et();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          si(r.type._context);
          break;
        case 22:
        case 23:
          _i();
      }
      t = t.return;
    }
  if (Z = e, Q = e = an(e.current, null), q = pe = n, Y = 0, Qt = null, Si = al = Nn = 0, se = Nt = null, kn !== null) {
    for (n = 0; n < kn.length; n++)
      if (t = kn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        t.pending = r;
      }
    kn = null;
  }
  return e;
}
function Qa(e, n) {
  do {
    var t = Q;
    try {
      if (ui(), Er.current = Yr, Kr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Kr = !1;
      }
      if (Pn = 0, G = K = $ = null, xt = !1, Bt = 0, ki.current = null, t === null || t.return === null) {
        Y = 1, Qt = n, Q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = q, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, v = u, m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p ? (v.updateQueue = p.updateQueue, v.memoizedState = p.memoizedState, v.lanes = p.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var g = _u(i);
          if (g !== null) {
            g.flags &= -257, xu(g, i, u, o, n), g.mode & 1 && Cu(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Cu(o, c, n), xi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && u.mode & 1) {
          var F = _u(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), xu(F, i, u, o, n), oi(nt(s, u));
            break e;
          }
        }
        o = s = nt(s, u), Y !== 4 && (Y = 2), Nt === null ? Nt = [o] : Nt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = za(o, s, n);
              hu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (un === null || !un.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var h = Ta(o, u, n);
                hu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xa(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Xr.current;
  return Xr.current = Yr, e === null ? Yr : e;
}
function xi() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Nn & 268435455) && !(al & 268435455) || qe(Z, q);
}
function Jr(e, n) {
  var t = R;
  R |= 2;
  var r = Ka();
  (Z !== e || q !== n) && (Ue = null, En(e, n));
  do
    try {
      md();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if (ui(), R = t, Xr.current = r, Q !== null)
    throw Error(y(261));
  return Z = null, q = 0, Y;
}
function md() {
  for (; Q !== null; )
    Ya(Q);
}
function vd() {
  for (; Q !== null && !$c(); )
    Ya(Q);
}
function Ya(e) {
  var n = Za(e.alternate, e, pe);
  e.memoizedProps = e.pendingProps, n === null ? Xa(e) : Q = n, ki.current = null;
}
function Xa(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = sd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = ud(t, n, pe), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function gn(e, n, t) {
  var r = O, l = Ee.transition;
  try {
    Ee.transition = null, O = 1, hd(e, n, t, r);
  } finally {
    Ee.transition = l, O = r;
  }
  return null;
}
function hd(e, n, t, r) {
  do
    Gn();
  while (en !== null);
  if (R & 6)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (Gc(e, o), e === Z && (Q = Z = null, q = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || mr || (mr = !0, Ja(Or, function() {
    return Gn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ee.transition, Ee.transition = null;
    var i = O;
    O = 1;
    var u = R;
    R |= 4, ki.current = null, cd(e, t), Ba(t, e), Ff(po), Dr = !!fo, po = fo = null, e.current = t, fd(t), Vc(), R = u, O = i, Ee.transition = o;
  } else
    e.current = t;
  if (mr && (mr = !1, en = e, Zr = l), o = e.pendingLanes, o === 0 && (un = null), Hc(t.stateNode), de(e, W()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Gr)
    throw Gr = !1, e = Mo, Mo = null, e;
  return Zr & 1 && e.tag !== 0 && Gn(), o = e.pendingLanes, o & 1 ? e === Do ? zt++ : (zt = 0, Do = e) : zt = 0, mn(), null;
}
function Gn() {
  if (en !== null) {
    var e = Ns(Zr), n = Ee.transition, t = O;
    try {
      if (Ee.transition = null, O = 16 > e ? 16 : e, en === null)
        var r = !1;
      else {
        if (e = en, en = null, Zr = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var o = S, i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pt(8, v, o);
                  }
                  var m = v.child;
                  if (m !== null)
                    m.return = v, S = m;
                  else
                    for (; S !== null; ) {
                      v = S;
                      var p = v.sibling, g = v.return;
                      if ($a(v), v === c) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, S = p;
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    k.sibling = null, k = F;
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, S = i;
          else
            e:
              for (; S !== null; ) {
                if (o = S, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pt(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, S = f;
                  break e;
                }
                S = o.return;
              }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, S = d;
          else
            e:
              for (i = a; S !== null; ) {
                if (u = S, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        sl(9, u);
                    }
                  } catch (E) {
                    A(u, u.return, E);
                  }
                if (u === i) {
                  S = null;
                  break e;
                }
                var h = u.sibling;
                if (h !== null) {
                  h.return = u.return, S = h;
                  break e;
                }
                S = u.return;
              }
        }
        if (R = l, mn(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
          try {
            Fe.onPostCommitFiberRoot(el, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      O = t, Ee.transition = n;
    }
  }
  return !1;
}
function Uu(e, n, t) {
  n = nt(t, n), n = za(e, n, 1), e = on(e, n, 1), n = oe(), e !== null && (Yt(e, 1, n), de(e, n));
}
function A(e, n, t) {
  if (e.tag === 3)
    Uu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Uu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
          e = nt(t, e), e = Ta(n, e, 1), n = on(n, e, 1), e = oe(), n !== null && (Yt(n, 1, e), de(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function yd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, Z === e && (q & t) === t && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > W() - Ei ? En(e, 0) : Si |= t), de(e, n);
}
function Ga(e, n) {
  n === 0 && (e.mode & 1 ? (n = lr, lr <<= 1, !(lr & 130023424) && (lr = 4194304)) : n = 1);
  var t = oe();
  e = Qe(e, n), e !== null && (Yt(e, n, t), de(e, t));
}
function gd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Ga(e, t);
}
function wd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ga(e, t);
}
var Za;
Za = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ce.current)
      ae = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128))
        return ae = !1, id(e, n, t);
      ae = !!(e.flags & 131072);
    }
  else
    ae = !1, j && n.flags & 1048576 && bs(n, Ar, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      _r(e, n), e = n.pendingProps;
      var l = Jn(n, re.current);
      Xn(n, t), l = vi(null, n, r, e, l, t);
      var o = hi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, fe(r) ? (o = !0, $r(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ci(n), l.updater = il, n.stateNode = l, l._reactInternals = n, Eo(n, r, e, t), n = xo(null, n, r, !0, o, t)) : (n.tag = 0, j && o && ri(n), le(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (_r(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sd(r), e = Ne(r, e), l) {
          case 0:
            n = _o(null, n, r, e, t);
            break e;
          case 1:
            n = zu(null, n, r, e, t);
            break e;
          case 11:
            n = Pu(null, n, r, e, t);
            break e;
          case 14:
            n = Nu(null, n, r, Ne(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ne(r, l), _o(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ne(r, l), zu(e, n, r, l, t);
    case 3:
      e: {
        if (Ma(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, ra(e, n), Wr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = nt(Error(y(423)), n), n = Tu(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = nt(Error(y(424)), n), n = Tu(e, n, r, t, l);
            break e;
          } else
            for (me = ln(n.stateNode.containerInfo.firstChild), ve = n, j = !0, Te = null, t = ua(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (qn(), r === l) {
            n = Ke(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return sa(n), e === null && wo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, mo(r, l) ? i = null : o !== null && mo(r, o) && (n.flags |= 32), Oa(e, n), le(e, n, i, t), n.child;
    case 6:
      return e === null && wo(n), null;
    case 13:
      return Da(e, n, t);
    case 4:
      return fi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = bn(n, null, r, t) : le(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ne(r, l), Pu(e, n, r, l, t);
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, M(Br, r._currentValue), r._currentValue = i, o !== null)
          if (Oe(o.value, i)) {
            if (o.children === l.children && !ce.current) {
              n = Ke(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Be(-1, t & -t), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null ? s.next = s : (s.next = v.next, v.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), ko(
                      o.return,
                      t,
                      n
                    ), u.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(y(341));
                i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), ko(i, t, n), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        le(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Xn(n, t), l = Ce(l), r = r(l), n.flags |= 1, le(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Ne(r, n.pendingProps), l = Ne(r.type, l), Nu(e, n, r, l, t);
    case 15:
      return La(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ne(r, l), _r(e, n), n.tag = 1, fe(r) ? (e = !0, $r(n)) : e = !1, Xn(n, t), oa(n, r, l), Eo(n, r, l, t), xo(null, n, r, !0, e, t);
    case 19:
      return Ia(e, n, t);
    case 22:
      return Ra(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function Ja(e, n) {
  return Cs(e, n);
}
function kd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Se(e, n, t, r) {
  return new kd(e, n, t, r);
}
function Pi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Sd(e) {
  if (typeof e == "function")
    return Pi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qo)
      return 11;
    if (e === Ko)
      return 14;
  }
  return 2;
}
function an(e, n) {
  var t = e.alternate;
  return t === null ? (t = Se(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Nr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Pi(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Mn:
          return Cn(t.children, l, o, n);
        case Wo:
          i = 8, l |= 8;
          break;
        case Ql:
          return e = Se(12, t, n, l | 2), e.elementType = Ql, e.lanes = o, e;
        case Kl:
          return e = Se(13, t, n, l), e.elementType = Kl, e.lanes = o, e;
        case Yl:
          return e = Se(19, t, n, l), e.elementType = Yl, e.lanes = o, e;
        case is:
          return cl(t, l, o, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ls:
                i = 10;
                break e;
              case os:
                i = 9;
                break e;
              case Qo:
                i = 11;
                break e;
              case Ko:
                i = 14;
                break e;
              case Ge:
                i = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Se(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Cn(e, n, t, r) {
  return e = Se(7, e, r, n), e.lanes = t, e;
}
function cl(e, n, t, r) {
  return e = Se(22, e, r, n), e.elementType = is, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Bl(e, n, t) {
  return e = Se(6, e, null, n), e.lanes = t, e;
}
function Hl(e, n, t) {
  return n = Se(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Ed(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ni(e, n, t, r, l, o, i, u, s) {
  return e = new Ed(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Se(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ci(o), e;
}
function Cd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: On, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function qa(e) {
  if (!e)
    return fn;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (fe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (fe(t))
      return Js(e, t, n);
  }
  return n;
}
function ba(e, n, t, r, l, o, i, u, s) {
  return e = Ni(t, r, !0, e, l, o, i, u, s), e.context = qa(null), t = e.current, r = oe(), l = sn(t), o = Be(r, l), o.callback = n ?? null, on(t, o, l), e.current.lanes = l, Yt(e, l, r), de(e, r), e;
}
function fl(e, n, t, r) {
  var l = n.current, o = oe(), i = sn(l);
  return t = qa(t), n.context === null ? n.context = t : n.pendingContext = t, n = Be(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = on(l, n, i), e !== null && (Re(e, l, i, o), Sr(e, l, i)), i;
}
function qr(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function zi(e, n) {
  $u(e, n), (e = e.alternate) && $u(e, n);
}
function _d() {
  return null;
}
var ec = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ti(e) {
  this._internalRoot = e;
}
dl.prototype.render = Ti.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  fl(e, n, null, null);
};
dl.prototype.unmount = Ti.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    zn(function() {
      fl(null, e, null, null);
    }), n[We] = null;
  }
};
function dl(e) {
  this._internalRoot = e;
}
dl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ls();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < Je.length && n !== 0 && n < Je[t].priority; t++)
      ;
    Je.splice(t, 0, e), t === 0 && Os(e);
  }
};
function Li(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vu() {
}
function xd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = qr(i);
        o.call(c);
      };
    }
    var i = ba(n, r, e, 0, null, !1, !1, "", Vu);
    return e._reactRootContainer = i, e[We] = i.current, jt(e.nodeType === 8 ? e.parentNode : e), zn(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = qr(s);
      u.call(c);
    };
  }
  var s = Ni(e, 0, !1, null, null, !1, !1, "", Vu);
  return e._reactRootContainer = s, e[We] = s.current, jt(e.nodeType === 8 ? e.parentNode : e), zn(function() {
    fl(n, s, t, r);
  }), s;
}
function ml(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = qr(i);
        u.call(s);
      };
    }
    fl(n, i, e, l);
  } else
    i = xd(t, n, e, l, r);
  return qr(i);
}
zs = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = gt(n.pendingLanes);
        t !== 0 && (Go(n, t | 1), de(n, W()), !(R & 6) && (tt = W() + 500, mn()));
      }
      break;
    case 13:
      zn(function() {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }), zi(e, 1);
  }
};
Zo = function(e) {
  if (e.tag === 13) {
    var n = Qe(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    zi(e, 134217728);
  }
};
Ts = function(e) {
  if (e.tag === 13) {
    var n = sn(e), t = Qe(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    zi(e, n);
  }
};
Ls = function() {
  return O;
};
Rs = function(e, n) {
  var t = O;
  try {
    return O = e, n();
  } finally {
    O = t;
  }
};
ro = function(e, n, t) {
  switch (n) {
    case "input":
      if (Zl(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ll(r);
            if (!l)
              throw Error(y(90));
            ss(r), Zl(r, l);
          }
        }
      }
      break;
    case "textarea":
      cs(e, t);
      break;
    case "select":
      n = t.value, n != null && Wn(e, !!t.multiple, n, !1);
  }
};
ys = Ci;
gs = zn;
var Pd = { usingClientEntryPoint: !1, Events: [Gt, jn, ll, vs, hs, Ci] }, vt = { findFiberByHostInstance: wn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Nd = { bundleType: vt.bundleType, version: vt.version, rendererPackageName: vt.rendererPackageName, rendererConfig: vt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ss(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vt.findFiberByHostInstance || _d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vr.isDisabled && vr.supportsFiber)
    try {
      el = vr.inject(Nd), Fe = vr;
    } catch {
    }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
ye.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Li(n))
    throw Error(y(200));
  return Cd(e, n, null, t);
};
ye.createRoot = function(e, n) {
  if (!Li(e))
    throw Error(y(299));
  var t = !1, r = "", l = ec;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ni(e, 1, !1, null, null, t, !1, r, l), e[We] = n.current, jt(e.nodeType === 8 ? e.parentNode : e), new Ti(n);
};
ye.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Ss(n), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return zn(e);
};
ye.hydrate = function(e, n, t) {
  if (!pl(n))
    throw Error(y(200));
  return ml(null, e, n, !0, t);
};
ye.hydrateRoot = function(e, n, t) {
  if (!Li(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = ec;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ba(n, null, e, 1, t ?? null, l, !1, o, i), e[We] = n.current, jt(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new dl(n);
};
ye.render = function(e, n, t) {
  if (!pl(n))
    throw Error(y(200));
  return ml(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function(e) {
  if (!pl(e))
    throw Error(y(40));
  return e._reactRootContainer ? (zn(function() {
    ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[We] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = Ci;
ye.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!pl(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return ml(e, n, t, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function nc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), bu.exports = ye;
var zd = bu.exports, Au = zd;
zr.createRoot = Au.createRoot, zr.hydrateRoot = Au.hydrateRoot;
looker.plugins.visualizations.add({
  // Id and Label are legacy properties that no longer have any function besides documenting
  // what the visualization used to have. The properties are now set via the manifest
  // form within the admin/visualizations page of Looker
  id: "bizhq-report-table-viz",
  label: "BizHQ Report Table Visualization",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [{ Large: "large" }, { Small: "small" }],
      display: "radio",
      default: "large"
    }
  },
  // Set up the initial state of the visualization
  create: function(e, n) {
    console.log("create", "config", n), e.innerHTML = `
      <style>
        .bizhq-report-table-viz {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      </style>
    `;
    let t = e.appendChild(document.createElement("div"));
    t.className = "bizhq-report-table-viz", zr.createRoot(t).render(/* @__PURE__ */ Ii.jsx("div", { children: "Loading..." }));
  },
  // Render in response to the data or settings changing
  updateAsync: function(e, n, t, r, l, o) {
    if (console.log("data", e), console.log("element", n), console.log("config", t), console.log("queryResponse", r), console.log("details", l), console.log("done", o), this.clearErrors(), r.fields.dimensions.length == 0) {
      this.addError({
        title: "No Dimensions",
        message: "This chart requires dimensions."
      });
      return;
    }
    const u = e[0][r.fields.dimensions[0].name].value;
    let s = n.appendChild(document.createElement("div"));
    zr.createRoot(s).render(/* @__PURE__ */ Ii.jsx("div", { children: u })), o();
  }
});
