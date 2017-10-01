import { Component, OnInit } from "@angular/core";
import { GdesService, Gde } from "./gdes.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "ns-gdes",
    moduleId: module.id,
    templateUrl: "./gdes.component.html",
})
export class GdesComponent implements OnInit {
    gdes: Observable<Gde[]>;

    constructor(
        private gdesService: GdesService
    ) { }

    ngOnInit() {
       this.gdes = this.gdesService.getGdes(); 
    }
}

