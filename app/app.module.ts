import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import {LoginPage} from "./pages/login/login";

@NgModule({
  imports: [NativeScriptModule,NativeScriptFormsModule,NativeScriptHttpModule],
  declarations: [AppComponent,LoginPage],
  bootstrap: [AppComponent]
})
export class AppModule {}
