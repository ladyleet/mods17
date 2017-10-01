import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

