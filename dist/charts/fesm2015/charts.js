import { ɵɵdirectiveInject, PLATFORM_ID, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵelement, ɵsetClassMetadata, Component, Inject, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import * as ApexCharts from 'apexcharts';
import { isPlatformBrowser } from '@angular/common';

const _c0 = ["chart"];
class ChartComponent {
    constructor(platformId) {
        this.autoUpdateSeries = true;
        this.isBrowser = true;
        if (isPlatformBrowser(platformId)) {
            this.isBrowser = true;
        }
        if (!this.isBrowser) {
            return;
        }
    }
    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }
        asapScheduler.schedule(() => {
            this.createElement();
        });
    }
    ngOnChanges(changes) {
        if (!this.isBrowser) {
            return;
        }
        asapScheduler.schedule(() => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((c) => c !== "series").length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        });
    }
    ngOnDestroy() {
        if (!this.isBrowser) {
            return;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
        if (!this.isBrowser) {
            return;
        }
        const options = {};
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
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        this.render();
    }
    render() {
        if (!this.isBrowser) {
            return;
        }
        return this.chartObj.render();
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        if (!this.isBrowser) {
            return;
        }
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    updateSeries(newSeries, animate) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.updateSeries(newSeries, animate);
    }
    appendSeries(newSeries, animate) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.appendSeries(newSeries, animate);
    }
    appendData(newData) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.appendData(newData);
    }
    toggleSeries(seriesName) {
        if (!this.isBrowser) {
            return;
        }
        return this.chartObj.toggleSeries(seriesName);
    }
    showSeries(seriesName) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.showSeries(seriesName);
    }
    hideSeries(seriesName) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.hideSeries(seriesName);
    }
    resetSeries() {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.resetSeries();
    }
    zoomX(min, max) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.zoomX(min, max);
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    destroy() {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.setLocale(localeName);
    }
    paper() {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.paper();
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    addPointAnnotation(options, pushToMemory, context) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    removeAnnotation(id, options) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.removeAnnotation(id, options);
    }
    clearAnnotations(options) {
        if (!this.isBrowser) {
            return;
        }
        this.chartObj.clearAnnotations(options);
    }
    dataURI() {
        if (!this.isBrowser) {
            return;
        }
        return this.chartObj.dataURI();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(PLATFORM_ID)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["apx-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chartElement = _t.first);
    } }, inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", autoUpdateSeries: "autoUpdateSeries" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["chart", ""]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: "apx-chart",
                templateUrl: "./chart.component.html",
                styleUrls: ["./chart.component.css"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { chart: [{
            type: Input
        }], annotations: [{
            type: Input
        }], colors: [{
            type: Input
        }], dataLabels: [{
            type: Input
        }], series: [{
            type: Input
        }], stroke: [{
            type: Input
        }], labels: [{
            type: Input
        }], legend: [{
            type: Input
        }], markers: [{
            type: Input
        }], noData: [{
            type: Input
        }], fill: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], plotOptions: [{
            type: Input
        }], responsive: [{
            type: Input
        }], xaxis: [{
            type: Input
        }], yaxis: [{
            type: Input
        }], grid: [{
            type: Input
        }], states: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], theme: [{
            type: Input
        }], autoUpdateSeries: [{
            type: Input
        }], chartElement: [{
            type: ViewChild,
            args: ["chart", { static: true }]
        }] }); })();

if (window) {
    window.ApexCharts = ApexCharts;
}
const declerations = [ChartComponent];
class NgApexchartsModule {
}
NgApexchartsModule.ɵmod = ɵɵdefineNgModule({ type: NgApexchartsModule });
NgApexchartsModule.ɵinj = ɵɵdefineInjector({ factory: function NgApexchartsModule_Factory(t) { return new (t || NgApexchartsModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgApexchartsModule, { declarations: [ChartComponent], exports: [ChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgApexchartsModule, [{
        type: NgModule,
        args: [{
                declarations: [...declerations],
                imports: [],
                exports: [...declerations],
            }]
    }], null, null); })();

// export declare class ApexCharts {

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, NgApexchartsModule };
//# sourceMappingURL=charts.js.map
