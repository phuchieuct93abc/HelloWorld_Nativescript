import { routes, navigatableComponents } from './app.routing';
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import {LoginPage} from "./pages/login/login";

@NgModule({
  imports: [NativeScriptModule,NativeScriptFormsModule,NativeScriptHttpModule,NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
