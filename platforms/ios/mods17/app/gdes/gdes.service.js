"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Rlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2Rlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQWV4RDtJQUVFLHFCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM3QixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQVJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHYyxXQUFJO09BRmxCLFdBQVcsQ0FVdkI7SUFBRCxrQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdkZSB7XG4gIGJpbzogc3RyaW5nO1xuICBmdWxsbmFtZTogc3RyaW5nO1xuICBza2lsbHM6IHN0cmluZztcbiAgcm9sZXM6IHN0cmluZztcbiAgdHdpdHRlcjogc3RyaW5nO1xuICBncGx1czogc3RyaW5nO1xuICBhdmF0YXI6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZyAgXG59XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2Rlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IFxuICB9XG4gIFxuICBnZXRHZGVzKCk6IE9ic2VydmFibGU8R2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9nZGUtYXNzaXN0YW50LmZpcmViYXNlaW8uY29tL2dkZXMuanNvbmApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxufSJdfQ==