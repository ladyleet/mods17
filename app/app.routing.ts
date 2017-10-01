import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { GdesComponent } from "./gdes/gdes.component";

const routes: Routes = [
    { path: "", redirectTo: "/gdes", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent},
    { path: "gdes", component: GdesComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

