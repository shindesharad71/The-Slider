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