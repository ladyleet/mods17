"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Gde = (function () {
    function Gde() {
    }
    return Gde;
}());
exports.Gde = Gde;
var GdesService = (function () {
    function GdesService(http) {
        this.http = http;
    }
    GdesService.prototype.getGdes = function () {
        return this.http.get("https://gde-assistant.firebaseio.com/gdes.json")
            .map(function (res) { return res.json(); });
    };
    GdesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GdesService);
    return GdesService;
}());
exports.GdesService = GdesService;
// 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Rlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2Rlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUt4RDtJQUFBO0lBVUEsQ0FBQztJQUFELFVBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGtCQUFHO0FBWWhCO0lBRUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDO2FBQ3JFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBUlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdlLFdBQUk7T0FGbkIsV0FBVyxDQVN2QjtJQUFELGtCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksa0NBQVc7QUFZeEIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuLy8gaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBhc2FwIH0gZnJvbSAncnhqcy9zY2hlZHVsZXIvYXNhcCc7XG5cbmV4cG9ydCBjbGFzcyBHZGUge1xuICBiaW86IHN0cmluZztcbiAgZnVsbG5hbWU6IHN0cmluZztcbiAgc2tpbGxzOiBzdHJpbmc7XG4gIHJvbGVzOiBzdHJpbmc7XG4gIHR3aXR0ZXI6IHN0cmluZztcbiAgZ3BsdXM6IHN0cmluZztcbiAgYXZhdGFyOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmcgIFxufVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdkZXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgXG4gIH1cbiAgXG4gIGdldEdkZXMgKCk6IE9ic2VydmFibGU8R2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9nZGUtYXNzaXN0YW50LmZpcmViYXNlaW8uY29tL2dkZXMuanNvbmApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSkgIFxuICB9XG59XG5cblxuLy8iXX0=