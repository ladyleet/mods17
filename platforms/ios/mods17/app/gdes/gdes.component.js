"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gdes_service_1 = require("./gdes.service");
var GdesComponent = (function () {
    function GdesComponent(gdesService) {
        this.gdesService = gdesService;
    }
    GdesComponent.prototype.ngOnInit = function () {
        this.gdes = this.gdesService.getGdes();
    };
    GdesComponent = __decorate([
        core_1.Component({
            selector: "ns-gdes",
            moduleId: module.id,
            templateUrl: "./gdes.component.html",
        }),
        __metadata("design:paramtypes", [gdes_service_1.GdesService])
    ], GdesComponent);
    return GdesComponent;
}());
exports.GdesComponent = GdesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Rlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrQ0FBa0Q7QUFRbEQ7SUFHSSx1QkFDWSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNoQyxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBVFEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FLMkIsMEJBQVc7T0FKM0IsYUFBYSxDQVV6QjtJQUFELG9CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHZGVzU2VydmljZSwgR2RlIH0gZnJvbSBcIi4vZ2Rlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1nZGVzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dkZXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgR2Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZ2RlczogT2JzZXJ2YWJsZTxHZGVbXT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnZGVzU2VydmljZTogR2Rlc1NlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgdGhpcy5nZGVzID0gdGhpcy5nZGVzU2VydmljZS5nZXRHZGVzKCk7IFxuICAgIH1cbn1cblxuIl19