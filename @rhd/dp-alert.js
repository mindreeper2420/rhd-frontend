(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@patternfly/pfelement/pfelement.umd')) :
    typeof define === 'function' && define.amd ? define(['exports', '@patternfly/pfelement/pfelement.umd'], factory) :
    (global = global || self, factory(global.DPAlert = {}, global.PFElement));
}(this, (function (exports, PFElement) { 'use strict';

    PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var DPAlert = (function (_super) {
        __extends(DPAlert, _super);
        function DPAlert() {
            var _this = _super.call(this, DPAlert, { delayRender: true }) || this;
            _this._type = 'info';
            _this._icon = 'https://static.jboss.org/rhd/images/icons/RHD_alerticon_info.svg';
            _this._background = '#dcedf8';
            _this._border = '#87aac1';
            return _this;
        }
        Object.defineProperty(DPAlert.prototype, "html", {
            get: function () {
                return "\n        <style>\n        :host {\n            color: #363636 !important;\n            display: flex;\n            flex-direction: row;\n            display: grid;\n            grid-template-columns: 1.5em auto 1fr;\n            grid-template-rows: auto;\n            grid-gap: .5em;\n            border-width: 1px;\n            border-style: solid;\n            padding: 10px 20px;\n            margin: 1.5em auto;\n            font-size: 1em;\n            background-color: #dcedf8;\n            border-color: #87aac1;\n            line-height: 24px;\n            vertical-align: middle;\n        }\n\n        h3, strong {\n            margin: 0;\n            display: inline;\n        }\n\n        p { margin: 0; }\n          \n        img {\n            flex: 0 0 1.5em;\n            height: 1.5em;\n            display: block;\n            position: relative;\n            margin-right: 10px;\n        }\n\n        :host([type=\"success\"]) {\n            background-color: #e9f4e9;\n            border-color: #8db28a;\n        }\n        :host([type=\"warning\"]) {\n            background-color: #fdf2e5;\n            border-color: #deb142;\n        }\n        :host([type=\"error\"]) {\n            background-color: #ffe6e6;\n            border-color: #d8aaab;\n        }\n\n        :host([size=\"xl\"]) {\n            grid-template-columns: 1.5em 1fr 1.5em;\n            grid-template-rows: auto 1fr;\n            flex-direction: column;\n        }\n\n        :host([size=\"xl\"]) img {\n            grid-column: 1;\n            grid-row: 1;\n        }\n\n        :host([size=\"xl\"]) h3, :host([size=\"xl\"]) strong {\n            font-weight: 400;\n            font-size: 27px;\n            grid-column: 2;\n            grid-row: 1;\n        }\n\n        :host([size=\"xl\"]) .close {\n            grid-column: 3;\n            grid-row: 1;\n        }\n\n        :host([size=\"xl\"]) p {\n            grid-column: 2;\n            grid-row: 2;\n        }\n        \n        a.close {\n            margin-left: 5px;\n            background-repeat: no-repeat;\n            height: 24px;\n            color: #3b6e90;\n        }\n\n        svg, path { pointer-events: none; }\n        \n        </style>\n        <img src=\"" + this.icon + "\">\n        " + (this.size === 'xl' ? '<h3>' : '') + "\n        " + (this.heading ? "<strong>" + this.heading + "</strong>" : '') + "\n        " + (this.size === 'xl' ? '</h3>' : '') + "\n        <p><slot>" + this.text + "</slot></p>\n        " + (this.size === 'xl' ? "<a class=\"close\" href=\"#\"><i class=\"fas fa-times\"></i></a>" : '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert, "tag", {
            get: function () { return 'dp-alert'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (val) {
                if (this._type === val)
                    return;
                this._type = val;
                switch (this._type) {
                    case 'success':
                        this.icon = 'https://static.jboss.org/rhd/images/icons/RHD_alerticon_success.svg';
                        break;
                    case 'warning':
                        this.icon = 'https://static.jboss.org/rhd/images/icons/RHD_alerticon_warning.svg';
                        break;
                    case 'error':
                        this.icon = 'https://static.jboss.org/rhd/images/icons/RHD_alerticon_error.svg';
                        break;
                    case 'info':
                    default:
                        this.icon = 'https://static.jboss.org/rhd/images/icons/RHD_alerticon_info.svg';
                        break;
                }
                this.setAttribute('type', this._type);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (val) {
                if (this._size === val)
                    return;
                this._size = val;
                this.setAttribute('size', this._size);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert.prototype, "heading", {
            get: function () {
                return this._heading;
            },
            set: function (val) {
                if (this._heading === val)
                    return;
                this._heading = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (val) {
                if (this._text === val)
                    return;
                this._text = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPAlert.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (val) {
                if (this._icon === val)
                    return;
                this._icon = val;
            },
            enumerable: true,
            configurable: true
        });
        DPAlert.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            var closer = this.shadowRoot.querySelector('.close');
            if (closer) {
                this.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (e.composedPath()[0]['className'] === 'close') {
                        _this.remove();
                    }
                });
            }
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPAlert, "observedAttributes", {
            get: function () {
                return ['type', 'size', 'heading'];
            },
            enumerable: true,
            configurable: true
        });
        DPAlert.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
            _super.prototype.render.call(this);
        };
        DPAlert.prototype.acknowledge = function () {
            this.remove();
        };
        return DPAlert;
    }(PFElement));
    PFElement.create(DPAlert);

    exports.DPAlert = DPAlert;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
