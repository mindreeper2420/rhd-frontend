!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("../rhelement/rhelement.umd.js")) : "function" == typeof define && define.amd ? define(["../rhelement/rhelement.umd.js"], e) : e(t.RHElement); }(this, function (n) {
    "use strict";
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var i = function () { function i(t, e) { for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, e, n) { return e && i(t.prototype, e), n && i(t, n), t; }; }(), t = function (t) { function e() { !function (t, e) { if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function"); }(this, e); var t = function (t, e) { if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e)); return t.type = t.getAttribute("type") || "local", t; } return function (t, e) { if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e); }(e, n), i(e, [{ key: "html", get: function () { return "\n<style>\n:host {\n  display: inline; }\n</style>\n<span></span>"; } }, { key: "styleUrl", get: function () { return "rh-datetime.scss"; } }, { key: "templateUrl", get: function () { return "rh-datetime.html"; } }], [{ key: "tag", get: function () { return "rh-datetime"; } }]), i(e, [{ key: "attributeChangedCallback", value: function (t, e, n) { this[t] = n; } }, { key: "setDate", value: function (t) { this._datetime = t, this.shadowRoot.querySelector("span").innerText = window.Intl ? this._getTypeString() : t.toLocaleString(); } }, { key: "_getOptions", value: function () { var t = { weekday: { short: "short", long: "long" }, day: { numeric: "numeric", "2-digit": "2-digit" }, month: { short: "short", long: "long" }, year: { numeric: "numeric", "2-digit": "2-digit" }, hour: { numeric: "numeric", "2-digit": "2-digit" }, minute: { numeric: "numeric", "2-digit": "2-digit" }, second: { numeric: "numeric", "2-digit": "2-digit" }, timeZoneName: { short: "short", long: "long" } }, e = {}; for (var n in t) {
                var i = t[n][this.getAttribute(n)];
                i && (e[n] = i);
            } return e; } }, { key: "_getTypeString", value: function () { var t = this._getOptions(), e = this.getAttribute("locale") || navigator.language, n = ""; switch (this.type) {
                case "local":
                    n = new Intl.DateTimeFormat(e, t).format(this._datetime);
                    break;
                case "relative":
                    n = this._getTimeRelative(this._datetime - Date.now());
                    break;
                default: n = this._datetime;
            } return n; } }, { key: "_getTimeRelative", value: function (t) { var e = 0 < t ? "until" : "ago", n = "just now", i = Math.round(Math.abs(t) / 1e3), r = Math.round(i / 60), o = Math.round(r / 60), a = Math.round(o / 24), u = Math.round(a / 30), s = Math.round(u / 12); return 18 <= u ? n = s + " years" : 12 <= u ? n = "a year" : 45 <= a ? n = u + " months" : 30 <= a ? n = "a month" : 36 <= o ? n = a + " days" : 24 <= o ? n = "a day" : 90 <= r ? n = o + " hours" : 45 <= r ? n = "an hour" : 90 <= i ? n = r + " minutes" : 45 <= i ? n = "a minute" : 10 <= i && (n = i + " seconds"), "just now" !== n ? n + " " + e : n; } }, { key: "type", get: function () { return this._type; }, set: function (t) { this._type !== t && (this._type = t); } }, { key: "timestamp", get: function () { return this._timestamp; }, set: function (t) { this._timestamp !== t && (this._timestamp = t, this.setDate(new Date(1e3 * t))); } }, { key: "datetime", get: function () { return this._datetime; }, set: function (t) { Date.parse(t) && (Date.parse(t) && this._datetime === Date.parse(t) || this.setDate(Date.parse(t))); } }], [{ key: "observedAttributes", get: function () { return ["datetime", "type", "timestamp"]; } }]), e; }();
    n.create(t);
});
