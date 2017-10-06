/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function o(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, o) {
            return !!t.call(e, o, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return Y.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = he[e] = {};
        return Z.each(e.match(pe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + s.uid++
    }

    function l(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function f() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Oe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, o = e.length; o > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, o, i, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (r = ve.access(e), a = ve.set(t, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (i in c)
                    for (n = 0, o = c[i].length; o > n; n++) Z.event.add(t, i, c[i][n])
            }
            ye.hasData(e) && (s = ye.access(e), l = Z.extend({}, s), ye.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var o, i = Z(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (o = e.getDefaultComputedStyle(i[0])) ? o.display : Z.css(i[0], "display");
        return i.detach(), r
    }

    function x(e) {
        var t = K,
            n = Be[e];
        return n || (n = w(e, t), "none" !== n && n || (Pe = (Pe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = w(e, t), Pe.detach()), Be[e] = n), n
    }

    function b(e, t, n) {
        var o, i, r, a, s = e.style;
        return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), We.test(a) && Ie.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), o = t, i = Ge.length; i--;)
            if (t = Ge[i] + n, t in e) return t;
        return o
    }

    function C(e, t, n) {
        var o = Ve.exec(t);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
    }

    function k(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += Z.css(e, n + Te[r], !0, i)), o ? ("content" === n && (a -= Z.css(e, "padding" + Te[r], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + Te[r] + "Width", !0, i))) : (a += Z.css(e, "padding" + Te[r], !0, i), "padding" !== n && (a += Z.css(e, "border" + Te[r] + "Width", !0, i)));
        return a
    }

    function E(e, t, n) {
        var o = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ze(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = b(e, t, r), (0 > i || null == i) && (i = e.style[t]), We.test(i)) return i;
            o = a && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), o, r) + "px"
    }

    function A(e, t) {
        for (var n, o, i, r = [], a = 0, s = e.length; s > a; a++) o = e[a], o.style && (r[a] = ve.get(o, "olddisplay"), n = o.style.display, t ? (r[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && Se(o) && (r[a] = ve.access(o, "olddisplay", x(o.nodeName)))) : (i = Se(o), "none" === n && i || ve.set(o, "olddisplay", i ? n : Z.css(o, "display"))));
        for (a = 0; s > a; a++) o = e[a], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function D(e, t, n, o, i) {
        return new D.prototype.init(e, t, n, o, i)
    }

    function N() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = Z.now()
    }

    function L(e, t) {
        var n, o = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Te[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function $(e, t, n) {
        for (var o, i = (nt[t] || []).concat(nt["*"]), r = 0, a = i.length; a > r; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function j(e, t, n) {
        var o, i, r, a, s, l, c, u, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && Se(e),
            m = ve.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, f.always(function () {
            f.always(function () {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || x(e.nodeName) : c, "inline" === u && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (o in t)
            if (i = t[o], Je.exec(i)) {
                if (delete t[o], r = r || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[o]) continue;
                    h = !0
                }
                d[o] = m && m[o] || Z.style(e, o)
            } else c = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === c ? x(e.nodeName) : c) && (p.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ve.access(e, "fxshow", {}), r && (m.hidden = !h), h ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (o in d) a = $(h ? m[o] : 0, o, f), o in m || (m[o] = a.start, h && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function q(e, t) {
        var n, o, i, r, a;
        for (n in e)
            if (o = Z.camelCase(n), i = t[o], r = e[n], Z.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), a = Z.cssHooks[o], a && "expand" in a) {
                r = a.expand(r), delete e[o];
                for (n in r) n in e || (e[n] = r[n], t[n] = i)
            } else t[o] = i
    }

    function H(e, t, n) {
        var o, i, r = 0,
            a = tt.length,
            s = Z.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = Qe || N(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, r = 1 - o, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || N(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var o = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(o), o
                },
                stop: function (t) {
                    var n = 0,
                        o = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; o > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (q(u, c.opts.specialEasing); a > r; r++)
            if (o = tt[r].call(c, e, u, c.opts)) return o;
        return Z.map(u, $, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function M(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o, i = 0,
                r = t.toLowerCase().match(pe) || [];
            if (Z.isFunction(n))
                for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }

    function O(e, t, n, o) {
        function i(s) {
            var l;
            return r[s] = !0, Z.each(e[s] || [], function (e, s) {
                var c = s(t, n, o);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), l
        }
        var r = {},
            a = e === wt;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }

    function F(e, t) {
        var n, o, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && Z.extend(!0, e, o), e
    }

    function R(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (i in s)
                if (s[i] && s[i].test(o)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    r = i;
                    break
                }
                a || (a = i)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function P(e, t, n, o) {
        var i, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = c[l + " " + r] || c["* " + r], !a)
                for (i in c)
                    if (s = i.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[i] : c[i] !== !0 && (r = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, o) {
        var i;
        if (Z.isArray(t)) Z.each(t, function (t, i) {
            n || Ct.test(e) ? o(e, i) : B(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, o)
        });
        else if (n || "object" !== Z.type(t)) o(e, t);
        else
            for (i in t) B(e + "[" + i + "]", t[i], n, o)
    }

    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
        z = W.slice,
        _ = W.concat,
        V = W.push,
        Y = W.indexOf,
        X = {},
        U = X.toString,
        G = X.hasOwnProperty,
        Q = {},
        K = e.document,
        J = "2.1.4",
        Z = function (e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        oe = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: J,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function () {
            return z.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return Z.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: W.sort,
        splice: W.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, o, i, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], o = e[t], a !== o && (c && o && (Z.isPlainObject(o) || (i = Z.isArray(o))) ? (i ? (i = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, r, o)) : void 0 !== o && (a[t] = o));
        return a
    }, Z.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[U.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, oe)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, o) {
            var i, r = 0,
                a = e.length,
                s = n(e);
            if (o) {
                if (s)
                    for (; a > r && (i = t.apply(e[r], o), i !== !1); r++);
                else
                    for (r in e)
                        if (i = t.apply(e[r], o), i === !1) break
            } else if (s)
                for (; a > r && (i = t.call(e[r], r, e[r]), i !== !1); r++);
            else
                for (r in e)
                    if (i = t.call(e[r], r, e[r]), i === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function (e, t) {
            var o = t || [];
            return null != e && (n(Object(e)) ? Z.merge(o, "string" == typeof e ? [e] : e) : V.call(o, e)), o
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Y.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, o = 0, i = e.length; n > o; o++) e[i++] = t[o];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var o, i = [], r = 0, a = e.length, s = !n; a > r; r++) o = !t(e[r], r), o !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, o) {
            var i, r = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > r; r++) i = t(e[r], r, o), null != i && l.push(i);
            else
                for (r in e) i = t(e[r], r, o), null != i && l.push(i);
            return _.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, o, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (o = z.call(arguments, 2), i = function () {
                return e.apply(t || this, o.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, o) {
            var i, r, a, s, l, c, f, p, h, m;
            if ((t ? t.ownerDocument || t : B) !== j && $(t), t = t || j, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!o && H) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && R(t, r) && r.id === a) return n.push(r), n
                    } else {
                        if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && b.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
                    }
                if (b.qsa && (!M || !M.test(e))) {
                    if (p = f = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = k(e), (f = t.getAttribute("id")) ? p = f.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + d(c[l]);
                        h = we.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return J.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(le, "$1"), t, n, o)
        }

        function n() {
            function e(n, o) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
            var t = [];
            return e
        }

        function o(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), o = e.length; o--;) T.attrHandle[n[o]] = t
        }

        function a(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return o(function (t) {
                return t = +t, o(function (n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
            return o
        }

        function p(e, t, n) {
            var o = t.dir,
                i = n && "parentNode" === o,
                r = W++;
            return t.first ? function (t, n, r) {
                for (; t = t[o];)
                    if (1 === t.nodeType || i) return e(t, n, r)
            } : function (t, n, a) {
                var s, l, c = [I, r];
                if (a) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), (s = l[o]) && s[0] === I && s[1] === r) return c[2] = s[2];
                            if (l[o] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, o) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, o)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, o) {
            for (var i = 0, r = n.length; r > i; i++) t(e, n[i], o);
            return o
        }

        function g(e, t, n, o, i) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, o, i)) && (a.push(r), c && t.push(s));
            return a
        }

        function v(e, t, n, i, r, a) {
            return i && !i[P] && (i = v(i)), r && !r[P] && (r = v(r, a)), o(function (o, a, s, l) {
                var c, u, f, d = [],
                    p = [],
                    h = a.length,
                    v = o || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? v : g(v, d, e, s, l),
                    w = n ? r || (o ? e : h || i) ? [] : a : y;
                if (n && n(y, w, s, l), i)
                    for (c = g(w, p), i(c, [], s, l), u = c.length; u--;)(f = c[u]) && (w[p[u]] = !(y[p[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(f = w[u]) && c.push(y[u] = f);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(f = w[u]) && (c = r ? ee(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
                    }
                } else w = g(w === a ? w.splice(h, w.length) : w), r ? r(null, a, w, l) : J.apply(a, w)
            })
        }

        function y(e) {
            for (var t, n, o, i = e.length, r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = p(function (e) {
                    return e === t
                }, a, !0), c = p(function (e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function (e, n, o) {
                    var i = !r && (o || n !== D) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
                    return t = null, i
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (o = ++s; i > o && !T.relative[e[o].type]; o++);
                        return v(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, o > s && y(e.slice(s, o)), i > o && y(e = e.slice(o)), i > o && d(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function w(e, n) {
            var i = n.length > 0,
                r = e.length > 0,
                a = function (o, a, s, l, c) {
                    var u, f, d, p = 0,
                        h = "0",
                        m = o && [],
                        v = [],
                        y = D,
                        w = o || r && T.find.TAG("*", c),
                        x = I += null == y ? 1 : Math.random() || .1,
                        b = w.length;
                    for (c && (D = a !== j && a); h !== b && null != (u = w[h]); h++) {
                        if (r && u) {
                            for (f = 0; d = e[f++];)
                                if (d(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (I = x)
                        }
                        i && ((u = !d && u) && p--, o && m.push(u))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(m, v, a, s);
                        if (o) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !o && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (I = x, D = y), m
                };
            return i ? o(a) : a
        }
        var x, b, T, S, C, k, E, A, D, N, L, $, j, q, H, M, O, F, R, P = "sizzle" + 1 * new Date,
            B = e.document,
            I = 0,
            W = 0,
            z = n(),
            _ = n(),
            V = n(),
            Y = function (e, t) {
                return e === t && (L = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            J = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, o = e.length; o > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = oe.replace("w", "w#"),
            re = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function (e, t, n) {
                var o = "0x" + t - 65536;
                return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            Se = function () {
                $()
            };
        try {
            J.apply(G = Z.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: G.length ? function (e, t) {
                    K.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, $ = t.setDocument = function (e) {
            var t, n, o = e ? e.ownerDocument || e : B;
            return o !== j && 9 === o.nodeType && o.documentElement ? (j = o, q = o.documentElement, n = o.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), H = !C(o), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ve.test(o.getElementsByClassName), b.getById = i(function (e) {
                return q.appendChild(e).id = P, !o.getElementsByName || !o.getElementsByName(P).length
            }), b.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(be, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(be, Te);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = b.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, o = [],
                    i = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }, T.find.CLASS = b.getElementsByClassName && function (e, t) {
                return H ? t.getElementsByClassName(e) : void 0
            }, O = [], M = [], (b.qsa = ve.test(o.querySelectorAll)) && (i(function (e) {
                q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]")
            }), i(function (e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (b.matchesSelector = ve.test(F = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(q.compareDocumentPosition), R = t || ve.test(q.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === o || e.ownerDocument === B && R(B, e) ? -1 : t === o || t.ownerDocument === B && R(B, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !s) return e === o ? -1 : t === o ? 1 : r ? -1 : s ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (r === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[i] === c[i];) i++;
                return i ? a(l[i], c[i]) : l[i] === B ? -1 : c[i] === B ? 1 : 0
            }, o) : j
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== j && $(e), n = n.replace(fe, "='$1']"), !(!b.matchesSelector || !H || O && O.test(n) || M && M.test(n))) try {
                var o = F.call(e, n);
                if (o || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
            } catch (i) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== j && $(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== j && $(e);
            var n = T.attrHandle[t.toLowerCase()],
                o = n && U.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== o ? o : b.attributes || !H ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                o = 0,
                i = 0;
            if (L = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(Y), L) {
                for (; t = e[i++];) t === e[i] && (o = n.push(i));
                for (; o--;) e.splice(n[o], 1)
            }
            return N = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                o = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[o++];) n += S(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(be, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, o) {
                    return function (i) {
                        var r = t.attr(i, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(o) > -1 : "|=" === n ? r === o || r.slice(0, o.length + 1) === o + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === o && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, f, d, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[P] || (g[P] = {}), c = u[e] || [], p = c[0] === I && c[1], d = c[0] === I && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++d && f === t) {
                                        u[e] = [I, p, d];
                                        break
                                    }
                            } else if (y && (c = (t[P] || (t[P] = {}))[e]) && c[0] === I) d = c[1];
                            else
                                for (;
                                    (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[P] || (f[P] = {}))[e] = [I, d]), f !== t)););
                            return d -= i, d === o || d % o === 0 && d / o >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[P] ? r(n) : r.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, t) {
                        for (var o, i = r(e, n), a = i.length; a--;) o = ee(e, i[a]), e[o] = !(t[o] = i[a])
                    }) : function (e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: o(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(le, "$1"));
                    return i[P] ? o(function (e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, o, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: o(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: o(function (e) {
                    return e = e.replace(be, Te),
                        function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: o(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, Te).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === q
                },
                focus: function (e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return me.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
            var o, i, r, a, s, l, c, u = _[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = T.preFilter; s;) {
                (!o || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), o = !1, (i = ue.exec(s)) && (o = i.shift(), r.push({
                    value: o,
                    type: i[0].replace(le, " ")
                }), s = s.slice(o.length));
                for (a in T.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (o = i.shift(), r.push({
                    value: o,
                    type: a,
                    matches: i
                }), s = s.slice(o.length));
                if (!o) break
            }
            return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
        }, E = t.compile = function (e, t) {
            var n, o = [],
                i = [],
                r = V[e + " "];
            if (!r) {
                for (t || (t = k(e)), n = t.length; n--;) r = y(t[n]), r[P] ? o.push(r) : i.push(r);
                r = V(e, w(i, o)), r.selector = e
            }
            return r
        }, A = t.select = function (e, t, n, o) {
            var i, r, a, s, l, c = "function" == typeof e && e,
                f = !o && k(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && b.getById && 9 === t.nodeType && H && T.relative[r[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, Te), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (o = l(a.matches[0].replace(be, Te), we.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(i, 1), e = o.length && d(r), !e) return J.apply(n, o), n;
                        break
                    }
            }
            return (c || E(e, f))(o, t, !H, n, we.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = P.split("").sort(Y).join("") === P, b.detectDuplicates = !!L, $(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var o;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var re = Z.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? Z.find.matchesSelector(o, e) ? [o] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length,
                o = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], o);
            return o = this.pushStack(n > 1 ? Z.unique(o) : o), o.selector = this.selector ? this.selector + " " + e : e, o
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && re.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = Z.fn.init = function (e, t) {
            var n, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)),
                        ae.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return o = K.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ue.prototype = Z.fn, le = Z(K);
    var fe = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function (e, t, n) {
            for (var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    o.push(e)
                }
            return o
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, o = 0, i = this.length, r = [], a = re.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Y.call(Z(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Z.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, o) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = Z.filter(o, i)), this.length > 1 && (de[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var pe = /\S+/g,
        he = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || r(e) : Z.extend({}, e);
        var t, n, o, i, a, s, l = [],
            c = !e.once && [],
            u = function (r) {
                for (t = e.memory && r, n = !0, s = i || 0, i = 0, a = l.length, o = !0; l && a > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                o = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : f.disable())
            },
            f = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function r(t) {
                            Z.each(t, function (t, n) {
                                var o = Z.type(n);
                                "function" === o ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== o && r(n)
                            })
                        }(arguments), o ? a = l.length : t && (i = n, u(t))
                    }
                    return this
                },
                remove: function () {
                    return l && Z.each(arguments, function (e, t) {
                        for (var n;
                            (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function (e) {
                    return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = c = t = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = void 0, t || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], o ? c.push(t) : u(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                o = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return Z.Deferred(function (n) {
                            Z.each(t, function (t, r) {
                                var a = Z.isFunction(e[t]) && e[t];
                                i[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Z.extend(e, o) : o
                    }
                },
                i = {};
            return o.pipe = o.then, Z.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                o[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function () {
                    return i[r[0] + "With"](this === i ? o : this, arguments), this
                }, i[r[0] + "With"] = a.fireWith
            }), o.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, o, i = 0,
                r = z.call(arguments),
                a = r.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : Z.Deferred(),
                c = function (e, n, o) {
                    return function (i) {
                        n[e] = this, o[e] = arguments.length > 1 ? z.call(arguments) : i, o === t ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), o = new Array(a); a > i; i++) r[i] && Z.isFunction(r[i].promise) ? r[i].promise().done(c(i, o, r)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(o, r), l.promise()
        }
    });
    var me;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(K, [Z]), Z.fn.triggerHandler && (Z(K).triggerHandler("ready"), Z(K).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return me || (me = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
    }, Z.ready.promise();
    var ge = Z.access = function (e, t, n, o, i, r, a) {
        var s = 0,
            l = e.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, r, a)
        } else if (void 0 !== o && (i = !0, Z.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function (e, t, n) {
                return c.call(Z(e), n)
            })), t))
            for (; l > s; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function (e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (o) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var o, i = this.key(e),
                r = this.cache[i];
            if ("string" == typeof t) r[t] = n;
            else if (Z.isEmptyObject(r)) Z.extend(this.cache[i], t);
            else
                for (o in t) r[o] = t[o];
            return r
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var o;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (o = this.get(e, t), void 0 !== o ? o : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, o, i, r = this.key(e),
                a = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                Z.isArray(t) ? o = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? o = [t, i] : (o = i, o = o in a ? [o] : o.match(pe) || [])), n = o.length;
                for (; n--;) delete a[o[n]]
            }
        },
        hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new s,
        ye = new s,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function (e, t) {
            ye.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, o, i, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = Z.camelCase(o.slice(5)), l(r, o, i[o])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : ge(this, function (t) {
                var n, o = Z.camelCase(e);
                if (r && void 0 === t) {
                    if (n = ye.get(r, e), void 0 !== n) return n;
                    if (n = ye.get(r, o), void 0 !== n) return n;
                    if (n = l(r, o, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, o);
                    ye.set(this, o, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue", o = ve.get(e, t), n && (!o || Z.isArray(n) ? o = ve.access(e, t, Z.makeArray(n)) : o.push(n)), o || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = Z._queueHooks(e, t),
                a = function () {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, a, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, o = 1,
                i = Z.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(r[a], e + "queueHooks"), n && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        Se = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div")),
            n = K.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        Ae = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Ne = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, o, i) {
            var r, a, s, l, c, u, f, d, p, h, m, g = ve.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, i = r.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                        return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], c = t.length; c--;) s = Ne.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, u = Z.extend({
                    type: p,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, o, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), Z.event.global[p] = !0)
        },
        remove: function (e, t, n, o, i) {
            var r, a, s, l, c, u, f, d, p, h, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(pe) || [""], c = t.length; c--;)
                    if (s = Ne.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = Z.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) u = d[r], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) Z.event.remove(e, p + t[c], n, o, !0);
                Z.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, o, i) {
            var r, a, s, l, c, u, f, d = [o || K],
                p = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = o = o || K, 3 !== o.nodeType && 8 !== o.nodeType && !De.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(o, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(o)) {
                    for (l = f.delegateType || p, De.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (o.ownerDocument || K) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = d[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : f.bindType || p, u = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Z.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(o) || c && Z.isFunction(o[p]) && !Z.isWindow(o) && (s = o[c], s && (o[c] = null), Z.event.triggered = p, o[p](), Z.event.triggered = void 0, s && (o[c] = s)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, o, i, r, a = [],
                s = z.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                c = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, o = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== o && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, o, i, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (o = [], n = 0; s > n; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? Z(i, this).index(l) >= 0 : Z.find(i, this, null, [l]).length), o[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, o, i, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, n, o, i = e.type,
                r = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ae.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, o) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            o ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, o = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return (!i || i !== o && !Z.contains(o, i)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var o = this.ownerDocument || this,
                    i = ve.access(o, t);
                i || o.addEventListener(e, n, !0), ve.access(o, t, (i || 0) + 1)
            },
            teardown: function () {
                var o = this.ownerDocument || this,
                    i = ve.access(o, t) - 1;
                i ? ve.access(o, t, i) : (o.removeEventListener(e, n, !0), ve.remove(o, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, o, i) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == o ? (o = t, n = t = void 0) : null == o && ("string" == typeof t ? (o = n, n = void 0) : (o = n, n = t, t = void 0)), o === !1) o = u;
            else if (!o) return this;
            return 1 === i && (r = o, o = function (e) {
                return Z().off(e), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, o, n, t)
            })
        },
        one: function (e, t, n, o) {
            return this.on(e, t, n, o, 1)
        },
        off: function (e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, Z(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $e = /<([\w:]+)/,
        je = /<|&#?\w+;/,
        qe = /<(?:script|style|link)/i,
        He = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^$|\/(?:java|ecma)script/i,
        Oe = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function (e, t, n) {
            var o, i, r, a, s = e.cloneNode(!0),
                l = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = v(s), r = v(e), o = 0, i = r.length; i > o; o++) y(r[o], a[o]);
            if (t)
                if (n)
                    for (r = r || v(e), a = a || v(s), o = 0, i = r.length; i > o; o++) g(r[o], a[o]);
                else g(e, s);
            return a = v(s, "script"), a.length > 0 && m(a, !l && v(e, "script")), s
        },
        buildFragment: function (e, t, n, o) {
            for (var i, r, a, s, l, c, u = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)
                if (i = e[d], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (je.test(i)) {
                for (r = r || u.appendChild(t.createElement("div")), a = ($e.exec(i) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, r.innerHTML = s[1] + i.replace(Le, "<$1></$2>") + s[2], c = s[0]; c--;) r = r.lastChild;
                Z.merge(f, r.childNodes), r = u.firstChild, r.textContent = ""
            } else f.push(t.createTextNode(i));
            for (u.textContent = "", d = 0; i = f[d++];)
                if ((!o || -1 === Z.inArray(i, o)) && (l = Z.contains(i.ownerDocument, i), r = v(u.appendChild(i), "script"), l && m(r), n))
                    for (c = 0; i = r[c++];) Me.test(i.type || "") && n.push(i);
            return u
        },
        cleanData: function (e) {
            for (var t, n, o, i, r = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (o in t.events) r[o] ? Z.event.remove(n, o) : Z.removeEvent(n, o, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return ge(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, o = e ? Z.filter(e, this) : this, i = 0; null != (n = o[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        },
        html: function (e) {
            return ge(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !Re[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Le, "<$1></$2>");
                    try {
                        for (; o > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = _.apply([], e);
            var n, o, i, r, a, s, l = 0,
                c = this.length,
                u = this,
                f = c - 1,
                d = e[0],
                m = Z.isFunction(d);
            if (m || c > 1 && "string" == typeof d && !Q.checkClone && He.test(d)) return this.each(function (n) {
                var o = u.eq(n);
                m && (e[0] = d.call(this, n, o.html())), o.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), o = n.firstChild, 1 === n.childNodes.length && (n = o), o)) {
                for (i = Z.map(v(n, "script"), p), r = i.length; c > l; l++) a = n, l !== f && (a = Z.clone(a, !0, !0), r && Z.merge(i, v(a, "script"))), t.call(this[l], a, l);
                if (r)
                    for (s = i[i.length - 1].ownerDocument, Z.map(i, h), l = 0; r > l; l++) a = i[l], Me.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Fe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, o = [], i = Z(e), r = i.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), Z(i[a])[t](n), V.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Pe, Be = {},
        Ie = /^margin/,
        We = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        ze = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(r);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, o = "4px" === t.width, i.removeChild(r)
        }
        var n, o, i = K.documentElement,
            r = K.createElement("div"),
            a = K.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == o && t(), o
            },
            reliableMarginRight: function () {
                var t, n = a.appendChild(K.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(r), a.removeChild(n), t
            }
        }))
    }(), Z.swap = function (e, t, n, o) {
        var i, r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        i = n.apply(e, o || []);
        for (r in t) e.style[r] = a[r];
        return i
    };
    var _e = /^(none|table(?!-c[ea]).+)/,
        Ve = new RegExp("^(" + be + ")(.*)$", "i"),
        Ye = new RegExp("^([+-])=(" + be + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = Z.camelCase(t),
                    l = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = S(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t] : (r = typeof n, "string" === r && (i = Ye.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[s] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, o) {
            var i, r, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = S(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = b(e, t, o)), "normal" === i && t in Ue && (i = Ue[t]), "" === n || n ? (r = parseFloat(i), n === !0 || Z.isNumeric(r) ? r || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, o) {
                return n ? _e.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Xe, function () {
                    return E(e, t, o)
                }) : E(e, t, o) : void 0
            },
            set: function (e, n, o) {
                var i = o && ze(e);
                return C(e, n, o ? k(e, t, o, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[e + Te[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, Ie.test(e) || (Z.cssHooks[e + t].set = C)
    }), Z.fn.extend({
        css: function (e, t) {
            return ge(this, function (e, t, n) {
                var o, i, r = {},
                    a = 0;
                if (Z.isArray(t)) {
                    for (o = ze(e), i = t.length; i > a; a++) r[t[a]] = Z.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return A(this, !0)
        },
        hide: function () {
            return A(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Se(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D,
        init: function (e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Qe, Ke, Je = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [j],
        nt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    o = n.cur(),
                    i = Ze.exec(t),
                    r = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    a = (Z.cssNumber[e] || "px" !== r && +o) && Ze.exec(Z.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], i = i || [], a = +o || 1;
                    do s = s || ".5", a /= s, Z.style(n.elem, e, a + r); while (s !== (s = n.cur() / o) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +o || 0, n.unit = r, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(H, {
            tweener: function (e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, o = 0, i = e.length; i > o; o++) n = e[o], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function (e, t, n) {
            var o = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return o.duration = Z.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in Z.fx.speeds ? Z.fx.speeds[o.duration] : Z.fx.speeds._default, (null == o.queue || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                Z.isFunction(o.old) && o.old.call(this), o.queue && Z.dequeue(this, o.queue)
            }, o
        }, Z.fn.extend({
            fadeTo: function (e, t, n, o) {
                return this.filter(Se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, o)
            },
            animate: function (e, t, n, o) {
                var i = Z.isEmptyObject(e),
                    r = Z.speed(t, n, o),
                    a = function () {
                        var t = H(this, Z.extend({}, e), r);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        r = Z.timers,
                        a = ve.get(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && et.test(i) && o(a[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ve.get(this),
                        o = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        r = Z.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function (e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, o, i)
            }
        }), Z.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Z.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o)
            }
        }), Z.timers = [], Z.fx.tick = function () {
            var e, t = 0,
                n = Z.timers;
            for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qe = void 0
        }, Z.fx.timer = function (e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function () {
            Ke || (Ke = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function () {
            clearInterval(Ke), Ke = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function (e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var o = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(o)
                }
            })
        },
        function () {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var ot, it, rt = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var o, i, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), o = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : ot)), void 0 === n ? o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, o, i = 0,
                r = t && t.match(pe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) o = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[o] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = rt[t] || Z.find.attr;
        rt[t] = function (e, t, o) {
            var i, r;
            return o || (r = rt[t], rt[t] = i, i = null != n(e, t, o) ? t.toLowerCase() : null, rt[t] = r), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var o, i, r, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !Z.isXMLDoc(e), r && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, o, i, r, a, s = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pe) || []; c > l; l++)
                    if (n = this[l], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (r = 0; i = t[r++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        a = Z.trim(o), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, o, i, r, a, s = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pe) || []; c > l; l++)
                    if (n = this[l], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (r = 0; i = t[r++];)
                            for (; o.indexOf(" " + i + " ") >= 0;) o = o.replace(" " + i + " ", " ");
                        a = e ? Z.trim(o) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, o = 0, i = Z(this), r = e.match(pe) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, o, i = this[0];
            return arguments.length ? (o = Z.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = o ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null : [], s = r ? i + 1 : o.length, l = 0 > i ? s : r ? i : 0; s > l; l++)
                        if (n = o[l], !(!n.selected && l !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, o, i = e.options, r = Z.makeArray(t), a = i.length; a--;) o = i[a], (o.selected = Z.inArray(o.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = Z.now(),
        ut = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (o) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/,
        dt = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        wt = {},
        xt = "*/".concat("*"),
        bt = e.location.href,
        Tt = vt.exec(bt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: ht.test(Tt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? F(F(e, Z.ajaxSettings), t) : F(Z.ajaxSettings, e)
        },
        ajaxPrefilter: M(yt),
        ajaxTransport: M(wt),
        ajax: function (e, t) {
            function n(e, t, n, a) {
                var l, u, v, y, x, T = t;
                2 !== w && (w = 2, s && clearTimeout(s), o = void 0, r = a || "", b.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = R(f, b, n)), y = P(f, y, b, l), l ? (f.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = b.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, l = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || T) + "", l ? h.resolveWith(d, [u, T, b]) : h.rejectWith(d, [b, T, v]), b.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [b, f, l ? u : v]), m.fireWith(d, [b, T]), c && (p.trigger("ajaxComplete", [b, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var o, i, r, a, s, l, c, u, f = Z.ajaxSetup({}, t),
                d = f.context || f,
                p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                h = Z.Deferred(),
                m = Z.Callbacks("once memory"),
                g = f.statusCode || {},
                v = {},
                y = {},
                w = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = pt.exec(r);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? r : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) g[t] = [g[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return o && o.abort(t), n(0, t), this
                    }
                };
            if (h.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || bt) + "").replace(ft, "").replace(gt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (l = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === Tt[1] && l[2] === Tt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), O(yt, f, t, b), 2 === w) return b;
            c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ut.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(i) ? i.replace(dt, "$1_=" + ct++) : i + (ut.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Z.lastModified[i] && b.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && b.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers) b.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (f.beforeSend.call(d, b, f) === !1 || 2 === w)) return b.abort();
            x = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[u](f[u]);
            if (o = O(wt, f, t, b)) {
                b.readyState = 1, c && p.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                    b.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, o.send(v, n)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, o, i) {
            return Z.isFunction(n) && (i = i || o, o = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var St = /%20/g,
        Ct = /\[\]$/,
        kt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, o = [],
            i = function (e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, i);
        return o.join("&").replace(St, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !Ce.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        Nt = {},
        Lt = {
            0: 200,
            1223: 204
        },
        $t = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Nt) Nt[e]()
    }), Q.cors = !!$t && "withCredentials" in $t, Q.ajax = $t = !!$t, Z.ajaxTransport(function (e) {
        var t;
        return Q.cors || $t && !e.crossDomain ? {
            send: function (n, o) {
                var i, r = e.xhr(),
                    a = ++Dt;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) r[i] = e.xhrFields[i];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) r.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete Nt[a], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? o(r.status, r.statusText) : o(Lt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = t(), r.onerror = t("error"), t = Nt[a] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (o, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var jt = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jt.pop() || Z.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, o) {
        var i, r, a, s = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + i) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || Z.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function () {
            a = arguments
        }, o.always(function () {
            e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, jt.push(i)), a && Z.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var o = ae.exec(e),
            i = !n && [];
        return o ? [t.createElement(o[1])] : (o = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], o.childNodes))
    };
    var Ht = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
        var o, i, r, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (o = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(o ? Z("<div>").append(Z.parseHTML(e)).find(o) : e)
        }).complete(n && function (e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Mt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var o, i, r, a, s, l, c, u = Z.css(e, "position"),
                f = Z(e),
                d = {};
            "static" === u && (e.style.position = "relative"), s = f.offset(), r = Z.css(e, "top"), l = Z.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (o = f.position(), a = o.top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, o = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, Z.contains(t, o) ? (typeof o.getBoundingClientRect !== ke && (i = o.getBoundingClientRect()), n = I(r), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (o = e.offset()), o.top += Z.css(e[0], "borderTopWidth", !0), o.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - o.top - Z.css(n, "marginTop", !0),
                    left: t.left - o.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Mt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Mt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var o = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return ge(this, function (t, i, r) {
                var a = I(t);
                return void 0 === r ? a ? a[n] : t[i] : void(a ? a.scrollTo(o ? e.pageXOffset : r, o ? r : e.pageYOffset) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
            return n ? (n = b(e, t), We.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, o) {
            Z.fn[o] = function (o, i) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || i === !0 ? "margin" : "border");
                return ge(this, function (t, n, o) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? Z.css(t, n, a) : Z.style(t, n, o, a)
                }, t, r ? o : void 0, r, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Ot = e.jQuery,
        Ft = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Ft), t && e.jQuery === Z && (e.jQuery = Ot), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
}),
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
function (e) {
    e.fn.extend({
        slimScroll: function (n) {
            var n = n,
                o = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                },
                i = e.extend(o, n);
            return this.each(function () {
                function o(t) {
                    if (u) {
                        var t = t || window.event,
                            n = 0;
                        if (t.wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), window.ssDisabled) return void b.trigger("slimscrollingdisabled", 0 > n ? "go-up" : "go-down");
                        var o = t.target || t.srcTarget || t.srcElement;
                        e(o).closest("." + i.wrapperClass).is(b.parent()) && r(n, !0), t.preventDefault && !x && t.preventDefault(), x || (t.returnValue = !1)
                    }
                }

                function r(e, t, n) {
                    x = !1;
                    var o = e,
                        r = b.outerHeight() - E.outerHeight();
                    if (t && (o = parseInt(E.css("top")) + e * parseInt(i.wheelStep) / 100 * E.outerHeight(), o = Math.min(Math.max(o, 0), r), o = e > 0 ? Math.ceil(o) : Math.floor(o), E.css({
                            top: o + "px"
                        })), g = parseInt(E.css("top")) / (b.outerHeight() - E.outerHeight()), o = g * (b[0].scrollHeight - b.outerHeight()), n) {
                        o = e;
                        var a = o / b[0].scrollHeight * b.outerHeight();
                        a = Math.min(Math.max(a, 0), r), E.css({
                            top: a + "px"
                        })
                    }
                    b.scrollTop(o), b.trigger("slimscrolling", ~~o), l(), c()
                }

                function a(e) {
                    window.addEventListener ? (e.addEventListener("DOMMouseScroll", o, !1), e.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }

                function s() {
                    m = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), w), E.css({
                        height: m + "px"
                    });
                    var e = m == b.outerHeight() ? "none" : "block";
                    E.css({
                        display: e
                    })
                }

                function l() {
                    if (s(), clearTimeout(p), g == ~~g) {
                        if (x = i.allowPageScroll, v != g) {
                            var e = 0 == ~~g ? "top" : "bottom";
                            b.trigger("slimscroll", e)
                        }
                    } else x = !1;
                    return v = g, m >= b.outerHeight() ? void(x = !0) : (E.stop(!0, !0).fadeIn("fast"), void(i.railVisible && k.stop(!0, !0).fadeIn("fast")))
                }

                function c() {
                    i.alwaysVisible || (p = setTimeout(function () {
                        i.disableFadeOut && u || f || d || (E.fadeOut("slow"), k.fadeOut("slow"))
                    }, 1e3))
                }
                var u, f, d, p, h, m, g, v, y = "<div></div>",
                    w = 30,
                    x = !1,
                    b = e(this);
                if (b.parent().hasClass(i.wrapperClass)) {
                    var T = b.scrollTop();
                    if (E = b.closest("." + i.barClass), k = b.closest("." + i.railClass), s(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            b.parent().css("height", "auto"), b.css("height", "auto");
                            var S = b.parent().parent().height();
                            b.parent().css("height", S), b.css("height", S)
                        }
                        if ("scrollTo" in n) T = parseInt(i.scrollTo);
                        else if ("scrollBy" in n) T += parseInt(i.scrollBy);
                        else if ("destroy" in n) return E.remove(), k.remove(), void b.unwrap();
                        r(T, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? b.parent().height() : i.height;
                    var C = e(y).addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    var k = e(y).addClass(i.railClass).css({
                            width: i.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: i.alwaysVisible && i.railVisible ? "block" : "none",
                            "border-radius": i.railBorderRadius,
                            background: i.railColor,
                            opacity: i.railOpacity,
                            zIndex: 90
                        }),
                        E = e(y).addClass(i.barClass).css({
                            background: i.color,
                            width: i.size,
                            position: "absolute",
                            top: 0,
                            opacity: i.opacity,
                            display: i.alwaysVisible ? "block" : "none",
                            "border-radius": i.borderRadius,
                            BorderRadius: i.borderRadius,
                            MozBorderRadius: i.borderRadius,
                            WebkitBorderRadius: i.borderRadius,
                            zIndex: 99
                        }),
                        A = "right" == i.position ? {
                            right: i.distance
                        } : {
                            left: i.distance
                        };
                    k.css(A), E.css(A), b.wrap(C), b.parent().append(E), b.parent().append(k), i.railDraggable && E.bind("mousedown", function (n) {
                        var o = e(document);
                        return d = !0, t = parseFloat(E.css("top")), pageY = n.pageY, o.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, E.css("top", currTop), r(0, E.position().top, !1)
                        }), o.bind("mouseup.slimscroll", function (e) {
                            d = !1, c(), o.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), k.hover(function () {
                        l()
                    }, function () {
                        c()
                    }), E.hover(function () {
                        f = !0
                    }, function () {
                        f = !1
                    }), b.hover(function () {
                        u = !0, l(), c()
                    }, function () {
                        u = !1, c()
                    }), b.bind("touchstart", function (e, t) {
                        e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                    }), b.bind("touchmove", function (e) {
                        if (x || e.originalEvent.preventDefault(), e.originalEvent.touches.length) {
                            var t = (h - e.originalEvent.touches[0].pageY) / i.touchScrollStep;
                            if (window.ssDisabled) return void b.trigger("slimscrollingdisabled", 0 > t ? "go-up" : "go-down");
                            r(t, !0), h = e.originalEvent.touches[0].pageY
                        }
                    }), s(), "bottom" === i.start ? (E.css({
                        top: b.outerHeight() - E.outerHeight()
                    }), r(0, !0)) : "top" !== i.start && (r(e(i.start).position().top, null, !0), i.alwaysVisible || E.hide()), a(this)
                }
            }), this
        }
    }), e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery),
/*!
 * fullPage 2.7.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return t(n, e, e.document, e.Math)
    }) : "undefined" != typeof exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function (e, t, n, o, i) {
    "use strict";
    var r = "fullpage-wrapper",
        a = "." + r,
        s = "fp-scrollable",
        l = "." + s,
        c = ".slimScrollBar",
        u = ".slimScrollRail",
        f = "fp-responsive",
        d = "fp-notransition",
        p = "fp-destroyed",
        h = "fp-enabled",
        m = "fp-viewing",
        g = "active",
        v = "." + g,
        y = ".section",
        w = "fp-section",
        x = "." + w,
        b = x + v,
        T = x + ":first",
        S = x + ":last",
        C = "fp-tableCell",
        k = "." + C,
        E = "fp-auto-height",
        A = "fp-nav",
        D = "#" + A,
        N = "fp-tooltip",
        L = "fp-show-active",
        $ = ".slide",
        j = "fp-slide",
        q = "." + j,
        H = q + v,
        M = "fp-slides",
        O = "." + M,
        F = "fp-slidesContainer",
        R = "." + F,
        P = "fp-table",
        B = "fp-slidesNav",
        I = "." + B,
        W = I + " a",
        z = "fp-controlArrow",
        _ = "." + z,
        V = "fp-prev",
        Y = "." + V,
        X = z + " " + V,
        U = _ + Y,
        G = "fp-next",
        Q = "." + G,
        K = z + " " + G,
        J = _ + Q,
        Z = e(t),
        ee = e(n);
    e.fn.fullpage = function (z) {
        function Y() {
            z.css3 && (z.css3 = rt()), z.anchors.length || (z.anchors = e("[data-anchor]").map(function () {
                return e(this).data("anchor").toString()
            }).get()), G(), Tt.setAllowScrolling(!0), Lt = Z.height(), Tt.setAutoScrolling(z.autoScrolling, "internal");
            var t = e(b).find(H);
            t.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== t.index()) && dt(t), Oe(), it(), Z.on("load", function () {
                Ne()
            })
        }

        function G() {
            Nt.css({
                height: "100%",
                position: "relative"
            }), Nt.addClass(r), e("html").addClass(h), Nt.removeClass(p), oe(), e(x).each(function (t) {
                var n = e(this),
                    o = n.find(q),
                    i = o.length;
                te(n, t), ne(n, t), i > 0 ? Q(n, o, i) : z.verticalCentered && Ue(n)
            }), z.fixedElements && z.css3 && e(z.fixedElements).appendTo(bt), z.navigation && re(), z.scrollOverflow ? ("complete" === n.readyState && ae(), Z.on("load", ae)) : se()
        }

        function Q(t, n, o) {
            var i = 100 * o,
                r = 100 / o;
            n.wrapAll('<div class="' + F + '" />'), n.parent().wrap('<div class="' + M + '" />'), t.find(R).css("width", i + "%"), o > 1 && (z.controlArrows && ie(t), z.slidesNavigation && et(t, o)), n.each(function (t) {
                e(this).css("width", r + "%"), z.verticalCentered && Ue(e(this))
            });
            var a = t.find(H);
            a.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== a.index()) ? dt(a) : n.eq(0).addClass(g)
        }

        function te(t, n) {
            n || 0 !== e(b).length || t.addClass(g), t.css("height", Lt + "px"), z.paddingTop && t.css("padding-top", z.paddingTop), z.paddingBottom && t.css("padding-bottom", z.paddingBottom), "undefined" != typeof z.sectionsColor[n] && t.css("background-color", z.sectionsColor[n]), "undefined" != typeof z.anchors[n] && t.attr("data-anchor", z.anchors[n])
        }

        function ne(t, n) {
            "undefined" != typeof z.anchors[n] && t.hasClass(g) && We(z.anchors[n], n), z.menu && z.css3 && e(z.menu).closest(a).length && e(z.menu).appendTo(bt)
        }

        function oe() {
            e(z.sectionSelector).each(function () {
                e(this).addClass(w)
            }), e(z.slideSelector).each(function () {
                e(this).addClass(j)
            })
        }

        function ie(e) {
            e.find(O).after('<div class="' + X + '"></div><div class="' + K + '"></div>'), "#fff" != z.controlArrowColor && (e.find(J).css("border-color", "transparent transparent transparent " + z.controlArrowColor), e.find(U).css("border-color", "transparent " + z.controlArrowColor + " transparent transparent")), z.loopHorizontal || e.find(U).hide()
        }

        function re() {
            bt.append('<div id="' + A + '"><ul></ul></div>');
            var t = e(D);
            t.addClass(function () {
                return z.showActiveTooltip ? L + " " + z.navigationPosition : z.navigationPosition
            });
            for (var n = 0; n < e(x).length; n++) {
                var o = "";
                z.anchors.length && (o = z.anchors[n]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    r = z.navigationTooltips[n];
                "undefined" != typeof r && "" !== r && (i += '<div class="' + N + " " + z.navigationPosition + '">' + r + "</div>"), i += "</li>", t.find("ul").append(i)
            }
            e(D).css("margin-top", "-" + e(D).height() / 2 + "px"), e(D).find("li").eq(e(b).index(x)).find("a").addClass(g)
        }

        function ae() {
            e(x).each(function () {
                var t = e(this).find(q);
                t.length ? t.each(function () {
                    Ye(e(this))
                }) : Ye(e(this))
            }), se()
        }

        function se() {
            var t = e(b);
            le(t), Ee(t), Ae(t), e.isFunction(z.afterLoad) && z.afterLoad.call(t, t.data("anchor"), t.index(x) + 1), e.isFunction(z.afterRender) && z.afterRender.call(Nt)
        }

        function le(e) {
            var t = e.find("SLIDES_WRAPPER"),
                n = e.find(l);
            t.length && (n = t.find(H)), n.mouseover()
        }

        function ce() {
            var t;
            if (!z.autoScrolling || z.scrollBar) {
                for (var i = Z.scrollTop(), r = 0, a = o.abs(i - n.querySelectorAll(x)[0].offsetTop), s = n.querySelectorAll(x), l = 0; l < s.length; ++l) {
                    var c = s[l],
                        u = o.abs(i - c.offsetTop);
                    a > u && (r = l, a = u)
                }
                if (t = e(s).eq(r), !t.hasClass(g) && !t.hasClass(E)) {
                    zt = !0;
                    var f = e(b),
                        d = f.index(x) + 1,
                        p = _e(t),
                        h = t.data("anchor"),
                        m = t.index(x) + 1,
                        v = t.find(H);
                    if (v.length) var y = v.data("anchor"),
                        w = v.index();
                    qt && (t.addClass(g).siblings().removeClass(g), e.isFunction(z.onLeave) && z.onLeave.call(f, d, m, p), e.isFunction(z.afterLoad) && z.afterLoad.call(t, h, m), Ee(t), We(h, m - 1), z.anchors.length && (St = h, tt(w, y, h, m))), clearTimeout(Pt), Pt = setTimeout(function () {
                        zt = !1
                    }, 100)
                }
                z.fitToSection && (clearTimeout(Bt), Bt = setTimeout(function () {
                    qt && z.fitToSection && (e(b).is(t) && requestAnimFrame(function () {
                        $t = !0
                    }), xe(t), requestAnimFrame(function () {
                        $t = !1
                    }))
                }, z.fitToSectionDelay))
            }
        }

        function ue(e) {
            return e.find(O).length ? e.find(H).find(l) : e.find(l)
        }

        function fe(e, t) {
            if (Mt.m[e]) {
                var n, o;
                if ("down" == e ? (n = "bottom", o = Tt.moveSectionDown) : (n = "top", o = Tt.moveSectionUp), t.length > 0) {
                    if (!ze(n, t)) return !0;
                    o()
                } else o()
            }
        }

        function de(t) {
            var n = t.originalEvent;
            if (!pe(t.target) && he(n)) {
                z.autoScrolling && t.preventDefault();
                var i = e(b),
                    r = ue(i);
                if (qt && !Et) {
                    var a = ft(n);
                    Yt = a.y, Xt = a.x, i.find(O).length && o.abs(Vt - Xt) > o.abs(_t - Yt) ? o.abs(Vt - Xt) > Z.width() / 100 * z.touchSensitivity && (Vt > Xt ? Mt.m.right && Tt.moveSlideRight() : Mt.m.left && Tt.moveSlideLeft()) : z.autoScrolling && o.abs(_t - Yt) > Z.height() / 100 * z.touchSensitivity && (_t > Yt ? fe("down", r) : Yt > _t && fe("up", r))
                }
            }
        }

        function pe(t, n) {
            n = n || 0;
            var o = e(t).parent();
            return n < z.normalScrollElementTouchThreshold && o.is(z.normalScrollElements) ? !0 : n == z.normalScrollElementTouchThreshold ? !1 : pe(o, ++n)
        }

        function he(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function me(e) {
            var t = e.originalEvent;
            if (z.fitToSection && xt.stop(), he(t)) {
                var n = ft(t);
                _t = n.y, Vt = n.x
            }
        }

        function ge(e, t) {
            for (var n = 0, i = e.slice(o.max(e.length - t, 1)), r = 0; r < i.length; r++) n += i[r];
            return o.ceil(n / t)
        }

        function ve(n) {
            var i = (new Date).getTime();
            if (z.autoScrolling && !kt) {
                n = n || t.event;
                var r = n.wheelDelta || -n.deltaY || -n.detail,
                    a = o.max(-1, o.min(1, r)),
                    s = "undefined" != typeof n.wheelDeltaX || "undefined" != typeof n.deltaX,
                    l = o.abs(n.wheelDeltaX) < o.abs(n.wheelDelta) || o.abs(n.deltaX) < o.abs(n.deltaY) || !s;
                Ht.length > 149 && Ht.shift(), Ht.push(o.abs(r)), z.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var c = e(b),
                    u = ue(c),
                    f = i - Ut;
                if (Ut = i, f > 200 && (Ht = []), qt) {
                    var d = ge(Ht, 10),
                        p = ge(Ht, 70),
                        h = d >= p;
                    h && l && (0 > a ? fe("down", u) : fe("up", u))
                }
                return !1
            }
            z.fitToSection && xt.stop()
        }

        function ye(t) {
            var n = e(b),
                o = n.find(O),
                i = o.find(q).length;
            if (!(!o.length || Et || 2 > i)) {
                var r = o.find(H),
                    a = null;
                if (a = "prev" === t ? r.prev(q) : r.next(q), !a.length) {
                    if (!z.loopHorizontal) return;
                    a = "prev" === t ? r.siblings(":last") : r.siblings(":first")
                }
                Et = !0, He(o, a)
            }
        }

        function we() {
            e(H).each(function () {
                dt(e(this), "internal")
            })
        }

        function xe(t, n, o) {
            requestAnimFrame(function () {
                var i = t.position();
                if ("undefined" != typeof i) {
                    var r = t.hasClass(E) ? i.top - Lt + t.height() : i.top,
                        a = {
                            element: t,
                            callback: n,
                            isMovementUp: o,
                            dest: i,
                            dtop: r,
                            yMovement: _e(t),
                            anchorLink: t.data("anchor"),
                            sectionIndex: t.index(x),
                            activeSlide: t.find(H),
                            activeSection: e(b),
                            leavingSection: e(b).index(x) + 1,
                            localIsResizing: $t
                        };
                    if (!(a.activeSection.is(t) && !$t || z.scrollBar && Z.scrollTop() === a.dtop && !t.hasClass(E))) {
                        if (a.activeSlide.length) var s = a.activeSlide.data("anchor"),
                            l = a.activeSlide.index();
                        if (z.autoScrolling && z.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Se(a)), e.isFunction(z.onLeave) && !a.localIsResizing) {
                            if (z.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) === !1) return;
                            De(a.activeSection)
                        }
                        t.addClass(g).siblings().removeClass(g), Ee(t), qt = !1, tt(l, s, a.anchorLink, a.sectionIndex), be(a), St = a.anchorLink, We(a.anchorLink, a.sectionIndex)
                    }
                }
            })
        }

        function be(t) {
            if (z.css3 && z.autoScrolling && !z.scrollBar) {
                var n = "translate3d(0px, -" + t.dtop + "px, 0px)";
                Qe(n, !0), z.scrollingSpeed ? Ft = setTimeout(function () {
                    ke(t)
                }, z.scrollingSpeed) : ke(t)
            } else {
                var o = Te(t);
                e(o.element).animate(o.options, z.scrollingSpeed, z.easing).promise().done(function () {
                    ke(t)
                })
            }
        }

        function Te(e) {
            var t = {};
            return z.autoScrolling && !z.scrollBar ? (t.options = {
                top: -e.dtop
            }, t.element = a) : (t.options = {
                scrollTop: e.dtop
            }, t.element = "html, body"), t
        }

        function Se(t) {
            return t.isMovementUp ? e(b).before(t.activeSection.nextAll(x)) : e(b).after(t.activeSection.prevAll(x).get().reverse()), pt(e(b).position().top), we(), t.wrapAroundElements = t.activeSection, t.dest = t.element.position(), t.dtop = t.dest.top, t.yMovement = _e(t.element), t
        }

        function Ce(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(T).before(t.wrapAroundElements) : e(S).after(t.wrapAroundElements), pt(e(b).position().top), we())
        }

        function ke(t) {
            Ce(t), t.element.find(".fp-scrollable").mouseover(), e.isFunction(z.afterLoad) && !t.localIsResizing && z.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), Ae(t.element), qt = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function Ee(t) {
            var n = t.find(H);
            n.length && (t = e(n)), t.find("img[data-src], source[data-src], audio[data-src]").each(function () {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load()
            })
        }

        function Ae(t) {
            t.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("autoplay") && "function" == typeof t.play && t.play()
            })
        }

        function De(t) {
            t.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-ignore") || "function" != typeof t.pause || t.pause()
            })
        }

        function Ne() {
            var e = t.location.hash.replace("#", "").split("/"),
                n = e[0],
                o = e[1];
            n && (z.animateAnchor ? Ze(n, o) : Tt.silentMoveTo(n, o))
        }

        function Le() {
            if (!zt && !z.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"),
                    n = e[0],
                    o = e[1],
                    i = "undefined" == typeof St,
                    r = "undefined" == typeof St && "undefined" == typeof o && !Et;
                n.length && (n && n !== St && !i || r || !Et && Ct != o) && Ze(n, o)
            }
        }

        function $e(t) {
            clearTimeout(It);
            var n = e(":focus");
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && z.keyboardScrolling && z.autoScrolling) {
                var o = t.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && t.preventDefault(), kt = t.ctrlKey, It = setTimeout(function () {
                    je(t)
                }, 150)
            }
        }

        function je(t) {
            var n = t.shiftKey;
            switch (t.which) {
                case 38:
                case 33:
                    Mt.k.up && Tt.moveSectionUp();
                    break;
                case 32:
                    if (n && Mt.k.up) {
                        Tt.moveSectionUp();
                        break
                    }
                case 40:
                case 34:
                    Mt.k.down && Tt.moveSectionDown();
                    break;
                case 36:
                    Mt.k.up && Tt.moveTo(1);
                    break;
                case 35:
                    Mt.k.down && Tt.moveTo(e(x).length);
                    break;
                case 37:
                    Mt.k.left && Tt.moveSlideLeft();
                    break;
                case 39:
                    Mt.k.right && Tt.moveSlideRight();
                    break;
                default:
                    return
            }
        }

        function qe(e) {
            qt && (e.pageY < Gt ? Tt.moveSectionUp() : e.pageY > Gt && Tt.moveSectionDown()), Gt = e.pageY
        }

        function He(t, n) {
            var i = n.position(),
                r = n.index(),
                a = t.closest(x),
                s = a.index(x),
                l = a.data("anchor"),
                c = a.find(I),
                u = ot(n),
                f = $t;
            if (z.onSlideLeave) {
                var d = a.find(H),
                    p = d.index(),
                    h = Ve(p, r);
                if (!f && "none" !== h && e.isFunction(z.onSlideLeave) && z.onSlideLeave.call(d, l, s + 1, p, h, r) === !1) return void(Et = !1)
            }
            n.addClass(g).siblings().removeClass(g), f || Ee(n), !z.loopHorizontal && z.controlArrows && (a.find(U).toggle(0 !== r), a.find(J).toggle(!n.is(":last-child"))), a.hasClass(g) && tt(r, u, l, s);
            var m = function () {
                f || e.isFunction(z.afterSlideLoad) && z.afterSlideLoad.call(n, l, s + 1, u, r), Et = !1
            };
            if (z.css3) {
                var y = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                Fe(t.find(R), z.scrollingSpeed > 0).css(ht(y)), Rt = setTimeout(function () {
                    m()
                }, z.scrollingSpeed, z.easing)
            } else t.animate({
                scrollLeft: o.round(i.left)
            }, z.scrollingSpeed, z.easing, function () {
                m()
            });
            c.find(v).removeClass(g), c.find("li").eq(r).find("a").addClass(g)
        }

        function Me() {
            if (Oe(), At) {
                var t = e(n.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var i = Z.height();
                    o.abs(i - Qt) > 20 * o.max(Qt, i) / 100 && (Tt.reBuild(!0), Qt = i)
                }
            } else clearTimeout(Ot), Ot = setTimeout(function () {
                Tt.reBuild(!0)
            }, 350)
        }

        function Oe() {
            var e = z.responsive || z.responsiveWidth,
                t = z.responsiveHeight,
                n = e && Z.width() < e,
                o = t && Z.height() < t;
            e && t ? Tt.setResponsive(n || o) : e ? Tt.setResponsive(n) : t && Tt.setResponsive(o)
        }

        function Fe(e) {
            var t = "all " + z.scrollingSpeed + "ms " + z.easingcss3;
            return e.removeClass(d), e.css({
                "-webkit-transition": t,
                transition: t
            })
        }

        function Re(e) {
            return e.addClass(d)
        }

        function Pe(e, t) {
            var n = 825,
                i = 900;
            if (n > e || i > t) {
                var r = 100 * e / n,
                    a = 100 * t / i,
                    s = o.min(r, a),
                    l = s.toFixed(2);
                bt.css("font-size", l + "%")
            } else bt.css("font-size", "100%")
        }

        function Be(t, n) {
            z.navigation && (e(D).find(v).removeClass(g), t ? e(D).find('a[href="#' + t + '"]').addClass(g) : e(D).find("li").eq(n).find("a").addClass(g))
        }

        function Ie(t) {
            z.menu && (e(z.menu).find(v).removeClass(g), e(z.menu).find('[data-menuanchor="' + t + '"]').addClass(g))
        }

        function We(e, t) {
            Ie(e), Be(e, t)
        }

        function ze(e, t) {
            return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0
        }

        function _e(t) {
            var n = e(b).index(x),
                o = t.index(x);
            return n == o ? "none" : n > o ? "up" : "down"
        }

        function Ve(e, t) {
            return e == t ? "none" : e > t ? "left" : "right"
        }

        function Ye(e) {
            e.css("overflow", "hidden");
            var t, n = e.closest(x),
                o = e.find(l);
            o.length ? t = o.get(0).scrollHeight : (t = e.get(0).scrollHeight, z.verticalCentered && (t = e.find(k).get(0).scrollHeight));
            var i = Lt - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top"));
            t > i ? o.length ? o.css("height", i + "px").parent().css("height", i + "px") : (z.verticalCentered ? e.find(k).wrapInner('<div class="' + s + '" />') : e.wrapInner('<div class="' + s + '" />'), e.find(l).slimScroll({
                allowPageScroll: !0,
                height: i + "px",
                size: "10px",
                alwaysVisible: !0
            })) : Xe(e), e.css("overflow", "")
        }

        function Xe(e) {
            e.find(l).children().first().unwrap().unwrap(), e.find(c).remove(), e.find(u).remove()
        }

        function Ue(e) {
            e.addClass(P).wrapInner('<div class="' + C + '" style="height:' + Ge(e) + 'px;" />')
        }

        function Ge(e) {
            var t = Lt;
            if (z.paddingTop || z.paddingBottom) {
                var n = e;
                n.hasClass(w) || (n = e.closest(x));
                var o = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                t = Lt - o
            }
            return t
        }

        function Qe(e, t) {
            t ? Fe(Nt) : Re(Nt), Nt.css(ht(e)), setTimeout(function () {
                Nt.removeClass(d)
            }, 10)
        }

        function Ke(t) {
            var n = e(x + '[data-anchor="' + t + '"]');
            return n.length || (n = e(x).eq(t - 1)), n
        }

        function Je(e, t) {
            var n = t.find(O),
                o = n.find(q + '[data-anchor="' + e + '"]');
            return o.length || (o = n.find(q).eq(e)), o
        }

        function Ze(t, n) {
            var o = Ke(t);
            "undefined" == typeof n && (n = 0), t === St || o.hasClass(g) ? e.fn.fullpage.scrollSlider(o, n) : xe(o, function () {
                e.fn.fullpage.scrollSlider(o, n)
            })
        }

        function et(e, t) {
            e.append('<div class="' + B + '"><ul></ul></div>');
            var n = e.find(I);
            n.addClass(z.slidesNavPosition);
            for (var o = 0; t > o; o++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(g)
        }

        function tt(e, t, n, o) {
            var i = "";
            z.anchors.length && !z.lockAnchors && (e ? ("undefined" != typeof n && (i = n), "undefined" == typeof t && (t = e), Ct = t, nt(i + "/" + t)) : "undefined" != typeof e ? (Ct = t, nt(n)) : nt(n)), it()
        }

        function nt(e) {
            if (z.recordHistory) location.hash = e;
            else if (At || Dt) history.replaceState(i, i, "#" + e);
            else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }

        function ot(e) {
            var t = e.data("anchor"),
                n = e.index();
            return "undefined" == typeof t && (t = n), t
        }

        function it() {
            var t = e(b),
                n = t.find(H),
                o = ot(t),
                i = ot(n),
                r = (t.index(x), String(o));
            n.length && (r = r + "-" + i), r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + m + "-[^\\s]+\\b", "g");
            bt[0].className = bt[0].className.replace(a, ""), bt.addClass(m + "-" + r)
        }

        function rt() {
            var e, o = n.createElement("p"),
                r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            n.body.insertBefore(o, null);
            for (var a in r) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(r[a]));
            return n.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function at() {
            n.addEventListener ? (n.removeEventListener("mousewheel", ve, !1), n.removeEventListener("wheel", ve, !1), n.removeEventListener("MozMousePixelScroll", ve, !1)) : n.detachEvent("onmousewheel", ve)
        }

        function st() {
            var e, o = "";
            t.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? n[e](o + "MozMousePixelScroll", ve, !1) : n[e](o + r, ve, !1)
        }

        function lt() {
            if (At || Dt) {
                var t = ut();
                e(a).off("touchstart " + t.down).on("touchstart " + t.down, me), e(a).off("touchmove " + t.move).on("touchmove " + t.move, de)
            }
        }

        function ct() {
            if (At || Dt) {
                var t = ut();
                e(a).off("touchstart " + t.down), e(a).off("touchmove " + t.move)
            }
        }

        function ut() {
            var e;
            return e = t.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function ft(e) {
            var t = [];
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Dt && he(e) && z.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function dt(e, t) {
            Tt.setScrollingSpeed(0, "internal"), "undefined" != typeof t && ($t = !0), He(e.closest(O), e), "undefined" != typeof t && ($t = !1), Tt.setScrollingSpeed(Wt.scrollingSpeed, "internal")
        }

        function pt(e) {
            if (z.scrollBar) Nt.scrollTop(e);
            else if (z.css3) {
                var t = "translate3d(0px, -" + e + "px, 0px)";
                Qe(t, !1)
            } else Nt.css("top", -e)
        }

        function ht(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function mt(e, t, n) {
            switch (t) {
                case "up":
                    Mt[n].up = e;
                    break;
                case "down":
                    Mt[n].down = e;
                    break;
                case "left":
                    Mt[n].left = e;
                    break;
                case "right":
                    Mt[n].right = e;
                    break;
                case "all":
                    "m" == n ? Tt.setAllowScrolling(e) : Tt.setKeyboardScrolling(e)
            }
        }

        function gt() {
            pt(0), e(D + ", " + I + ", " + _).remove(), e(x).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(q).css({
                width: ""
            }), Nt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), xt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(h), e.each(bt.get(0).className.split(/\s+/), function (e, t) {
                0 === t.indexOf(m) && bt.removeClass(t)
            }), e(x + ", " + q).each(function () {
                Xe(e(this)), e(this).removeClass(P + " " + g)
            }), Re(Nt), Nt.find(k + ", " + R + ", " + O).each(function () {
                e(this).replaceWith(this.childNodes)
            }), xt.scrollTop(0)
        }

        function vt(e, t, n) {
            z[e] = t, "internal" !== n && (Wt[e] = t)
        }

        function yt() {
            z.continuousVertical && (z.loopTop || z.loopBottom) && (z.continuousVertical = !1, wt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), z.scrollBar && z.scrollOverflow && wt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), z.continuousVertical && z.scrollBar && (z.continuousVertical = !1, wt("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(z.anchors, function (t, n) {
                (e("#" + n).length || e('[name="' + n + '"]').length) && wt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        }

        function wt(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }
        var xt = e("html, body"),
            bt = e("body"),
            Tt = e.fn.fullpage;
        z = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            sectionSelector: y,
            slideSelector: $,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, z), yt(), e.extend(e.easing, {
            easeInOutCubic: function (e, t, n, o, i) {
                return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
            }
        }), e.extend(e.easing, {
            easeInQuart: function (e, t, n, o, i) {
                return o * (t /= i) * t * t * t + n
            }
        }), Tt.setAutoScrolling = function (t, n) {
            vt("autoScrolling", t, n);
            var o = e(b);
            z.autoScrolling && !z.scrollBar ? (xt.css({
                overflow: "hidden",
                height: "100%"
            }), Tt.setRecordHistory(Wt.recordHistory, "internal"), Nt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && pt(o.position().top)) : (xt.css({
                overflow: "visible",
                height: "initial"
            }), Tt.setRecordHistory(!1, "internal"), Nt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), pt(0), o.length && xt.scrollTop(o.position().top))
        }, Tt.setRecordHistory = function (e, t) {
            vt("recordHistory", e, t)
        }, Tt.setScrollingSpeed = function (e, t) {
            vt("scrollingSpeed", e, t)
        }, Tt.setFitToSection = function (e, t) {
            vt("fitToSection", e, t)
        }, Tt.setLockAnchors = function (e) {
            z.lockAnchors = e
        }, Tt.setMouseWheelScrolling = function (e) {
            e ? st() : at()
        }, Tt.setAllowScrolling = function (t, n) {
            "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                mt(t, n, "m")
            })) : t ? (Tt.setMouseWheelScrolling(!0), lt()) : (Tt.setMouseWheelScrolling(!1), ct())
        }, Tt.setKeyboardScrolling = function (t, n) {
            "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                mt(t, n, "k")
            })) : z.keyboardScrolling = t
        }, Tt.moveSectionUp = function () {
            var t = e(b).prev(x);
            t.length || !z.loopTop && !z.continuousVertical || (t = e(x).last()), t.length && xe(t, null, !0)
        }, Tt.moveSectionDown = function () {
            var t = e(b).next(x);
            t.length || !z.loopBottom && !z.continuousVertical || (t = e(x).first()), t.length && xe(t, null, !1)
        }, Tt.silentMoveTo = function (e, t) {
            requestAnimFrame(function () {
                Tt.setScrollingSpeed(0, "internal")
            }), Tt.moveTo(e, t), requestAnimFrame(function () {
                Tt.setScrollingSpeed(Wt.scrollingSpeed, "internal")
            })
        }, Tt.moveTo = function (e, t) {
            var n = Ke(e);
            "undefined" != typeof t ? Ze(e, t) : n.length > 0 && xe(n)
        }, Tt.moveSlideRight = function () {
            ye("next")
        }, Tt.moveSlideLeft = function () {
            ye("prev")
        }, Tt.reBuild = function (t) {
            if (!Nt.hasClass(p)) {
                requestAnimFrame(function () {
                    $t = !0
                });
                var n = Z.width();
                Lt = Z.height(), z.resize && Pe(Lt, n), e(x).each(function () {
                    var t = e(this).find(O),
                        n = e(this).find(q);
                    z.verticalCentered && e(this).find(k).css("height", Ge(e(this)) + "px"), e(this).css("height", Lt + "px"), z.scrollOverflow && (n.length ? n.each(function () {
                        Ye(e(this))
                    }) : Ye(e(this))), n.length > 1 && He(t, t.find(H))
                });
                var o = e(b),
                    i = o.index(x);
                i && Tt.silentMoveTo(i + 1), requestAnimFrame(function () {
                    $t = !1
                }), e.isFunction(z.afterResize) && t && z.afterResize.call(Nt), e.isFunction(z.afterReBuild) && !t && z.afterReBuild.call(Nt)
            }
        }, Tt.setResponsive = function (t) {
            var n = Nt.hasClass(f);
            t ? n || (Tt.setAutoScrolling(!1, "internal"), Tt.setFitToSection(!1, "internal"), e(D).hide(), Nt.addClass(f)) : n && (Tt.setAutoScrolling(Wt.autoScrolling, "internal"), Tt.setFitToSection(Wt.autoScrolling, "internal"), e(D).show(), Nt.removeClass(f))
        };
        var St, Ct, kt, Et = !1,
            At = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            Dt = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            Nt = e(this),
            Lt = Z.height(),
            $t = !1,
            jt = !0,
            qt = !0,
            Ht = [],
            Mt = {};
        Mt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, Mt.k = e.extend(!0, {}, Mt.m);
        var Ot, Ft, Rt, Pt, Bt, It, Wt = e.extend(!0, {}, z);
        e(this).length && Y();
        var zt = !1;
        Z.on("scroll", ce);
        var _t = 0,
            Vt = 0,
            Yt = 0,
            Xt = 0,
            Ut = (new Date).getTime();
        t.requestAnimFrame = function () {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                e()
            }
        }(), Z.on("hashchange", Le), ee.keydown($e), ee.keyup(function (e) {
            jt && (kt = e.ctrlKey)
        }), e(t).blur(function () {
            jt = !1, kt = !1
        });
        var It;
        Nt.mousedown(function (e) {
            2 == e.which && (Gt = e.pageY, Nt.on("mousemove", qe))
        }), Nt.mouseup(function (e) {
            2 == e.which && Nt.off("mousemove")
        });
        var Gt = 0;
        ee.on("click touchstart", D + " a", function (t) {
            t.preventDefault();
            var n = e(this).parent().index();
            xe(e(x).eq(n))
        }), ee.on("click touchstart", W, function (t) {
            t.preventDefault();
            var n = e(this).closest(x).find(O),
                o = n.find(q).eq(e(this).closest("li").index());
            He(n, o)
        }), z.normalScrollElements && (ee.on("mouseenter", z.normalScrollElements, function () {
            Tt.setMouseWheelScrolling(!1)
        }), ee.on("mouseleave", z.normalScrollElements, function () {
            Tt.setMouseWheelScrolling(!0)
        })), e(x).on("click touchstart", _, function () {
            e(this).hasClass(V) ? Mt.m.left && Tt.moveSlideLeft() : Mt.m.right && Tt.moveSlideRight()
        }), Z.resize(Me);
        var Qt = Lt;
        e.fn.fullpage.scrollSlider = function (e, t) {
            if ("undefined" != typeof t) {
                var n = e.find(O),
                    o = Je(t, e);
                o.length && He(n, o)
            }
        }, Tt.destroy = function (t) {
            Tt.setAutoScrolling(!1, "internal"), Tt.setAllowScrolling(!1), Tt.setKeyboardScrolling(!1), Nt.addClass(p), clearTimeout(Rt), clearTimeout(Ft), clearTimeout(Ot), clearTimeout(Pt), clearTimeout(Bt), Z.off("scroll", ce).off("hashchange", Le).off("resize", Me), ee.off("click", D + " a").off("mouseenter", D + " li").off("mouseleave", D + " li").off("click", W).off("mouseover", z.normalScrollElements).off("mouseout", z.normalScrollElements), e(x).off("click", _), clearTimeout(Rt), clearTimeout(Ft), t && gt()
        }
    }
}),
function (e) {
    function t(e) {
        return e.replace(/(:|\.|\/)/g, "\\$1")
    }
    var n = "1.5.6",
        o = {},
        i = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            scrollElement: null,
            scrollTarget: null,
            beforeScroll: function () {},
            afterScroll: function () {},
            easing: "swing",
            speed: 400,
            autoCoefficient: 2,
            preventDefault: !0
        },
        r = function (t) {
            var n = [],
                o = !1,
                i = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
            return this.each(function () {
                var t = e(this);
                if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(t[i]() > 0 ? n.push(this) : (t[i](1), o = t[i]() > 0, o && n.push(this), t[i](0))) : (n.push(document.scrollingElement), !1)
            }), n.length || this.each(function () {
                "BODY" === this.nodeName && (n = [this])
            }), "first" === t.el && n.length > 1 && (n = [n[0]]), n
        };
    e.fn.extend({
        scrollable: function (e) {
            var t = r.call(this, {
                dir: e
            });
            return this.pushStack(t)
        },
        firstScrollable: function (e) {
            var t = r.call(this, {
                el: "first",
                dir: e
            });
            return this.pushStack(t)
        },
        smoothScroll: function (n, o) {
            if (n = n || {}, "options" === n) return o ? this.each(function () {
                var t = e(this),
                    n = e.extend(t.data("ssOpts") || {}, o);
                e(this).data("ssOpts", n)
            }) : this.first().data("ssOpts");
            var i = e.extend({}, e.fn.smoothScroll.defaults, n),
                r = e.smoothScroll.filterPath(location.pathname);
            return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (n) {
                var o = this,
                    a = e(this),
                    s = e.extend({}, i, a.data("ssOpts") || {}),
                    l = i.exclude,
                    c = s.excludeWithin,
                    u = 0,
                    f = 0,
                    d = !0,
                    p = {},
                    h = location.hostname === o.hostname || !o.hostname,
                    m = s.scrollTarget || e.smoothScroll.filterPath(o.pathname) === r,
                    g = t(o.hash);
                if (s.scrollTarget || h && m && g) {
                    for (; d && u < l.length;) a.is(t(l[u++])) && (d = !1);
                    for (; d && f < c.length;) a.closest(c[f++]).length && (d = !1)
                } else d = !1;
                d && (s.preventDefault && n.preventDefault(), e.extend(p, s, {
                    scrollTarget: s.scrollTarget || g,
                    link: o
                }), e.smoothScroll(p))
            }), this
        }
    }), e.smoothScroll = function (t, n) {
        if ("options" === t && "object" == typeof n) return e.extend(o, n);
        var i, r, a, s, l, c = 0,
            u = "offset",
            f = "scrollTop",
            d = {},
            p = {};
        "number" == typeof t ? (i = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, o), a = t) : (i = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, t || {}, o), i.scrollElement && (u = "position", "static" === i.scrollElement.css("position") && i.scrollElement.css("position", "relative"))), f = "left" === i.direction ? "scrollLeft" : f, i.scrollElement ? (r = i.scrollElement, /^(?:HTML|BODY)$/.test(r[0].nodeName) || (c = r[f]())) : r = e("html, body").firstScrollable(i.direction), i.beforeScroll.call(r, i), a = "number" == typeof t ? t : n || e(i.scrollTarget)[u]() && e(i.scrollTarget)[u]()[i.direction] || 0, d[f] = a + c + i.offset, s = i.speed, "auto" === s && (l = d[f] - r.scrollTop(), 0 > l && (l *= -1), s = l / i.autoCoefficient), p = {
            duration: s,
            easing: i.easing,
            complete: function () {
                i.afterScroll.call(i.link, i)
            }
        }, i.step && (p.step = i.step), r.length ? r.stop().animate(d, p) : i.afterScroll.call(i.link, i)
    }, e.smoothScroll.version = n, e.smoothScroll.filterPath = function (e) {
        return e = e || "", e.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, e.fn.smoothScroll.defaults = i
}(jQuery), $(function () {
    function e() {
        $("#modal-bg").fadeOut();
        for (var e in t) {
            var n = t[e];
            n.stopVideo()
        }
    }
    var t = [];
    $(document).on(clickEvent, "a.modal-trigger", function (e) {
        e.preventDefault();
        var n = $(this),
            o = n.attr("href"),
            i = $(o),
            r = i.data("vid"),
            a = o.substr(1) + "-vid";
        i.length && ($(".modal-content").hide(), t[a] ? (t[a].seekTo(0), t[a].playVideo(), i.show(), $("#modal-bg").fadeIn()) : (player = new YT.Player(a, {
            height: "390",
            width: "640",
            videoId: r,
            events: {
                onReady: function (e) {
                    e.target.playVideo()
                }
            }
        }), t[a] = player, i.show(), $("#modal-bg").fadeIn(), console.log(player), console.log(t)))
    }), $("#modal-close, #modal-bg").on(clickEvent, function (t) {
        t.preventDefault(), e()
    }), $(document).on("keyup", function (t) {
        27 == t.keyCode && e()
    })
}), $(function () {
    function e() {
        var e = n.currentTime / n.duration;
        $("div.controls .progress .indicator").width(100 * e + "%");
        var t = !n.paused,
            r = n.muted,
            a = o.playing != t,
            s = o.muted != r;
        o.playing = t, o.muted = r, a && (i.removeClass("playing"), t && i.addClass("playing")), s && (i.removeClass("muted"), r && i.addClass("muted"))
    }
    var t = $("#home-vid"),
        n = t[0],
        o = {
            playing: !1,
            muted: !1
        },
        i = $("#video"),
        r = ($(window), !1);
    window.doHomeVideoPlay = function (e) {
        return n.play(), n.pause(), r ? ("undefined" != typeof e && (n.currentTime = e), void n.play()) : (r = !0, void setTimeout(function (e) {
            window.doHomeVideoPlay(e)
        }, 100))
    }, window.doHomeVideoPause = function () {
        n.pause()
    }, $("div.controls a.play").on(clickEvent, function (e) {
        e.preventDefault(), n.paused ? n.play() : n.pause()
    }), $("div.controls a.mute").on(clickEvent, function (e) {
        e.preventDefault(), n.muted = !n.muted
    }), $("a.main-play").on(clickEvent, function (e) {
        e.preventDefault(), window.doHomeVideoPlay()
    }), t.on("ended", function () {
        $.fn.fullpage.moveTo("layer-research")
    }), $("div.controls .progress").on(clickEvent, function (e) {
        var t = $(this),
            o = t.offset(),
            i = (e.pageX - o.left) / t.width(),
            r = Math.floor(i * n.duration);
        window.doHomeVideoPlay(r)
    }), setInterval(e, 40)
}), window.researchSlideLeave = function (e, t, n, o) {
    var i = $("#research .slide").eq(t),
        r = i.find("video");
    r.length && r[0].pause();
    var a = $("#research .slide").eq(o),
        s = a.find("video");
    s.length && s[0].play()
}, $(function () {
    function e() {
        var e = window.winWidth,
            r = e / 2,
            a = t.offset(),
            s = (n.last().position().left + n.last().outerWidth()) / e,
            l = -o * s + r,
            c = (l - a.left) * i,
            u = Math.abs(c) >= 1 ? a.left + c : a.left;
        t.hasClass("intro") || t.hasClass("waiting");
        window.doResearchNavAnimation ? t.css({
            left: u + "px"
        }) : t.css({
            left: "0px"
        });
        for (var f = 0; f < n.length; f++) {
            var d = n.eq(f),
                p = d.offset(),
                h = p.left + d.outerWidth() / 2,
                m = Math.abs(o - h),
                g = .15,
                v = 600,
                y = 1 - m / v,
                w = v >= m ? y * g : 0,
                x = 1 + w,
                b = d.find("span"),
                T = parseFloat(b.css("opacity")),
                S = T + .1 * (y - T);
            b.css({
                opacity: S
            }), window.doResearchNavAnimation && d.css({
                "-webkit-transform": "scale(" + x + ")",
                "-moz-transform": "scale(" + x + ")",
                "-ms-transform": "scale(" + x + ")",
                "-o-transform": "scale(" + x + ")",
                transform: "scale(" + x + ")"
            })
        }
    }
    var t = $("#research-home .links"),
        n = t.find("a"),
        o = 0,
        i = .02;
    window.canMove = !1, $(window).on("resize", function () {
        window.winWidth = $(window).width()
    }).trigger("resize"), e(), $("#research-home").on("mousemove", function (e) {
        window.doResearchNavAnimation = window.researchNavActive, o = e.pageX
    }), setInterval(function () {
        window.requestAnimationFrame ? window.requestAnimationFrame(e) : e()
    }, 15)
}), $(function () {
    function e() {
        window.historyActive && (window.requestAnimationFrame ? window.requestAnimationFrame(t) : t())
    }

    function t(e) {
        var t = $(window).height() / 1.5;
        o.each(function (e) {
            var n = $(this),
                o = n.offset().top,
                i = Math.abs(t / 3 - o),
                r = 0;
            t > i && (r = 1 - i / t);
            var a = n.find(".event"),
                s = n.find(".description > div"),
                l = n.find(".icon .inner"),
                c = 1 + .5 * r,
                u = .5 + .5 * r;
            l.css({
                opacity: Math.abs(r),
                "-webkit-transform": "scale(" + c + ")",
                "-moz-transform": "scale(" + c + ")",
                "-ms-transform": "scale(" + c + ")",
                "-o-transform": "scale(" + c + ")",
                transform: "scale(" + c + ")"
            }), a.css("opacity", u), s.css("opacity", u), a.css({
                "-webkit-transform": "scale(" + c + ")",
                "-moz-transform": "scale(" + c + ")",
                "-ms-transform": "scale(" + c + ")",
                "-o-transform": "scale(" + c + ")",
                transform: "scale(" + c + ")"
            }), s.css({
                "-webkit-transform": "scale(" + c + ")",
                "-moz-transform": "scale(" + c + ")",
                "-ms-transform": "scale(" + c + ")",
                "-o-transform": "scale(" + c + ")",
                transform: "scale(" + c + ")"
            })
        })
    }
    var n = $("#timeline-ol"),
        o = (n.offset(), n.find("li"));
    n.height();
    window.timelineBindEvents = function () {}, setInterval(e, 40), $("#timeline a.read-more").on(clickEvent, function (e) {
        e.preventDefault(), $(this).closest("li").addClass("expanded")
    }), $("#read-more-timeline").on(clickEvent, function (e) {
        e.preventDefault(), $(".timeline-footer").addClass("hide"), window.ssDisabled = !1
    })
}), $(function () {
    function e() {
        var e = $(".mo-scroll").eq(0).css("height");
        $(window).width() >= 760 && $(".mo-scroll").slimScroll({
            height: e,
            alwaysVisible: !0,
            railVisible: !0,
            railOpacity: .9,
            railcolor: "#000000",
            color: "#7B6E66",
            size: "16px"
        })
    }
    var t = "ontouchstart" in document.documentElement ? "touchstart" : "click",
        n = !1;
    window.makingOfScroll = function () {
        n || (e(), n = !0)
    }, $(window).on("resize", function () {
        e()
    }), $("#making-of a.read-more").on(t, function (e) {
        e.preventDefault(), $(this).closest(".mo-scroll").addClass("expanded")
    }), $("#making-of a.read-less").on(t, function (e) {
        e.preventDefault(), $(this).closest(".mo-scroll").removeClass("expanded")
    })
});
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) || /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
isSafari && (document.documentElement.className = "safari");
var clickEvent = "ontouchstart" in document.documentElement ? "touchstart" : "click",
    display_mode = "desktop",
    default_scroll_speed = 700,
    skip_anim = !1,
    NO_DELAY_MOVE = -1,
    DELAY_MOVING = -2,
    HOME_DELAY_MS = 600;
window.delayMove = -1, window.researchNavActive = !1, window.doResearchNavAnimation = !1;
var researchIntroTimer;
$(document).ready(function () {
    function e() {
        $("#research-home .links").addClass("intro").removeClass("waiting"), clearTimeout(researchIntroTimer), researchIntroTimer = setTimeout(function () {
            window.researchNavActive = !0, $("#research-home .links").removeClass("intro waiting")
        }, 3e3)
    }

    function t() {
        clearTimeout(researchIntroTimer), window.researchNavActive = !1, window.doResearchNavAnimation = !1, $("#research-home .links").removeClass("intro").addClass("waiting")
    }

    function n(e, t) {
        $("#timeline .fp-scrollable").slimScroll({
            start: "top"
        }), "go-up" == t ? $.fn.fullpage.moveSectionUp() : $.fn.fullpage.moveSectionDown()
    }

    function o(e) {
        var t = $(".section").eq(e - 1);
        t.find(".slide").length && $.fn.fullpage.scrollSlider(t, 0)
    }
    var i = $(window).width();
    760 >= i ? display_mode = "mobile" : 800 >= i ? display_mode = "ptablet" : 1024 >= i && (display_mode = "tablet"), document.location.hash.length > 1 && (skip_anim = !0), "mobile" != display_mode ? $("#page").fullpage({
        anchors: ["layer-home", "layer-video", "layer-research", "layer-timeline", "layer-making-of", "layer-vc-message"],
        sectionsColor: ["#555759", "#000", "#7B6E66", "#555759", "#3C3E3F", "#7B6E66"],
        scrollOverflow: !0,
        animateAnchor: !1,
        normalScrollElements: ".mo-copy",
        afterLoad: function (t, n) {
            console.log("afterLoad(", t, n, ")"), $("#preloader").delay(2e3).fadeOut(1e3), $("#home").removeClass("exiting"), $("#collision-nav li.active").removeClass("active"), $("#collision-nav li").eq(n - 1).addClass("active"), "layer-timeline" == t ? ($.fn.fullpage.setAutoScrolling(!0), window.timelineBindEvents()) : "layer-making-of" == t && (window.makingOfScroll(), $("#ms-home .mo-nav").addClass("animated")), 3 != n && o(3), 5 != n && o(5), 3 == n && e(), 5 != n && $("#ms-home .mo-nav").removeClass("animated")
        },
        onSlideLeave: function (n, o, i, r, a) {
            console.log("onSlideLeave(", n, o, i, r, a, ")"), "layer-research" == n && window.researchSlideLeave(o, i, r, a), 3 == o && 0 == a ? e() : 3 == o && 0 != a && t()
        },
        afterSlideLoad: function (e, t, n, o) {
            console.log("afterSlideLoad(", e, t, n, o, ")")
        },
        onLeave: function (e, o, i) {
            if (console.log("onLeave(", e, o, ")"), 1 == o && $("#home").removeClass("exiting"), 1 == e) {
                if (window.delayMove == NO_DELAY_MOVE) return window.delayMove = o, $("#home").addClass("exiting"), setTimeout(function () {
                    var e = window.delayMove;
                    window.delayMove = DELAY_MOVING, $.fn.fullpage.moveTo(e)
                }, HOME_DELAY_MS), !1;
                window.delayMove == DELAY_MOVING && (window.delayMove = NO_DELAY_MOVE)
            }
            2 == o ? window.doHomeVideoPlay(0) : window.doHomeVideoPause(), 3 != o && t(), 4 == o && ($(".timeline-footer").removeClass("hide"), $("#timeline .fp-scrollable").slimScroll({
                scrollTo: 0
            }), $("#timeline > div > div > div.slimScrollBar").css({
                top: "0px"
            }), $("#timeline .fp-scrollable").on("slimscrollingdisabled", n)), window.historyActive = window.ssDisabled = 4 == o, 4 == e && $("#timeline .fp-scrollable").off("slimscrollingdisabled", n), $(".page-header").toggleClass("fixed", 1 != o)
        }
    }) : ($("#preloader").addClass("show").delay(2e3).fadeOut(1e3), $("*[data-src]").each(function () {
        $(this).attr("src", $(this).data("src"))
    })), $(document).on("click", "a.smooth", function (e) {
        e.preventDefault();
        var t = $(this).attr("href").substr(1);
        "mobile" == display_mode ? $.smoothScroll({
            scrollElement: $("body, html"),
            scrollTarget: "#" + t,
            offset: -60
        }) : $.fn.fullpage.moveTo("layer-" + t)
    }), $("#sitemap").on("click", "a.cnav", function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).attr("href").substr(1);
        "mobile" == display_mode ? (t = t.substr(6), $.smoothScroll({
            scrollElement: $("body, html"),
            scrollTarget: "#" + t,
            offset: -60
        })) : $.fn.fullpage.moveTo(t)
    }), $("#collision-nav").appendTo("body"), $("#modal-bg").appendTo("body"), $(".page-footer").appendTo(".page-footer-outer"), $("#preloader").addClass("no-anim").appendTo("body")
});