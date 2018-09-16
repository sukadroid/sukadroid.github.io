/* ====================================
 * isOnScreen Function
 * ==================================== */
jQuery.fn.isOnScreen = function() {

    var win = jQuery(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

/* ====================================
 * Element Animation
 * ==================================== */
function animate() {
    $('[data-animate]').each(function() {
        var $this = $(this);
        if ($this.isOnScreen()) {
            var animation = $this.attr('data-animate');
            var delay = $this.attr('data-animate-delay') ? $this.attr('data-animate-delay') : 0;
            setTimeout(function() {
                $this.velocity(animation);
            }, delay);
            $this.removeAttr('data-animate')
        }
    });
}

/* ====================================
 * Background Parallax
 * ==================================== */
var parallax_value = 0.2;
function parallax() {
    var scroll = $(window).scrollTop();

    $('.parallax').each(function() {
        var $this = $(this);
        if ($this.isOnScreen()) {
            var element_height = $(this).outerHeight(true);
            var element_offset = $(this).offset().top;

            var formula = (scroll - element_offset) * parallax_value + 'px';

            $this.css({
                'background-position-y': formula
            })
        }

    })

}

/***********************************
 ScrollTo Function
 ************************************/
function scrollTo(object, speed) {
    var $object;
    var scroll;
    if (typeof speed === "undefined" || speed === null) {
        speed = 1500;
    }

    if (typeof object === 'string') {
        $object = $(object);
        scroll = $object.offset().top - 70;
    } else if (object instanceof $) {
        $object = object;
        scroll = $object.offset().top - 70;
    } else if ($.isNumeric(object)) {
        scroll = object;
    } else {
        $object = $('body');
        scroll = $object.offset().top - 70;
    }

    scroll = (scroll >= 0) ? scroll : 0;
    $('body, html').animate({
        scrollTop: scroll
    }, speed);
}


/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);


/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e) {
    function t(e) {
        var t = e.length, r = $.type(e);
        return"function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return"array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e))
                return!1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (r) {
                return!1
            }
            for (t in e)
                ;
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1)
                            break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++)
                    ;
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1)
                        break;
            return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando], o = n && r[n];
                if (void 0 === t)
                    return o;
                if (o && t in o)
                    return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando], n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n)
                        e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a; )
                        e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a]; )
                            e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t), n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {init: function(e) {
                if (e.nodeType)
                    return this[0] = e, this;
                throw new Error("Not a DOM node.")
            }, offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return{top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)}
            }, position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0], e = e.apply(t), r = this.offset(), a = /^(?:body|html)$/i.test(e.nodeName) ? {top: 0, left: 0} : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {top: r.top - a.top, left: r.left - a.left}
            }};
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++)
            a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {Utilities: $}
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }
        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function i(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function l(e, t, r) {
                return((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }
            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }
            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o)
                        return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }
            function p() {
                for (var t = 0; b > t; ++t)
                    w[t] = l(t * x, e, a)
            }
            function f(t, r, n) {
                var o, i, s = 0;
                do
                    i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
                while (Math.abs(o) > h && ++s < v);
                return i
            }
            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n)
                    r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]), s = r + i * x, l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }
            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4, y = .001, h = 1e-7, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array"in t;
            if (4 !== arguments.length)
                return!1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P]))
                    return!1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function(t) {
                return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
            };
            C.getControlPoints = function() {
                return[{x: e, y: r}, {x: a, y: n}]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }
        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }
        function c(e) {
            if (e)
                for (var t = (new Date).getTime(), r = 0, n = v.State.calls.length; n > r; r++)
                    if (v.State.calls[r]) {
                        var o = v.State.calls[r], s = o[0], l = o[2], u = o[3], f = !!u;
                        u || (u = v.State.calls[r][3] = t - 16);
                        for (var d = Math.min((t - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                            var h = s[m], b = h.element;
                            if (i(b)) {
                                var S = !1;
                                if (l.display !== a && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        var w = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(w, function(e, t) {
                                            x.setPropertyValue(b, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(b, "display", l.display)
                                }
                                l.visibility !== a && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                                for (var V in h)
                                    if ("element" !== V) {
                                        var C = h[V], T, k = g.isString(C.easing) ? v.Easings[C.easing] : C.easing;
                                        if (1 === d)
                                            T = C.endValue;
                                        else if (T = C.startValue + (C.endValue - C.startValue) * k(d), !f && T === C.currentValue)
                                            continue;
                                        if (C.currentValue = T, x.Hooks.registered[V]) {
                                            var A = x.Hooks.getRoot(V), F = i(b).rootPropertyValueCache[A];
                                            F && (C.rootPropertyValue = F)
                                        }
                                        var E = x.setPropertyValue(b, V, C.currentValue + (0 === parseFloat(T) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                        x.Hooks.registered[V] && (i(b).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, E[1]) : E[1]), "transform" === E[0] && (S = !0)
                                    }
                                l.mobileHA && i(b).transformCache.translate3d === a && (i(b).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(b)
                            }
                        }
                        l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility !== a && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], d, Math.max(0, u + l.duration - t), u), 1 === d && p(r)
                    }
            v.State.isTicking && P(c)
        }
        function p(e, t) {
            if (!v.State.calls[e])
                return!1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1)
                    try {
                        o.complete.call(n, n)
                    } catch (d) {
                        setTimeout(function() {
                            throw d
                        }, 1)
                    }
                s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                }), v(p, "reverse", {loop: !0, delay: o.delay})), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
            if (r.documentMode)
                return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)
                    return t = null, e
            }
            return a
        }(), d = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var r = (new Date).getTime(), a;
                return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                    t(r + a)
                }, a)
            }
        }(), g = {isString: function(e) {
                return"string" == typeof e
            }, isArray: Array.isArray || function(e) {
                return"[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function(e) {
                return"[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function(e) {
                return e && e.nodeType
            }, isNodeList: function(e) {
                return"object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function(e) {
                for (var t in e)
                    return!1;
                return!0
            }}, $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)
            return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400, h = "swing", v = {State: {isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: []}, CSS: {}, Utilities: $, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: {queue: "", duration: y, easing: h, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0}, init: function(e) {
                $.data(e, "velocity", {isSVG: g.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {}})
            }, hook: null, mock: !1, version: {major: 1, minor: 1, patch: 0}, debug: !1};
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return-e.tension * e.x - e.friction * e.v
            }
            function t(t, r, a) {
                var n = {x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction};
                return{dx: n.v, dv: e(n)}
            }
            function r(r, a) {
                var n = {dx: r.v, dv: e(r)}, o = t(r, .5 * a, n), i = t(r, .5 * a, o), s = t(r, a, i), l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx), u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {x: -1, v: 0, tension: null, friction: null}, i = [0], s = 0, l = 1e-4, u = .016, c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c?(s = a(e, t), p = s / n * u):p = u; ; )
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l))
                        break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {linear: function(e) {
                return e
            }, swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            }, spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }}, $.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {RegEx: {isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi}, Lists: {colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]}, Hooks: {templates: {textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"]}, registered: {}, register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e], s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                }, getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                }, cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                }, extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0], n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                }, injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0], o = a[1], i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }}, Normalizations: {registered: {clip: function(e, t, r) {
                        switch (e) {
                            case"name":
                                return"clip";
                            case"extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case"inject":
                                return"rect(" + r + ")"
                        }
                    }, blur: function(e, t, r) {
                        switch (e) {
                            case"name":
                                return"-webkit-filter";
                            case"extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case"inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    }, opacity: function(e, t, r) {
                        if (8 >= f)
                            switch (e) {
                                case"name":
                                    return"filter";
                                case"extract":
                                    var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return r = a ? a[1] / 100 : 1;
                                case"inject":
                                    return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                            }
                        else
                            switch (e) {
                                case"name":
                                    return"opacity";
                                case"extract":
                                    return r;
                                case"inject":
                                    return r
                            }
                    }}, register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++)
                        !function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, r, n) {
                                switch (e) {
                                    case"name":
                                        return"transform";
                                    case"extract":
                                        return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                    case"inject":
                                        var o = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case"translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                break;
                                            case"scal":
                                            case"scale":
                                                v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                                break;
                                            case"skew":
                                                o = !/(deg|\d)$/i.test(n);
                                                break;
                                            case"rotate":
                                                o = !/(deg|\d)$/i.test(n)
                                        }
                                        return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                                }
                            }
                        }();
                    for (var e = 0; e < x.Lists.colors.length; e++)
                        !function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, r, n) {
                                switch (e) {
                                    case"name":
                                        return t;
                                    case"extract":
                                        var o;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(n))
                                            o = n;
                                        else {
                                            var i, s = {black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)"};
                                            /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case"inject":
                                        return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }}, Names: {camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                }, SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return(f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                }, prefixCheck: function(e) {
                    if (v.State.prefixMatches[e])
                        return[v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase()
                        }), g.isString(v.State.prefixElement.style[n]))
                            return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return[e, !1]
                }}, Values: {hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                }, getUnitType: function(e) {
                    return/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                }, getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                }, addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                }, removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }}, getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f)
                        l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r, c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                return/^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            }, setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r)
                    o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e))
                    x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r, u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f)
                        try {
                            e.style[s] = a
                        } catch (c) {
                            v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                        }
                    else
                        i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return[s, a]
            }, flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0]};
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }};
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a)
                    n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return f ? k.promise || null : d
            }
            function s() {
                function e(e) {
                    function f(e, t) {
                        var r = a, n = a, i = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), g.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
                    }
                    function d(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }
                    function m() {
                        var e = {myParent: o.parentNode || r.body, position: x.getPropertyValue(o, "position"), fontSize: x.getPropertyValue(o, "fontSize")}, a = e.position === L.lastPosition && e.myParent === L.lastParent, n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100, l = {};
                        if (n && a)
                            l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (s.begin && 0 === V)
                        try {
                            s.begin.call(h, h)
                        } catch (y) {
                            setTimeout(function() {
                                throw y
                            }, 1)
                        }
                    if ("scroll" === A) {
                        var S = /^x$/i.test(s.axis) ? "Left" : "Top", C = parseFloat(s.offset) || 0, T, F, E;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = $(o).offset()[S.toLowerCase()] + C), l = {scroll: {rootPropertyValue: !1, startValue: T, currentValue: T, endValue: E, unitType: "", easing: s.easing, scrollData: {container: s.container, direction: S, alternateValue: F}}, element: o}, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer)
                            return void $.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
                        var j = $.extend(!0, {}, i(o).tweensContainer);
                        for (var H in j)
                            if ("element" !== H) {
                                var N = j[H].startValue;
                                j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o)
                            }
                        l = j
                    } else if ("start" === A) {
                        var j;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = f(t, !0), n = r[0], o = r[1], i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var p = [l[c]];
                                        o && p.push(o), u !== a && p.push(u[c]), b[e + s[c]] = p
                                    }
                                    delete b[e]
                                }
                            }
                        });
                        for (var O in b) {
                            var z = f(b[O]), q = z[0], M = z[1], I = z[2];
                            O = x.Names.camelCase(O);
                            var B = x.Hooks.getRoot(O), W = !1;
                            if (i(o).isSVG || x.Names.prefixCheck(B)[1] !== !1 || x.Normalizations.registered[B] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(O) && !I && 0 !== q && (I = 0), s._cacheValues && j && j[O] ? (I === a && (I = j[O].endValue + j[O].unitType), W = i(o).rootPropertyValueCache[B]) : x.Hooks.registered[O] ? I === a ? (W = x.getPropertyValue(o, B), I = x.getPropertyValue(o, O, W)) : W = x.Hooks.templates[B][1] : I === a && (I = x.getPropertyValue(o, O));
                                var G, D, X, Y = !1;
                                if (G = d(O, I), I = G[0], X = G[1], G = d(O, q), q = G[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return Y = t, ""
                                }), D = G[1], I = parseFloat(I) || 0, q = parseFloat(q) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(O) ? (q /= 100, D = "em") : /^scale/.test(O) ? (q /= 100, D = "") : /(Red|Green|Blue)$/i.test(O) && (q = q / 100 * 255, D = "")), /[\/*]/.test(Y))
                                    D = X;
                                else if (X !== D && 0 !== I)
                                    if (0 === q)
                                        D = X;
                                    else {
                                        p = p || m();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                        switch (X) {
                                            case"%":
                                                I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                I *= p[X + "ToPx"]
                                        }
                                        switch (D) {
                                            case"%":
                                                I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                I *= 1 / p[D + "ToPx"]
                                        }
                                    }
                                switch (Y) {
                                    case"+":
                                        q = I + q;
                                        break;
                                    case"-":
                                        q = I - q;
                                        break;
                                    case"*":
                                        q = I * q;
                                        break;
                                    case"/":
                                        q = I / q
                                }
                                l[O] = {rootPropertyValue: W, startValue: I, currentValue: I, endValue: q, unitType: D, easing: M}, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o)
                            } else
                                v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([R, h, s, null, k.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : V++)
                }
                var o = this, s = $.extend({}, v.defaults, P), l = {}, p;
                switch (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
                        v.velocityQueueEntryFlag = !0, i(o).delayTimer = {setTimeout: setTimeout(e, parseFloat(s.delay)), next: e}
                    }), s.duration.toString().toLowerCase()){case"fast":
                        s.duration = 200;
                        break;
                    case"normal":
                        s.duration = y;
                        break;
                    case"slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(v.mock) || 1, s.delay *= parseFloat(v.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o)
            }
            var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)), f, d, m, h, b, P;
            if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), h = o(h)) {
                l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], P = arguments[m + 1]);
                var w = h.length, V = 0;
                if ("stop" !== b && !$.isPlainObject(P)) {
                    var C = m + 1;
                    P = {};
                    for (var T = C; T < arguments.length; T++)
                        g.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T]
                }
                var k = {promise: null, resolver: null, rejecter: null};
                f && v.Promise && (k.promise = new v.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t
                }));
                var A;
                switch (b) {
                    case"scroll":
                        A = "scroll";
                        break;
                    case"reverse":
                        A = "reverse";
                        break;
                    case"stop":
                        $.each(h, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var F = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = g.isString(P) ? P : "";
                                return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                                    r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e))
                                })
                            })
                        }), $.each(F, function(e, t) {
                            p(t, !0)
                        }), k.promise && k.resolver(h), e();
                    default:
                        if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                            if (g.isString(b) && v.Redirects[b]) {
                                var E = $.extend({}, P), j = E.duration, H = E.delay || 0;
                                return E.backwards === !0 && (h = $.extend(!0, [], h).reverse()), $.each(h, function(e, t) {
                                    parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), v.Redirects[b].call(t, t, E || {}, e, w, h, k.promise ? k : a)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var L = {lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null}, R = [];
                $.each(h, function(e, t) {
                    g.isNode(t) && s.call(t)
                });
                var E = $.extend({}, v.defaults, P), O;
                if (E.loop = parseInt(E.loop), O = 2 * E.loop - 1, E.loop)
                    for (var z = 0; O > z; z++) {
                        var q = {delay: E.delay, progress: E.progress};
                        z === O - 1 && (q.display = E.display, q.visibility = E.visibility, q.complete = E.complete), S(h, "reverse", q)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = l.begin, c = l.complete, p = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in f)
                        e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = {opacity: "In" === t ? 1 : 0}, c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});

/* VelocityJS.org UI Pack (5.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t) {
    "function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function() {
    return function(t, a, e, r) {
        function n(t, a) {
            var e = [];
            return t && a ? ($.each([t, a], function(t, a) {
                var r = [];
                $.each(a, function(t, a) {
                    for (; a.toString().length < 5; )
                        a = "0" + a;
                    r.push(a)
                }), e.push(r.join(""))
            }), parseFloat(e[0]) > parseFloat(e[1])) : !1
        }
        if (!t.Velocity || !t.Velocity.Utilities)
            return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var i = t.Velocity, $ = i.Utilities, s = i.version, o = {major: 1, minor: 1, patch: 0};
        if (n(o, s)) {
            var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(l), new Error(l)
        }
        i.RegisterEffect = i.RegisterUI = function(t, a) {
            function e(t, a, e, r) {
                var n = 0, s;
                $.each(t.nodeType ? [t] : t, function(t, a) {
                    r && (e += t * r), s = a.parentNode, $.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, e) {
                        n += parseFloat(i.CSS.getPropertyValue(a, e))
                    })
                }), i.animate(s, {height: ("In" === a ? "+" : "-") + "=" + n}, {queue: !1, easing: "ease-in-out", duration: e * ("In" === a ? .6 : 1)})
            }
            return i.Redirects[t] = function(n, s, o, l, c, u) {
                function f() {
                    s.display !== r && "none" !== s.display || !/Out$/.test(t) || $.each(c.nodeType ? [c] : c, function(t, a) {
                        i.CSS.setPropertyValue(a, "display", "none")
                    }), s.complete && s.complete.call(c, c), u && u.resolver(c || n)
                }
                var p = o === l - 1;
                a.defaultDuration = "function" == typeof a.defaultDuration ? a.defaultDuration.call(c, c) : parseFloat(a.defaultDuration);
                for (var d = 0; d < a.calls.length; d++) {
                    var y = a.calls[d], g = y[0], m = s.duration || a.defaultDuration || 1e3, X = y[1], Y = y[2] || {}, O = {};
                    if (O.duration = m * (X || 1), O.queue = s.queue || "", O.easing = Y.easing || "ease", O.delay = parseFloat(Y.delay) || 0, O._cacheValues = Y._cacheValues || !0, 0 === d) {
                        if (O.delay += parseFloat(s.delay) || 0, 0 === o && (O.begin = function() {
                            s.begin && s.begin.call(c, c);
                            var a = t.match(/(In|Out)$/);
                            a && "In" === a[0] && g.opacity !== r && $.each(c.nodeType ? [c] : c, function(t, a) {
                                i.CSS.setPropertyValue(a, "opacity", 0)
                            }), s.animateParentHeight && a && e(c, a[0], m + O.delay, s.stagger)
                        }), null !== s.display)
                            if (s.display !== r && "none" !== s.display)
                                O.display = s.display;
                            else if (/In$/.test(t)) {
                                var v = i.CSS.Values.getDisplayType(n);
                                O.display = "inline" === v ? "inline-block" : v
                            }
                        s.visibility && "hidden" !== s.visibility && (O.visibility = s.visibility)
                    }
                    d === a.calls.length - 1 && (O.complete = function() {
                        if (a.reset) {
                            for (var t in a.reset) {
                                var e = a.reset[t];
                                i.CSS.Hooks.registered[t] !== r || "string" != typeof e && "number" != typeof e || (a.reset[t] = [a.reset[t], a.reset[t]])
                            }
                            var s = {duration: 0, queue: !1};
                            p && (s.complete = f), i.animate(n, a.reset, s)
                        } else
                            p && f()
                    }, "hidden" === s.visibility && (O.visibility = s.visibility)), i.animate(n, g, O)
                }
            }, i
        }, i.RegisterEffect.packagedEffects = {"callout.bounce": {defaultDuration: 550, calls: [[{translateY: -30}, .25], [{translateY: 0}, .125], [{translateY: -15}, .125], [{translateY: 0}, .25]]}, "callout.shake": {defaultDuration: 800, calls: [[{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 0}, .125]]}, "callout.flash": {defaultDuration: 1100, calls: [[{opacity: [0, "easeInOutQuad", 1]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25], [{opacity: [0, "easeInOutQuad"]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25]]}, "callout.pulse": {defaultDuration: 825, calls: [[{scaleX: 1.1, scaleY: 1.1}, .5], [{scaleX: 1, scaleY: 1}, .5]]}, "callout.swing": {defaultDuration: 950, calls: [[{rotateZ: 15}, .2], [{rotateZ: -10}, .2], [{rotateZ: 5}, .2], [{rotateZ: -5}, .2], [{rotateZ: 0}, .2]]}, "callout.tada": {defaultDuration: 1e3, calls: [[{scaleX: .9, scaleY: .9, rotateZ: -3}, .1], [{scaleX: 1.1, scaleY: 1.1, rotateZ: 3}, .1], [{scaleX: 1.1, scaleY: 1.1, rotateZ: -3}, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{scaleX: 1, scaleY: 1, rotateZ: 0}, .2]]}, "transition.fadeIn": {defaultDuration: 500, calls: [[{opacity: [1, 0]}]]}, "transition.fadeOut": {defaultDuration: 500, calls: [[{opacity: [0, 1]}]]}, "transition.flipXIn": {defaultDuration: 700, calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]], reset: {transformPerspective: 0}}, "transition.flipXOut": {defaultDuration: 700, calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]], reset: {transformPerspective: 0, rotateY: 0}}, "transition.flipYIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]], reset: {transformPerspective: 0}}, "transition.flipYOut": {defaultDuration: 800, calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]], reset: {transformPerspective: 0, rotateX: 0}}, "transition.flipBounceXIn": {defaultDuration: 900, calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90]}, .5], [{opacity: .8, rotateY: 10}, .25], [{opacity: 1, rotateY: 0}, .25]], reset: {transformPerspective: 0}}, "transition.flipBounceXOut": {defaultDuration: 800, calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10}, .5], [{opacity: 0, rotateY: 90}, .5]], reset: {transformPerspective: 0, rotateY: 0}}, "transition.flipBounceYIn": {defaultDuration: 850, calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90]}, .5], [{opacity: .8, rotateX: 10}, .25], [{opacity: 1, rotateX: 0}, .25]], reset: {transformPerspective: 0}}, "transition.flipBounceYOut": {defaultDuration: 800, calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15}, .5], [{opacity: 0, rotateX: 90}, .5]], reset: {transformPerspective: 0, rotateX: 0}}, "transition.swoopIn": {defaultDuration: 850, calls: [[{opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0}]], reset: {transformOriginX: "50%", transformOriginY: "50%"}}, "transition.swoopOut": {defaultDuration: 850, calls: [[{opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0}]], reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}}, "transition.whirlIn": {defaultDuration: 850, calls: [[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160]}, 1, {easing: "easeInOutSine"}]]}, "transition.whirlOut": {defaultDuration: 750, calls: [[{opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160}, 1, {easing: "swing"}]], reset: {scaleX: 1, scaleY: 1, rotateY: 0}}, "transition.shrinkIn": {defaultDuration: 750, calls: [[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0}]]}, "transition.shrinkOut": {defaultDuration: 600, calls: [[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0}]], reset: {scaleX: 1, scaleY: 1}}, "transition.expandIn": {defaultDuration: 700, calls: [[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, .625], scaleY: [1, .625], translateZ: 0}]]}, "transition.expandOut": {defaultDuration: 700, calls: [[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: .5, scaleY: .5, translateZ: 0}]], reset: {scaleX: 1, scaleY: 1}}, "transition.bounceIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3]}, .4], [{scaleX: .9, scaleY: .9, translateZ: 0}, .2], [{scaleX: 1, scaleY: 1}, .5]]}, "transition.bounceOut": {defaultDuration: 800, calls: [[{scaleX: .95, scaleY: .95}, .35], [{scaleX: 1.1, scaleY: 1.1, translateZ: 0}, .35], [{opacity: [0, 1], scaleX: .3, scaleY: .3}, .3]], reset: {scaleX: 1, scaleY: 1}}, "transition.bounceUpIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], translateY: [-30, 1e3]}, .6, {easing: "easeOutCirc"}], [{translateY: 10}, .2], [{translateY: 0}, .2]]}, "transition.bounceUpOut": {defaultDuration: 1e3, calls: [[{translateY: 20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: -1e3}, .8]], reset: {translateY: 0}}, "transition.bounceDownIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], translateY: [30, -1e3]}, .6, {easing: "easeOutCirc"}], [{translateY: -10}, .2], [{translateY: 0}, .2]]}, "transition.bounceDownOut": {defaultDuration: 1e3, calls: [[{translateY: -20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: 1e3}, .8]], reset: {translateY: 0}}, "transition.bounceLeftIn": {defaultDuration: 750, calls: [[{opacity: [1, 0], translateX: [30, -1250]}, .6, {easing: "easeOutCirc"}], [{translateX: -10}, .2], [{translateX: 0}, .2]]}, "transition.bounceLeftOut": {defaultDuration: 750, calls: [[{translateX: 30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: -1250}, .8]], reset: {translateX: 0}}, "transition.bounceRightIn": {defaultDuration: 750, calls: [[{opacity: [1, 0], translateX: [-30, 1250]}, .6, {easing: "easeOutCirc"}], [{translateX: 10}, .2], [{translateX: 0}, .2]]}, "transition.bounceRightOut": {defaultDuration: 750, calls: [[{translateX: -30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: 1250}, .8]], reset: {translateX: 0}}, "transition.slideUpIn": {defaultDuration: 900, calls: [[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]]}, "transition.slideUpOut": {defaultDuration: 900, calls: [[{opacity: [0, 1], translateY: -20, translateZ: 0}]], reset: {translateY: 0}}, "transition.slideDownIn": {defaultDuration: 900, calls: [[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]]}, "transition.slideDownOut": {defaultDuration: 900, calls: [[{opacity: [0, 1], translateY: 20, translateZ: 0}]], reset: {translateY: 0}}, "transition.slideLeftIn": {defaultDuration: 1e3, calls: [[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]]}, "transition.slideLeftOut": {defaultDuration: 1050, calls: [[{opacity: [0, 1], translateX: -20, translateZ: 0}]], reset: {translateX: 0}}, "transition.slideRightIn": {defaultDuration: 1e3, calls: [[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]]}, "transition.slideRightOut": {defaultDuration: 1050, calls: [[{opacity: [0, 1], translateX: 20, translateZ: 0}]], reset: {translateX: 0}}, "transition.slideUpBigIn": {defaultDuration: 850, calls: [[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]]}, "transition.slideUpBigOut": {defaultDuration: 800, calls: [[{opacity: [0, 1], translateY: -75, translateZ: 0}]], reset: {translateY: 0}}, "transition.slideDownBigIn": {defaultDuration: 850, calls: [[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]]}, "transition.slideDownBigOut": {defaultDuration: 800, calls: [[{opacity: [0, 1], translateY: 75, translateZ: 0}]], reset: {translateY: 0}}, "transition.slideLeftBigIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]]}, "transition.slideLeftBigOut": {defaultDuration: 750, calls: [[{opacity: [0, 1], translateX: -75, translateZ: 0}]], reset: {translateX: 0}}, "transition.slideRightBigIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]]}, "transition.slideRightBigOut": {defaultDuration: 750, calls: [[{opacity: [0, 1], translateX: 75, translateZ: 0}]], reset: {translateX: 0}}, "transition.perspectiveUpIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180]}]]}, "transition.perspectiveUpOut": {defaultDuration: 850, calls: [[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}}, "transition.perspectiveDownIn": {defaultDuration: 800, calls: [[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180]}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}}, "transition.perspectiveDownOut": {defaultDuration: 850, calls: [[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}}, "transition.perspectiveLeftIn": {defaultDuration: 950, calls: [[{opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180]}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}}, "transition.perspectiveLeftOut": {defaultDuration: 950, calls: [[{opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}}, "transition.perspectiveRightIn": {defaultDuration: 950, calls: [[{opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180]}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}}, "transition.perspectiveRightOut": {defaultDuration: 950, calls: [[{opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180}]], reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}}};
        for (var c in i.RegisterEffect.packagedEffects)
            i.RegisterEffect(c, i.RegisterEffect.packagedEffects[c]);
        i.RunSequence = function(t) {
            var a = $.extend(!0, [], t);
            a.length > 1 && ($.each(a.reverse(), function(t, e) {
                var r = a[t + 1];
                if (r) {
                    var n = e.options && e.options.sequenceQueue === !1 ? "begin" : "complete", s = r.options && r.options[n], o = {};
                    o[n] = function() {
                        var t = r.elements.nodeType ? [r.elements] : r.elements;
                        s && s.call(t, t), i(e)
                    }, r.options = $.extend({}, r.options, o)
                }
            }), a.reverse()), i(a[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
});


/*!
 * FitText.js 1.2
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function($) {

    $.fn.fitText = function(kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
                settings = $.extend({
                    'minFontSize': Number.NEGATIVE_INFINITY,
                    'maxFontSize': Number.POSITIVE_INFINITY
                }, options);

        return this.each(function() {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})(jQuery);

