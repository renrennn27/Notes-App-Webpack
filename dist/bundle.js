/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              f = i[s] || 0,
              l = "".concat(s, " ").concat(f);
            i[s] = f + 1;
            var p = n(l),
              h = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(h);
            else {
              var y = o(h, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: y, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var f = n(i[s]);
              0 === e[f].references && (e[f].updater(), e.splice(f, 1));
            }
            i = u;
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var f = [].concat(t[s]);
                (r && a[f[0]]) ||
                  (void 0 !== i &&
                    (void 0 === f[5] ||
                      (f[1] = "@layer"
                        .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                        .concat(f[1], "}")),
                    (f[5] = i)),
                  n &&
                    (f[2]
                      ? ((f[1] = "@media "
                          .concat(f[2], " {")
                          .concat(f[1], "}")),
                        (f[2] = n))
                      : (f[2] = n)),
                  o &&
                    (f[4]
                      ? ((f[1] = "@supports ("
                          .concat(f[4], ") {")
                          .concat(f[1], "}")),
                        (f[4] = o))
                      : (f[4] = "".concat(o))),
                  e.push(f));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      919: (t, e, n) => {
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);",
        ]),
          a.push([
            t.id,
            "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n}\n\nheader {\n  background-color: #2c3e50;\n  color: white;\n  padding: 16px;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.input-section {\n  margin-bottom: 32px;\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.notes-section h2 {\n  margin: 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #2c3e50;\n}\n\nnote-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 50px;\n  margin-bottom: 40px;\n}\n\n@media screen and (max-width: 768px) {\n  note-list {\n    grid-template-columns: 1fr;\n  }\n}",
            "",
          ]);
        const c = a;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0);
  var r = n(72),
    o = n.n(r),
    i = n(825),
    a = n.n(i),
    c = n(659),
    u = n.n(c),
    s = n(56),
    f = n.n(s),
    l = n(540),
    p = n.n(l),
    h = n(113),
    y = n.n(h),
    d = n(919),
    v = {};
  function m(t) {
    return (
      (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      m(t)
    );
  }
  function b(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, g(r.key), r);
    }
  }
  function g(t) {
    var e = (function (t) {
      if ("object" != m(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != m(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == m(e) ? e : e + "";
  }
  function w(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (w = function (t) {
        if (
          null === t ||
          !(function (t) {
            try {
              return -1 !== Function.toString.call(t).indexOf("[native code]");
            } catch (e) {
              return "function" == typeof t;
            }
          })(t)
        )
          return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, n);
        }
        function n() {
          return (function (t, e, n) {
            if (x()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, e);
            var o = new (t.bind.apply(t, r))();
            return n && E(o, n.prototype), o;
          })(t, arguments, O(this).constructor);
        }
        return (
          (n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          E(n, t)
        );
      }),
      w(t)
    );
  }
  function x() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (x = function () {
      return !!t;
    })();
  }
  function E(t, e) {
    return (
      (E = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      E(t, e)
    );
  }
  function O(t) {
    return (
      (O = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      O(t)
    );
  }
  (v.styleTagTransform = y()),
    (v.setAttributes = f()),
    (v.insert = u().bind(null, "head")),
    (v.domAPI = a()),
    (v.insertStyleElement = p()),
    o()(d.A, v),
    d.A && d.A.locals && d.A.locals;
  var j = (function (t) {
    function e() {
      var t;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        (t = (function (t, e, n) {
          return (
            (e = O(e)),
            (function (t, e) {
              if (e && ("object" == m(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              x()
                ? Reflect.construct(e, n || [], O(t).constructor)
                : e.apply(t, n),
            )
          );
        })(this, e)).attachShadow({ mode: "open" }),
        t
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && E(t, e);
      })(e, t),
      (n = e),
      (r = [
        {
          key: "connectedCallback",
          value: function () {
            this.render();
          },
        },
        {
          key: "render",
          value: function () {
            this.shadowRoot.innerHTML =
              '\n      <style>\n        .app-bar {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        h1 {\n          margin: 0;\n          font-size: 1.5rem;\n        }\n      </style>\n      <div class="app-bar">\n        <h1>Aplikasi Catatan</h1>\n      </div>\n    ';
          },
        },
      ]) && b(n.prototype, r),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
    var n, r;
  })(w(HTMLElement));
  function L(t) {
    return (
      (L =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      L(t)
    );
  }
  function k() {
    k = function () {
      return e;
    };
    var t,
      e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function s(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      s({}, "");
    } catch (t) {
      s = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function f(t, e, n, r) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new G(r || []);
      return o(a, "_invoke", { value: _(t, n, c) }), a;
    }
    function l(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    e.wrap = f;
    var p = "suspendedStart",
      h = "suspendedYield",
      y = "executing",
      d = "completed",
      v = {};
    function m() {}
    function b() {}
    function g() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      E = x && x(x(M([])));
    E && E !== n && r.call(E, a) && (w = E);
    var O = (g.prototype = m.prototype = Object.create(w));
    function j(t) {
      ["next", "throw", "return"].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function S(t, e) {
      function n(o, i, a, c) {
        var u = l(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && "object" == L(f) && r.call(f, "__await")
            ? e.resolve(f.__await).then(
                function (t) {
                  n("next", t, a, c);
                },
                function (t) {
                  n("throw", t, a, c);
                },
              )
            : e.resolve(f).then(
                function (t) {
                  (s.value = t), a(s);
                },
                function (t) {
                  return n("throw", t, a, c);
                },
              );
        }
        c(u.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, r) {
          function o() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function _(e, n, r) {
      var o = p;
      return function (i, a) {
        if (o === y) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = P(c, r);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === p) throw ((o = d), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = y;
          var s = l(e, n, r);
          if ("normal" === s.type) {
            if (((o = r.done ? d : h), s.arg === v)) continue;
            return { value: s.arg, done: r.done };
          }
          "throw" === s.type &&
            ((o = d), (r.method = "throw"), (r.arg = s.arg));
        }
      };
    }
    function P(e, n) {
      var r = n.method,
        o = e.iterator[r];
      if (o === t)
        return (
          (n.delegate = null),
          ("throw" === r &&
            e.iterator.return &&
            ((n.method = "return"),
            (n.arg = t),
            P(e, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method",
              )))),
          v
        );
      var i = l(o, e.iterator, n.arg);
      if ("throw" === i.type)
        return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = t)),
            (n.delegate = null),
            v)
          : a
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          v);
    }
    function T(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function N(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function G(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(T, this),
        this.reset(!0);
    }
    function M(e) {
      if (e || "" === e) {
        var n = e[a];
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < e.length; )
                if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(L(e) + " is not iterable");
    }
    return (
      (b.prototype = g),
      o(O, "constructor", { value: g, configurable: !0 }),
      o(g, "constructor", { value: b, configurable: !0 }),
      (b.displayName = s(g, u, "GeneratorFunction")),
      (e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, g)
            : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
          (t.prototype = Object.create(O)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      j(S.prototype),
      s(S.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = S),
      (e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new S(f(t, n, r, o), i);
        return e.isGeneratorFunction(n)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      j(O),
      s(O, u, "Generator"),
      s(O, a, function () {
        return this;
      }),
      s(O, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = M),
      (G.prototype = {
        constructor: G,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(N),
            !e)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return (
              (c.type = "throw"),
              (c.arg = e),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, "catchLoc"),
                s = r.call(a, "finallyLoc");
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), v)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), N(n), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                N(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: M(e), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = t),
            v
          );
        },
      }),
      e
    );
  }
  function S(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void n(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(r, o);
  }
  function _(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);
        function a(t) {
          S(i, r, o, a, c, "next", t);
        }
        function c(t) {
          S(i, r, o, a, c, "throw", t);
        }
        a(void 0);
      });
    };
  }
  customElements.define("app-bar", j);
  var P = "https://notes-api.dicoding.dev/v2";
  const T = function () {
      return _(
        k().mark(function t() {
          var e, n;
          return k().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0), (t.next = 3), fetch("".concat(P, "/notes"))
                    );
                  case 3:
                    return (e = t.sent), (t.next = 6), e.json();
                  case 6:
                    return (n = t.sent), t.abrupt("return", n.data);
                  case 10:
                    return (
                      (t.prev = 10),
                      (t.t0 = t.catch(0)),
                      t.abrupt("return", { error: !0, message: t.t0.message })
                    );
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 10]],
          );
        }),
      )();
    },
    N = function () {
      return _(
        k().mark(function t() {
          var e, n;
          return k().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      fetch("".concat(P, "/notes/archived"))
                    );
                  case 3:
                    return (e = t.sent), (t.next = 6), e.json();
                  case 6:
                    return (n = t.sent), t.abrupt("return", n.data);
                  case 10:
                    return (
                      (t.prev = 10),
                      (t.t0 = t.catch(0)),
                      t.abrupt("return", { error: !0, message: t.t0.message })
                    );
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 10]],
          );
        }),
      )();
    },
    G = function (t) {
      return _(
        k().mark(function e() {
          var n, r, o, i;
          return k().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.title),
                      (r = t.body),
                      (e.prev = 1),
                      (e.next = 4),
                      fetch("".concat(P, "/notes"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title: n, body: r }),
                      })
                    );
                  case 4:
                    return (o = e.sent), (e.next = 7), o.json();
                  case 7:
                    return (i = e.sent), e.abrupt("return", i);
                  case 11:
                    return (
                      (e.prev = 11),
                      (e.t0 = e.catch(1)),
                      e.abrupt("return", { error: !0, message: e.t0.message })
                    );
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 11]],
          );
        }),
      )();
    },
    M = function (t) {
      return _(
        k().mark(function e() {
          var n, r;
          return k().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      fetch("".concat(P, "/notes/").concat(t, "/archive"), {
                        method: "POST",
                      })
                    );
                  case 3:
                    return (n = e.sent), (e.next = 6), n.json();
                  case 6:
                    return (r = e.sent), e.abrupt("return", r);
                  case 10:
                    return (
                      (e.prev = 10),
                      (e.t0 = e.catch(0)),
                      e.abrupt("return", { error: !0, message: e.t0.message })
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 10]],
          );
        }),
      )();
    },
    R = function (t) {
      return _(
        k().mark(function e() {
          var n, r;
          return k().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      fetch("".concat(P, "/notes/").concat(t, "/unarchive"), {
                        method: "POST",
                      })
                    );
                  case 3:
                    return (n = e.sent), (e.next = 6), n.json();
                  case 6:
                    return (r = e.sent), e.abrupt("return", r);
                  case 10:
                    return (
                      (e.prev = 10),
                      (e.t0 = e.catch(0)),
                      e.abrupt("return", { error: !0, message: e.t0.message })
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 10]],
          );
        }),
      )();
    },
    F = function (t) {
      return _(
        k().mark(function e() {
          var n, r;
          return k().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      fetch("".concat(P, "/notes/").concat(t), {
                        method: "DELETE",
                      })
                    );
                  case 3:
                    return (n = e.sent), (e.next = 6), n.json();
                  case 6:
                    return (r = e.sent), e.abrupt("return", r);
                  case 10:
                    return (
                      (e.prev = 10),
                      (e.t0 = e.catch(0)),
                      e.abrupt("return", { error: !0, message: e.t0.message })
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 10]],
          );
        }),
      )();
    };
  function A(t) {
    return (
      (A =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      A(t)
    );
  }
  function C(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, I(r.key), r);
    }
  }
  function I(t) {
    var e = (function (t) {
      if ("object" != A(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != A(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == A(e) ? e : e + "";
  }
  function H(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (H = function (t) {
        if (
          null === t ||
          !(function (t) {
            try {
              return -1 !== Function.toString.call(t).indexOf("[native code]");
            } catch (e) {
              return "function" == typeof t;
            }
          })(t)
        )
          return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, n);
        }
        function n() {
          return (function (t, e, n) {
            if (D()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, e);
            var o = new (t.bind.apply(t, r))();
            return n && B(o, n.prototype), o;
          })(t, arguments, Y(this).constructor);
        }
        return (
          (n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          B(n, t)
        );
      }),
      H(t)
    );
  }
  function D() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (D = function () {
      return !!t;
    })();
  }
  function B(t, e) {
    return (
      (B = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      B(t, e)
    );
  }
  function Y(t) {
    return (
      (Y = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      Y(t)
    );
  }
  var q = (function (t) {
    function e() {
      var t;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        (t = (function (t, e, n) {
          return (
            (e = Y(e)),
            (function (t, e) {
              if (e && ("object" == A(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              D()
                ? Reflect.construct(e, n || [], Y(t).constructor)
                : e.apply(t, n),
            )
          );
        })(this, e)).attachShadow({ mode: "open" }),
        t
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && B(t, e);
      })(e, t),
      (n = e),
      (o = [
        {
          key: "show",
          value: function () {
            var t = document.createElement("loading-indicator");
            return document.body.appendChild(t), t;
          },
        },
        {
          key: "hide",
          value: function (t) {
            t && t.remove();
          },
        },
      ]),
      (r = [
        {
          key: "connectedCallback",
          value: function () {
            this.render();
          },
        },
        {
          key: "render",
          value: function () {
            this.shadowRoot.innerHTML =
              '\n        <style>\n            .loading-container {\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                backgrond-color: rgba(0, 0, 0, 0.5);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                z-index: 999;\n            }\n\n            .spinner {\n                width: 50px\n                height: 50px;\n                border: 5px solid #f3f3f3;\n                border-top: 5px solid #2c3e50;\n                border-radius: 50%;\n                animation: spin 1s linear infinite;\n            }\n\n            @keyframes spin {\n                0% { transform: rotate(0deg); }\n                100% { transform: rotate(360deg); }\n            }\n        </style>\n\n        <div class="loading-container">\n            <div class="spinner"></div>        \n        </div>\n        ';
          },
        },
      ]) && C(n.prototype, r),
      o && C(n, o),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
    var n, r, o;
  })(H(HTMLElement));
  customElements.define("loading-indicator", q);
  const z = q;
  function J(t) {
    return (
      (J =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      J(t)
    );
  }
  function U() {
    U = function () {
      return e;
    };
    var t,
      e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function s(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      s({}, "");
    } catch (t) {
      s = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function f(t, e, n, r) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new T(r || []);
      return o(a, "_invoke", { value: k(t, n, c) }), a;
    }
    function l(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    e.wrap = f;
    var p = "suspendedStart",
      h = "suspendedYield",
      y = "executing",
      d = "completed",
      v = {};
    function m() {}
    function b() {}
    function g() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      E = x && x(x(N([])));
    E && E !== n && r.call(E, a) && (w = E);
    var O = (g.prototype = m.prototype = Object.create(w));
    function j(t) {
      ["next", "throw", "return"].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function L(t, e) {
      function n(o, i, a, c) {
        var u = l(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && "object" == J(f) && r.call(f, "__await")
            ? e.resolve(f.__await).then(
                function (t) {
                  n("next", t, a, c);
                },
                function (t) {
                  n("throw", t, a, c);
                },
              )
            : e.resolve(f).then(
                function (t) {
                  (s.value = t), a(s);
                },
                function (t) {
                  return n("throw", t, a, c);
                },
              );
        }
        c(u.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, r) {
          function o() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, n, r) {
      var o = p;
      return function (i, a) {
        if (o === y) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = S(c, r);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === p) throw ((o = d), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = y;
          var s = l(e, n, r);
          if ("normal" === s.type) {
            if (((o = r.done ? d : h), s.arg === v)) continue;
            return { value: s.arg, done: r.done };
          }
          "throw" === s.type &&
            ((o = d), (r.method = "throw"), (r.arg = s.arg));
        }
      };
    }
    function S(e, n) {
      var r = n.method,
        o = e.iterator[r];
      if (o === t)
        return (
          (n.delegate = null),
          ("throw" === r &&
            e.iterator.return &&
            ((n.method = "return"),
            (n.arg = t),
            S(e, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method",
              )))),
          v
        );
      var i = l(o, e.iterator, n.arg);
      if ("throw" === i.type)
        return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = t)),
            (n.delegate = null),
            v)
          : a
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          v);
    }
    function _(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(_, this),
        this.reset(!0);
    }
    function N(e) {
      if (e || "" === e) {
        var n = e[a];
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < e.length; )
                if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(J(e) + " is not iterable");
    }
    return (
      (b.prototype = g),
      o(O, "constructor", { value: g, configurable: !0 }),
      o(g, "constructor", { value: b, configurable: !0 }),
      (b.displayName = s(g, u, "GeneratorFunction")),
      (e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, g)
            : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
          (t.prototype = Object.create(O)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      j(L.prototype),
      s(L.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = L),
      (e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(f(t, n, r, o), i);
        return e.isGeneratorFunction(n)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      j(O),
      s(O, u, "Generator"),
      s(O, a, function () {
        return this;
      }),
      s(O, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = N),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return (
              (c.type = "throw"),
              (c.arg = e),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, "catchLoc"),
                s = r.call(a, "finallyLoc");
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), v)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), P(n), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                P(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = t),
            v
          );
        },
      }),
      e
    );
  }
  function K(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void n(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(r, o);
  }
  function Q(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, V(r.key), r);
    }
  }
  function V(t) {
    var e = (function (t) {
      if ("object" != J(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != J(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == J(e) ? e : e + "";
  }
  function W(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (W = function (t) {
        if (
          null === t ||
          !(function (t) {
            try {
              return -1 !== Function.toString.call(t).indexOf("[native code]");
            } catch (e) {
              return "function" == typeof t;
            }
          })(t)
        )
          return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, n);
        }
        function n() {
          return (function (t, e, n) {
            if (X()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, e);
            var o = new (t.bind.apply(t, r))();
            return n && Z(o, n.prototype), o;
          })(t, arguments, $(this).constructor);
        }
        return (
          (n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Z(n, t)
        );
      }),
      W(t)
    );
  }
  function X() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (X = function () {
      return !!t;
    })();
  }
  function Z(t, e) {
    return (
      (Z = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      Z(t, e)
    );
  }
  function $(t) {
    return (
      ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      $(t)
    );
  }
  var tt = (function (t) {
    function e() {
      var t;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        (t = (function (t, e, n) {
          return (
            (e = $(e)),
            (function (t, e) {
              if (e && ("object" == J(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              X()
                ? Reflect.construct(e, n || [], $(t).constructor)
                : e.apply(t, n),
            )
          );
        })(this, e)).attachShadow({ mode: "open" }),
        t
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && Z(t, e);
      })(e, t),
      (n = e),
      (r = [
        {
          key: "connectedCallback",
          value: function () {
            this.render(), this.initEvents();
          },
        },
        {
          key: "initEvents",
          value: function () {
            var t = this,
              e = this.shadowRoot.querySelector("#noteForm");
            e.addEventListener(
              "submit",
              (function () {
                var n,
                  r =
                    ((n = U().mark(function n(r) {
                      var o, i, a, c;
                      return U().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                (r.preventDefault(),
                                (o =
                                  t.shadowRoot.querySelector("#title").value),
                                (i = t.shadowRoot.querySelector("#body").value),
                                !o.trim() || !i.trim())
                              ) {
                                n.next = 10;
                                break;
                              }
                              return (
                                (a = z.show()),
                                (n.next = 7),
                                G({ title: o, body: i })
                              );
                            case 7:
                              (c = n.sent),
                                z.hide(a),
                                c.error
                                  ? alert(
                                      "Gagal menambahkan catatan: ".concat(
                                        c.message,
                                      ),
                                    )
                                  : (document.dispatchEvent(
                                      new Event("notes-changed"),
                                    ),
                                    e.reset());
                            case 10:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })),
                    function () {
                      var t = this,
                        e = arguments;
                      return new Promise(function (r, o) {
                        var i = n.apply(t, e);
                        function a(t) {
                          K(i, r, o, a, c, "next", t);
                        }
                        function c(t) {
                          K(i, r, o, a, c, "throw", t);
                        }
                        a(void 0);
                      });
                    });
                return function (t) {
                  return r.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: "render",
          value: function () {
            this.shadowRoot.innerHTML =
              '\n      <style>\n        .note-input {\n          width: 100%;\n        }\n        \n        .note-input form {\n          display: flex;\n          flex-direction: column;\n          gap: 10px;\n        }\n        \n        .note-input h2 {\n          margin-bottom: 12px;\n          color: #2c3e50;\n        }\n        \n        .note-input input, \n        .note-input textarea {\n          padding: 10px;\n          border: 1px solid #ddd;\n          border-radius: 4px;\n          font-family: \'Arial\', sans-serif;\n        }\n        \n        .note-input textarea {\n          min-height: 120px;\n          resize: vertical;\n        }\n        \n        button {\n          padding: 10px 15px;\n          background-color: #2c3e50;\n          color: white;\n          border: none;\n          border-radius: 4px;\n          cursor: pointer;\n          font-weight: bold;\n          transition: background-color 0.3s;\n        }\n        \n        button:hover {\n          background-color: #3c5c7d;\n        }\n      </style>\n      \n      <div class="note-input">\n        <h2>Tambah Catatan Baru</h2>\n        <form id="noteForm">\n          <input \n            type="text" \n            id="title" \n            placeholder="Judul catatan" \n            required\n          />\n          <textarea \n            id="body" \n            placeholder="Isi catatan..."\n            required\n          ></textarea>\n          <button type="submit">Simpan</button>\n        </form>\n      </div>\n    ';
          },
        },
      ]),
      r && Q(n.prototype, r),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
    var n, r;
  })(W(HTMLElement));
  function et(t) {
    return (
      (et =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      et(t)
    );
  }
  function nt() {
    nt = function () {
      return e;
    };
    var t,
      e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function s(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      s({}, "");
    } catch (t) {
      s = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function f(t, e, n, r) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new T(r || []);
      return o(a, "_invoke", { value: k(t, n, c) }), a;
    }
    function l(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    e.wrap = f;
    var p = "suspendedStart",
      h = "suspendedYield",
      y = "executing",
      d = "completed",
      v = {};
    function m() {}
    function b() {}
    function g() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      E = x && x(x(N([])));
    E && E !== n && r.call(E, a) && (w = E);
    var O = (g.prototype = m.prototype = Object.create(w));
    function j(t) {
      ["next", "throw", "return"].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function L(t, e) {
      function n(o, i, a, c) {
        var u = l(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && "object" == et(f) && r.call(f, "__await")
            ? e.resolve(f.__await).then(
                function (t) {
                  n("next", t, a, c);
                },
                function (t) {
                  n("throw", t, a, c);
                },
              )
            : e.resolve(f).then(
                function (t) {
                  (s.value = t), a(s);
                },
                function (t) {
                  return n("throw", t, a, c);
                },
              );
        }
        c(u.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, r) {
          function o() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, n, r) {
      var o = p;
      return function (i, a) {
        if (o === y) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = S(c, r);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === p) throw ((o = d), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = y;
          var s = l(e, n, r);
          if ("normal" === s.type) {
            if (((o = r.done ? d : h), s.arg === v)) continue;
            return { value: s.arg, done: r.done };
          }
          "throw" === s.type &&
            ((o = d), (r.method = "throw"), (r.arg = s.arg));
        }
      };
    }
    function S(e, n) {
      var r = n.method,
        o = e.iterator[r];
      if (o === t)
        return (
          (n.delegate = null),
          ("throw" === r &&
            e.iterator.return &&
            ((n.method = "return"),
            (n.arg = t),
            S(e, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method",
              )))),
          v
        );
      var i = l(o, e.iterator, n.arg);
      if ("throw" === i.type)
        return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = t)),
            (n.delegate = null),
            v)
          : a
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          v);
    }
    function _(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(_, this),
        this.reset(!0);
    }
    function N(e) {
      if (e || "" === e) {
        var n = e[a];
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < e.length; )
                if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(et(e) + " is not iterable");
    }
    return (
      (b.prototype = g),
      o(O, "constructor", { value: g, configurable: !0 }),
      o(g, "constructor", { value: b, configurable: !0 }),
      (b.displayName = s(g, u, "GeneratorFunction")),
      (e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, g)
            : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
          (t.prototype = Object.create(O)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      j(L.prototype),
      s(L.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = L),
      (e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(f(t, n, r, o), i);
        return e.isGeneratorFunction(n)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      j(O),
      s(O, u, "Generator"),
      s(O, a, function () {
        return this;
      }),
      s(O, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = N),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return (
              (c.type = "throw"),
              (c.arg = e),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, "catchLoc"),
                s = r.call(a, "finallyLoc");
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), v)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), P(n), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                P(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = t),
            v
          );
        },
      }),
      e
    );
  }
  function rt(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void n(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(r, o);
  }
  function ot(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);
        function a(t) {
          rt(i, r, o, a, c, "next", t);
        }
        function c(t) {
          rt(i, r, o, a, c, "throw", t);
        }
        a(void 0);
      });
    };
  }
  function it(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, at(r.key), r);
    }
  }
  function at(t) {
    var e = (function (t) {
      if ("object" != et(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != et(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == et(e) ? e : e + "";
  }
  function ct(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (ct = function (t) {
        if (
          null === t ||
          !(function (t) {
            try {
              return -1 !== Function.toString.call(t).indexOf("[native code]");
            } catch (e) {
              return "function" == typeof t;
            }
          })(t)
        )
          return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, n);
        }
        function n() {
          return (function (t, e, n) {
            if (ut()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, e);
            var o = new (t.bind.apply(t, r))();
            return n && st(o, n.prototype), o;
          })(t, arguments, ft(this).constructor);
        }
        return (
          (n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          st(n, t)
        );
      }),
      ct(t)
    );
  }
  function ut() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (ut = function () {
      return !!t;
    })();
  }
  function st(t, e) {
    return (
      (st = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      st(t, e)
    );
  }
  function ft(t) {
    return (
      (ft = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      ft(t)
    );
  }
  customElements.define("note-input", tt);
  var lt = (function (t) {
    function e() {
      var t;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        (t = (function (t, e, n) {
          return (
            (e = ft(e)),
            (function (t, e) {
              if (e && ("object" == et(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              ut()
                ? Reflect.construct(e, n || [], ft(t).constructor)
                : e.apply(t, n),
            )
          );
        })(this, e)).attachShadow({ mode: "open" }),
        t
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && st(t, e);
      })(e, t),
      (n = e),
      (r = [
        {
          key: "connectedCallback",
          value: function () {
            (this.note = JSON.parse(this.getAttribute("note"))),
              this.render(),
              this.initEvents();
          },
        },
        {
          key: "initEvents",
          value: function () {
            var t = this,
              e = this.shadowRoot.querySelector(".archive-button"),
              n = this.shadowRoot.querySelector(".delete-button");
            e.addEventListener(
              "click",
              ot(
                nt().mark(function e() {
                  var n;
                  return nt().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((n = z.show()), !t.note.archived)) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 4), R(t.note.id);
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          return (e.next = 8), M(t.note.id);
                        case 8:
                          z.hide(n),
                            document.dispatchEvent(new Event("notes-changed"));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
              n.addEventListener(
                "click",
                ot(
                  nt().mark(function e() {
                    var n;
                    return nt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !confirm(
                                "Apakah Anda yakin ingin menghapus catatan ini?",
                              )
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (n = z.show()), (e.next = 5), F(t.note.id);
                          case 5:
                            z.hide(n),
                              document.dispatchEvent(
                                new Event("notes-changed"),
                              );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
              );
          },
        },
        {
          key: "formatDate",
          value: function (t) {
            return new Date(t).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          },
        },
        {
          key: "render",
          value: function () {
            var t = this.note,
              e = t.title,
              n = t.body,
              r = t.createdAt,
              o = t.archived,
              i = this.formatDate(r);
            this.shadowRoot.innerHTML =
              "\n      <style>\n        .note-item {\n          background-color: white;\n          border-radius: 8px;\n          padding: 16px;\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n          display: flex;\n          flex-direction: column;\n          transition: transform 0.2s, box-shadow 0.2s;\n          height: 100%;\n        }\n        \n        .note-item:hover {\n          transform: translateY(-5px);\n          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n        }\n        \n        .note-header {\n          margin-bottom: 10px;\n        }\n        \n        .note-title {\n          font-size: 1.25rem;\n          font-weight: bold;\n          margin-bottom: 5px;\n          color: #2c3e50;\n        }\n        \n        .note-date {\n          font-size: 0.8rem;\n          color: #7f8c8d;\n        }\n        \n        .note-body {\n          flex-grow: a;\n          margin-bottom: 15px;\n          line-height: 1.5;\n          word-break: break-word;\n          white-space: pre-line;\n        }\n        \n        .note-actions {\n          display: flex;\n          justify-content: flex-end;\n          gap: 10px;\n        }\n        \n        .note-actions button {\n          padding: 6px 12px;\n          border-radius: 4px;\n          border: none;\n          cursor: pointer;\n          font-size: 0.9rem;\n          transition: background-color 0.3s;\n        }\n        \n        .delete-button {\n          background-color: #e74c3c;\n          color: white;\n        }\n        \n        .delete-button:hover {\n          background-color: #c0392b;\n        }\n        \n        .archive-button {\n          background-color: "
                .concat(
                  o ? "#3498db" : "#2ecc71",
                  ";\n          color: white;\n        }\n        \n        .archive-button:hover {\n          background-color: ",
                )
                .concat(
                  o ? "#2980b9" : "#27ae60",
                  ';\n        }\n      </style>\n      \n      <div class="note-item">\n        <div class="note-header">\n          <div class="note-title">',
                )
                .concat(e, '</div>\n          <div class="note-date">')
                .concat(
                  i,
                  '</div>\n        </div>\n        <div class="note-body">',
                )
                .concat(
                  n,
                  '</div>\n        <div class="note-actions">\n          <button class="archive-button">\n            ',
                )
                .concat(
                  o ? "Pulihkan" : "Arsipkan",
                  '\n          </button>\n          <button class="delete-button">Hapus</button>\n        </div>\n      </div>\n    ',
                );
          },
        },
      ]) && it(n.prototype, r),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
    var n, r;
  })(ct(HTMLElement));
  function pt(t) {
    return (
      (pt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      pt(t)
    );
  }
  function ht() {
    ht = function () {
      return e;
    };
    var t,
      e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function s(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      s({}, "");
    } catch (t) {
      s = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function f(t, e, n, r) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new T(r || []);
      return o(a, "_invoke", { value: k(t, n, c) }), a;
    }
    function l(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    e.wrap = f;
    var p = "suspendedStart",
      h = "suspendedYield",
      y = "executing",
      d = "completed",
      v = {};
    function m() {}
    function b() {}
    function g() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      E = x && x(x(N([])));
    E && E !== n && r.call(E, a) && (w = E);
    var O = (g.prototype = m.prototype = Object.create(w));
    function j(t) {
      ["next", "throw", "return"].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function L(t, e) {
      function n(o, i, a, c) {
        var u = l(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && "object" == pt(f) && r.call(f, "__await")
            ? e.resolve(f.__await).then(
                function (t) {
                  n("next", t, a, c);
                },
                function (t) {
                  n("throw", t, a, c);
                },
              )
            : e.resolve(f).then(
                function (t) {
                  (s.value = t), a(s);
                },
                function (t) {
                  return n("throw", t, a, c);
                },
              );
        }
        c(u.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, r) {
          function o() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, n, r) {
      var o = p;
      return function (i, a) {
        if (o === y) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = S(c, r);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === p) throw ((o = d), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = y;
          var s = l(e, n, r);
          if ("normal" === s.type) {
            if (((o = r.done ? d : h), s.arg === v)) continue;
            return { value: s.arg, done: r.done };
          }
          "throw" === s.type &&
            ((o = d), (r.method = "throw"), (r.arg = s.arg));
        }
      };
    }
    function S(e, n) {
      var r = n.method,
        o = e.iterator[r];
      if (o === t)
        return (
          (n.delegate = null),
          ("throw" === r &&
            e.iterator.return &&
            ((n.method = "return"),
            (n.arg = t),
            S(e, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method",
              )))),
          v
        );
      var i = l(o, e.iterator, n.arg);
      if ("throw" === i.type)
        return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = t)),
            (n.delegate = null),
            v)
          : a
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          v);
    }
    function _(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(_, this),
        this.reset(!0);
    }
    function N(e) {
      if (e || "" === e) {
        var n = e[a];
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < e.length; )
                if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(pt(e) + " is not iterable");
    }
    return (
      (b.prototype = g),
      o(O, "constructor", { value: g, configurable: !0 }),
      o(g, "constructor", { value: b, configurable: !0 }),
      (b.displayName = s(g, u, "GeneratorFunction")),
      (e.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, g)
            : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
          (t.prototype = Object.create(O)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      j(L.prototype),
      s(L.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = L),
      (e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(f(t, n, r, o), i);
        return e.isGeneratorFunction(n)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      j(O),
      s(O, u, "Generator"),
      s(O, a, function () {
        return this;
      }),
      s(O, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = N),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return (
              (c.type = "throw"),
              (c.arg = e),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, "catchLoc"),
                s = r.call(a, "finallyLoc");
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), v)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), P(n), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                P(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = t),
            v
          );
        },
      }),
      e
    );
  }
  function yt(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void n(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(r, o);
  }
  function dt(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);
        function a(t) {
          yt(i, r, o, a, c, "next", t);
        }
        function c(t) {
          yt(i, r, o, a, c, "throw", t);
        }
        a(void 0);
      });
    };
  }
  function vt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, mt(r.key), r);
    }
  }
  function mt(t) {
    var e = (function (t) {
      if ("object" != pt(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != pt(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == pt(e) ? e : e + "";
  }
  function bt(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (bt = function (t) {
        if (
          null === t ||
          !(function (t) {
            try {
              return -1 !== Function.toString.call(t).indexOf("[native code]");
            } catch (e) {
              return "function" == typeof t;
            }
          })(t)
        )
          return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, n);
        }
        function n() {
          return (function (t, e, n) {
            if (gt()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, e);
            var o = new (t.bind.apply(t, r))();
            return n && wt(o, n.prototype), o;
          })(t, arguments, xt(this).constructor);
        }
        return (
          (n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          wt(n, t)
        );
      }),
      bt(t)
    );
  }
  function gt() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (gt = function () {
      return !!t;
    })();
  }
  function wt(t, e) {
    return (
      (wt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      wt(t, e)
    );
  }
  function xt(t) {
    return (
      (xt = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      xt(t)
    );
  }
  customElements.define("note-item", lt);
  var Et = (function (t) {
    function e() {
      var t;
      return (
        (function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        ((t = (function (t, e, n) {
          return (
            (e = xt(e)),
            (function (t, e) {
              if (e && ("object" == pt(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              gt()
                ? Reflect.construct(e, n || [], xt(t).constructor)
                : e.apply(t, n),
            )
          );
        })(this, e)).notes = []),
        (t.innerHTML = ""),
        t
      );
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && wt(t, e);
      })(e, t),
      (n = e),
      (r = [
        {
          key: "connectedCallback",
          value:
            ((i = dt(
              ht().mark(function t() {
                var e = this;
                return ht().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.id = this.getAttribute("id")),
                            (t.next = 3),
                            this.fetchNotes()
                          );
                        case 3:
                          document.addEventListener(
                            "notes-changed",
                            dt(
                              ht().mark(function t() {
                                return ht().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), e.fetchNotes();
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              }),
                            ),
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return i.apply(this, arguments);
            }),
        },
        {
          key: "fetchNotes",
          value:
            ((o = dt(
              ht().mark(function t() {
                var e;
                return ht().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((e = z.show()), "archivedNotes" !== this.id)) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 4), N();
                        case 4:
                          (this.notes = t.sent), (t.next = 10);
                          break;
                        case 7:
                          return (t.next = 9), T();
                        case 9:
                          this.notes = t.sent;
                        case 10:
                          z.hide(e), this.render();
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return o.apply(this, arguments);
            }),
        },
        {
          key: "render",
          value: function () {
            var t = this;
            this.innerHTML = "";
            var e = "archivedNotes" === this.id;
            this.notes && 0 !== this.notes.length && !this.notes.error
              ? this.notes.forEach(function (e) {
                  var n = document.createElement("note-item");
                  n.setAttribute("note", JSON.stringify(e)), t.appendChild(n);
                })
              : (this.innerHTML =
                  '\n        <div style="grid-column: 1/-1; text-align: center; padding: 20px; color: #7f8c8d;">\n          Tidak ada catatan '.concat(
                    e ? "di arsip" : "aktif",
                    ".\n        </div>\n      ",
                  ));
          },
        },
      ]),
      r && vt(n.prototype, r),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
    var n, r, o, i;
  })(bt(HTMLElement));
  customElements.define("note-list", Et),
    document.addEventListener("DOMContentLoaded", function () {
      document.dispatchEvent(new Event("notes-changed"));
    });
})();
