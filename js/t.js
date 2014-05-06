/*!
 * VERSION: 0.9.2
 * DATE: 2014-02-10
 * JavaScript
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue || (window._gsQueue = [])).push(function () {
    "use strict";
    window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function (a, b, c, d) {
        var r, s, t, u, e = function () {
                a.call(this, "throwProps"), this._overwriteProps.length = 0
            },
            f = 999999999999999,
            g = 1e-10,
            h = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            i = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            j = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            k = function (a) {
                for (var b = [i, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), window.location.host], c = b.length; --c > -1;)
                    if (-1 !== a.indexOf(b[c])) return !0;
                return !1
            }(window ? window.location.host : ""),
            l = function (a, b, c, d) {
                for (var i, j, e = b.length, g = 0, h = f; --e > -1;) i = b[e], j = i - a, 0 > j && (j = -j), h > j && i >= d && c >= i && (g = e, h = j);
                return b[g]
            },
            m = function (a, b, c, d) {
                if ("auto" === a.end) return a;
                c = isNaN(c) ? f : c, d = isNaN(d) ? -f : d;
                var e = "function" == typeof a.end ? a.end(b) : a.end instanceof Array ? l(b, a.end, c, d) : Number(a.end);
                return e > c ? e = c : d > e && (e = d), {
                    max: e,
                    min: e
                }
            },
            n = e.calculateChange = function (a, d, e, f) {
                null == f && (f = .05);
                var g = d instanceof c ? d : d ? new c(d) : b.defaultEase;
                return e * f * a / g.getRatio(f)
            },
            o = e.calculateDuration = function (a, d, e, f, g) {
                g = g || .05;
                var h = f instanceof c ? f : f ? new c(f) : b.defaultEase;
                return Math.abs((d - a) * h.getRatio(g) / e / g)
            },
            p = e.calculateTweenDuration = function (a, f, h, i, j) {
                if ("string" == typeof a && (a = b.selector(a)), !a) return 0;
                null == h && (h = 10), null == i && (i = .2), null == j && (j = 1), a.length && (a = a[0] || a);
                var t, u, v, w, x, y, z, A, B, C, k = 0,
                    l = 9999999999,
                    p = f.throwProps || f,
                    q = f.ease instanceof c ? f.ease : f.ease ? new c(f.ease) : b.defaultEase,
                    r = isNaN(p.checkpoint) ? .05 : Number(p.checkpoint),
                    s = isNaN(p.resistance) ? e.defaultResistance : Number(p.resistance);
                for (t in p) "resistance" !== t && "checkpoint" !== t && "preventOvershoot" !== t && (u = p[t], "object" != typeof u && (B = B || d.getByTarget(a), B && B.isTrackingProp(t) ? u = "number" == typeof u ? {
                    velocity: u
                } : {
                    velocity: B.getVelocity(t)
                } : (w = Number(u) || 0, v = w * s > 0 ? w / s : w / -s)), "object" == typeof u && (void 0 !== u.velocity && "number" == typeof u.velocity ? w = Number(u.velocity) || 0 : (B = B || d.getByTarget(a), w = B && B.isTrackingProp(t) ? B.getVelocity(t) : 0), x = isNaN(u.resistance) ? s : Number(u.resistance), v = w * x > 0 ? w / x : w / -x, y = "function" == typeof a[t] ? a[t.indexOf("set") || "function" != typeof a["get" + t.substr(3)] ? t : "get" + t.substr(3)]() : a[t] || 0, z = y + n(w, q, v, r), void 0 !== u.end && (u = m(u, z, u.max, u.min)), void 0 !== u.max && z > Number(u.max) + g ? (C = u.unitFactor || 1, A = y > u.max && u.min !== u.max || w * C > -15 && 45 > w * C ? i + .1 * (h - i) : o(y, u.max, w, q, r), l > A + j && (l = A + j)) : void 0 !== u.min && z < Number(u.min) - g && (C = u.unitFactor || 1, A = y < u.min && u.min !== u.max || w * C > -45 && 15 > w * C ? i + .1 * (h - i) : o(y, u.min, w, q, r), l > A + j && (l = A + j)), A > k && (k = A)), v > k && (k = v));
                return k > l && (k = l), k > h ? h : i > k ? i : k
            },
            q = e.prototype = new a("throwProps");
        return q.constructor = e, e.version = "0.9.2", e.API = 2, e._autoCSS = !0, e.defaultResistance = 100, e.track = function (a, b, c) {
            return d.track(a, b, c)
        }, e.untrack = function (a, b) {
            d.untrack(a, b)
        }, e.isTracking = function (a, b) {
            return d.isTracking(a, b)
        }, e.getVelocity = function (a, b) {
            var c = d.getByTarget(a);
            return c ? c.getVelocity(b) : 0 / 0
        }, e._cssRegister = function () {
            var a = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
            if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    f = b._setPluginRatio,
                    g = b.CSSPropTween;
                b._registerComplexSpecialProp("throwProps", {
                    parser: function (a, b, i, j, k, l) {
                        l = new e;
                        var u, v, w, x, y, m = {},
                            n = {},
                            o = {},
                            p = {},
                            q = {},
                            t = {};
                        s = {};
                        for (w in b) "resistance" !== w && "preventOvershoot" !== w && (v = b[w], "object" == typeof v ? (void 0 !== v.velocity && "number" == typeof v.velocity ? m[w] = Number(v.velocity) || 0 : (y = y || d.getByTarget(a), m[w] = y && y.isTrackingProp(w) ? y.getVelocity(w) : 0), void 0 !== v.end && (p[w] = v.end), void 0 !== v.min && (n[w] = v.min), void 0 !== v.max && (o[w] = v.max), v.preventOvershoot && (t[w] = !0), void 0 !== v.resistance && (u = !0, q[w] = v.resistance)) : "number" == typeof v ? m[w] = v : (y = y || d.getByTarget(a), m[w] = y && y.isTrackingProp(w) ? y.getVelocity(w) : v || 0), h[w] && j._enableTransforms(2 === h[w]));
                        x = c(a, m, j, k, l), r = x.proxy, m = x.end;
                        for (w in r) s[w] = {
                            velocity: m[w],
                            min: n[w],
                            max: o[w],
                            end: p[w],
                            resistance: q[w],
                            preventOvershoot: t[w]
                        };
                        return null != b.resistance && (s.resistance = b.resistance), b.preventOvershoot && (s.preventOvershoot = !0), k = new g(a, "throwProps", 0, 0, x.pt, 2), k.plugin = l, k.setRatio = f, k.data = x, l._onInitTween(r, s, j._tween), k
                    }
                })
            }
        }, e.to = function (a, c, d, e, f) {
            c.throwProps || (c = {
                throwProps: c
            }), 0 === f && (c.throwProps.preventOvershoot = !0);
            var g = new b(a, 1, c);
            return g.render(0, !0, !0), g.vars.css ? (g.duration(p(r, {
                throwProps: s,
                ease: c.ease
            }, d, e, f)), g._delay && !g.vars.immediateRender ? g.invalidate() : t._onInitTween(r, u, g), g) : (g.kill(), new b(a, p(a, c, d, e, f), c))
        }, q._onInitTween = function (a, b, c) {
            if (this.target = a, this._props = [], t = this, u = b, !k) return window.location.href = "http://" + i + j + "?plugin=" + this._propName, !1;
            var o, p, q, r, s, v, w, x, y, e = c._ease,
                f = isNaN(b.checkpoint) ? .05 : Number(b.checkpoint),
                g = c._duration,
                h = b.preventOvershoot,
                l = 0;
            for (o in b)
                if ("resistance" !== o && "checkpoint" !== o && "preventOvershoot" !== o) {
                    if (p = b[o], "number" == typeof p) s = Number(p) || 0;
                    else if ("object" != typeof p || isNaN(p.velocity)) {
                        if (y = y || d.getByTarget(a), !y || !y.isTrackingProp(o)) throw "ERROR: No velocity was defined in the throwProps tween of " + a + " property: " + o;
                        s = y.getVelocity(o)
                    } else s = Number(p.velocity);
                    v = n(s, e, g, f), x = 0, r = "function" == typeof a[o], q = r ? a[o.indexOf("set") || "function" != typeof a["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : a[o], "object" == typeof p && (w = q + v, void 0 !== p.end && (p = m(p, w, p.max, p.min)), void 0 !== p.max && Number(p.max) < w ? h || p.preventOvershoot ? v = p.max - q : x = p.max - q - v : void 0 !== p.min && Number(p.min) > w && (h || p.preventOvershoot ? v = p.min - q : x = p.min - q - v)), this._props[l++] = {
                        p: o,
                        s: q,
                        c1: v,
                        c2: x,
                        f: r,
                        r: !1
                    }, this._overwriteProps[l] = o
                }
            return !0
        }, q._kill = function (b) {
            for (var c = this._props.length; --c > -1;) null != b[this._props[c].p] && this._props.splice(c, 1);
            return a.prototype._kill.call(this, b)
        }, q._roundProps = function (a, b) {
            for (var c = this._props, d = c.length; --d > -1;)(a[c[d]] || a.throwProps) && (c[d].r = b)
        }, q.setRatio = function (a) {
            for (var c, d, b = this._props.length; --b > -1;) c = this._props[b], d = c.s + c.c1 * a + c.c2 * a * a, c.r && (d = 0 | d + (d > 0 ? .5 : -.5)), c.f ? this.target[c.p](d) : this.target[c.p] = d
        }, a.activate([e]), e
    }, !0), window._gsDefine("utils.VelocityTracker", ["TweenLite"], function (a) {
        var b, c, d, e, f = /([A-Z])/g,
            g = {},
            h = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            i = document.defaultView ? document.defaultView.getComputedStyle : function () {},
			//greensock.com String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109)
            j =String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
			///requires-membership/ 
            k = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            l = function (a) {
                for (var b = [j, 
				//codepen.io cdpn.io 
				String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), 
				//cdpn.io 
				String.fromCharCode(99, 100, 112, 110, 46, 105, 111), 
				//gannon.tv 
				String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), 
				//codecanyon.net
				String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), 
				//themeforest.net 
				String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), 
				//mio hack 
				window.location.host], c = b.length; --c > -1;)
                    if (-1 !== a.indexOf(b[c])) return !0;
                return !1
            }(window ? window.location.host : ""),
            m = function (a, b, c) {
                var d = (a._gsTransform || g)[b];
                return d || 0 === d ? d : (a.style[b] ? d = a.style[b] : (c = c || i(a, null)) ? (a = c.getPropertyValue(b.replace(f, "-$1").toLowerCase()), d = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, d = c[b]), parseFloat(d) || 0)
            },
            n = a.ticker,
            o = function (a, b, c) {
                this.p = a, this.f = b, this.v1 = this.v2 = 0, this.t1 = this.t2 = n.time, this.css = !1, this.type = "", this._prev = null, c && (this._next = c, c._prev = this)
            },
            p = function () {
                var f, g, a = b,
                    c = n.time;
                if (c - d >= .03)
                    for (e = d, d = c; a;) {
                        for (g = a._firstVP; g;) f = g.css ? m(a.target, g.p) : g.f ? a.target[g.p]() : a.target[g.p], (f !== g.v1 || c - g.t1 > .15) && (g.v2 = g.v1, g.v1 = f, g.t2 = g.t1, g.t1 = c), g = g._next;
                        a = a._next
                    }
            },
            q = function (a) {
                this._lookup = {}, this.target = a, this.elem = a.style && a.nodeType ? !0 : !1, c || (n.addEventListener("tick", p, null, !1, -100), d = e = n.time, c = !0), b && (this._next = b, b._prev = this), b = this
            },
            r = q.getByTarget = function (a) {
                for (var c = b; c;) {
                    if (c.target === a) return c;
                    c = c._next
                }
            },
            s = q.prototype;
        return s.addProp = function (b, c) {
            if (!this._lookup[b]) {
                var d = this.target,
                    e = "function" == typeof d[b],
                    f = e ? this._altProp(b) : b,
                    g = this._firstVP;
                this._firstVP = this._lookup[b] = this._lookup[f] = g = new o(f !== b && 0 === b.indexOf("set") ? f : b, e, g), g.css = this.elem && (void 0 !== this.target.style[g.p] || h[g.p]), g.css && h[g.p] && !d._gsTransform && a.set(d, {
                    x: "+=0"
                }), g.type = c || g.css && 0 === b.indexOf("rotation") ? "deg" : "", g.v1 = g.v2 = g.css ? m(d, g.p) : e ? d[g.p]() : d[g.p]
            }
        }, s.removeProp = function (a) {
            var b = this._lookup[a];
            b && (b._prev ? b._prev._next = b._next : b === this._firstVP && (this._firstVP = b._next), b._next && (b._next._prev = b._prev), this._lookup[a] = 0, b.f && (this._lookup[this._altProp(a)] = 0))
        }, s.isTrackingProp = function (a) {
            return this._lookup[a] instanceof o
        }, s.getVelocity = function (a) {
            var d, e, f, b = this._lookup[a],
                c = this.target;
            if (!b) throw "The velocity of " + a + " is not being tracked.";
            return d = b.css ? m(c, b.p) : b.f ? c[b.p]() : c[b.p], e = d - b.v2, ("rad" === b.type || "deg" === b.type) && (f = "rad" === b.type ? 2 * Math.PI : 360, e %= f, e !== e % (f / 2) && (e = 0 > e ? e + f : e - f)), e / (n.time - b.t2)
        }, s._altProp = function (a) {
            var b = a.substr(0, 3),
                c = ("get" === b ? "set" : "set" === b ? "get" : b) + a.substr(3);
            return "function" == typeof this.target[c] ? c : a
        }, q.getByTarget = function (c) {
            var d = b;
            for ("string" == typeof c && (c = a.selector(c)), c.length && c !== window && c[0] && c[0].style && !c.nodeType && (c = c[0]); d;) {
                if (d.target === c) return d;
                d = d._next
            }
        }, q.track = function (a, b, c) {
            var d = r(a),
                e = b.split(","),
                f = e.length;
            for (c = (c || "").split(","), d || (d = new q(a)); --f > -1;) d.addProp(e[f], c[f] || c[0]);
            return d
        }, q.untrack = function (a, c) {
            var d = r(a),
                e = (c || "").split(","),
                f = e.length;
            if (d) {
                for (; --f > -1;) d.removeProp(e[f]);
                d._firstVP && c || (d._prev ? d._prev._next = d._next : d === b && (b = d._next), d._next && (d._next._prev = d._prev))
            }
        }, q.isTracking = function (a, b) {
            var c = r(a);
            return c ? !b && c._firstVP ? !0 : c.isTrackingProp(b) : !1
        }, l ? q : (window.location.href = "http://" + j + k + "?plugin=VelocityTracker", !1)
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();