(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@patternfly/pfelement/pfelement.umd')) :
    typeof define === 'function' && define.amd ? define(['@patternfly/pfelement/pfelement.umd'], factory) :
    (global = global || self, factory(global.PFElement));
}(this, function (PFElement) { 'use strict';

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
    var DPSearchFilterActiveItem = (function (_super) {
        __extends(DPSearchFilterActiveItem, _super);
        function DPSearchFilterActiveItem() {
            var _this = _super.call(this, DPSearchFilterActiveItem, { delayRender: true }) || this;
            _this._active = false;
            _this._inline = false;
            _this._bubble = true;
            _this._bounce = false;
            _this._checkParams = _this._checkParams.bind(_this);
            _this._clearFilters = _this._clearFilters.bind(_this);
            _this._checkChange = _this._checkChange.bind(_this);
            _this._updateFacet = _this._updateFacet.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "html", {
            get: function () {
                return "" + (this.active ? "\n        <style>\n            :host {\n                font-size: 16px;\n                font-weight: 600;\n                flex: 0 0 auto;\n                list-style: none;\n                order: 2;\n                background-color: #8c8f91;\n                border: 1px solid #8c8f91;\n                color: #fff;\n                cursor: default;\n                display: inline-block;\n                line-height: 1em;\n                margin-bottom: .5em;\n                margin-right: .5em;\n                padding: .5em .7em;\n            }\n\n            svg.svg-inline--fa { \n                margin-left: .25em;\n            }\n        </style>\n        <slot></slot><i class=\"fas fa-times\"></i>" : '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem, "tag", {
            get: function () { return 'dp-search-filter-active-item'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
                this.setAttribute('name', this._name);
                this.innerHTML = this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (val) {
                if (this._key === val)
                    return;
                this._key = val;
                this.className = "filter-item-" + this._key;
                this.setAttribute('key', this._key);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "group", {
            get: function () {
                return this._group;
            },
            set: function (val) {
                if (this._group === val)
                    return;
                this._group = val;
                this.setAttribute('group', this._group);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "inline", {
            get: function () {
                return this._inline;
            },
            set: function (val) {
                if (this._inline === val)
                    return;
                this._inline = val;
                _super.prototype.render.call(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "bubble", {
            get: function () {
                return this._bubble;
            },
            set: function (val) {
                if (this._bubble === val)
                    return;
                this._bubble = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "bounce", {
            get: function () {
                return this._bounce;
            },
            set: function (val) {
                if (this._bounce === val)
                    return;
                this._bounce = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (val) {
                if (typeof val === 'string') {
                    val = true;
                }
                if (val === null) {
                    val = false;
                }
                if (this._active === val) {
                    return;
                }
                else {
                    this._active = val;
                    if (this._active) {
                        this.setAttribute('active', '');
                    }
                    else {
                        this.removeAttribute('active');
                    }
                    _super.prototype.render.call(this);
                    if (!this.bounce) {
                        var evt = { detail: { facet: this }, bubbles: true, composed: true };
                        this.bounce = true;
                        this.dispatchEvent(new CustomEvent('filter-item-change', evt));
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterActiveItem.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                if (this._value === val)
                    return;
                this._value = val;
                this.setAttribute('value', this.value);
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterActiveItem.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            this.shadowRoot.addEventListener('click', this._updateFacet);
            top.addEventListener('filter-item-change', this._checkChange);
            top.addEventListener('params-ready', this._checkParams);
            top.addEventListener('clear-filters', this._clearFilters);
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPSearchFilterActiveItem, "observedAttributes", {
            get: function () {
                return ['name', 'active', 'value', 'inline', 'key', 'group'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterActiveItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchFilterActiveItem.prototype._updateFacet = function (e) {
            if (e.target['nodeName'] !== 'SLOT') {
                this.bounce = false;
                this.active = !this.active;
            }
        };
        DPSearchFilterActiveItem.prototype._checkParams = function (e) {
            if (e.detail && e.detail.filters) {
                this.bounce = true;
                if (e.detail.filters.has(this.group) && e.detail.filters.get(this.group).has(this.key)) {
                    this.active = true;
                }
            }
        };
        DPSearchFilterActiveItem.prototype._checkChange = function (e) {
            if (e.detail && e.detail.facet) {
                if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                    this.active = e.detail.facet.active;
                }
            }
        };
        DPSearchFilterActiveItem.prototype._clearFilters = function (e) {
            this.bounce = true;
            this.active = false;
        };
        return DPSearchFilterActiveItem;
    }(PFElement));
    PFElement.create(DPSearchFilterActiveItem);

    var __extends$1 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchActiveFilters = (function (_super) {
        __extends$1(DPSearchActiveFilters, _super);
        function DPSearchActiveFilters() {
            var _this = _super.call(this, DPSearchActiveFilters, { delayRender: true }) || this;
            _this._title = 'Active Filters:';
            _this._toggle = false;
            _this._clearFilters = _this._clearFilters.bind(_this);
            _this._addFilters = _this._addFilters.bind(_this);
            _this._checkActive = _this._checkActive.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchActiveFilters.prototype, "html", {
            get: function () {
                return "\n        <style>\n            :host {\n                display: flex;\n                flex-direction: row;\n                margin-bottom: 1em;\n            }\n\n            strong {\n                flex: 0 1 auto;\n                font-size: 1.2em;\n                font-weight: 600;\n                margin: .3em .7em 0 0;\n                order: 1;\n                white-space: nowrap;\n            }\n\n            .clearFilters {\n                color: #06c;\n                flex: 0 1 auto;\n                font-size: 14px;\n                font-weight: 100;\n                margin-top: .3em;\n                order: 3;\n                text-decoration: none;\n                white-space: nowrap;\n                cursor: pointer;\n            }\n\n            @media only screen and (max-width: 768px) {\n                strong {\n                    display: none;\n                }\n            }\n        </style>\n        <strong>" + this.title + "</strong>\n        <slot></slot>\n        <a href=\"#\" class=\"clearFilters\">Clear Filters</a>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchActiveFilters, "tag", {
            get: function () { return 'dp-search-active-filters'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchActiveFilters.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (val) {
                if (this._title === val)
                    return;
                this._title = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchActiveFilters.prototype, "filters", {
            get: function () {
                return this._filters;
            },
            set: function (val) {
                if (this._filters === val)
                    return;
                this._filters = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchActiveFilters.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            top.addEventListener('filter-item-change', this._checkActive);
            top.addEventListener('filter-item-init', this._checkActive);
            top.addEventListener('search-complete', this._checkActive);
            top.addEventListener('params-ready', this._checkActive);
            top.addEventListener('clear-filters', this._clearFilters);
            this._addFilters();
            this.shadowRoot.addEventListener('click', function (e) {
                var evt = { bubbles: true, composed: true };
                switch (e.target['className']) {
                    case 'showBtn':
                    case 'cancel':
                    case 'applyFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('toggle-modal', evt));
                        break;
                    case 'clearFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('clear-filters', evt));
                        break;
                    case 'more':
                        e.preventDefault();
                        break;
                }
            });
        };
        Object.defineProperty(DPSearchActiveFilters, "observedAttributes", {
            get: function () {
                return ['title'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchActiveFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchActiveFilters.prototype._checkActive = function (e) {
            if (e.detail) {
                var chk = top.document.querySelectorAll('dp-search-filter-item[active]');
                if (chk.length > 0) {
                    this.style.display = 'block';
                }
                else {
                    this.style.display = 'none';
                }
            }
        };
        DPSearchActiveFilters.prototype._initActive = function (e, group_key, item) {
            if (e.detail && e.detail.filters) {
                Object.keys(e.detail.filters).forEach(function (group) {
                    e.detail.filters[group].forEach(function (facet) {
                        if (group === group_key) {
                            if (facet === item.key) {
                                return true;
                            }
                        }
                    });
                });
            }
            return false;
        };
        DPSearchActiveFilters.prototype._addFilters = function () {
            var groups = this.filters && this.filters.facets ? this.filters.facets : [];
            for (var i = 0; i < groups.length; i++) {
                var items = groups[i].items;
                for (var j = 0; j < items.length; j++) {
                    var item = new DPSearchFilterActiveItem();
                    item.name = items[j].name;
                    item.value = items[j].value;
                    item.inline = true;
                    item.bubble = false;
                    item.key = items[j].key;
                    item.group = groups[i].key;
                    this.appendChild(item);
                }
            }
        };
        DPSearchActiveFilters.prototype.applyFilters = function () {
            var evt = {
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('apply-filters', evt));
        };
        DPSearchActiveFilters.prototype._clearFilters = function (e) {
            this.style.display = 'none';
        };
        return DPSearchActiveFilters;
    }(PFElement));
    PFElement.create(DPSearchActiveFilters);

    var __extends$2 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchURL = (function (_super) {
        __extends$2(DPSearchURL, _super);
        function DPSearchURL() {
            var _this = _super.call(this, DPSearchURL) || this;
            _this._uri = new URL(window.location.href);
            _this._term = _this.uri.searchParams.get('t');
            _this._filters = _this._setFilters(_this.uri.searchParams.getAll('f'));
            _this._sort = _this.uri.searchParams.get('s') || 'relevance';
            _this._qty = _this.uri.searchParams.get('r');
            _this._init = true;
            _this._changeAttr = _this._changeAttr.bind(_this);
            _this._popState = _this._popState.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchURL.prototype, "html", {
            get: function () { return ''; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL, "tag", {
            get: function () { return 'dp-search-url'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "uri", {
            get: function () {
                return this._uri;
            },
            set: function (val) {
                if (this._uri === val)
                    return;
                this._uri = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "term", {
            get: function () {
                return this._term;
            },
            set: function (val) {
                if (this._term === val)
                    return;
                this._term = val;
                this.uri.searchParams.set('t', this._term);
                this.setAttribute('term', this.term);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "filters", {
            get: function () {
                return this._filters;
            },
            set: function (val) {
                var _this = this;
                this._filters = val;
                this.uri.searchParams.delete('f');
                this._filters.forEach(function (val, key) {
                    _this.uri.searchParams.append('f', key + "~" + Array.from(val).reduce(function (acc, curr) { return acc + ' ' + curr; }));
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "sort", {
            get: function () {
                return this._sort;
            },
            set: function (val) {
                if (this._sort === val)
                    return;
                this._sort = val;
                this.uri.searchParams.set('s', this._sort);
                this.setAttribute('sort', this._sort);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "qty", {
            get: function () {
                return this._qty;
            },
            set: function (val) {
                if (this._qty === val)
                    return;
                this._qty = val;
                this.setAttribute('qty', this._sort);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchURL.prototype, "init", {
            get: function () {
                return this._init;
            },
            set: function (val) {
                if (this._init === val)
                    return;
                this._init = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchURL.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            top.addEventListener('search-complete', this._changeAttr);
            top.addEventListener('clear-filters', this._changeAttr);
            top.window.addEventListener('popstate', this._popState);
            this._paramsReady();
        };
        Object.defineProperty(DPSearchURL, "observedAttributes", {
            get: function () {
                return ['sort', 'term', 'qty'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchURL.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchURL.prototype._getValueArray = function (vals) {
        };
        DPSearchURL.prototype._popState = function (e) {
            this.uri = new URL(document.location.href);
            this.term = this.uri.searchParams.get('t') || null;
            this.filters = this._setFilters(this.uri.searchParams.getAll('f'));
            this.sort = this.uri.searchParams.get('s');
            this.qty = this.uri.searchParams.get('r');
            this._paramsReady();
        };
        DPSearchURL.prototype._paramsReady = function () {
            var evt = {
                detail: {
                    term: this.term,
                    filters: this.filters,
                    sort: this.sort,
                    qty: this.qty
                },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('params-ready', evt));
        };
        DPSearchURL.prototype._setFilters = function (filtersQS) {
            return new Map(filtersQS.map(function (o) { return [o.split('~')[0], new Set(o.split('~')[1].split(' '))]; }));
        };
        DPSearchURL.prototype._changeAttr = function (e) {
            switch (e.type) {
                case 'clear-filters':
                    this.uri.searchParams.delete('f');
                    this.filters.clear();
                    break;
                case 'load-more':
                    break;
                case 'search-complete':
                    if (e.detail && typeof e.detail.term !== 'undefined' && e.detail.term.length > 0) {
                        this.term = e.detail.term;
                    }
                    else {
                        this.term = '';
                        this.uri.searchParams.delete('t');
                    }
                    if (e.detail && e.detail.filters) {
                        this.filters = e.detail.filters;
                    }
                    if (e.detail && typeof e.detail.sort !== 'undefined') {
                        this.sort = e.detail.sort;
                    }
            }
            if (e.detail && typeof e.detail.invalid === 'undefined') {
                history.pushState({}, "RHD Search: " + (this.term ? this.term : ''), "" + this.uri.pathname + this.uri.search);
            }
            else {
                this.term = '';
                this.filters.clear();
                this.sort = 'relevance';
                this.uri.searchParams.delete('t');
                this.uri.searchParams.delete('f');
                this.uri.searchParams.delete('s');
                history.replaceState({}, 'RHD Search Error', "" + this.uri.pathname + this.uri.search);
            }
        };
        return DPSearchURL;
    }(PFElement));
    PFElement.create(DPSearchURL);

    var __extends$3 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchModalFilters = (function (_super) {
        __extends$3(DPSearchModalFilters, _super);
        function DPSearchModalFilters() {
            var _this = _super.call(this, DPSearchModalFilters, { delayRender: true }) || this;
            _this._type = '';
            _this._title = 'Filter By';
            _this._toggle = false;
            _this._toggleModal = _this._toggleModal.bind(_this);
            _this._clearFilters = _this._clearFilters.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchModalFilters.prototype, "html", {
            get: function () {
                return "\n        <style>\n            :host {\n                display: none;\n                align-self: flex-start;\n                border: none;\n                flex: none;\n                float: left;\n                margin: 0 0 1.3em;\n            }\n            .cover {\n                background: rgba(0,0,0,.5);\n                border: none;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                padding-top: 0;\n                position: absolute;\n                right: 100%;\n                top: 0;\n                width: 100%;\n                z-index: 99;\n                transform: translateX(100%);\n                transition: .5s ease-in-out;\n            }\n            .title {\n                flex: 0 0 40px;\n                order: 1;\n                vertical-align: middle;\n                background: #e6e7e8;\n                color: #000;\n                font-weight: 600;\n                padding: .5em 1em;\n                text-transform: uppercase;\n            }\n            .cancel {\n                color: #06c;\n                display: block;\n                float: right;\n                font-size: 14px;\n                cursor: pointer;\n                text-decoration: none;\n            }\n            .groups {\n                background: #fff;\n                flex: 1 1 100%;\n                order: 1;\n                overflow: auto;\n                padding-bottom: 30px;\n            }\n            .footer {\n                background-color: #000;\n                display: block;\n                flex: 1 0 auto;\n                height: 70px;\n                order: 2;\n                padding: 1em;\n                text-align: center;\n            }\n            .clearFilters {\n                background-color: #fff;\n                border: 1px solid #06c;\n                color: #06c;\n                display: inline-block;\n                font-weight: 600;\n                line-height: 1.44;\n                margin-right: 1em;\n                padding: 8px 20px;\n            }\n            .clearFilters:hover {\n                background-color: #06c;\n                color: #fff;\n            }\n            .applyFilters {\n                background: #c00;\n                color: #fff;\n                font-weight: 600;\n                padding: 10px 25px;\n                text-transform: uppercase;\n                transition: background .2s ease-in 0s;\n                cursor: pointer;\n                text-decoration: none;\n            }\n        </style>\n        <div class=\"cover\" id=\"cover\">\n            <div class=\"title\">" + this.title + " <a href=\"#\" class=\"cancel\" id=\"cancel\">Close</a></div>\n            <div class=\"groups\">\n            <slot></slot>\n            </div>\n            <div class=\"footer\">\n            <a href=\"#\" class=\"clearFilters\">Clear Filters</a> \n            <a href=\"#\" class=\"applyFilters\">Apply</a>\n            </div>\n        </div>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchModalFilters, "tag", {
            get: function () { return 'dp-search-modal-filters'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchModalFilters.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (val) {
                if (this._type === val)
                    return;
                this._type = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchModalFilters.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (val) {
                if (this._title === val)
                    return;
                this._title = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchModalFilters.prototype, "filters", {
            get: function () {
                return this._filters;
            },
            set: function (val) {
                if (this._filters === val)
                    return;
                this._filters = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchModalFilters.prototype, "toggle", {
            get: function () {
                return this._toggle;
            },
            set: function (val) {
                if (this._toggle === val)
                    return;
                this._toggle = val;
                if (this._toggle) {
                    this.shadowRoot.querySelector('.cover').className = 'cover modal';
                    window.scrollTo(0, 0);
                    document.body.style.overflow = 'hidden';
                    this.style.height = window.innerHeight + 'px';
                    this.style.display = 'block';
                }
                else {
                    this.shadowRoot.querySelector('.cover').className = 'cover';
                    document.body.style.overflow = 'auto';
                    this.style.display = 'none';
                }
            },
            enumerable: true,
            configurable: true
        });
        DPSearchModalFilters.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            this.addGroups();
            this.shadowRoot.addEventListener('click', function (e) {
                var evt = { bubbles: true, composed: true };
                switch (e.target['className']) {
                    case 'showBtn':
                    case 'cancel':
                    case 'applyFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('toggle-modal', evt));
                        break;
                    case 'clearFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('clear-filters', evt));
                        break;
                    case 'more':
                        e.preventDefault();
                        break;
                }
            });
            top.addEventListener('toggle-modal', this._toggleModal);
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPSearchModalFilters, "observedAttributes", {
            get: function () {
                return ['type', 'title', 'toggle'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchModalFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchModalFilters.prototype.addGroups = function () {
            var groups = top.document.querySelector('dp-search-filters').children;
            for (var i = 0; i < groups.length; i++) {
                var n = groups[i].cloneNode(true);
                this.appendChild(n);
            }
        };
        DPSearchModalFilters.prototype._toggleModal = function (e) {
            this.toggle = !this.toggle;
        };
        DPSearchModalFilters.prototype.applyFilters = function () {
            var evt = {
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('apply-filters', evt));
        };
        DPSearchModalFilters.prototype._clearFilters = function (e) {
            this.style.display = 'none';
        };
        return DPSearchModalFilters;
    }(PFElement));
    PFElement.create(DPSearchModalFilters);

    var __extends$4 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchApp = (function (_super) {
        __extends$4(DPSearchApp, _super);
        function DPSearchApp() {
            var _this = _super.call(this, DPSearchApp, { delayRender: true }) || this;
            _this._name = 'Search';
            _this.urlEle = new DPSearchURL();
            _this.modal = new DPSearchModalFilters();
            return _this;
        }
        Object.defineProperty(DPSearchApp.prototype, "html", {
            get: function () {
                return "\n        <style>\n\n    :host { \n        display: flex;\n        flex-flow: column;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        margin-bottom: 30px;\n    }\n\n    .query { flex: 0 0 auto; }\n    .content { flex: 1 1 auto; display: flex; flex-flow: row; position: relative;}\n    .filters { flex: 0 0 28%; margin-right: 32px; }\n    .results { flex: 1 1 auto; display: flex; flex-flow: column; }\n\n    .hide { display: none; }\n    \n    .show { display: block; }\n    \n    .mobile { display: none; }\n\n    h2 { \n        flex: 0 0 auto; \n        margin-top: 30px;\n        font-size: 38px;\n        line-height: 1.24;\n        color: #242424;\n        font-weight: 500;\n        margin-bottom: 16px;\n    }\n\n    .loading {\n        background:url(\"https://developers.redhat.com/images/icons/ajax-loader.gif\") center 80px no-repeat;\n        min-height:250px;\n    }\n\n    @media only screen and (max-width: 768px) {\n        .content {\n            flex-flow: column;\n        }\n        .filters { flex: 0 0 auto; margin-right: 0; }\n    }\n        </style>\n    <h2>" + this.name + "</h2>\n    <section class=\"query\"><slot name=\"query\"></slot></section>\n    <section class=\"content\">\n        <section class=\"filters\"><slot name=\"filters\"></slot></section>\n        <section class=\"results\">\n            <slot></slot>\n        </section>\n    </section>\n    ";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchApp, "tag", {
            get: function () {
                return 'dp-search-app';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchApp.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
                this.setAttribute('name', this.name);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchApp.prototype, "url", {
            get: function () {
                return this._url;
            },
            set: function (val) {
                if (this._url === val)
                    return;
                this._url = val;
                this.setAttribute('url', this.url);
            },
            enumerable: true,
            configurable: true
        });
        DPSearchApp.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            top.document.body.appendChild(this.modal);
            setTimeout(function () { top.document.body.appendChild(_this.urlEle); }, 1000);
        };
        Object.defineProperty(DPSearchApp, "observedAttributes", {
            get: function () {
                return ['url', 'name'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchApp.prototype.toggleModal = function (e) {
            this.modal.toggle = e.detail.toggle;
        };
        return DPSearchApp;
    }(PFElement));
    PFElement.create(DPSearchApp);

    var __extends$5 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchBox = (function (_super) {
        __extends$5(DPSearchBox, _super);
        function DPSearchBox() {
            var _this = _super.call(this, DPSearchBox, { delayRender: true }) || this;
            _this._term = '';
            _this.name = 'Search Box';
            _this._checkTerm = _this._checkTerm.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchBox.prototype, "html", {
            get: function () {
                return "\n        <style>\n            * {\n                font-family: Overpass,Open Sans,Arial,Helvetica,sans-serif;\n            }\n            .fa-search { font-size: 18px; }\n\n            :host {\n                flex: 0 0 auto;\n                margin: 0 0 1em;\n            }\n\n            form.search-bar { \n                box-sizing: border-box;\n                color: rgb(66,66,66);\n                cursor: auto;\n                display: flex;\n                flex-direction: row;\n                font-size: 16px;\n                line-height: 24px;\n                position: relative; \n                margin: 0;\n                width: 100%;\n            }\n        \n            form.search-bar div {\n                flex: 1 1 100%;\n            }\n            \n            input.user-search {\n                background-color: white;\n                border: 1px solid #ccc;\n                box-sizing: border-box;\n                font-size: 16px;\n                font-weight: 600;\n                height: 40px;\n                text-align: start;\n                padding: 8px;\n                transition-property: box-shadow, border-color;\n                transition-delay: 0s, 0s;\n                transition-duration: 0.45s, 0.45s;\n                transition-timing-function: ease, ease-in-out;\n                user-select: text;\n                width: 100%;\n                margin-bottom: 1em;\n            }\n        \n            input.user-search::-webkit-search-cancel-button{\n                position:relative;\n                -webkit-appearance: none;\n                height: 20px;\n                width: 20px;\n                background-image: url('https://static.jboss.org/rhd/images/icons/fa_times_icon.svg');\n                opacity: 1;\n            \u2002\u2002\u2002\u2002pointer-events: auto;\n            }\n        \n            button {\n                background: #c00;\n                border: 0;\n                color: #fff;\n                cursor: pointer;\n                font-size: 16px;\n                font-weight: 600;\n                height: 40px;\n                line-height: 1.2em;\n                padding: 9px 30px;\n                position: relative;\n                text-align: center;\n                text-decoration: none;\n                text-transform: uppercase;\n                transition: background .2s ease-in 0s;\n            }\n\n            button: hover { background-color: #8f0000; }\n        \n            button svg.svg-inline--fa { display:none; }\n        \n            @media only screen and (max-width: 768px) {\n                :host {\n                    margin-bottom: .5em;\n                }\n                button { display: block; padding: 9px 20px; }\n                button svg.svg-inline--fa { display: inline-block; }\n                button span { display: none; }\n            }\n        </style>\n<form class=\"search-bar\" role=\"search\">\n    <div class=\"input-cont\">\n        <input value=\"" + this.term + "\" class=\"user-success user-search\" type=\"search\" id=\"query\" placeholder=\"Enter your search term\">\n    </div>\n    <button id=\"search-btn\"><span>SEARCH</span><i class=\"fas fa-search\"></i></button>\n</form>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchBox, "tag", {
            get: function () {
                return 'dp-search-box';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchBox.prototype, "term", {
            get: function () {
                return this._term;
            },
            set: function (val) {
                if (this._term === val)
                    return;
                this._term = decodeURI(val);
                this.shadowRoot.querySelector('input').setAttribute('value', this.term);
            },
            enumerable: true,
            configurable: true
        });
        DPSearchBox.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            top.addEventListener('params-ready', this._checkTerm);
            top.addEventListener('term-change', this._checkTerm);
            this.shadowRoot.addEventListener('submit', function (e) {
                e.preventDefault();
                _this._termChange();
                return false;
            });
            this.shadowRoot.querySelector('#search-btn').addEventListener('click', function (e) {
            });
        };
        Object.defineProperty(DPSearchBox, "observedAttributes", {
            get: function () {
                return ['term'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchBox.prototype._checkTerm = function (e) {
            if (e.detail && e.detail.term) {
                this.term = e.detail.term;
            }
        };
        DPSearchBox.prototype._termChange = function () {
            this.term = this.shadowRoot.querySelector('input').value;
            var evt = {
                detail: {
                    term: this.term
                },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('term-change', evt));
        };
        return DPSearchBox;
    }(PFElement));
    PFElement.create(DPSearchBox);

    var __extends$6 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchFilterGroup = (function (_super) {
        __extends$6(DPSearchFilterGroup, _super);
        function DPSearchFilterGroup() {
            var _this = _super.call(this, DPSearchFilterGroup, { delayRender: true }) || this;
            _this._items = [];
            _this._toggle = false;
            _this._more = false;
            return _this;
        }
        Object.defineProperty(DPSearchFilterGroup.prototype, "html", {
            get: function () {
                return "\n        <style>\n            :host {\n                cursor: pointer;\n                display: block;\n                margin: 0 1em .5em;\n                position: relative;\n            }\n\n            .secondary {\n                display: none;\n            }\n\n            h6 {\n                border-bottom: 1px solid #8c8f91;\n                font-weight: 600;\n                margin: .5em 0;\n                padding-bottom: .3em;\n                text-transform: uppercase;\n                color: #242424;\n            }\n\n            .toggle {\n                float: right;\n                font-weight: 600;\n            }\n\n            .toggle.expand {\n                transform: rotate(90deg);\n                transition: .1s ease-in-out;\n            }\n\n            a.more {\n                color: #06c;\n                cursor: pointer;\n                text-decoration: none;\n                font-size: 14px;\n                display: block;\n                margin-bottom: 10px;\n                margin-left: 2.3em;\n                margin-top: 10px;\n            }\n            a.more:hover {\n                color: #004c98;\n            }\n            .hide, a.more.hide, [data-hide] {\n                display: none;\n            }\n        </style>\n        <h6 class=\"showFilters heading\"><span class=\"group-name\">" + this.name + "</span><span class=\"toggle\"><i class=\"fas fa-chevron-right-icon\"></i></span></h6>\n        <div class=\"group\">\n            <div class=\"primary\">\n                <slot></slot>\n            </div>\n            <div class=\"secondary\">\n                <slot name=\"secondary\"></slot>\n            </div>\n            <a href=\"#\" class=\"more\" data-hide>Show More</a>\n        </div>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup, "tag", {
            get: function () { return 'dp-search-filter-group'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (val) {
                if (this._key === val)
                    return;
                this._key = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
                if (this.shadowRoot.querySelector('.group-name')) {
                    this.shadowRoot.querySelector('.group-name').innerHTML = this._name;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (val) {
                if (this._items === val)
                    return;
                this._items = val;
                if (this._items.length > 5) {
                    if (!this.shadowRoot.querySelector('.more')) {
                        this.shadowRoot.querySelector(".moreBtn").removeAttribute('data-hide');
                    }
                }
                else {
                    if (this.shadowRoot.querySelector('.more')) {
                        this.shadowRoot.removeChild(this.shadowRoot.lastChild);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup.prototype, "toggle", {
            get: function () {
                return this._toggle;
            },
            set: function (val) {
                if (this._toggle === val)
                    return;
                this._toggle = val;
                this.shadowRoot.querySelector('.group').className = this.toggle ? 'group' : 'group hide';
                this.shadowRoot.querySelector('.toggle').className = this.toggle ? 'toggle expand' : 'toggle';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterGroup.prototype, "more", {
            get: function () {
                return this._more;
            },
            set: function (val) {
                if (this._more === val)
                    return;
                this._more = val;
                this.shadowRoot.querySelector('.more')['innerText'] = this.more ? 'Show Less' : 'Show More';
                this.shadowRoot.querySelector('.secondary')['style'].display = this.more ? 'block' : 'none';
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterGroup.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            this.shadowRoot.querySelector('h6').addEventListener('click', function (e) {
                e.preventDefault();
                _this.toggle = !_this.toggle;
            });
            this.shadowRoot.querySelector('.group').addEventListener('click', function (e) {
                if (e.target['className'].indexOf('more') > -1) {
                    e.preventDefault();
                    _this.more = !_this.more;
                }
            });
            var slotItems = this.querySelectorAll('dp-search-filter-item[slot]').length;
            if (slotItems === 0) {
                this.shadowRoot.querySelector('.more').setAttribute('data-hide', '');
            }
            this.toggle = true;
        };
        Object.defineProperty(DPSearchFilterGroup, "observedAttributes", {
            get: function () {
                return ['name', 'key', 'toggle', 'items', 'more'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterGroup.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        return DPSearchFilterGroup;
    }(PFElement));
    PFElement.create(DPSearchFilterGroup);

    var __extends$7 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchFilterItem = (function (_super) {
        __extends$7(DPSearchFilterItem, _super);
        function DPSearchFilterItem() {
            var _this = _super.call(this, DPSearchFilterItem, { delayRender: true }) || this;
            _this._active = false;
            _this._inline = false;
            _this._bounce = false;
            _this._checkParams = _this._checkParams.bind(_this);
            _this._clearFilters = _this._clearFilters.bind(_this);
            _this._checkChange = _this._checkChange.bind(_this);
            _this._updateFacet = _this._updateFacet.bind(_this);
            _this._updateName = _this._updateName.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchFilterItem.prototype, "html", {
            get: function () {
                return "\n        <style>\n        .list {\n            clear: left;\n            cursor: pointer;\n            display: flex;\n            flex-direction: row;\n            font-size: 14px;\n            height: auto;\n            line-height: 1.25em;\n            padding: .5em .5em 0 1.1em;\n        }\n        span { display: none; }\n        input[type=checkbox] {\n            flex: 0 0 auto;\n            margin: .25em 5px 0 0;\n            order: 0;\n        }\n        label {\n            margin-left: 0;\n            color: #4d4d4d;\n            cursor: pointer;\n            display: block;\n            font-size: .875rem;\n            font-weight: 400;\n            line-height: 1.5;\n            margin-bottom: 0;\n        }\n        input[type=checkbox]+label,\n        input[type=radio]+label {\n            display: inline-block;\n            margin-bottom: 0;\n            margin-left: .5rem;\n            margin-right: 1rem;\n            vertical-align: baseline;\n        }\n\n        @media only screen and (max-width: 768px) {\n            .list {\n                line-height: 25px;\n                padding-left: 0;\n                font-size: 16px;\n            }\n            \n            span { display: inline; font-size: 16px; }\n            \n            input[type=checkbox]{\n                height: 0;\n                width: 0;\n                visibility: hidden;\n                order: 2;\n            }\n\n            label {\n                cursor: pointer;\n                text-indent: -1200px;\n                width: 50px;\n                height: 25px;\n                background: grey;\n                display: block;\n                border-radius: 25px;\n                position: absolute;\n                right: 0;\n            }\n    \n            label:after {\n                content: '';\n                position: absolute;\n                top: 1px;\n                left: 1px;\n                width: 23px;\n                height: 23px;\n                background: #fff;\n                border-radius: 20px;\n                transition: 0.3s;\n            }\n    \n            input:checked + label {\n                background: #08c0fc;;\n            }\n    \n            input:checked + label:after  {\n                left: calc(100% - 1px);\n                transform: translateX(-100%);\n            }\n    \n            label:active:after {\n                width: 33px;\n            }\n        }\n        </style>\n        <div class=\"list\">\n            <span>" + this.name + " " + (this.count && this.count.length ? "(" + this.count + ")" : '') + "</span>\n            <input type=\"checkbox\" " + (this.active ? 'checked' : '') + " id=\"filter-item-" + this.key + "\" value=\"" + this.key + "\">\n            <label for=\"filter-item-" + this.key + "\"><slot></slot></label>\n        </div>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem, "tag", {
            get: function () { return 'dp-search-filter-item'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
                this.setAttribute('name', this._name);
                if (this.shadowRoot.querySelector('span')) {
                    this.shadowRoot.querySelector('span').innerText = this._name;
                }
                this.innerHTML = this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (val) {
                if (this._key === val)
                    return;
                this._key = val;
                this.className = "filter-item-" + this._key;
                this.setAttribute('key', this._key);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "facet", {
            get: function () {
                return this._facet ? this._facet : this.group;
            },
            set: function (val) {
                if (this._facet === val)
                    return;
                this._facet = val;
                this.setAttribute('facet', this._facet);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "group", {
            get: function () {
                return this._group;
            },
            set: function (val) {
                if (this._group === val)
                    return;
                this._group = val;
                this.setAttribute('group', this._group);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "count", {
            get: function () {
                return this._count;
            },
            set: function (val) {
                if (this._count === val)
                    return;
                this._count = val;
                this.setAttribute('count', this._count);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "bounce", {
            get: function () {
                return this._bounce;
            },
            set: function (val) {
                if (this._bounce === val)
                    return;
                this._bounce = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (val) {
                if (typeof val === 'string') {
                    val = true;
                }
                if (val === null) {
                    val = false;
                }
                if (this._active === val) {
                    return;
                }
                else {
                    this._active = val;
                    var chkbox = this.shadowRoot.querySelector('input');
                    if (this._active) {
                        this.setAttribute('active', '');
                    }
                    else {
                        this.removeAttribute('active');
                    }
                    if (chkbox) {
                        chkbox.checked = this._active;
                    }
                    if (!this.bounce) {
                        var evt = { detail: { facet: this }, bubbles: true, composed: true };
                        this.bounce = true;
                        this.dispatchEvent(new CustomEvent('filter-item-change', evt));
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilterItem.prototype, "value", {
            get: function () {
                return this._value.split(',');
            },
            set: function (val) {
                if (this._value === val)
                    return;
                this._value = val;
                this.setAttribute('value', this.value);
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterItem.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            this.shadowRoot.addEventListener('change', this._updateFacet);
            top.addEventListener('filter-item-change', this._checkChange);
            top.addEventListener('params-ready', this._checkParams);
            top.addEventListener('clear-filters', this._clearFilters);
            top.addEventListener('search-complete', this._updateName);
        };
        Object.defineProperty(DPSearchFilterItem, "observedAttributes", {
            get: function () {
                return ['name', 'active', 'value', 'inline', 'key', 'group', 'facet', 'count'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilterItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchFilterItem.prototype._updateName = function (e) {
            if (e.detail && e.detail.facets && e.detail.facets.facet_fields) {
                var facets = e.detail.facets.facet_fields;
                if (facets[this.group] && facets[this.group].indexOf(this.value[0]) >= 0) {
                    if (this.name.indexOf('(') > 0) {
                        this.name = this.name.replace(/\([0-9]+\)/, "(" + facets[this.group][facets[this.group].indexOf(this.value[0]) + 1] + ")");
                    }
                    else {
                        this.name = this.name + " (" + facets[this.group][facets[this.group].indexOf(this.value[0]) + 1] + ")";
                    }
                }
                else if (facets[this.facet] && facets[this.facet].indexOf(this.value[0]) >= 0) {
                    if (this.name.indexOf('(') > 0) {
                        this.name = this.name.replace(/\([0-9]+\)/, "(" + facets[this.facet][facets[this.facet].indexOf(this.value[0]) + 1] + ")");
                    }
                    else {
                        this.name = this.name + " (" + facets[this.facet][facets[this.facet].indexOf(this.value[0]) + 1] + ")";
                    }
                }
                else {
                    this.name = this.name.replace(/\([0-9]+\)/, '');
                }
            }
            else {
                this.name = this.name.replace(/\([0-9]+\)/, '');
            }
        };
        DPSearchFilterItem.prototype._updateFacet = function (e) {
            this.bounce = false;
            this.active = !this.active;
        };
        DPSearchFilterItem.prototype._checkParams = function (e) {
            if (e.detail && e.detail.filters) {
                this.bounce = true;
                if (e.detail.filters.has(this.group) && e.detail.filters.get(this.group).has(this.key)) {
                    this.active = true;
                }
            }
        };
        DPSearchFilterItem.prototype._checkChange = function (e) {
            if (e.detail && e.detail.facet) {
                if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                    this.active = e.detail.facet.active;
                }
            }
        };
        DPSearchFilterItem.prototype._clearFilters = function (e) {
            this.bounce = true;
            this.active = false;
        };
        return DPSearchFilterItem;
    }(PFElement));
    PFElement.create(DPSearchFilterItem);

    var __extends$8 = (undefined && undefined.__extends) || (function () {
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
    var DPSearchFilters = (function (_super) {
        __extends$8(DPSearchFilters, _super);
        function DPSearchFilters() {
            var _this = _super.call(this, DPSearchFilters, { delayRender: true }) || this;
            _this._type = '';
            _this._title = 'Filter By';
            _this._toggle = false;
            _this._toggleModal = _this._toggleModal.bind(_this);
            _this._clearFilters = _this._clearFilters.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchFilters.prototype, "html", {
            get: function () {
                return "\n        <style>\n            :host {\n                display: block;\n            }\n            .title {\n                background: #e6e7e8; \n                color: #000;\n                text-transform: uppercase;\n                padding: .5em 1em;\n                font-weight: 600;\n            }\n            .cancel { display: none; }\n            .showBtn { \n                display: none;\n                background: #ccc;\n                text-decoration: none;\n                border: 0;\n                height: 40px;\n                font-weight: 600;\n                font-size: 16px;\n                padding: 9px 40px;\n                transition: background .2s ease-in 0s;\n                line-height: 1.2em;\n                cursor: pointer;\n                position: relative;\n                text-align: center;\n                color: #333; \n                width: 100%;\n                }\n            dp-search-sort-page { display: none; }\n            .groups {\n                background-color: #f9f9f9;\n                padding-bottom: 30px;\n                padding-top: 20px;\n            }\n            .active-type {\n                display: flex;\n                flex-direction: row;\n                margin-bottom: 1em;\n                .inline {\n                    font-size: 16px;\n                    font-weight: 600;\n                }\n\n                .clearFilters {\n                    font-size: 16px;\n                }\n\n            }\n            .active-type strong {\n                flex: 0 1 auto; \n                order: 1; \n                font-weight: 600;\n                font-size: 1.2em;\n                margin: 0.3em .7em 0 0;\n                white-space: nowrap;\n            }\n            .active-type div { flex: 1 1 auto; order: 2; list-style: none; }\n            .active-type a {\n                flex: 0 1 auto;\n                order: 3;\n                text-decoration: none;\n                color: #0066CC;\n                margin-top: .3em;\n                font-weight: 100;\n                font-size: 14px;\n                white-space: nowrap;\n                &:hover, &:active, &:focus { color: #004080; }\n            }\n\n            #footer { display: none; }\n\n            @media only screen and (max-width: 768px) {\n                :host {\n                    display: flex;\n                    flex-direction: row;\n                    flex: none; \n                    align-self: flex-start; \n                    border: none;\n                    margin: 0 0 1.3em 0; \n                }\n\n                .split { flex: 1 0 auto; }\n                .split.right { text-align: right; }\n\n                dp-search-sort-page { display: inline-block; margin: 0;}\n\n                .control {\n                    display: none;\n                    flex-direction: column;\n                    width: 100%;\n                    height: 100%;\n                    padding-top: 51px;\n                    background: rgba(0,0,0,.5);\n                    border: none;\n                    z-index: 99;\n                    right: 100%;\n                    position: absolute;\n                    top: 100px;\n                }\n                .title { flex: 0 0 40px; order: 1; vertical-align: middle; }\n                .showBtn {\n                    display: block;\n                    width: 150px;\n                    height: auto;\n                    border: 1px solid #06c;\n                    line-height: 1.44;\n                    background-color: transparent;\n                    padding: 8px 0;\n                    color: #06c;\n                }\n\n                .showBtn:hover, .showBtn:focus {\n                        background-color: #06c;\n                        color: #fff;\n                }\n            }\n\n        </style>\n<div class=\"split\"><a class=\"showBtn\">Show Filters</a></div>\n<div class=\"split right\"><dp-search-sort-page></dp-search-sort-page></div>\n<div class=\"control\" id=\"control\">\n    <div class=\"title\">" + this.title + "</div>\n    <div class=\"groups\">\n    <slot></slot>\n    </div>\n</div>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilters, "tag", {
            get: function () { return 'dp-search-filters'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilters.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (val) {
                if (this._type === val)
                    return;
                this._type = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilters.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (val) {
                if (this._title === val)
                    return;
                this._title = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilters.prototype, "filters", {
            get: function () {
                return this._filters;
            },
            set: function (val) {
                if (this._filters === val)
                    return;
                this._filters = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchFilters.prototype, "toggle", {
            get: function () {
                return this._toggle;
            },
            set: function (val) {
                if (this._toggle === val)
                    return;
                this._toggle = val;
                if (this._toggle) {
                    this.shadowRoot.querySelector('.cover').className = 'cover modal';
                    window.scrollTo(0, 0);
                    document.body.style.overflow = 'hidden';
                    this.style.height = window.innerHeight + 'px';
                }
                else {
                    this.shadowRoot.querySelector('.cover').className = 'cover';
                    document.body.style.overflow = 'auto';
                }
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilters.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            this.addGroups();
            this.shadowRoot.addEventListener('click', function (e) {
                var evt = { bubbles: true, composed: true };
                switch (e.target['className']) {
                    case 'showBtn':
                    case 'cancel':
                    case 'applyFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('toggle-modal', evt));
                        break;
                    case 'clearFilters':
                        e.preventDefault();
                        _this.dispatchEvent(new CustomEvent('clear-filters', evt));
                        break;
                    case 'more':
                        e.preventDefault();
                        break;
                }
            });
            top.addEventListener('toggle-modal', this._toggleModal);
        };
        Object.defineProperty(DPSearchFilters, "observedAttributes", {
            get: function () {
                return ['type', 'title', 'toggle'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchFilters.prototype.addGroups = function () {
            var groups = this.filters && this.filters.facets ? this.filters.facets : [], len = groups.length;
            for (var i = 0; i < len; i++) {
                var group = new DPSearchFilterGroup(), groupInfo = groups[i], gLen = groupInfo.items.length;
                for (var j = 0; j < gLen; j++) {
                    var item = new DPSearchFilterItem();
                    item.name = groupInfo.items[j].name;
                    item.value = groupInfo.items[j].value;
                    item.active = groupInfo.items[j].active;
                    item.key = groupInfo.items[j].key;
                    item.group = groupInfo.key;
                    group.items.push(item);
                }
                group.key = groupInfo.key;
                group.name = groupInfo.name;
                this.shadowRoot.querySelector('.groups').appendChild(group);
            }
        };
        DPSearchFilters.prototype._toggleModal = function (e) {
            if (this.type === 'modal') {
                this.toggle = !this.toggle;
            }
        };
        DPSearchFilters.prototype.applyFilters = function () {
            var evt = {
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('apply-filters', evt));
        };
        DPSearchFilters.prototype._clearFilters = function (e) {
            this.style.display = 'none';
        };
        return DPSearchFilters;
    }(PFElement));
    PFElement.create(DPSearchFilters);

    var __extends$9 = (undefined && undefined.__extends) || (function () {
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
    var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    var DPSearchOneBox = (function (_super) {
        __extends$9(DPSearchOneBox, _super);
        function DPSearchOneBox() {
            var _this = _super.call(this, DPSearchOneBox, { delayRender: true }) || this;
            _this._term = '';
            _this._url = '../rhdp-apps/onebox/onebox.json';
            _this._mock = false;
            _this.slotTemplate = function (strings, slot, id) {
                return "" + (slot && slot.url && slot.text ? "<a href=\"" + slot.url + "?onebox=" + id + "\" class=\"link\">" + _this.getIcon(slot.icon) + slot.text + "</a>" : '');
            };
            _this._termChange = _this._termChange.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchOneBox.prototype, "html", {
            get: function () {
                var _this = this;
                return "\n        " + (this.feature ? "\n        <style>\n        :host {\n            border: 1px solid #d5d5d5;\n            display: block;\n            margin-bottom: 3em;\n            padding: 25px;\n        }\n        h4 {\n            font-size: 27px;\n            color: #242424;\n            font-weight: 600;\n            line-height: 1.5;\n            margin-bottom: 16px;\n            margin-top: 16px;\n        }    \n        p { \n            margin-bottom: 20px; \n            font-size: 16px;\n            line-height: 1.5;\n        }\n        .button { \n            background: #c00;\n            border: 0;\n            color: #fff;\n            display: inline-block;\n            font-size: 16px;\n            font-weight: 600;\n            line-height: 1.44;\n            padding: 9px 40px;\n            text-align: center;\n            text-decoration: none;\n            text-transform: uppercase;\n            transition: background .2s ease-in 0s;\n        }\n        a { \n            color: #06c;\n            cursor: pointer;\n            text-decoration: none;\n        }\n        a:hover, a:focus {\n            color: #004c98;\n        }\n        svg {\n            fill: var(--rhd-link-hover);\n        }\n        a:hover svg {\n            fill: #004c98;\n        }\n        \n        a.medium-cta {\n            background-color: transparent;\n            border: 1px solid #c00;\n            color: #c00;\n            line-height: 1.44;\n            padding: 8px 40px;\n        }\n        a.medium-cta.blue {\n            border-color: #06c;\n            color: #06c;\n        }\n        a.medium-cta.blue:hover {\n            background-color: #06c;\n            color: #fff;\n        }\n        .links {\n            display: flex;\n            flex-direction: row;\n            flex-wrap: wrap;\n        }\n\n        .links a {\n            flex: 1 0 auto;\n            margin-bottom: 1.5em;\n            line-height: 45px;\n            vertical-align: middle;\n            white-space: nowrap;\n            margin-right: 45px;\n        }\n\n        .links a:first-child {\n            flex: 0 0 auto;\n            padding: 0 40px;\n        }\n\n        .link {\n            padding-right: 20px;\n        }\n        \n        .link svg {\n            fill: #06c;\n            left: 0;\n            margin-right: 5px;\n            max-height: 45px;\n            max-width: 45px;\n            float: left;\n        }\n        </style>\n\n    " + (this.feature && this.feature.heading && this.feature.heading.url && this.feature.heading.text ? "<h4><a href=\"" + this.feature.heading.url + "\">" + this.feature.heading.text + "</a></h4>" : '') + "\n    " + (this.feature && this.feature.details ? "<p>" + this.feature.details + "</p>" : '') + "\n    <div class=\"links\">\n    " + (this.feature && this.feature.button && this.feature.button.url && this.feature.button.text ? "<a href=\"" + this.feature.button.url + "?onebox=" + this.feature.id + "\" class=\"button medium-cta blue\">" + this.feature.button.text + "</a>" : '') + "\n    " + (this.feature && this.feature.slots && this.feature.slots.length > 0 ? "\n        " + this.feature.slots.map(function (slot) { return _this.slotTemplate(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", "", ""], ["", "", ""])), slot, _this.feature.id); }).join('') + "\n    " : '') + "\n    </div>" : '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox, "tag", {
            get: function () { return 'dp-search-onebox'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox.prototype, "term", {
            get: function () {
                if ((this._term === null) || (this._term === '')) {
                    return this._term;
                }
                else {
                    return this._term.replace(/(<([^>]+)>)/ig, '');
                }
            },
            set: function (val) {
                if (this._term === val)
                    return;
                this._term = val;
                this.setAttribute('term', this._term);
                this.feature = this.getFeature();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox.prototype, "url", {
            get: function () {
                return this._url;
            },
            set: function (val) {
                if (this._url === val)
                    return;
                this._url = val;
                this.setAttribute('url', this._url);
                this.getData();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (val) {
                if (this._data === val)
                    return;
                this._data = val;
                this.feature = this.getFeature();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox.prototype, "feature", {
            get: function () {
                return this._feature;
            },
            set: function (val) {
                if (this._feature === val)
                    return;
                this._feature = val;
                _super.prototype.render.call(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchOneBox.prototype, "mock", {
            get: function () {
                return this._mock;
            },
            set: function (val) {
                if (this._mock === val)
                    return;
                this._mock = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchOneBox.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            top.addEventListener('term-change', this._termChange);
            top.addEventListener('params-ready', this._termChange);
        };
        Object.defineProperty(DPSearchOneBox, "observedAttributes", {
            get: function () {
                return ['term', 'url', 'mock'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchOneBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchOneBox.prototype._termChange = function (e) {
            if (e.detail && e.detail.term && e.detail.term.length > 0) {
                this.term = e.detail.term;
            }
            else {
                this.term = '';
            }
        };
        DPSearchOneBox.prototype.getData = function () {
            var _this = this;
            if (this.mock || this.data) {
                return this.data;
            }
            else {
                var fInit = {
                    method: 'GET',
                    headers: new Headers(),
                    mode: 'cors',
                    cache: 'default'
                };
                fetch(this.url, fInit)
                    .then(function (resp) { return resp.json(); })
                    .then(function (data) {
                    _this.data = data;
                });
            }
        };
        DPSearchOneBox.prototype.getFeature = function () {
            var len = this.data && this.data['features'] ? this.data['features'].length : 0, f;
            for (var i = 0; i < len; i++) {
                if (this.data['features'][i].match.indexOf(this.term.toLowerCase()) >= 0) {
                    f = this.data['features'][i];
                }
            }
            return f;
        };
        DPSearchOneBox.prototype.getIcon = function (name) {
            var icons = {
                icon_help: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><title>icon_help</title><path d="M20.15,2C27.779,2,33.0651,5.2419,33.0651,12.1723A8.6318,8.6318,0,0,1,28.0266,20.4c-4.1859,1.9935-5.2333,3.14-5.3836,6.0819H15.81c0-4.736,1.3966-7.6775,7.0319-10.2718,2.4928-1.1469,3.24-1.9447,3.24-3.7393,0-2.2939-1.693-3.64-5.9317-3.64-3.792,0-6.4838,1.7945-8.729,4.1879L6.9349,7.7835A17.8438,17.8438,0,0,1,20.15,2M19.253,29.5248a4.2376,4.2376,0,1,1-4.2386,4.2366,4.2986,4.2986,0,0,1,4.2386-4.2366M20.15,1A18.8975,18.8975,0,0,0,6.211,7.0936a1,1,0,0,0-.0354,1.3406L10.6619,13.67a1,1,0,0,0,.7369.3491l.0225,0a1,1,0,0,0,.7293-.3158c2.5121-2.6779,4.9793-3.8721,8-3.8721,4.9317,0,4.9317,1.85,4.9317,2.64,0,1.167-.2291,1.7134-2.6579,2.8308-6.34,2.9189-7.6139,6.442-7.6139,11.18a1,1,0,0,0,1,1h6.833a1,1,0,0,0,.9987-.949c.121-2.3688.7339-3.2866,4.8148-5.23a9.61,9.61,0,0,0,5.6085-9.13C34.0651,5.0722,28.9933,1,20.15,1ZM19.253,28.5248a5.2376,5.2376,0,1,0,5.2386,5.2366,5.3078,5.3078,0,0,0-5.2386-5.2366Z"/></svg>',
                icon_helloworld: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.0005 38.0015"><title>icon_helloworld</title><path d="M14.0642,7.3037a.1761.1761,0,0,0-.1724-.0852l-3.5192.3888a.1775.1775,0,0,0-.14.0974.1751.1751,0,0,0,.0083.1709l.5161.853A14.6794,14.6794,0,0,0,6.9885,13.42a.5192.5192,0,0,0,.2284.6984.5112.5112,0,0,0,.2345.0563.519.519,0,0,0,.4639-.2847,13.6444,13.6444,0,0,1,3.3873-4.2595l.4622.7639a.1749.1749,0,0,0,.1471.0874.1822.1822,0,0,0,.1525-.0778L14.0588,7.496a.1788.1788,0,0,0,.0061-.192Z" transform="translate(-1 -1)"/><path d="M26.0891,7.9374a13.6292,13.6292,0,0,1,4.26,3.3871l-.7639.4621a.1747.1747,0,0,0-.0874.1471.182.182,0,0,0,.0778.1525l2.9084,1.9945a.1788.1788,0,0,0,.192.0061l0-.0007a.176.176,0,0,0,.0851-.1724l-.3888-3.5192a.1776.1776,0,0,0-.0974-.14.1751.1751,0,0,0-.1709.0084l-.8532.5162A14.6719,14.6719,0,0,0,26.559,7.0106a.52.52,0,1,0-.47.9268Z" transform="translate(-1 -1)"/><path d="M32.741,25.8826a.5183.5183,0,0,0-.6984.2284A13.64,13.64,0,0,1,28.6552,30.37l-.4623-.764a.1748.1748,0,0,0-.1471-.0874.1822.1822,0,0,0-.1526.0778l-1.9944,2.9084a.1787.1787,0,0,0-.0061.192l.0007,0a.176.176,0,0,0,.1724.0851l3.5192-.3888a.1776.1776,0,0,0,.14-.0974.1752.1752,0,0,0-.0083-.1709l-.5161-.853a14.6829,14.6829,0,0,0,3.7685-4.6916A.5192.5192,0,0,0,32.741,25.8826Z" transform="translate(-1 -1)"/><path d="M4.7816,17.938v.9587h.92v3.7573h1.481V17.197H5.92C5.7643,17.704,5.4836,17.8989,4.7816,17.938Z" transform="translate(-1 -1)"/><path d="M35.244,19.7464a1.1146,1.1146,0,0,0,.7253-1.0679c0-1.1536-.8735-1.5673-2.183-1.5673a3.304,3.304,0,0,0-2.1124.71l.7172.9821a2.1842,2.1842,0,0,1,1.3562-.4674c.538,0,.7562.1558.7562.4441,0,.3588-.1558.46-.6314.46h-.7014v1.177h.7872c.5532,0,.7715.14.7715.5223,0,.3741-.2649.5532-.8963.5532a2.49,2.49,0,0,1-1.5511-.569l-.78.9821a3.4268,3.4268,0,0,0,2.3.8344c1.481,0,2.3931-.5537,2.3931-1.8165A1.1471,1.1471,0,0,0,35.244,19.7464Z" transform="translate(-1 -1)"/><path d="M21.02,6.4467c1.0445-.4837,1.2942-.92,1.2942-1.6373,0-.99-.71-1.5358-2.0657-1.5358a4.1094,4.1094,0,0,0-2.3388.71l.6938,1.1151a2.8789,2.8789,0,0,1,1.6216-.5537c.4365,0,.608.1325.608.3741,0,.2182-.0858.304-.6629.5613a3.3785,3.3785,0,0,0-2.2764,3.3366h4.4593V7.5846H19.508C19.6252,7.2573,19.9292,6.9532,21.02,6.4467Z" transform="translate(-1 -1)"/><path d="M21.5569,30.9144H20.06L17.1215,34.29V35.397h3.0793v.9745h1.3562v-.9354h.7019V34.1576h-.7019ZM20.2008,33.62v.538h-.4055c-.3741,0-.7481.0076-1.0212.0233a9.1978,9.1978,0,0,0,.7172-.7953l.0782-.0934a8.66,8.66,0,0,0,.6547-.85C20.2084,32.7,20.2008,33.3,20.2008,33.62Z" transform="translate(-1 -1)"/><path d="M6.5184,14.6629c-.0662-.0029-.1421-.0045-.2175-.0045a5.3421,5.3421,0,0,0-.1365,10.681c.0543.0023.1168.0031.1794.0031a5.3413,5.3413,0,0,0,.1746-10.68Zm-.1746,9.64c-.0482,0-.0964-.0005-.1452-.0025a4.3027,4.3027,0,0,1,.1022-8.6027q.0911,0,.183.0039a4.3018,4.3018,0,0,1-.14,8.6013Z" transform="translate(-1 -1)"/><path d="M33.8363,14.6629c-.0535-.0023-.1164-.0031-.1786-.0031a5.3413,5.3413,0,0,0-.1751,10.68c.0548.0023.1177.0031.1807.0031a5.3413,5.3413,0,0,0,.173-10.68Zm2.7626,8.4794a4.2718,4.2718,0,0,1-2.9357,1.1607c-.0487,0-.0974-.0005-.1467-.0025a4.3018,4.3018,0,0,1,.1411-8.6013c.0477,0,.0959.0005.1441.0025a4.3022,4.3022,0,0,1,2.7971,7.4406Z" transform="translate(-1 -1)"/><path d="M20.1774,1.0044C20.1115,1.0016,20.0362,1,19.9614,1A5.3428,5.3428,0,0,0,16.1,9.9926a5.3041,5.3041,0,0,0,3.7236,1.6883c.0548.0023.1177.0031.1807.0031a5.3413,5.3413,0,0,0,.1728-10.68ZM22.94,9.4839a4.27,4.27,0,0,1-2.9352,1.1607c-.0487,0-.0974-.0005-.1467-.0025a4.3026,4.3026,0,0,1,.1036-8.6026q.09,0,.1817.0038A4.3018,4.3018,0,0,1,22.94,9.4839Z" transform="translate(-1 -1)"/><path d="M20.1776,28.3214c-.0657-.0029-.1416-.0045-.2171-.0045a5.3423,5.3423,0,0,0-.1371,10.6815c.0535.0023.1164.0031.1786.0031a5.3415,5.3415,0,0,0,.1756-10.68Zm-.1756,9.6407c-.0477,0-.0959-.0005-.1441-.0025a4.3022,4.3022,0,0,1-2.7971-7.4406,4.2219,4.2219,0,0,1,2.9-1.1627c.0606,0,.1216.0013.1826.0039a4.3021,4.3021,0,0,1-.1411,8.6018Z" transform="translate(-1 -1)"/></svg>',
                icon_docsandapi: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><g><g><g><path d="M37.5,19.3c0-0.1-0.1-0.2-0.2-0.3l-10.1-6.3l-8.6-9.6c-0.1-0.2-0.4-0.2-0.5,0l-2.7,2.4L13,4c-0.2-0.1-0.5-0.1-0.7,0.2L7,12.7l-3.1,2.7c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l0.6,0.7l-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0.1,0.2,0.2,0.3l11.3,7l8.5,9.5c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1l2.7-2.3l1.3,0.8c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.3-0.1,0.4-0.2l3.3-5.2l6.3-5.5c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3l-1.5-1.7l1.7-2.7C37.5,19.6,37.5,19.5,37.5,19.3z M12.9,5.1l1.6,1l-4.9,4.3L12.9,5.1z M3.7,19.8l1.5-2.4l6.6,7.4L3.7,19.8z M27.1,34.3l-0.6-0.4l1.8-1.6L27.1,34.3z M22.8,36.1L14,26.2l0,0l0,0L4.7,15.7L18.3,3.9l9,10.2l0,0l0,0l9.1,10.2L22.8,36.1z M35.1,21.6l-5.5-6.2l6.8,4.2L35.1,21.6z"/><path d="M19.6,12c-0.1-0.2-0.4-0.2-0.5,0l-6.2,5.4c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l6,6.7c0.1,0.2,0.4,0.2,0.5,0l1.5-1.3l2.6,2.9c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.2-0.1l4.5-3.9c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3L19.6,12zM23.7,25.6l-2.6-2.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.2,0.1l-1.5,1.3l-5.5-6.2l5.7-5l8.3,9.3L23.7,25.6z"/><path d="M30.9,25.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3l-2-2.3c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3L30.9,25.2z"/><path d="M29.2,21.7c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.2-0.1-0.3,0l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3C29.1,21.7,29.2,21.7,29.2,21.7z"/><path d="M18.7,11.5c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3L17,9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3L18.7,11.5z"/><path d="M12.5,16.8l-2-2.3c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3l2,2.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C12.6,17,12.6,16.9,12.5,16.8z"/><path d="M20.3,11.7c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.2-0.1-0.3,0l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3C20.1,11.6,20.2,11.7,20.3,11.7z"/><path d="M24.3,27c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.1,0.2,0,0.3l2,2.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3L24.3,27z"/><path d="M23,26.7l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C23.2,26.6,23.1,26.6,23,26.7z"/><path d="M18.3,24.9l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C18.5,24.8,18.4,24.8,18.3,24.9z"/><path d="M12.3,18.1l-1.4,1.2c-0.1,0.1-0.1,0.2,0,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l1.4-1.2c0.1-0.1,0.1-0.2,0-0.3C12.5,18.1,12.4,18.1,12.3,18.1z"/></g></g></g></svg>'
            };
            return icons[name];
        };
        return DPSearchOneBox;
    }(PFElement));
    PFElement.create(DPSearchOneBox);
    var templateObject_1;

    var __extends$a = (undefined && undefined.__extends) || (function () {
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
    var DPSearchQuery = (function (_super) {
        __extends$a(DPSearchQuery, _super);
        function DPSearchQuery() {
            var _this = _super.call(this, DPSearchQuery) || this;
            _this._filters = { term: '', facets: {} };
            _this._activeFilters = new Map();
            _this._limit = 10;
            _this._from = 0;
            _this._sort = 'relevance';
            _this._valid = true;
            _this.urlTemplate = function (strings, url, term, from, limit, sort, types, tags, sys_types) {
                return url + "?start=" + from + "&q=" + term + "&hl=true&hl.fl=description&rows=" + limit + "&" + types + "&" + tags + "&" + sys_types;
            };
            _this._changeAttr = _this._changeAttr.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchQuery.prototype, "html", {
            get: function () { return ''; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery, "tag", {
            get: function () { return 'dp-search-query'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "filters", {
            get: function () {
                return this._filters;
            },
            set: function (val) {
                if (this._filters === val)
                    return;
                this._filters = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "activeFilters", {
            get: function () {
                return this._activeFilters;
            },
            set: function (val) {
                if (this._activeFilters === val)
                    return;
                this._activeFilters = val;
                this.filters.facets = this._activeFilters;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "from", {
            get: function () {
                return this._from;
            },
            set: function (val) {
                if (this._from === val)
                    return;
                this._from = val;
                this.setAttribute('from', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "limit", {
            get: function () {
                return this._limit;
            },
            set: function (val) {
                if (this._limit === val)
                    return;
                this._limit = val;
                this.setAttribute('limit', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "sort", {
            get: function () {
                return this._sort;
            },
            set: function (val) {
                if (this._sort === val)
                    return;
                this._sort = val;
                this.setAttribute('sort', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "results", {
            get: function () {
                return this._results;
            },
            set: function (val) {
                if (this._results === val)
                    return;
                this._results = val;
                this.from = this.results && this.results.response && typeof this.results.response.docs !== 'undefined' ? this.from + this.results.response.docs.length : 0;
                var evt = {
                    detail: {
                        term: this.term,
                        filters: this.activeFilters,
                        facets: this.results.facet_counts || {},
                        sort: this.sort,
                        limit: this.limit,
                        from: this.from,
                        results: this.results.response,
                    },
                    bubbles: true,
                    composed: true
                };
                this.dispatchEvent(new CustomEvent('search-complete', evt));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "term", {
            get: function () {
                return this._term;
            },
            set: function (val) {
                if (this._term === val)
                    return;
                this._term = val;
                this.filters.term = this._term;
                this.setAttribute('term', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "url", {
            get: function () {
                return this._url;
            },
            set: function (val) {
                if (this._url === val)
                    return;
                this._url = val;
                this.setAttribute('url', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchQuery.prototype, "valid", {
            get: function () {
                return this._valid;
            },
            set: function (val) {
                if (this._valid === val)
                    return;
                this._valid = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchQuery.prototype.filterString = function (facets) {
            var len = facets.length, filterArr = [];
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < facets[i].items.length; j++) {
                    if (facets[i].items[j].active) {
                        var idx = 0;
                        while (idx < facets[i].items[j].value.length) {
                            filterArr.push(facets[i].items[j].value[idx]);
                            idx = idx + 1;
                        }
                    }
                }
            }
            return filterArr.join(', ');
        };
        DPSearchQuery.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            top.addEventListener('params-ready', this._changeAttr);
            top.addEventListener('term-change', this._changeAttr);
            top.addEventListener('filter-item-change', this._changeAttr);
            top.addEventListener('sort-change', this._changeAttr);
            top.addEventListener('clear-filters', this._changeAttr);
            top.addEventListener('load-more', this._changeAttr);
        };
        Object.defineProperty(DPSearchQuery, "observedAttributes", {
            get: function () {
                return ['term', 'sort', 'limit', 'results', 'url'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchQuery.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchQuery.prototype._setFilters = function (item) {
            var add = item.active;
            if (add) {
                if (this.activeFilters.has(item.group)) {
                    this.activeFilters.get(item.group).add(item.key);
                }
                else {
                    this.activeFilters.set(item.group, new Set([item.key]));
                }
            }
            else {
                if (this.activeFilters.has(item.group)) {
                    this.activeFilters.get(item.group).delete(item.key);
                    if (this.activeFilters.get(item.group).size === 0) {
                        this.activeFilters.delete(item.group);
                    }
                }
            }
        };
        DPSearchQuery.prototype._changeAttr = function (e) {
            switch (e.type) {
                case 'term-change':
                    if (e.detail && e.detail.term && e.detail.term.length > 0) {
                        this.term = e.detail.term;
                    }
                    else {
                        this.term = '';
                    }
                    this.from = 0;
                    this.search();
                    break;
                case 'filter-item-change':
                    if (e.detail && e.detail.facet) {
                        this._setFilters(e.detail.facet);
                    }
                    this.from = 0;
                    this.search();
                    break;
                case 'sort-change':
                    if (e.detail && e.detail.sort) {
                        this.sort = e.detail.sort;
                    }
                    this.from = 0;
                    this.search();
                    break;
                case 'load-more':
                    this.search();
                    break;
                case 'clear-filters':
                    this.activeFilters.clear();
                    this.search();
                    break;
                case 'params-ready':
                    if (e.detail && e.detail.term) {
                        this.term = e.detail.term;
                    }
                    if (e.detail && e.detail.sort) {
                        this.sort = e.detail.sort;
                    }
                    if (e.detail && e.detail.filters) {
                        this.activeFilters = e.detail.filters;
                    }
                    this.from = 0;
                    if (this.activeFilters.size > 0 || e.detail.term !== null || e.detail.sort !== null || e.detail.qty !== null) {
                        this.search();
                    }
                    break;
            }
        };
        DPSearchQuery.prototype.search = function () {
            var _this = this;
            var evt = { bubbles: true, composed: true };
            this.dispatchEvent(new CustomEvent('search-start', evt));
            if (this.url && ((this.activeFilters && this.activeFilters.size > 0) || (this.term !== null && this.term !== '' && typeof this.term !== 'undefined'))) {
                var qURL_1 = new URL(this.url);
                qURL_1.searchParams.set('start', this.from.toString());
                qURL_1.searchParams.set('q', this.term || '');
                qURL_1.searchParams.set('hl', 'true');
                qURL_1.searchParams.set('hl.fl', 'description');
                qURL_1.searchParams.set('rows', this.limit.toString());
                this.activeFilters.forEach(function (filters, group) {
                    qURL_1.searchParams.set(group, Array.from(filters).join(','));
                });
                fetch(qURL_1.toString())
                    .then(function (resp) { return resp.json(); })
                    .then(function (data) {
                    _this.results = data;
                });
            }
            else {
                var evt_1 = { detail: { invalid: true }, bubbles: true, composed: true };
                this.dispatchEvent(new CustomEvent('search-complete', evt_1));
            }
        };
        return DPSearchQuery;
    }(PFElement));
    PFElement.create(DPSearchQuery);

    var __extends$b = (undefined && undefined.__extends) || (function () {
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
    var DPSearchResultCount = (function (_super) {
        __extends$b(DPSearchResultCount, _super);
        function DPSearchResultCount() {
            var _this = _super.call(this, DPSearchResultCount, { delayRender: true }) || this;
            _this._count = 0;
            _this._term = '';
            _this._loading = true;
            _this._setText = _this._setText.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchResultCount.prototype, "html", {
            get: function () {
                return "\n        " + (this.term || this.count ? "\n        <style>\n        :host {\n            grid-column: 5 / span 9;\n            font-weight: 600;\n            font-size: 1.2em;\n            display: block;\n            margin-bottom: 1em;\n        }\n\n        @media only screen and (max-width: 768px) {\n            :host { border-bottom: 1px solid #d5d5d5; }\n        }\n        </style>\n        <span>" + this.count + " results found " + (this.term ? 'for' : '') + " " + this.term.replace('<', '&lt;').replace('>', '&gt;') + "</span>" : '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResultCount, "tag", {
            get: function () { return 'dp-search-result-count'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResultCount.prototype, "count", {
            get: function () {
                return this._count;
            },
            set: function (val) {
                if (this._count === val)
                    return;
                this._count = val;
                this.setAttribute('count', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResultCount.prototype, "term", {
            get: function () {
                return this._term;
            },
            set: function (val) {
                val = decodeURI(val).replace('<', '&lt;').replace('>', '&gt;');
                if (this._term === val)
                    return;
                this._term = val;
                this.setAttribute('term', val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResultCount.prototype, "loading", {
            get: function () {
                return this._loading;
            },
            set: function (val) {
                if (this._loading === val)
                    return;
                this._loading = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchResultCount.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            top.addEventListener('params-ready', this._setText);
            top.addEventListener('search-start', function (e) { _this.loading = true; _this._setText(e); });
            top.addEventListener('search-complete', function (e) { _this.loading = false; _this._setText(e); });
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPSearchResultCount, "observedAttributes", {
            get: function () {
                return ['count', 'term'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchResultCount.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
            _super.prototype.render.call(this);
        };
        DPSearchResultCount.prototype._setText = function (e) {
            if (e.detail) {
                if (typeof e.detail.invalid === 'undefined') {
                    if (e.detail.term && e.detail.term.length > 0) {
                        this.term = e.detail.term;
                    }
                    else {
                        this.term = '';
                    }
                    if (e.detail.results && e.detail.results.numFound && e.detail.results.numFound) {
                        this.count = e.detail.results.numFound;
                    }
                    else {
                        this.count = 0;
                    }
                    if (!this.loading) {
                        _super.prototype.render.call(this);
                    }
                }
                else {
                    this.term = '';
                    this.count = 0;
                    this.shadowRoot.innerHTML = '';
                }
            }
            else {
                this.term = '';
                this.count = 0;
                this.shadowRoot.innerHTML = '';
            }
        };
        return DPSearchResultCount;
    }(PFElement));
    PFElement.create(DPSearchResultCount);

    var __extends$c = (undefined && undefined.__extends) || (function () {
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
    var DPSearchResult = (function (_super) {
        __extends$c(DPSearchResult, _super);
        function DPSearchResult() {
            return _super.call(this, DPSearchResult, { delayRender: true }) || this;
        }
        Object.defineProperty(DPSearchResult.prototype, "html", {
            get: function () {
                return "\n        <style>\n:host {\n    font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid #d5d5d5;\n    display: flex;\n    flex-direction: row;\n}\n    .subscription-required {\n        &:before {\n            content: '';\n            background: url('https://static.jboss.org/rhd/images/icons/subscription-required.svg') no-repeat;\n            background-size:cover;\n            position:absolute;\n            margin-top: 5px;\n            width: .9em;\n            height: .9em;\n        }\n        .caps {\n            margin-left: 20px;\n        }\n\n    }\n\n    div:first-child { flex: 1 1 auto; }\n\n    h4 {\n        font-weight: 600;\n        font-style: normal;\n        font-size: 20px;\n        line-height: 1.4;\n        margin: 0;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n    }\n\n    h4 a {\n        color: #06c;\n        cursor: pointer;\n        text-decoration: none;\n    }\n\n    p { margin: 0; \n        color: #424242;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        }\n    .result-info span{\n        font-size: .9rem;\n        color: $grey-6;\n    }\n\n    .caps {\n        text-transform: uppercase;\n        font-size: 16px;\n        font-weight: normal;\n        line-height: 24px;\n        -webkit-font-smoothing: antialiased;\n    }\n    .result-description {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: 45px;\n        margin-bottom: 25px;\n    }\n    div {\n        flex: 1 1 auto;\n    }\n    div.thumb { \n        flex: 0 0 130px; \n        margin-left: 1em;\n    }\n\n    .thumb img {\n        height: auto;\n        max-width: 100%;\n    }\n\n    .hlt { font-weight: 600; }\n        </style>\n<div>\n    <h4>" + (this.url ? "<a href=\"" + this.url + "\">" + this.title + "</a>" : this.title) + "</h4>\n    <p " + (this.premium ? 'class="result-info subscription-required" data-tooltip="" title="Subscription Required" data-options="disable-for-touch:true"' : 'class="result-info"') + ">\n        <span class=\"caps\">" + this.kind + "</span>\n        " + (this.created ? "- <pfe-datetime datetime=\"" + this.created + "\" type=\"local\" day=\"numeric\" month=\"long\" year=\"numeric\">" + this.created + "</pfe-datetime>" : '') + "\n    </p>\n    <p class=\"result-description\">" + this.description + "</p>\n</div>\n" + (this.thumbnail ? "<div class=\"thumb\"><img src=\"" + this.thumbnail.replace('http:', 'https:') + "\"></div>" : '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult, "tag", {
            get: function () { return 'dp-search-result'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "url", {
            get: function () {
                var stage = window.location.href.indexOf('stage') >= 0 || window.location.href.indexOf('developers') < 0 ? '.stage' : '';
                return !this.premium ? this._url : "https://broker" + stage + ".redhat.com/partner/drc/userMapping?redirect=" + encodeURIComponent(this._url);
            },
            set: function (val) {
                if (this._url === val)
                    return;
                this._url = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (val) {
                if (this._title === val)
                    return;
                this._title = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "kind", {
            get: function () {
                return this._kind;
            },
            set: function (val) {
                if (this._kind === val)
                    return;
                this._kind = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "created", {
            get: function () {
                return this._created;
            },
            set: function (val) {
                if (this._created === val)
                    return;
                this._created = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "description", {
            get: function () {
                return this._description;
            },
            set: function (val) {
                if (this._description === val)
                    return;
                this._description = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "premium", {
            get: function () {
                return this._premium;
            },
            set: function (val) {
                if (this._premium === val)
                    return;
                this._premium = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "thumbnail", {
            get: function () {
                return this._thumbnail;
            },
            set: function (val) {
                if (this._thumbnail === val)
                    return;
                this._thumbnail = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResult.prototype, "result", {
            get: function () {
                return this._result;
            },
            set: function (val) {
                if (this._result === val)
                    return;
                this._result = val;
                this.title = this._result.title[0] ? this._result.title[0] : 'Default Title';
                this.description = (this._result.description && this._result.description[0]) ? this._result.description[0] : 'Default Description';
                this.url = this._result.id;
                this.kind = this._result.type[0] ? this._result.type[0] : 'webpage';
                this.renderResult();
            },
            enumerable: true,
            configurable: true
        });
        DPSearchResult.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPSearchResult, "observedAttributes", {
            get: function () {
                return ['result'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchResult.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchResult.prototype.renderResult = function () {
            _super.prototype.render.call(this);
        };
        DPSearchResult.prototype.computeThumbnail = function (result) {
            if (result.fields.thumbnail) {
                this.thumbnail = result.fields.thumbnail[0];
            }
        };
        DPSearchResult.prototype.computeTitle = function (result) {
            var title = '';
            if (result.highlight && result.highlight.sys_title) {
                title = result.highlight.sys_title[0];
            }
            else {
                title = result.fields.sys_title[0];
            }
            this.title = title;
        };
        DPSearchResult.prototype.computeKind = function (result) {
            var kind = result.fields.sys_type || "webpage", map = {
                jbossdeveloper_archetype: 'Archetype',
                article: 'Article',
                blogpost: 'Blog Post',
                jbossdeveloper_bom: 'Bom',
                book: 'Book',
                cheatsheet: 'Cheat Sheet',
                demo: 'Demo',
                event: 'Event',
                forumthread: 'Forum Thread',
                jbossdeveloper_example: 'Demo',
                quickstart: 'Quickstart',
                quickstart_early_access: 'Demo',
                solution: 'Article',
                stackoverflow_thread: 'Stack Overflow',
                video: 'Video',
                webpage: 'Web Page',
                website: 'Web Page'
            };
            this.kind = map[kind] || 'Web Page';
        };
        DPSearchResult.prototype.computeCreated = function (result) {
            this.created = result.fields.sys_created && result.fields.sys_created.length > 0 ? result.fields.sys_created[0] : '';
        };
        DPSearchResult.prototype.computeDescription = function (result) {
            var description = '';
            if (result.highlight && result.highlight.sys_description) {
                description = result.highlight.sys_description[0];
            }
            else if (result.highlight && result.highlight.sys_content_plaintext) {
                description = result.highlight.sys_content_plaintext[0];
            }
            else if (result.fields && result.fields.sys_description) {
                description = result.fields.sys_description[0];
            }
            else {
                description = result.fields.sys_content_plaintext ? result.fields.sys_content_plaintext[0] : '';
            }
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = description;
            description = tempDiv.innerText;
            this.description = description;
        };
        DPSearchResult.prototype.computeURL = function (result) {
            if (result.fields && result.fields.sys_type === 'book' && result.fields.field_book_url) {
                this.url = result.fields.field_book_url;
            }
            else {
                this.url = (result.fields && result.fields.sys_url_view) ? result.fields.sys_url_view : '';
            }
        };
        DPSearchResult.prototype.computePremium = function (result) {
            var premium = false;
            if (result._type === "rht_knowledgebase_article" || result._type === "rht_knowledgebase_solution") {
                premium = true;
            }
            this.premium = premium;
        };
        return DPSearchResult;
    }(PFElement));
    PFElement.create(DPSearchResult);

    var __extends$d = (undefined && undefined.__extends) || (function () {
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
    var DPSearchResults = (function (_super) {
        __extends$d(DPSearchResults, _super);
        function DPSearchResults() {
            var _this = _super.call(this, DPSearchResults, { delayRender: true }) || this;
            _this._more = false;
            _this._last = 0;
            _this._valid = true;
            _this._renderResults = _this._renderResults.bind(_this);
            _this._setLoading = _this._setLoading.bind(_this);
            _this._checkValid = _this._checkValid.bind(_this);
            _this._clearResults = _this._clearResults.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchResults.prototype, "html", {
            get: function () {
                return "\n        <style>\n            :host {\n                display: flex;\n                flex-direction: column;\n            }\n\n            [data-hide] {\n                display: none;\n            }\n\n            h4 { \n                font-size: 27px;\n                font-weight: 600;\n                color: #242424;\n                line-height: 1.5;\n                margin-bottom: 16px;\n                margin-top: 16px;\n            }\n\n            p {\n                font-size: 16px;\n                line-height: 1.5;\n                text-align: center;\n            }\n\n            div.moreBtn {\n                text-align: center;\n            }\n\n            a.moreBtn {\n                background-color: #fff;\n                border: 1px solid #06c;\n                color: #06c;\n                display: block;\n                font-weight: 600;\n                line-height: 1.44;\n                margin: 0 auto;\n                max-width: 165px;\n                padding: 8px 35px;\n                text-transform: uppercase;\n                cursor: pointer;\n                text-decoration: none;\n            }\n            a.moreBtn:hover {\n                background-color: #06c;\n                color: #fff;\n            }\n\n            .loading {\n                background: url(https://developers.redhat.com/images/icons/ajax-loader.gif) center 80px no-repeat;\n                min-height: 250px;\n            }\n        </style>\n        <slot></slot>\n        <div class=\"loading\" data-hide></div>\n        <div class=\"moreBtn\" data-hide><a class=\"moreBtn\" href=\"#\">Load More</a></div>\n        <p class=\"end-of-results\" data-hide>- End of Results -</p>\n        <div class=\"invalidMsg\" data-hide>\n        <h4>Well, this is awkward. No search term was entered yet, so this page is a little empty right now.</h4>\n        <p>After you enter a search term in the box above, you will see the results displayed here. \n        You can also use the filters to select a content type, product or topic to see some results too. \n        Try it out!</p>\n        </div>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResults, "tag", {
            get: function () { return 'dp-search-results'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResults.prototype, "results", {
            get: function () {
                return this._results;
            },
            set: function (val) {
                if (this._results === val)
                    return;
                this._results = val;
                this._renderResults(false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResults.prototype, "more", {
            get: function () {
                return this._more;
            },
            set: function (val) {
                if (this._more === val)
                    return;
                this._more = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResults.prototype, "last", {
            get: function () {
                return this._last;
            },
            set: function (val) {
                if (this._last === val)
                    return;
                this._last = val ? val : 0;
                this.setAttribute('last', val.toString());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchResults.prototype, "valid", {
            get: function () {
                return this._valid;
            },
            set: function (val) {
                if (this._valid === val)
                    return;
                this._valid = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchResults.prototype.connectedCallback = function () {
            var _this = this;
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            this.shadowRoot.querySelector('div.moreBtn').addEventListener('click', function (e) {
                e.preventDefault();
                _this.more = true;
                var evt = {
                    detail: {
                        from: _this.last
                    },
                    bubbles: true,
                    composed: true
                };
                _this.dispatchEvent(new CustomEvent('load-more', evt));
            });
            top.addEventListener('search-complete', this._renderResults);
            top.addEventListener('search-start', this._setLoading);
            top.addEventListener('params-ready', this._checkValid);
            top.window.addEventListener('popstate', this._clearResults);
        };
        DPSearchResults.prototype.addResult = function (result) {
            var item = new DPSearchResult();
            item.result = result;
            this.appendChild(item);
        };
        DPSearchResults.prototype._setLoading = function (e) {
            this.shadowRoot.querySelector('div.moreBtn').setAttribute('data-hide', '');
            this.shadowRoot.querySelector('.invalidMsg').setAttribute('data-hide', '');
            if (!this.more) {
                this.last = 0;
                while (this.firstChild) {
                    this.removeChild(this.firstChild);
                }
            }
            else {
                this.more = false;
            }
            this.shadowRoot.querySelector('.loading').removeAttribute('data-hide');
        };
        DPSearchResults.prototype._renderResults = function (e) {
            if (this.shadowRoot.querySelector('.loading')) {
                this.shadowRoot.querySelector('.loading').setAttribute('data-hide', '');
            }
            if (e.detail && typeof e.detail.results !== 'undefined' && typeof e.detail.invalid === 'undefined') {
                this.addResults(e.detail.results);
            }
            else {
                while (this.firstChild) {
                    this.removeChild(this.firstChild);
                }
                this.shadowRoot.querySelector('.end-of-results').setAttribute('data-hide', '');
                this.shadowRoot.querySelector('div.moreBtn').setAttribute('data-hide', '');
                this.shadowRoot.querySelector('.invalidMsg').removeAttribute('data-hide');
            }
            var evt = {
                detail: { results: this.results },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('results-loaded', evt));
        };
        DPSearchResults.prototype._clearResults = function (e) {
            this.results = undefined;
        };
        DPSearchResults.prototype._checkValid = function (e) {
            var obj = e.detail;
            this.valid = Object.keys(obj.filters).length > 0 || (obj.term !== null && obj.term !== '' && typeof obj.term !== 'undefined');
            if (!this.valid) {
                this.shadowRoot.querySelector('.invalidMsg').removeAttribute('data-hide');
            }
            else {
                if (this.shadowRoot.querySelector('.invalidMsg')) {
                    this.shadowRoot.querySelector('.invalidMsg').setAttribute('data-hide', '');
                }
            }
        };
        DPSearchResults.prototype.addResults = function (results) {
            if (results && results.docs) {
                var hits = results.docs;
                var l = hits.length;
                for (var i = 0; i < l; i++) {
                    this.addResult(hits[i]);
                }
                this.last = this.last + l;
                if (this.last >= results.numFound) {
                    this.shadowRoot.querySelector('.end-of-results').removeAttribute('data-hide');
                }
                if (l > 0 && this.last < results.numFound) {
                    this.shadowRoot.querySelector('.invalidMsg').setAttribute('data-hide', '');
                    this.shadowRoot.querySelector('.end-of-results').setAttribute('data-hide', '');
                    this.shadowRoot.querySelector('div.moreBtn').removeAttribute('data-hide');
                }
                else {
                    this.shadowRoot.querySelector('div.moreBtn').setAttribute('data-hide', '');
                    this.shadowRoot.querySelector('.end-of-results').removeAttribute('data-hide');
                }
            }
        };
        return DPSearchResults;
    }(PFElement));
    PFElement.create(DPSearchResults);

    var __extends$e = (undefined && undefined.__extends) || (function () {
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
    var DPSearchSortPage = (function (_super) {
        __extends$e(DPSearchSortPage, _super);
        function DPSearchSortPage() {
            var _this = _super.call(this, DPSearchSortPage, { delayRender: true }) || this;
            _this._sortChange = _this._sortChange.bind(_this);
            return _this;
        }
        Object.defineProperty(DPSearchSortPage.prototype, "html", {
            get: function () {
                return "\n        <style>\n        :host {\n            display: block;\n            border-bottom: 1px solid #ccc;\n            margin: 0 0 1em 0;\n            padding-bottom: 1em;\n        }\n\n        select { \n            width: auto;\n            -webkit-appearance: none!important;\n            -webkit-border-radius: 0;\n            background-color: #fafafa;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjEyIiB3aWR0aD0iMjQiIGhlaWdodD0iMyIgdmlld0JveD0iMCAwIDYgMyI+PHBhdGggZD0iTTUuOTkyIDBsLTMgMy0zLTN6Ii8+PC9zdmc+);\n            background-position: 100%;\n            background-repeat: no-repeat;\n            border: 1px solid #ccc;\n            border-radius: 0;\n            color: rgba(0,0,0,.75);\n            font-family: Overpass,Open Sans,Arial,Helvetica,sans-serif;\n            font-size: .875rem;\n            height: 2.3125rem;\n            line-height: normal;\n            padding: .5rem 20px .5rem .5rem;\n        }\n        \n        select:focus, select:active {\n            outline:0;\n            border:0;\n            outline: 1px solid white;\n            outline-offset: -2px;\n        }\n    \n        \n        .tight {\n            display: none;\n        }\n\n        .tight .button {\n            background: #ccc;\n            text-decoration: none;\n            border: 0;\n            font-weight: 600;\n            font-size: 16px;\n            padding: 9px 25px;\n            transition: background .2s ease-in 0s;\n            line-height: 1.2em;\n            cursor: pointer;\n            position: relative;\n            text-align: center;\n            color: #333; \n            width: 100%;\n            display: block;\n            width: 150px;\n            margin-right: 2em;\n        }\n    \n        @media only screen and (max-width: 768px) {\n            :host {\n                display:none;\n                align-self: flex-end; \n                border-bottom: none;\n            }\n            span { display: none; }\n            select { \n                width: 150px; \n                text-align: center;\n                text-align-last: center;\n                font-weight: 600;\n                height: auto;\n                border: 1px solid #06c;\n                line-height: 1.44;\n                background-color: transparent;\n                padding: 8px 0;\n                color: #06c;\n                font-size: 16px;\n                position: relative;\n            }\n    \n            select:hover, select:focus {\n                background-color: #06c;\n                color: #fff;\n            }\n        \n            .roomy {\n                display: none;\n            }\n            .tight { \n                display: block; \n            }\n            .clear {\n                padding: 0;\n                margin: 0; \n                border: 1px solid white;\n                width: auto;\n                font-weight: bold;\n            }\n        }\n        \n        @media only screen and (max-width: 365px) {\n            :host {\n                position: relative;\n                left: 0; top: 0;\n                margin-left: 0px;\n            }\n        }\n        </style>\n    <span>Sort results by</span>\n    <select>\n        <option value=\"relevance\">Relevance</option>\n        <option value=\"most-recent\">Most Recent</option>\n    </select>";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchSortPage, "tag", {
            get: function () { return 'dp-search-sort-page'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPSearchSortPage.prototype, "sort", {
            get: function () {
                return this._sort;
            },
            set: function (val) {
                if (this._sort === val)
                    return;
                this._sort = val;
                this.setAttribute('sort', this._sort);
                this.shadowRoot.querySelector('select').value = val;
            },
            enumerable: true,
            configurable: true
        });
        DPSearchSortPage.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
            top.addEventListener('params-ready', this._sortChange);
            top.addEventListener('sort-change', this._sortChange);
            this.shadowRoot.querySelector('select').onchange = this._sortChange;
        };
        Object.defineProperty(DPSearchSortPage, "observedAttributes", {
            get: function () {
                return ['sort'];
            },
            enumerable: true,
            configurable: true
        });
        DPSearchSortPage.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            this[name] = newVal;
        };
        DPSearchSortPage.prototype._sortChange = function (e) {
            if (e.detail && e.detail.sort) {
                this.sort = e.detail.sort;
            }
            else {
                if (e.target['options'] && typeof e.target['selectedIndex'] !== 'undefined') {
                    this.sort = e.target['options'][e.target['selectedIndex']].value;
                    var evt = {
                        detail: {
                            sort: this.sort
                        },
                        bubbles: true,
                        composed: true
                    };
                    this.dispatchEvent(new CustomEvent('sort-change', evt));
                }
            }
        };
        return DPSearchSortPage;
    }(PFElement));
    PFElement.create(DPSearchSortPage);

    new DPSearchActiveFilters();
    new DPSearchApp();
    new DPSearchBox();
    new DPSearchFilterActiveItem();
    new DPSearchFilterGroup();
    new DPSearchFilterItem();
    new DPSearchFilters();
    new DPSearchModalFilters();
    new DPSearchOneBox();
    new DPSearchQuery();
    new DPSearchResultCount();
    new DPSearchResult();
    new DPSearchResults();
    new DPSearchSortPage();
    new DPSearchURL();

}));
