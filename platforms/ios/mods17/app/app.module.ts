import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import 'rxjs/add/operator/map';

import { GdesService } from "./gdes/gdes.service";
import { ItemService } from "./item/item.service";

import { WelcomeComponent } from "./welcome/welcome.component";
import { GdesComponent } from "./gdes/gdes.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        GdesComponent
    ],
    providers: [
        GdesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
