var Swiper = function (a, b) {
    "use strict";

    function c(a, b) {
        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
    }

    function d(a) {
        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
    }

    function e() {
        var a = G - J;
        return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
    }

    function f() {
        function a(a) {
            var c, d, e = function () {
                "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)))
            };
            a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image, c.onload = e, c.onerror = e, c.src = d) : e())
        }
        var d = D.h.addEventListener,
            e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
        if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
                new WheelEvent("wheel"), D._wheelEvent = "wheel"
            } catch (f) {}
            D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j)
        }
        if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
            D.imagesToLoad = c("img", D.container);
            for (var h = 0; h < D.imagesToLoad.length; h++) a(D.imagesToLoad[h])
        }
    }

    function g() {
        var a, d = D.h.addEventListener;
        if (b.preventLinks) {
            var e = c("a", D.container);
            for (a = 0; a < e.length; a++) d(e[a], "click", n)
        }
        if (b.releaseFormElements) {
            var f = c("input, textarea, select", D.container);
            for (a = 0; a < f.length; a++) d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0)
        }
        if (b.onSlideClick)
            for (a = 0; a < D.slides.length; a++) d(D.slides[a], "click", k);
        if (b.onSlideTouch)
            for (a = 0; a < D.slides.length; a++) d(D.slides[a], D.touchEvents.touchStart, l)
    }

    function h() {
        var a, d = D.h.removeEventListener;
        if (b.onSlideClick)
            for (a = 0; a < D.slides.length; a++) d(D.slides[a], "click", k);
        if (b.onSlideTouch)
            for (a = 0; a < D.slides.length; a++) d(D.slides[a], D.touchEvents.touchStart, l);
        if (b.releaseFormElements) {
            var e = c("input, textarea, select", D.container);
            for (a = 0; a < e.length; a++) d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0)
        }
        if (b.preventLinks) {
            var f = c("a", D.container);
            for (a = 0; a < f.length; a++) d(f[a], "click", n)
        }
    }

    function i(a) {
        var b = a.keyCode || a.charCode;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
                for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [
                        [d.left, d.top],
                        [d.left + D.width, d.top],
                        [d.left, d.top + D.height],
                        [d.left + D.width, d.top + D.height]
                    ], j = 0; j < i.length; j++) {
                    var k = i[j];
                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
                }
                if (!c) return
            }
            N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev())
        }
    }

    function j(a) {
        var c = D._wheelEvent,
            d = 0;
        if (a.detail) d = -a.detail;
        else if ("mousewheel" === c)
            if (b.mousewheelControlForceToAxis)
                if (N) {
                    if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                    d = a.wheelDeltaX
                } else {
                    if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                    d = a.wheelDeltaY
                }
        else d = a.wheelDelta;
        else if ("DOMMouseScroll" === c) d = -a.detail;
        else if ("wheel" === c)
            if (b.mousewheelControlForceToAxis)
                if (N) {
                    if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                    d = -a.deltaX
                } else {
                    if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                    d = -a.deltaY
                }
        else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
        if (b.freeMode) {
            var f = D.getWrapperTranslate() + d;
            if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return
        } else(new Date).getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = (new Date).getTime();
        return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }

    function k(a) {
        D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a))
    }

    function l(a) {
        m(a), D.fireCallback(b.onSlideTouch, D, a)
    }

    function m(a) {
        if (a.currentTarget) D.clickedSlide = a.currentTarget;
        else {
            var c = a.srcElement;
            do {
                if (c.className.indexOf(b.slideClass) > -1) break;
                c = c.parentNode
            } while (c);
            D.clickedSlide = c
        }
        D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0)
    }

    function n(a) {
        return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1)
    }

    function o(a) {
        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
    }

    function p(a) {
        if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;
        var c = a.target || a.srcElement;
        document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
        var d = "input select textarea".split(" ");
        if (b.noSwiping && c && t(c)) return !1;
        if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;
        if (!$ || 1 === a.targetTouches.length) {
            D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = (new Date).getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd")
        }
    }

    function q(a) {
        if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
            var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void(D.isTouched = !1);
            if (N) {
                if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return
            } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;
            if (a.assignedToSwiper) return void(D.isTouched = !1);
            if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
                if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
                    var f;
                    if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
                        var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
                        f = (J + g) / J;
                        var h = D.positions.current - g * (1 - f) / 2,
                            i = -e() - J / 2;
                        D.positions.current = i > h || 0 >= f ? i : h
                    }
                }
                if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;
                if (b.moveStartThreshold)
                    if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
                        if (!X) return X = !0, void(D.touches.start = D.touches.current);
                        D.setWrapperTranslate(D.positions.current)
                    } else D.positions.current = D.positions.start;
                else D.setWrapperTranslate(D.positions.current);
                return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = (new Date).getTime()), D.velocity = (D.touches.current - Y) / ((new Date).getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = (new Date).getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1
            }
        }
    }

    function r(a) {
        if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
            D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = (new Date).getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);
            var c = D.positions.diff,
                d = D.positions.abs,
                f = D.times.end - D.times.start;
            5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
                "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0))
            }, 100);
            var g = e();
            if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
            if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
            if (D.isMoved = !1, b.freeMode) {
                if (b.freeModeFluid) {
                    var h, i = 1e3 * b.momentumRatio,
                        j = D.velocity * i,
                        k = D.positions.current + j,
                        l = !1,
                        m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio; - g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
                        _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300))
                    }), D.updateActiveSlide(k)
                }
                return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd")
            }
            H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
            var n = 0;
            if ("auto" === b.slidesPerView) {
                for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++)
                    if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
                        n = o;
                        break
                    } n > J && (n = J)
            } else n = F * b.slidesPerView;
            "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd")
        }
    }

    function s(a, b) {
        return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1
    }

    function t(a) {
        var c = !1;
        do s(a, b.noSwipingClass) && (c = !0), a = a.parentElement; while (!c && a.parentElement && !s(a, b.wrapperClass));
        return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c
    }

    function u(a, b) {
        var c, d = document.createElement("div");
        return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
    }

    function v(a, c, d) {
        function e() {
            var f = +new Date,
                l = f - g;
            h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
                e()
            }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1)
        }
        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
            g = +new Date;
        if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);
        else {
            var h = D.getWrapperTranslate(),
                i = Math.ceil((a - h) / f * (1e3 / 60)),
                j = h > a ? "toNext" : "toPrev",
                k = "toNext" === j ? h > a : a > h;
            if (D._DOMAnimating) return;
            e()
        }
        D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c)
    }

    function w(a) {
        if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)
            if (b.queueStartCallbacks && D.support.transitions) {
                if (D._queueStartCallbacks) return;
                D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
                    D._queueStartCallbacks = !1
                })
            } else D.fireCallback(b.onSlideChangeStart, D, a);
        if (b.onSlideChangeEnd)
            if (D.support.transitions)
                if (b.queueEndCallbacks) {
                    if (D._queueEndCallbacks) return;
                    D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
                        D.fireCallback(b.onSlideChangeEnd, c, a)
                    })
                } else D.wrapperTransitionEnd(function (c) {
                    D.fireCallback(b.onSlideChangeEnd, c, a)
                });
        else b.DOMAnimation || setTimeout(function () {
            D.fireCallback(b.onSlideChangeEnd, D, a)
        }, 10)
    }

    function x() {
        var a = D.paginationButtons;
        if (a)
            for (var b = 0; b < a.length; b++) D.h.removeEventListener(a[b], "click", z)
    }

    function y() {
        var a = D.paginationButtons;
        if (a)
            for (var b = 0; b < a.length; b++) D.h.addEventListener(a[b], "click", z)
    }

    function z(a) {
        for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) d === e[f] && (c = f);
        b.autoplay && D.stopAutoplay(!0), D.swipeTo(c)
    }

    function A() {
        ab = setTimeout(function () {
            b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
                "undefined" != typeof ab && A()
            })
        }, b.autoplay)
    }

    function B() {
        D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated")
    }
    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var C = HTMLElement.prototype;
        C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function (a) {
            return this.el = a, this.getPropertyValue = function (b) {
                var c = /(\-([a-z]){1})/g;
                return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
                    return arguments[2].toUpperCase()
                })), a.currentStyle[b] ? a.currentStyle[b] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
            for (var c = b || 0, d = this.length; d > c; c++)
                if (this[c] === a) return c;
            return -1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
        var D = this;
        D.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        }, D.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        }, D.times = {
            start: 0,
            end: 0
        }, D.id = (new Date).getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var E, F, G, H, I, J, K = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var L in K)
            if (L in b && "object" == typeof b[L])
                for (var M in K[L]) M in b[L] || (b[L][M] = K[L][M]);
            else L in b || (b[L] = K[L]);
        D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
        var N = "horizontal" === b.mode,
            O = ["mousedown", "mousemove", "mouseup"];
        D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = {
            touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0],
            touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1],
            touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]
        };
        for (var P = D.container.childNodes.length - 1; P >= 0; P--)
            if (D.container.childNodes[P].className)
                for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
        D.wrapper = E, D._extendSwiperSlide = function (a) {
            return a.append = function () {
                return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a
            }, a.prepend = function () {
                return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a
            }, a.insertAfter = function (c) {
                if ("undefined" == typeof c) return !1;
                var d;
                return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a
            }, a.clone = function () {
                return D._extendSwiperSlide(a.cloneNode(!0))
            }, a.remove = function () {
                D.wrapper.removeChild(a), D.reInit()
            }, a.html = function (b) {
                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
            }, a.index = function () {
                for (var b, c = D.slides.length - 1; c >= 0; c--) a === D.slides[c] && (b = c);
                return b
            }, a.isActive = function () {
                return a.index() === D.activeIndex ? !0 : !1
            }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
                return a.swiperSlideDataStorage[b]
            }, a.setData = function (b, c) {
                return a.swiperSlideDataStorage[b] = c, a
            }, a.data = function (b, c) {
                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
            }, a.getWidth = function (b, c) {
                return D.h.getWidth(a, b, c)
            }, a.getHeight = function (b, c) {
                return D.h.getHeight(a, b, c)
            }, a.getOffset = function () {
                return D.h.getOffset(a)
            }, a
        }, D.calcSlides = function (a) {
            var c = D.slides ? D.slides.length : !1;
            D.slides = [], D.displaySlides = [];
            for (var d = 0; d < D.wrapper.childNodes.length; d++)
                if (D.wrapper.childNodes[d].className)
                    for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
            for (d = D.slides.length - 1; d >= 0; d--) D._extendSwiperSlide(D.slides[d]);
            c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"))
        }, D.createSlide = function (a, c, d) {
            c = c || D.params.slideClass, d = d || b.slideElement;
            var e = document.createElement(d);
            return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e)
        }, D.appendSlide = function (a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0
        }, D.prependSlide = function (a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0
        }, D.insertSlideAfter = function (a, b, c, d) {
            return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a)
        }, D.removeSlide = function (a) {
            if (D.slides[a]) {
                if (b.loop) {
                    if (!D.slides[a + D.loopedSlides]) return !1;
                    D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()
                } else D.slides[a].remove();
                return !0
            }
            return !1
        }, D.removeLastSlide = function () {
            return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1
        }, D.removeAllSlides = function () {
            for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0)
        }, D.getSlide = function (a) {
            return D.slides[a]
        }, D.getLastSlide = function () {
            return D.slides[D.slides.length - 1]
        }, D.getFirstSlide = function () {
            return D.slides[0]
        }, D.activeSlide = function () {
            return D.slides[D.activeIndex]
        }, D.fireCallback = function () {
            var a = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(a))
                for (var c = 0; c < a.length; c++) "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, D.addCallback = function (a, b) {
            var c, e = this;
            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
        }, D.removeCallbacks = function (a) {
            D.params["on" + a] && (D.params["on" + a] = null)
        };
        var S = [];
        for (var T in D.plugins)
            if (b[T]) {
                var U = D.plugins[T](D, b[T]);
                U && S.push(U)
            } D.callPlugins = function (a, b) {
            b || (b = {});
            for (var c = 0; c < S.length; c++) a in S[c] && S[c][a](b)
        }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
            var d = D.h.getWidth(D.container, !1, b.roundLengths),
                e = D.h.getHeight(D.container, !1, b.roundLengths);
            if (d !== D.width || e !== D.height || a) {
                D.width = d, D.height = e;
                var f, g, h, i, j, k, l;
                J = N ? d : e;
                var m = D.wrapper;
                if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
                    var n = 0,
                        o = 0;
                    b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;
                    var p = 0;
                    for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
                        f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
                        var q = N ? f : g;
                        if (b.centeredSlides) {
                            var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
                                s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
                                t = N ? r : s;
                            if (q > J) {
                                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);
                                else
                                    for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
                                D.slidesGrid.push(k + D.wrapperLeft)
                            } else D.snapGrid.push(p), D.slidesGrid.push(p);
                            p += q / 2 + t / 2
                        } else {
                            if (q > J)
                                if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);
                                else if (0 !== J)
                                for (var v = 0; v <= Math.floor(q / J); v++) D.snapGrid.push(k + J * v);
                            else D.snapGrid.push(k);
                            else D.snapGrid.push(k);
                            D.slidesGrid.push(k)
                        }
                        k += q, n += f, o += g
                    }
                    b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom)
                } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;
                else {
                    if (b.calculateHeight) {
                        for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
                        g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px")
                    } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;
                    for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px")
                }
                D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0
            }
        }, D.reInit = function (a) {
            D.init(!0, a)
        }, D.resizeFix = function (a) {
            D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix")
        }, D.destroy = function (a) {
            var c = D.h.removeEventListener,
                d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
            if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
                D.wrapper.removeAttribute("style");
                for (var e = 0; e < D.slides.length; e++) D.slides[e].removeAttribute("style")
            }
            D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null
        }, D.disableKeyboardControl = function () {
            b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i)
        }, D.enableKeyboardControl = function () {
            b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i)
        };
        var V = (new Date).getTime();
        if (D.disableMousewheelControl = function () {
                return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1
            }, D.enableMousewheelControl = function () {
                return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1
            }, b.grabCursor) {
            var W = D.container.style;
            W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab"
        }
        D.allowSlideClick = !0, D.allowLinks = !0;
        var X, Y, Z, $ = !1,
            _ = !0;
        D.swipeNext = function (a, c) {
            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");
            var d = D.getWrapperTranslate().toFixed(2),
                f = d;
            if ("auto" === b.slidesPerView) {
                for (var g = 0; g < D.snapGrid.length; g++)
                    if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
                        f = -D.snapGrid[g + 1];
                        break
                    }
            } else {
                var h = F * b.slidesPerGroup;
                f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h)
            }
            return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", {
                runCallbacks: a
            }), !0)
        }, D.swipePrev = function (a, c) {
            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");
            var d, e = Math.ceil(D.getWrapperTranslate());
            if ("auto" === b.slidesPerView) {
                d = 0;
                for (var f = 1; f < D.snapGrid.length; f++) {
                    if (-e === D.snapGrid[f]) {
                        d = -D.snapGrid[f - 1];
                        break
                    }
                    if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
                        d = -D.snapGrid[f];
                        break
                    }
                }
            } else {
                var g = F * b.slidesPerGroup;
                d = -(Math.ceil(-e / g) - 1) * g
            }
            return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", {
                runCallbacks: a
            }), !0)
        }, D.swipeReset = function (a) {
            "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset"); {
                var c, d = D.getWrapperTranslate(),
                    f = F * b.slidesPerGroup; - e()
            }
            if ("auto" === b.slidesPerView) {
                c = 0;
                for (var g = 0; g < D.snapGrid.length; g++) {
                    if (-d === D.snapGrid[g]) return;
                    if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
                        c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
                        break
                    }
                } - d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e())
            } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());
            return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", {
                runCallbacks: a
            }), !0)
        }, D.swipeTo = function (a, c, d) {
            a = parseInt(a, 10), D.callPlugins("onSwipeTo", {
                index: a,
                speed: c
            }), b.loop && (a += D.loopedSlides);
            var f = D.getWrapperTranslate();
            if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
                var g;
                return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", {
                    index: a,
                    speed: c,
                    runCallbacks: d
                }), !0)
            }
        }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
            if (D.initialized && 0 !== D.slides.length) {
                D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);
                var c;
                if ("auto" === b.slidesPerView) {
                    if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
                        for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++);
                        var d = Math.abs(D.slidesGrid[c] + a),
                            e = Math.abs(D.slidesGrid[c + 1] + a);
                        D.activeIndex = e >= d ? c : c + 1
                    }
                } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
                if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
                    if (D.calcVisibleSlides(a), D.support.classList) {
                        var f;
                        for (c = 0; c < D.slides.length; c++) f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                        D.slides[D.activeIndex].classList.add(b.slideActiveClass)
                    } else {
                        var g = new RegExp("\\s*" + b.slideActiveClass),
                            h = new RegExp("\\s*" + b.slideVisibleClass);
                        for (c = 0; c < D.slides.length; c++) D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
                        D.slides[D.activeIndex].className += " " + b.slideActiveClass
                    }
                    if (b.loop) {
                        var i = D.loopedSlides;
                        D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0)
                    } else D.activeLoopIndex = D.activeIndex;
                    b.pagination && D.updatePagination(a)
                }
            }
        }, D.createPagination = function (a) {
            if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
                var d = "",
                    e = D.slides.length,
                    f = e;
                b.loop && (f -= 2 * D.loopedSlides);
                for (var g = 0; f > g; g++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                D.paginationContainer.innerHTML = d
            }
            D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y()
        }, D.updatePagination = function (a) {
            if (b.pagination && !(D.slides.length < 1)) {
                var d = c("." + b.paginationActiveClass, D.paginationContainer);
                if (d) {
                    var e = D.paginationButtons;
                    if (0 !== e.length) {
                        for (var f = 0; f < e.length; f++) e[f].className = b.paginationElementClass;
                        var g = b.loop ? D.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            D.visibleSlides || D.calcVisibleSlides(a);
                            var h, i = [];
                            for (h = 0; h < D.visibleSlides.length; h++) {
                                var j = D.slides.indexOf(D.visibleSlides[h]) - g;
                                b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j)
                            }
                            for (h = 0; h < i.length; h++) e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                            b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass)
                        } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass)
                    }
                }
            }
        }, D.calcVisibleSlides = function (a) {
            var c = [],
                d = 0,
                e = 0,
                f = 0;
            N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);
            for (var g = 0; g < D.slides.length; g++) {
                d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;
                var h = !1;
                b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g])
            }
            0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c
        };
        var ab, bb;
        D.startAutoplay = function () {
            if (D.support.transitions) {
                if ("undefined" != typeof ab) return !1;
                if (!b.autoplay) return;
                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A()
            } else {
                if ("undefined" != typeof bb) return !1;
                if (!b.autoplay) return;
                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
                    b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0))
                }, b.autoplay)
            }
        }, D.stopAutoplay = function (a) {
            if (D.support.transitions) {
                if (!ab) return;
                ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
                    A()
                }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
            } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
        }, D.loopCreated = !1, D.removeLoopedSlides = function () {
            if (D.loopCreated)
                for (var a = 0; a < D.slides.length; a++) D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a])
        }, D.createLoop = function () {
            if (0 !== D.slides.length) {
                D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
                var a, c = "",
                    d = "",
                    e = "",
                    f = D.slides.length,
                    g = Math.floor(D.loopedSlides / f),
                    h = D.loopedSlides % f;
                for (a = 0; g * f > a; a++) {
                    var i = a;
                    if (a >= f) {
                        var j = Math.floor(a / f);
                        i = a - f * j
                    }
                    e += D.slides[i].outerHTML
                }
                for (a = 0; h > a; a++) d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                for (a = f - h; f > a; a++) c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                var k = c + e + E.innerHTML + e + d;
                for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++)(a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
                D.callPlugins("onCreateLoop")
            }
        }, D.fixLoop = function () {
            var a;
            D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1))
        }, D.loadSlides = function () {
            var a = "";
            D.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
            D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0)
        }, D.reloadSlides = function () {
            var a = b.loader.slides,
                c = parseInt(D.activeSlide().data("swiperindex"), 10);
            if (!(0 > c || c > a.length - 1)) {
                D.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
                    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                if (c > 0) {
                    var f = -F * (c - d);
                    D.setWrapperTranslate(f), D.setWrapperTransition(0)
                }
                var g;
                if ("reload" === b.loader.logic) {
                    D.wrapper.innerHTML = "";
                    var h = "";
                    for (g = d; e >= g; g++) h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
                    D.wrapper.innerHTML = h
                } else {
                    var i = 1e3,
                        j = 0;
                    for (g = 0; g < D.slides.length; g++) {
                        var k = D.slides[g].data("swiperindex");
                        d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
                    }
                    for (g = d; e >= g; g++) {
                        var l;
                        i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l))
                    }
                }
                D.reInit(!0)
            }
        }, B()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function (a, b) {
        "use strict";

        function c(h) {
            if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b))
                for (d = 0; d < g.length; d++) e.h.removeEventListener(f, g[d], c)
        }
        var d, e = this,
            f = e.wrapper,
            g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a)
            for (d = 0; d < g.length; d++) e.h.addEventListener(f, g[d], c)
    },
    getWrapperTranslate: function (a) {
        "use strict";
        var b, c, d, e, f = this.wrapper;
        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
    },
    setWrapperTranslate: function (a, b, c) {
        "use strict";
        var d, e = this.wrapper.style,
            f = {
                x: 0,
                y: 0,
                z: 0
            };
        3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
    },
    setWrapperTransition: function (a) {
        "use strict";
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
            duration: a
        }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
    },
    h: {
        getWidth: function (a, b, c) {
            "use strict";
            var d = window.getComputedStyle(a, null).getPropertyValue("width"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e
        },
        getHeight: function (a, b, c) {
            "use strict";
            if (b) return a.offsetHeight;
            var d = window.getComputedStyle(a, null).getPropertyValue("height"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e
        },
        getOffset: function (a) {
            "use strict";
            var b = a.getBoundingClientRect(),
                c = document.body,
                d = a.clientTop || c.clientTop || 0,
                e = a.clientLeft || c.clientLeft || 0,
                f = window.pageYOffset || a.scrollTop,
                g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
                top: b.top + f - d,
                left: b.left + g - e
            }
        },
        windowWidth: function () {
            "use strict";
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        },
        windowHeight: function () {
            "use strict";
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        },
        windowScroll: function () {
            "use strict";
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            } : document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            } : void 0
        },
        addEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        removeEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    },
    setTransform: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
    },
    setTranslate: function (a, b) {
        "use strict";
        var c = a.style,
            d = {
                x: b.x || 0,
                y: b.y || 0,
                z: b.z || 0
            },
            e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
    },
    setTransition: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function () {
            "use strict";
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
        }(),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
        }(),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
        }(),
        classList: function () {
            "use strict";
            var a = document.createElement("div");
            return "classList" in a
        }()
    },
    browser: {
        ie8: function () {
            "use strict";
            var a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = navigator.userAgent,
                    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== c.exec(b) && (a = parseFloat(RegExp.$1))
            }
            return -1 !== a && 9 > a
        }(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
}, (window.jQuery || window.Zepto) && ! function (a) {
    "use strict";
    a.fn.swiper = function (b) {
        var c;
        return this.each(function (d) {
            var e = a(this),
                f = new Swiper(e[0], b);
            d || (c = f), e.data("swiper", f)
        }), c
    }
}(window.jQuery || window.Zepto), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return Swiper
});