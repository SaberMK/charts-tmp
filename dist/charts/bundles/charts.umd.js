(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('apexcharts')) :
    typeof define === 'function' && define.amd ? define('charts', ['exports', '@angular/core', 'rxjs', 'apexcharts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.charts = {}, global.ng.core, global.rxjs, global.ApexCharts));
}(this, (function (exports, i0, rxjs, ApexCharts) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) { return e; } else {
            var n = Object.create(null);
            if (e) {
                Object.keys(e).forEach(function (k) {
                    if (k !== 'default') {
                        var d = Object.getOwnPropertyDescriptor(e, k);
                        Object.defineProperty(n, k, d.get ? d : {
                            enumerable: true,
                            get: function () {
                                return e[k];
                            }
                        });
                    }
                });
            }
            n['default'] = e;
            return Object.freeze(n);
        }
    }

    var ApexCharts__namespace = /*#__PURE__*/_interopNamespace(ApexCharts);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["chart"];
    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
            this.autoUpdateSeries = true;
        }
        ChartComponent.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.asapScheduler.schedule(function () {
                _this.createElement();
            });
        };
        ChartComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            rxjs.asapScheduler.schedule(function () {
                if (_this.autoUpdateSeries &&
                    Object.keys(changes).filter(function (c) { return c !== "series"; }).length === 0) {
                    _this.updateSeries(_this.series, true);
                    return;
                }
                _this.createElement();
            });
        };
        ChartComponent.prototype.ngOnDestroy = function () {
            if (this.chartObj) {
                this.chartObj.destroy();
            }
        };
        ChartComponent.prototype.createElement = function () {
            var options = {};
            if (this.annotations) {
                options.annotations = this.annotations;
            }
            if (this.chart) {
                options.chart = this.chart;
            }
            if (this.colors) {
                options.colors = this.colors;
            }
            if (this.dataLabels) {
                options.dataLabels = this.dataLabels;
            }
            if (this.series) {
                options.series = this.series;
            }
            if (this.stroke) {
                options.stroke = this.stroke;
            }
            if (this.labels) {
                options.labels = this.labels;
            }
            if (this.legend) {
                options.legend = this.legend;
            }
            if (this.fill) {
                options.fill = this.fill;
            }
            if (this.tooltip) {
                options.tooltip = this.tooltip;
            }
            if (this.plotOptions) {
                options.plotOptions = this.plotOptions;
            }
            if (this.responsive) {
                options.responsive = this.responsive;
            }
            if (this.markers) {
                options.markers = this.markers;
            }
            if (this.noData) {
                options.noData = this.noData;
            }
            if (this.xaxis) {
                options.xaxis = this.xaxis;
            }
            if (this.yaxis) {
                options.yaxis = this.yaxis;
            }
            if (this.grid) {
                options.grid = this.grid;
            }
            if (this.states) {
                options.states = this.states;
            }
            if (this.title) {
                options.title = this.title;
            }
            if (this.subtitle) {
                options.subtitle = this.subtitle;
            }
            if (this.theme) {
                options.theme = this.theme;
            }
            if (this.chartObj) {
                this.chartObj.destroy();
            }
            this.chartObj = new ApexCharts__namespace(this.chartElement.nativeElement, options);
            this.render();
        };
        ChartComponent.prototype.render = function () {
            return this.chartObj.render();
        };
        ChartComponent.prototype.updateOptions = function (options, redrawPaths, animate, updateSyncedCharts) {
            return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
        };
        ChartComponent.prototype.updateSeries = function (newSeries, animate) {
            this.chartObj.updateSeries(newSeries, animate);
        };
        ChartComponent.prototype.appendSeries = function (newSeries, animate) {
            this.chartObj.appendSeries(newSeries, animate);
        };
        ChartComponent.prototype.appendData = function (newData) {
            this.chartObj.appendData(newData);
        };
        ChartComponent.prototype.toggleSeries = function (seriesName) {
            return this.chartObj.toggleSeries(seriesName);
        };
        ChartComponent.prototype.showSeries = function (seriesName) {
            this.chartObj.showSeries(seriesName);
        };
        ChartComponent.prototype.hideSeries = function (seriesName) {
            this.chartObj.hideSeries(seriesName);
        };
        ChartComponent.prototype.resetSeries = function () {
            this.chartObj.resetSeries();
        };
        ChartComponent.prototype.zoomX = function (min, max) {
            this.chartObj.zoomX(min, max);
        };
        ChartComponent.prototype.toggleDataPointSelection = function (seriesIndex, dataPointIndex) {
            this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
        };
        ChartComponent.prototype.destroy = function () {
            this.chartObj.destroy();
        };
        ChartComponent.prototype.setLocale = function (localeName) {
            this.chartObj.setLocale(localeName);
        };
        ChartComponent.prototype.paper = function () {
            this.chartObj.paper();
        };
        ChartComponent.prototype.addXaxisAnnotation = function (options, pushToMemory, context) {
            this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
        };
        ChartComponent.prototype.addYaxisAnnotation = function (options, pushToMemory, context) {
            this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
        };
        ChartComponent.prototype.addPointAnnotation = function (options, pushToMemory, context) {
            this.chartObj.addPointAnnotation(options, pushToMemory, context);
        };
        ChartComponent.prototype.removeAnnotation = function (id, options) {
            this.chartObj.removeAnnotation(id, options);
        };
        ChartComponent.prototype.clearAnnotations = function (options) {
            this.chartObj.clearAnnotations(options);
        };
        ChartComponent.prototype.dataURI = function () {
            return this.chartObj.dataURI();
        };
        return ChartComponent;
    }());
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["apx-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartElement = _t.first);
            }
        }, inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", autoUpdateSeries: "autoUpdateSeries" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["chart", ""]], template: function ChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", null, 0);
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: "apx-chart",
                        templateUrl: "./chart.component.html",
                        styleUrls: ["./chart.component.css"],
                    }]
            }], null, { chart: [{
                    type: i0.Input
                }], annotations: [{
                    type: i0.Input
                }], colors: [{
                    type: i0.Input
                }], dataLabels: [{
                    type: i0.Input
                }], series: [{
                    type: i0.Input
                }], stroke: [{
                    type: i0.Input
                }], labels: [{
                    type: i0.Input
                }], legend: [{
                    type: i0.Input
                }], markers: [{
                    type: i0.Input
                }], noData: [{
                    type: i0.Input
                }], fill: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], plotOptions: [{
                    type: i0.Input
                }], responsive: [{
                    type: i0.Input
                }], xaxis: [{
                    type: i0.Input
                }], yaxis: [{
                    type: i0.Input
                }], grid: [{
                    type: i0.Input
                }], states: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], subtitle: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], autoUpdateSeries: [{
                    type: i0.Input
                }], chartElement: [{
                    type: i0.ViewChild,
                    args: ["chart", { static: true }]
                }] });
    })();

    if (window) {
        window.ApexCharts = ApexCharts__namespace;
    }
    var declerations = [ChartComponent];
    var NgApexchartsModule = /** @class */ (function () {
        function NgApexchartsModule() {
        }
        return NgApexchartsModule;
    }());
    NgApexchartsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgApexchartsModule });
    NgApexchartsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgApexchartsModule_Factory(t) { return new (t || NgApexchartsModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgApexchartsModule, { declarations: [ChartComponent], exports: [ChartComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgApexchartsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: __spread(declerations),
                        imports: [],
                        exports: __spread(declerations),
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ng-apexcharts
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChartComponent = ChartComponent;
    exports.NgApexchartsModule = NgApexchartsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=charts.umd.js.map
