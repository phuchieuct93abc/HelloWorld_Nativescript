import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
const firebase = require("nativescript-plugin-firebase");
 firebase.init({
    persist: true
  }).then(()=>{
    console.log("Firebase init done!")
  })
platformNativeScriptDynamic().bootstrapModule(AppModule);
