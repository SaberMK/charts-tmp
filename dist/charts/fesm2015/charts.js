import { ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵelement, ɵsetClassMetadata, Component, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import * as ApexCharts from 'apexcharts';

const _c0 = ["chart"];
class ChartComponent {
    constructor() {
        this.autoUpdateSeries = true;
    }
    ngOnInit() {
        asapScheduler.schedule(() => {
            this.createElement();
        });
    }
    ngOnChanges(changes) {
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
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
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
        return this.chartObj.render();
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    updateSeries(newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    }
    appendSeries(newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    }
    appendData(newData) {
        this.chartObj.appendData(newData);
    }
    toggleSeries(seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    }
    showSeries(seriesName) {
        this.chartObj.showSeries(seriesName);
    }
    hideSeries(seriesName) {
        this.chartObj.hideSeries(seriesName);
    }
    resetSeries() {
        this.chartObj.resetSeries();
    }
    zoomX(min, max) {
        this.chartObj.zoomX(min, max);
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    destroy() {
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        this.chartObj.setLocale(localeName);
    }
    paper() {
        this.chartObj.paper();
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    addPointAnnotation(options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    removeAnnotation(id, options) {
        this.chartObj.removeAnnotation(id, options);
    }
    clearAnnotations(options) {
        this.chartObj.clearAnnotations(options);
    }
    dataURI() {
        return this.chartObj.dataURI();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
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
    }], null, { chart: [{
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
