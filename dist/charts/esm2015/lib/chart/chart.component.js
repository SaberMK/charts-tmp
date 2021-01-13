import { Component, Input, ViewChild, Inject, PLATFORM_ID, } from "@angular/core";
import { asapScheduler } from "rxjs";
import * as ApexCharts from "apexcharts";
import { isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
const _c0 = ["chart"];
export class ChartComponent {
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
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["apx-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartElement = _t.first);
    } }, inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", autoUpdateSeries: "autoUpdateSeries" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["chart", ""]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChartComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmsvYXNkZi9teS13b3Jrc3BhY2UvcHJvamVjdHMvY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiLCJsaWIvY2hhcnQvY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS0wsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFzQnZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU9wRCxNQUFNLE9BQU8sY0FBYztJQThCekIsWUFBaUMsVUFBVTtRQVBsQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFLakMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUd4QixJQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1NBQ3RCO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSO0lBRUgsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUVELGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FB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Ozs7OztRQzNDM0IsK0JBQWtCOztrREQyQ0wsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztzQkErQmMsTUFBTTt1QkFBQyxXQUFXO3dCQTdCdEIsS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFFd0MsWUFBWTtrQkFBekQsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBJbmplY3QsXHJcbiAgUExBVEZPUk1fSUQsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBcGV4QW5ub3RhdGlvbnMsXHJcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcclxuICBBcGV4Q2hhcnQsXHJcbiAgQXBleERhdGFMYWJlbHMsXHJcbiAgQXBleEZpbGwsXHJcbiAgQXBleEdyaWQsXHJcbiAgQXBleExlZ2VuZCxcclxuICBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxyXG4gIEFwZXhNYXJrZXJzLFxyXG4gIEFwZXhOb0RhdGEsXHJcbiAgQXBleFBsb3RPcHRpb25zLFxyXG4gIEFwZXhSZXNwb25zaXZlLFxyXG4gIEFwZXhTdGF0ZXMsXHJcbiAgQXBleFN0cm9rZSxcclxuICBBcGV4VGhlbWUsXHJcbiAgQXBleFRpdGxlU3VidGl0bGUsXHJcbiAgQXBleFRvb2x0aXAsXHJcbiAgQXBleFhBeGlzLFxyXG4gIEFwZXhZQXhpcyxcclxufSBmcm9tIFwiLi4vbW9kZWwvYXBleC10eXBlc1wiO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEFwZXhDaGFydHMgZnJvbSBcImFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYXJ0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvbnM6IEFwZXhBbm5vdGF0aW9ucztcclxuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xyXG4gIEBJbnB1dCgpIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XHJcbiAgQElucHV0KCkgc3Ryb2tlOiBBcGV4U3Ryb2tlO1xyXG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGVnZW5kOiBBcGV4TGVnZW5kO1xyXG4gIEBJbnB1dCgpIG1hcmtlcnM6IEFwZXhNYXJrZXJzO1xyXG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcclxuICBASW5wdXQoKSBmaWxsOiBBcGV4RmlsbDtcclxuICBASW5wdXQoKSB0b29sdGlwOiBBcGV4VG9vbHRpcDtcclxuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IEFwZXhSZXNwb25zaXZlW107XHJcbiAgQElucHV0KCkgeGF4aXM6IEFwZXhYQXhpcztcclxuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XHJcbiAgQElucHV0KCkgZ3JpZDogQXBleEdyaWQ7XHJcbiAgQElucHV0KCkgc3RhdGVzOiBBcGV4U3RhdGVzO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcclxuICBASW5wdXQoKSBzdWJ0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XHJcbiAgQElucHV0KCkgdGhlbWU6IEFwZXhUaGVtZTtcclxuXHJcbiAgQElucHV0KCkgYXV0b1VwZGF0ZVNlcmllcyA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGNoYXJ0T2JqOiBhbnk7XHJcblxyXG4gIGlzQnJvd3NlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQpIHtcclxuICAgIGlmKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHRoaXMuaXNCcm93c2VyID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlcmllcyh0aGlzLnNlcmllcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgb3B0aW9ucy5jaGFydCA9IHRoaXMuY2hhcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcclxuICAgICAgb3B0aW9ucy5jb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhTGFiZWxzID0gdGhpcy5kYXRhTGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XHJcbiAgICAgIG9wdGlvbnMuc2VyaWVzID0gdGhpcy5zZXJpZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdHJva2UpIHtcclxuICAgICAgb3B0aW9ucy5zdHJva2UgPSB0aGlzLnN0cm9rZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVscykge1xyXG4gICAgICBvcHRpb25zLmxhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIG9wdGlvbnMubGVnZW5kID0gdGhpcy5sZWdlbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIG9wdGlvbnMuZmlsbCA9IHRoaXMuZmlsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgb3B0aW9ucy50b29sdGlwID0gdGhpcy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5wbG90T3B0aW9ucyA9IHRoaXMucGxvdE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XHJcbiAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHRoaXMucmVzcG9uc2l2ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgb3B0aW9ucy5tYXJrZXJzID0gdGhpcy5tYXJrZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XHJcbiAgICAgIG9wdGlvbnMubm9EYXRhID0gdGhpcy5ub0RhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54YXhpcykge1xyXG4gICAgICBvcHRpb25zLnhheGlzID0gdGhpcy54YXhpcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnlheGlzKSB7XHJcbiAgICAgIG9wdGlvbnMueWF4aXMgPSB0aGlzLnlheGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xyXG4gICAgICBvcHRpb25zLmdyaWQgPSB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcclxuICAgICAgb3B0aW9ucy5zdGF0ZXMgPSB0aGlzLnN0YXRlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIG9wdGlvbnMudGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcclxuICAgICAgb3B0aW9ucy5zdWJ0aXRsZSA9IHRoaXMuc3VidGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aGVtZSkge1xyXG4gICAgICBvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHModGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVPcHRpb25zKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcmVkcmF3UGF0aHM/OiBib29sZWFuLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW4sXHJcbiAgICB1cGRhdGVTeW5jZWRDaGFydHM/OiBib29sZWFuXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai51cGRhdGVPcHRpb25zKFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICByZWRyYXdQYXRocyxcclxuICAgICAgYW5pbWF0ZSxcclxuICAgICAgdXBkYXRlU3luY2VkQ2hhcnRzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlcmllcyhcclxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgICBhbmltYXRlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBlbmRTZXJpZXMoXHJcbiAgICBuZXdTZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cclxuICApIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmouYXBwZW5kU2VyaWVzKG5ld1NlcmllcywgYW5pbWF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwZW5kRGF0YShuZXdEYXRhOiBhbnlbXSkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai5hcHBlbmREYXRhKG5ld0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJ0T2JqLnNob3dTZXJpZXMoc2VyaWVzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmouaGlkZVNlcmllcyhzZXJpZXNOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldFNlcmllcygpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmouem9vbVgobWluLCBtYXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihcclxuICAgIHNlcmllc0luZGV4OiBudW1iZXIsXHJcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai50b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmouc2V0TG9jYWxlKGxvY2FsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcGVyKCkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai5wYXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFhheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFhheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFlheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICBpZighdGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUFubm90YXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIGlmKCF0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY2hhcnRPYmouY2xlYXJBbm5vdGF0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRhVVJJKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYoIXRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNjaGFydD48L2Rpdj5cclxuIl19