import { Component, Input, ViewChild, } from "@angular/core";
import { asapScheduler } from "rxjs";
import * as ApexCharts from "apexcharts";
export class ChartComponent {
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
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: "apx-chart",
                template: "<div #chart></div>\r\n",
                styles: [""]
            },] }
];
ChartComponent.propDecorators = {
    chart: [{ type: Input }],
    annotations: [{ type: Input }],
    colors: [{ type: Input }],
    dataLabels: [{ type: Input }],
    series: [{ type: Input }],
    stroke: [{ type: Input }],
    labels: [{ type: Input }],
    legend: [{ type: Input }],
    markers: [{ type: Input }],
    noData: [{ type: Input }],
    fill: [{ type: Input }],
    tooltip: [{ type: Input }],
    plotOptions: [{ type: Input }],
    responsive: [{ type: Input }],
    xaxis: [{ type: Input }],
    yaxis: [{ type: Input }],
    grid: [{ type: Input }],
    states: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    theme: [{ type: Input }],
    autoUpdateSeries: [{ type: Input }],
    chartElement: [{ type: ViewChild, args: ["chart", { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L3dvcmsvYXNkZi9teS13b3Jrc3BhY2UvcHJvamVjdHMvY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBc0J2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBT3pDLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBNEJXLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQXlObkMsQ0FBQztJQXBOQyxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8s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QUM7SUFDbkUsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxPQUFhO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFhO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBcFBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsa0NBQXFDOzthQUV0Qzs7O29CQUVFLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLOytCQUVMLEtBQUs7MkJBRUwsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQXBleEFubm90YXRpb25zLFxyXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXHJcbiAgQXBleENoYXJ0LFxyXG4gIEFwZXhEYXRhTGFiZWxzLFxyXG4gIEFwZXhGaWxsLFxyXG4gIEFwZXhHcmlkLFxyXG4gIEFwZXhMZWdlbmQsXHJcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcclxuICBBcGV4TWFya2VycyxcclxuICBBcGV4Tm9EYXRhLFxyXG4gIEFwZXhQbG90T3B0aW9ucyxcclxuICBBcGV4UmVzcG9uc2l2ZSxcclxuICBBcGV4U3RhdGVzLFxyXG4gIEFwZXhTdHJva2UsXHJcbiAgQXBleFRoZW1lLFxyXG4gIEFwZXhUaXRsZVN1YnRpdGxlLFxyXG4gIEFwZXhUb29sdGlwLFxyXG4gIEFwZXhYQXhpcyxcclxuICBBcGV4WUF4aXMsXHJcbn0gZnJvbSBcIi4uL21vZGVsL2FwZXgtdHlwZXNcIjtcclxuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBBcGV4Q2hhcnRzIGZyb20gXCJhcGV4Y2hhcnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYXJ0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvbnM6IEFwZXhBbm5vdGF0aW9ucztcclxuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xyXG4gIEBJbnB1dCgpIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XHJcbiAgQElucHV0KCkgc3Ryb2tlOiBBcGV4U3Ryb2tlO1xyXG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGVnZW5kOiBBcGV4TGVnZW5kO1xyXG4gIEBJbnB1dCgpIG1hcmtlcnM6IEFwZXhNYXJrZXJzO1xyXG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcclxuICBASW5wdXQoKSBmaWxsOiBBcGV4RmlsbDtcclxuICBASW5wdXQoKSB0b29sdGlwOiBBcGV4VG9vbHRpcDtcclxuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IEFwZXhSZXNwb25zaXZlW107XHJcbiAgQElucHV0KCkgeGF4aXM6IEFwZXhYQXhpcztcclxuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XHJcbiAgQElucHV0KCkgZ3JpZDogQXBleEdyaWQ7XHJcbiAgQElucHV0KCkgc3RhdGVzOiBBcGV4U3RhdGVzO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcclxuICBASW5wdXQoKSBzdWJ0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XHJcbiAgQElucHV0KCkgdGhlbWU6IEFwZXhUaGVtZTtcclxuXHJcbiAgQElucHV0KCkgYXV0b1VwZGF0ZVNlcmllcyA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGNoYXJ0T2JqOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZVNlcmllcyAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcigoYykgPT4gYyAhPT0gXCJzZXJpZXNcIikubGVuZ3RoID09PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VyaWVzKHRoaXMuc2VyaWVzLCB0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge307XHJcblxyXG4gICAgaWYgKHRoaXMuYW5ub3RhdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICBvcHRpb25zLmNoYXJ0ID0gdGhpcy5jaGFydDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbG9ycykge1xyXG4gICAgICBvcHRpb25zLmNvbG9ycyA9IHRoaXMuY29sb3JzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YUxhYmVscykge1xyXG4gICAgICBvcHRpb25zLmRhdGFMYWJlbHMgPSB0aGlzLmRhdGFMYWJlbHM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZXJpZXMpIHtcclxuICAgICAgb3B0aW9ucy5zZXJpZXMgPSB0aGlzLnNlcmllcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0cm9rZSkge1xyXG4gICAgICBvcHRpb25zLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWxzKSB7XHJcbiAgICAgIG9wdGlvbnMubGFiZWxzID0gdGhpcy5sYWJlbHM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sZWdlbmQpIHtcclxuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB0aGlzLmxlZ2VuZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbGwpIHtcclxuICAgICAgb3B0aW9ucy5maWxsID0gdGhpcy5maWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICBvcHRpb25zLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wbG90T3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLnBsb3RPcHRpb25zID0gdGhpcy5wbG90T3B0aW9ucztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnJlc3BvbnNpdmUpIHtcclxuICAgICAgb3B0aW9ucy5yZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWFya2Vycykge1xyXG4gICAgICBvcHRpb25zLm1hcmtlcnMgPSB0aGlzLm1hcmtlcnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ub0RhdGEpIHtcclxuICAgICAgb3B0aW9ucy5ub0RhdGEgPSB0aGlzLm5vRGF0YTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnhheGlzKSB7XHJcbiAgICAgIG9wdGlvbnMueGF4aXMgPSB0aGlzLnhheGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueWF4aXMpIHtcclxuICAgICAgb3B0aW9ucy55YXhpcyA9IHRoaXMueWF4aXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgIG9wdGlvbnMuZ3JpZCA9IHRoaXMuZ3JpZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlcykge1xyXG4gICAgICBvcHRpb25zLnN0YXRlcyA9IHRoaXMuc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGl0bGUpIHtcclxuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdWJ0aXRsZSkge1xyXG4gICAgICBvcHRpb25zLnN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRoZW1lKSB7XHJcbiAgICAgIG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyh0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZU9wdGlvbnMoXHJcbiAgICBvcHRpb25zOiBhbnksXHJcbiAgICByZWRyYXdQYXRocz86IGJvb2xlYW4sXHJcbiAgICBhbmltYXRlPzogYm9vbGVhbixcclxuICAgIHVwZGF0ZVN5bmNlZENoYXJ0cz86IGJvb2xlYW5cclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnVwZGF0ZU9wdGlvbnMoXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIHJlZHJhd1BhdGhzLFxyXG4gICAgICBhbmltYXRlLFxyXG4gICAgICB1cGRhdGVTeW5jZWRDaGFydHNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2VyaWVzKFxyXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcclxuICAgIGFuaW1hdGU/OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGVuZFNlcmllcyhcclxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXHJcbiAgICBhbmltYXRlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFydE9iai5hcHBlbmRTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBlbmREYXRhKG5ld0RhdGE6IGFueVtdKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmFwcGVuZERhdGEobmV3RGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai50b2dnbGVTZXJpZXMoc2VyaWVzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1NlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhcnRPYmouc2hvd1NlcmllcyhzZXJpZXNOYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5yZXNldFNlcmllcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHpvb21YKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5jaGFydE9iai56b29tWChtaW4sIG1heCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRGF0YVBvaW50U2VsZWN0aW9uKFxyXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcclxuICAgIGRhdGFQb2ludEluZGV4PzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRMb2NhbGUobG9jYWxlTmFtZT86IHN0cmluZykge1xyXG4gICAgdGhpcy5jaGFydE9iai5zZXRMb2NhbGUobG9jYWxlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFwZXIoKSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnBhcGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcclxuICAgIGNvbnRleHQ/OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMuY2hhcnRPYmouYWRkWGF4aXNBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkWWF4aXNBbm5vdGF0aW9uKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcclxuICAgIGNvbnRleHQ/OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMuY2hhcnRPYmouYWRkWWF4aXNBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG9pbnRBbm5vdGF0aW9uKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcclxuICAgIGNvbnRleHQ/OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMuY2hhcnRPYmouYWRkUG9pbnRBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnJlbW92ZUFubm90YXRpb24oaWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucz86IGFueSkge1xyXG4gICAgdGhpcy5jaGFydE9iai5jbGVhckFubm90YXRpb25zKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGFVUkkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5kYXRhVVJJKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==